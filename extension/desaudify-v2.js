// Browser schema port of DesAudify 4ddd49a; see DESAUDIFY-LICENSE.
(function (root) {
  "use strict";
  function schemas(frames, fps, mode) {
    const tones = [], timings = [1];
    for (const frame of frames) {
      const notes = frame.slice().sort((a, b) => a - b);
      if (!notes.length) notes.push(0);
      if (notes.length % 2) notes.push(0);
      for (let i = 0; i < notes.length; i += 2) {
        const low = Math.min(notes[i], notes[i + 1]);
        const high = Math.max(notes[i], notes[i + 1]);
        tones.push((high - low) * 10000000 + low);
      }
      timings.push(tones.length + 1);
    }
    const lines = root.DesmosPlusBigList.format("tonedata", tones, mode)
      .concat(root.DesmosPlusBigList.format("tonetimings", timings, mode));
    const shards = [];
    let current = [], bytes = 0;
    for (const line of lines) {
      const size = new TextEncoder().encode(line).length;
      if (current.length && bytes + size > 4 * 1024 * 1024) {
        shards.push(current.join("\n")); current = []; bytes = 0;
      }
      current.push(line); bytes += size + 1;
    }
    if (current.length) shards.push(current.join("\n"));
    return {
      dataShards: shards, chunkCount: lines.length, bigListVersion: 2,
      processing: "a_{udindex}=\\operatorname{floor}\\left(t_{0}\\cdot0.001\\cdot" + fps + "\\right)\na_{udioduration}=" + Math.round(frames.length * 1000 / fps),
    };
  }
  function prepare(template, file, stats, options) {
    const state = JSON.parse(JSON.stringify(template));
    const title = options?.title || file.name.replace(/\.[^.]+$/, "") || "DesAudify Audio";
    state.expressions.list = state.expressions.list.filter(item => !["9187", "9188"].includes(item.id));
    for (const item of state.expressions.list) {
      if (item.id === "7089") item.label = title;
      if (item.id === "7104") item.label = "Generated locally with DesmosPlus";
      if (item.id === "9196") item.latex = "m_{axpoly}=" + Math.max(256, (stats.polyphony || 32) + 2);
      if (item.type === "folder") item.collapsed = true;
    }
    if (state.expressions.ticker) state.expressions.ticker.playing = false;
    return state;
  }
  root.DesmosPlusAudioV2 = { schemas, prepare };
})(globalThis);
