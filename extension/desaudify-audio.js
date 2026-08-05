(function (root) {
  "use strict";

  var MAX_AUDIO_BYTES = 100 * 1024 * 1024;
  var MAX_AUDIO_SECONDS = 300;

  function audioContext() {
    var Context = root.AudioContext || root.webkitAudioContext;
    if (!Context) throw new Error("This browser cannot decode audio files.");
    return new Context();
  }

  function numberOption(value, fallback) {
    var parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  async function decode(file, options, onProgress) {
    if (!file || typeof file.arrayBuffer !== "function") throw new Error("Select an audio file.");
    if (file.size > MAX_AUDIO_BYTES) throw new Error("Audio files must be 100 MB or smaller.");
    onProgress("Decoding audio...");
    var context = audioContext();
    try {
      var buffer = await context.decodeAudioData(await file.arrayBuffer());
      if (!buffer.length || !buffer.numberOfChannels) throw new Error("The audio file is empty.");
      var start = Math.max(0, numberOption(options.start, 0));
      if (start >= buffer.duration) throw new Error("Start time is beyond the end of the audio.");
      var requestedEnd = numberOption(options.end, 0);
      if (requestedEnd > 0 && requestedEnd <= start) {
        throw new Error("End time must be after start time.");
      }
      var end = Math.min(buffer.duration, requestedEnd > 0 ? requestedEnd : buffer.duration);
      if (end - start > MAX_AUDIO_SECONDS) {
        throw new Error("Automatic audio import supports selections up to 5 minutes.");
      }
      var startSample = Math.floor(start * buffer.sampleRate);
      var endSample = Math.min(buffer.length, Math.ceil(end * buffer.sampleRate));
      var mono = new Float32Array(endSample - startSample);
      for (var channelIndex = 0; channelIndex < buffer.numberOfChannels; channelIndex += 1) {
        var channel = buffer.getChannelData(channelIndex);
        for (var sampleIndex = startSample; sampleIndex < endSample; sampleIndex += 1) {
          mono[sampleIndex - startSample] += channel[sampleIndex] / buffer.numberOfChannels;
        }
      }
      return { samples: mono, sampleRate: buffer.sampleRate };
    } catch (error) {
      if (error && error.message) throw error;
      throw new Error("The browser could not decode this audio format.");
    } finally {
      if (typeof context.close === "function") await context.close();
    }
  }

  function analyze(decoded, workerUrl, options, onProgress) {
    return new Promise(function (resolve, reject) {
      var worker = new Worker(workerUrl);
      worker.onmessage = function (event) {
        var message = event.data || {};
        if (message.type === "progress") {
          onProgress(message.message || "Analyzing audio...");
          return;
        }
        worker.terminate();
        if (message.type === "complete") resolve(message);
        else reject(new Error(message.message || "Audio analysis failed."));
      };
      worker.onerror = function (event) {
        worker.terminate();
        reject(new Error(event.message || "Audio analysis worker failed."));
      };
      worker.postMessage(
        {
          samples: decoded.samples.buffer,
          sampleRate: decoded.sampleRate,
          fps: options.fps,
          polyphony: options.polyphony,
          maxNotes: options.maxNotes,
          minimumMagnitude: options.minimumMagnitude,
        },
        [decoded.samples.buffer],
      );
    });
  }

  async function convert(file, workerUrl, options, onProgress) {
    var report = typeof onProgress === "function" ? onProgress : function () {};
    var settings = options || {};
    var decoded = await decode(file, settings, report);
    return analyze(decoded, workerUrl, settings, report);
  }

  root.DesmosPlusAudio = { convert: convert };
})(globalThis);
