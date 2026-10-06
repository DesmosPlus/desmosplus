(function () {
  "use strict";
  async function run(action,input,id) {
    const [tab]=await chrome.tabs.query({active:true,currentWindow:true});
    const url = new URL(tab?.url || "about:blank");
    if (!["www.desmos.com","desmos.com","desmosplus.pages.dev","127.0.0.1","localhost"].includes(url.hostname) || !/^\/(calculator(?:\/|$)|2dcalculator(?:\.html)?$)/.test(url.pathname)) throw new Error("Open a 2D graphing calculator first.");
    await chrome.scripting.executeScript({target:{tabId:tab.id},world:"MAIN",files:["vendor/qrcodegen.js","qr-code.js","qr-page.js"]});
    const result=await chrome.scripting.executeScript({target:{tabId:tab.id},world:"MAIN",func:(action,input,id)=>{
      try {return {value:window.DesmosPlusQRPage[action](input,id)};} catch(error) {return {error:error.message};}
    },args:[action,input || null,id || null]});
    if (!result[0]?.result || result[0].result.error) throw new Error(result[0]?.result?.error || "QR insertion failed.");
    return result[0].result.value;
  }
  let ui;
  document.querySelector('[data-view="qr"]').addEventListener("click",()=>{
    if (!ui) ui=DesmosPlusQRUI.mount(document.getElementById("qr-editor"),{list:()=>run("list"),save:(input,id)=>run("save",input,id)});
    else ui.refresh();
  });
})();
