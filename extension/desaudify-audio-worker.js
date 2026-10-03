"use strict";

if (typeof FFTJS === "undefined") importScripts("vendor/fft.js");
if (!self.DesmosPlusBigList) importScripts("big-list.js", "desaudify-v2.js");

var DEFAULT_FPS = 30;
var DEFAULT_POLYPHONY = 32;
var FFT_SIZE = 2048;
var MIN_FREQUENCY = 20;
var MAX_FREQUENCY = 20000;
var DEFAULT_MAX_NOTES = 260000;
var DEFAULT_MIN_MAGNITUDE = 0.0001;

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

self.onmessage = function (event) {
  try {
    var payload = event.data || {};
    var samples = new Float32Array(payload.samples);
    var sampleRate = Number(payload.sampleRate);
    var fps = Number(payload.fps) || DEFAULT_FPS;
    var polyphony = Number(payload.polyphony) || DEFAULT_POLYPHONY;
    var maxNotes = Number(payload.maxNotes) || DEFAULT_MAX_NOTES;
    var minimumMagnitude = Number(payload.minimumMagnitude);
    var unlimited = payload.unlimited === true;
    if (!Number.isFinite(minimumMagnitude)) minimumMagnitude = DEFAULT_MIN_MAGNITUDE;
    if (!samples.length || !Number.isFinite(sampleRate) || sampleRate <= 0) {
      throw new Error("Decoded audio was empty.");
    }

    progress(0, "Starting audio analysis");
    if (unlimited) {
      fps = Math.max(10, Math.round(fps));
      polyphony = Math.max(1, Math.round(polyphony));
      maxNotes = Infinity;
      minimumMagnitude = clamp(minimumMagnitude, 0, 1);
    } else {
      fps = clamp(Math.round(fps), 10, 120);
      polyphony = clamp(Math.round(polyphony), 8, 192);
      maxNotes = clamp(Math.round(maxNotes), 1000, 1500000);
      minimumMagnitude = clamp(minimumMagnitude, 0.000001, 1);
    }
    var analysis = analyze(samples, sampleRate, fps, polyphony, maxNotes);
    var encoded = encodeFrames(
      analysis.frames,
      analysis.maximumMagnitude,
      minimumMagnitude,
      maxNotes,
    );
    var storageMode = payload.storageMode === "matrix" ? "matrix" : "compatible";
    var schemas = self.DesmosPlusAudioV2.schemas(encoded.frames, fps, storageMode);
    self.postMessage({
      type: "complete",
      dataShards: schemas.dataShards,
      processing: schemas.processing,
      stats: {
        bigListVersion: 2,
        storageMode: storageMode,
        duration: samples.length / sampleRate,
        fps: fps,
        frames: analysis.frames.length,
        notes: encoded.noteCount,
        polyphony: polyphony,
        maxNotes: maxNotes,
        minimumMagnitude: minimumMagnitude,
        unlimited: unlimited,
        chunkCount: schemas.chunkCount,
        shardCount: schemas.dataShards.length,
      },
    });
  } catch (error) {
    self.postMessage({ type: "error", message: error.message || String(error) });
  }
};
