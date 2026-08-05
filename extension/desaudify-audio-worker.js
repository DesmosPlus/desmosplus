"use strict";

importScripts("vendor/fft.js");

var DEFAULT_FPS = 30;
var DEFAULT_POLYPHONY = 32;
var FFT_SIZE = 2048;
var MIN_FREQUENCY = 20;
var MAX_FREQUENCY = 20000;
var DEFAULT_MAX_NOTES = 260000;
var DEFAULT_MIN_MAGNITUDE = 0.0001;
var MAX_SHARD_BYTES = Math.floor(4.5 * 1024 * 1024);

function progress(value, message) {
  self.postMessage({ type: "progress", value: value, message: message });
}

function clamp(value, minimum, maximum) {
  return Math.max(minimum, Math.min(maximum, value));
}

function analyze(samples, sampleRate, fps, polyphony, maxNotes) {
  var fft = new FFTJS(FFT_SIZE);
  var input = new Float64Array(FFT_SIZE);
  var output = fft.createComplexArray();
  var magnitudes = new Float64Array(FFT_SIZE / 2 + 1);
  var hop = sampleRate / fps;
  var totalFrames = Math.ceil(samples.length / hop);
  var framePolyphony = Math.max(1, Math.min(polyphony, Math.floor(maxNotes / totalFrames)));
  var maximumBin = Math.min(
    FFT_SIZE / 2 - 1,
    Math.floor((Math.min(MAX_FREQUENCY, sampleRate / 2) * FFT_SIZE) / sampleRate),
  );
  var minimumBin = Math.max(1, Math.ceil((MIN_FREQUENCY * FFT_SIZE) / sampleRate));
  var frames = new Array(totalFrames);
  var maximumMagnitude = 0;
  var lastReported = -1;

  for (var frameIndex = 0; frameIndex < totalFrames; frameIndex += 1) {
    var offset = Math.floor(frameIndex * hop);
    for (var sampleIndex = 0; sampleIndex < FFT_SIZE; sampleIndex += 1) {
      var sourceIndex = offset + sampleIndex;
      var window = 0.5 - 0.5 * Math.cos((2 * Math.PI * sampleIndex) / (FFT_SIZE - 1));
      input[sampleIndex] = (sourceIndex < samples.length ? samples[sourceIndex] : 0) * window;
    }

    fft.realTransform(output, input);
    for (var bin = minimumBin - 1; bin <= maximumBin + 1; bin += 1) {
      var real = output[2 * bin];
      var imaginary = output[2 * bin + 1];
      magnitudes[bin] = Math.hypot(real, imaginary);
    }

    var peaks = [];
    for (var peakBin = minimumBin; peakBin <= maximumBin; peakBin += 1) {
      var magnitude = magnitudes[peakBin];
      if (magnitude <= magnitudes[peakBin - 1] || magnitude < magnitudes[peakBin + 1]) continue;
      var peak = { frequency: (peakBin * sampleRate) / FFT_SIZE, magnitude: magnitude };
      if (peaks.length < framePolyphony) {
        peaks.push(peak);
        peaks.sort(function (a, b) {
          return b.magnitude - a.magnitude;
        });
      } else if (magnitude > peaks[peaks.length - 1].magnitude) {
        peaks[peaks.length - 1] = peak;
        peaks.sort(function (a, b) {
          return b.magnitude - a.magnitude;
        });
      }
      maximumMagnitude = Math.max(maximumMagnitude, magnitude);
    }
    frames[frameIndex] = peaks;

    var percent = Math.floor((frameIndex / Math.max(1, totalFrames - 1)) * 80);
    if (percent >= lastReported + 2) {
      lastReported = percent;
      progress(percent, "Analyzing audio " + percent + "%");
    }
  }

  if (maximumMagnitude <= 0) throw new Error("No audible frequencies were found in this file.");
  return { frames: frames, maximumMagnitude: maximumMagnitude, hop: hop };
}

function encodeFrames(frames, maximumMagnitude, minimumMagnitude, maxNotes) {
  var encoded = new Array(frames.length);
  var noteCount = 0;
  var candidates = [];

  frames.forEach(function (frame, frameIndex) {
    frame.forEach(function (note, noteIndex) {
      if (note.magnitude / maximumMagnitude < minimumMagnitude) return;
      candidates.push({
        frameIndex: frameIndex,
        noteIndex: noteIndex,
        score: note.magnitude / Math.max(Math.log(note.frequency), 0.000001),
      });
    });
  });
  if (candidates.length > maxNotes) {
    candidates.sort(function (a, b) {
      return b.score - a.score;
    });
    candidates.length = maxNotes;
  }
  var retained = new Set(
    candidates.map(function (candidate) {
      return candidate.frameIndex + ":" + candidate.noteIndex;
    }),
  );

  for (var frameIndex = 0; frameIndex < frames.length; frameIndex += 1) {
    var notes = [];
    for (var noteIndex = 0; noteIndex < frames[frameIndex].length; noteIndex += 1) {
      var note = frames[frameIndex][noteIndex];
      var gain = note.magnitude / maximumMagnitude;
      if (!retained.has(frameIndex + ":" + noteIndex)) continue;
      var frequencyPart = Math.round(
        (Math.log(clamp(note.frequency, MIN_FREQUENCY, MAX_FREQUENCY) / 20) /
          Math.log(1000)) *
          9999,
      );
      var gainPart = Math.round((998 / 4) * (Math.log10(gain) + 4) + 1);
      notes.push(clamp(frequencyPart, 0, 9999) * 1000 + clamp(gainPart, 1, 999));
    }
    encoded[frameIndex] = notes;
    noteCount += notes.length;
  }

  if (!noteCount) throw new Error("No DesAudify notes could be generated from this file.");
  progress(86, "Packing " + noteCount + " notes");
  return { frames: encoded, noteCount: noteCount };
}

function packTwoNotes(first, second) {
  if (!first && !second) return 0;
  if (!first || !second) return first || second;
  var high = Math.max(first, second);
  var low = Math.min(first, second);
  return (high - low) * 10000000 + low;
}

function packFrameNotes(notes) {
  var sorted = notes.slice().sort(function (a, b) {
    return a - b;
  });
  if (sorted.length % 2) sorted.push(0);
  var packedCount = Math.ceil(notes.length / 6);
  var pairCount = packedCount * 3;
  var packed = new Array(pairCount).fill(0);
  for (var pairIndex = 0; pairIndex < sorted.length / 2; pairIndex += 1) {
    packed[pairIndex] = packTwoNotes(sorted[pairIndex * 2], sorted[pairIndex * 2 + 1]);
  }
  return {
    count: packedCount,
    first: packed.filter(function (_, index) {
      return index % 3 === 0;
    }),
    second: packed.filter(function (_, index) {
      return index % 3 === 1;
    }),
    third: packed.filter(function (_, index) {
      return index % 3 === 2;
    }),
  };
}

function processingSchema(chunkCount) {
  var minmax = [];
  var maxpoly = [];
  var maximumPitch = [];
  var minimumPitch = [];
  var superConditions = [];
  var counters = [];
  var tones = [];

  for (var index = 1; index <= chunkCount; index += 1) {
    minmax.push("f_{minmax}\\left(p_{" + index + "}\\right)");
    maxpoly.push("\\max\\left(p_{" + index + "}\\left[3...\\right]\\right)");
    maximumPitch.push("g_{mxp}\\left(t_{" + index + "}\\right)");
    minimumPitch.push("g_{mnp}\\left(t_{" + index + "}\\right)");
    superConditions.push(
      "\\left\\{M\\left[" +
        index +
        "\\right]=1:\\left(c_{t" +
        index +
        "}\\to t_{0}\\right),\\left\\{c_{t" +
        index +
        "}\\ge0:c_{t" +
        index +
        "}\\to-1\\right\\}\\right\\}",
    );
    counters.push("c_{t" + index + "}=0");
    tones.push(
      "c_{t" +
        index +
        "}\\ge0:t_{h}\\left(t_{" +
        index +
        "},i_{i}\\left(p_{" +
        index +
        "}\\right),p_{" +
        index +
        "}\\left[1\\right],p_{" +
        index +
        "}\\left[2\\right],c_{t" +
        index +
        "}\\right)",
    );
  }

  var toneDefinition =
    tones.length > 1
      ? "t_{ones}=\\operatorname{join}\\left(" + tones.join(",") + "\\right)"
      : "t_{ones}=" + tones[0];
  return [
    "m_{inmax}=\\left[" + minmax.join(",") + "\\right]",
    "m_{axpoly}=6\\max\\left(" + maxpoly.join(",") + "\\right)",
    "M=\\left\\{m_{inmax}.x\\le t_{0}<m_{inmax}.y,0\\right\\}",
    "m_{axpitch}=\\max\\left(" + maximumPitch.join(",") + "\\right)",
    "m_{inpitch}=\\min\\left(" + minimumPitch.join(",") + "\\right)",
    "s_{upercond}=" + superConditions.join(","),
  ]
    .concat(
      counters.map(function (counter) {
        return counter.replace("=0", "=-1");
      }),
    )
    .concat([toneDefinition, "d_{uration}=\\max\\left(m_{inmax}.y\\right)"])
    .join("\n");
}

function generateSchemas(frames, fps) {
  var millisecondsPerFrame = 1000 / fps;
  var chunks = [];
  var current = [];
  var currentPacked = 0;

  for (var frameIndex = 0; frameIndex < frames.length; frameIndex += 1) {
    var packed = packFrameNotes(frames[frameIndex]);
    if (current.length && (currentPacked + packed.count > 10000 || current.length >= 9998)) {
      chunks.push(current);
      current = [];
      currentPacked = 0;
    }
    current.push({
      time: Math.round(frameIndex * millisecondsPerFrame),
      packed: packed,
    });
    currentPacked += packed.count;
  }
  if (current.length) chunks.push(current);

  var dataLines = [];
  chunks.forEach(function (chunk, chunkIndex) {
    var first = [];
    var second = [];
    var third = [];
    var counts = [];
    chunk.forEach(function (frame) {
      first.push.apply(first, frame.packed.first);
      second.push.apply(second, frame.packed.second);
      third.push.apply(third, frame.packed.third);
      counts.push(frame.packed.count);
    });
    var id = chunkIndex + 1;
    dataLines.push(
      "t_{" +
        id +
        "}=\\left(\\left[" +
        first.join(",") +
        "\\right],\\left[" +
        second.join(",") +
        "\\right],\\left[" +
        third.join(",") +
        "\\right]\\right)",
    );
    dataLines.push(
      "p_{" + id + "}=\\left[" + [chunk[0].time, fps].concat(counts).join(",") + "\\right]",
    );
  });

  var dataShards = [];
  var currentShard = [];
  var currentBytes = 0;
  for (var lineIndex = 0; lineIndex < dataLines.length; lineIndex += 2) {
    var pair = dataLines.slice(lineIndex, lineIndex + 2).join("\n");
    var pairBytes = new TextEncoder().encode(pair).length;
    if (currentShard.length && currentBytes + pairBytes + 1 > MAX_SHARD_BYTES) {
      dataShards.push(currentShard.join("\n"));
      currentShard = [];
      currentBytes = 0;
    }
    currentShard.push(pair);
    currentBytes += pairBytes + (currentShard.length > 1 ? 1 : 0);
  }
  if (currentShard.length) dataShards.push(currentShard.join("\n"));

  progress(98, "Building DesAudify equations");
  return {
    dataShards: dataShards,
    processing: processingSchema(chunks.length),
    chunkCount: chunks.length,
  };
}

self.onmessage = function (event) {
  try {
    var payload = event.data || {};
    var samples = new Float32Array(payload.samples);
    var sampleRate = Number(payload.sampleRate);
    var fps = Number(payload.fps) || DEFAULT_FPS;
    var polyphony = Number(payload.polyphony) || DEFAULT_POLYPHONY;
    var maxNotes = Number(payload.maxNotes) || DEFAULT_MAX_NOTES;
    var minimumMagnitude = Number(payload.minimumMagnitude) || DEFAULT_MIN_MAGNITUDE;
    if (!samples.length || !Number.isFinite(sampleRate) || sampleRate <= 0) {
      throw new Error("Decoded audio was empty.");
    }

    progress(0, "Starting audio analysis");
    fps = clamp(Math.round(fps), 10, 120);
    polyphony = clamp(Math.round(polyphony), 8, 192);
    maxNotes = clamp(Math.round(maxNotes), 1000, 1500000);
    minimumMagnitude = clamp(minimumMagnitude, 0.000001, 1);
    var analysis = analyze(samples, sampleRate, fps, polyphony, maxNotes);
    var encoded = encodeFrames(
      analysis.frames,
      analysis.maximumMagnitude,
      minimumMagnitude,
      maxNotes,
    );
    var schemas = generateSchemas(encoded.frames, fps);
    self.postMessage({
      type: "complete",
      dataShards: schemas.dataShards,
      processing: schemas.processing,
      stats: {
        duration: samples.length / sampleRate,
        fps: fps,
        frames: analysis.frames.length,
        notes: encoded.noteCount,
        polyphony: polyphony,
        maxNotes: maxNotes,
        minimumMagnitude: minimumMagnitude,
        chunkCount: schemas.chunkCount,
        shardCount: schemas.dataShards.length,
      },
    });
  } catch (error) {
    self.postMessage({ type: "error", message: error.message || String(error) });
  }
};
