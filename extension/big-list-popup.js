(function () {
  const toggle = document.getElementById("biglist-buttons");
  const create = document.getElementById("biglist-create");
  async function run(action) {
    const status = document.getElementById("status");
    toggle.disabled = create.disabled = true;
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      const url = new URL(tab.url);
      if (!(url.hostname === "www.desmos.com" || url.hostname === "desmos.com" || url.hostname === "desmosplus.pages.dev") || !/calculator/.test(url.pathname)) throw new Error("Open a supported graphing calculator first.");
      await chrome.scripting.executeScript({ target: {tabId:tab.id},world:"MAIN",files:["big-list.js","big-list-page.js"] });
      const results = await chrome.scripting.executeScript({target:{tabId:tab.id},world:"MAIN",func:(action, enabled) => {
        try {
          if (action === "create") window.DesmosPlusBigListPage.edit();
          else window.DesmosPlusBigListPage.setEnabled(enabled);
          return {ok:true};
        } catch (error) { return {error:error.message}; }
      },args:[action,toggle.checked]});
      if (!results[0]?.result?.ok) throw new Error(results[0]?.result?.error || "BigList could not open.");
      status.textContent = action === "create" ? "BigList editor opened on the graph." : (toggle.checked ? "List buttons enabled for this page." : "List buttons disabled.");
    } catch(error) { toggle.checked = false; status.textContent = error.message; }
    finally {toggle.disabled = create.disabled = false;}
  }
  toggle.addEventListener("change", () => run("toggle"));
  create.addEventListener("click", () => run("create"));
  chrome.tabs.query({active:true,currentWindow:true}).then(async ([tab]) => {
    const results = await chrome.scripting.executeScript({target:{tabId:tab.id},world:"MAIN",func:() => Boolean(window.DesmosPlusBigListPage?.isEnabled())});
    toggle.checked = results[0]?.result === true;
  }).catch(() => {});
})();
