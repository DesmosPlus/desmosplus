(async () => {
  const config = document.currentScript.dataset.config;
  try {
    const response = await fetch(config);
    if (!response.ok) throw new Error("Missing calculator configuration");
    const variants = await response.json();
    const selected = variants[new URLSearchParams(location.search).get("lang")] || variants.default;
    for (const href of selected.styles) {
      await new Promise((resolve, reject) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        link.onload = resolve;
        link.onerror = reject;
        document.head.append(link);
      });
    }
    for (const src of selected.scripts) {
      await new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.append(script);
      });
    }
  } catch {
    document.body.replaceChildren();
    const message = document.createElement("p");
    message.textContent = "The test calculator could not load. Reload to try again.";
    const back = document.createElement("a");
    back.href = "/test-versions/";
    back.textContent = "Back to test versions";
    document.body.append(message, back);
  }
})();
