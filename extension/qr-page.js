(function (root) {
  "use strict";
  if (root.DesmosPlusQRPage) return;
  function calc() {
    if (!root.Calc?.getState || root.Calc.controller?.getProduct?.() !== "graphing") throw new Error("Open a ready 2D graphing calculator first.");
    return root.Calc;
  }
  const list = () => root.DesmosPlusQR.saved(calc().getState());
  const save = (input,id) => root.DesmosPlusQR.insert(calc(),input,id || undefined);
  function open() {
    calc();
    const existing = document.getElementById("desmosplus-qr-dialog");
    if (existing) {existing.focus();return;}
    const dialog=document.createElement("dialog");dialog.id="desmosplus-qr-dialog";
    dialog.innerHTML='<div class="qr-header">QR code<button type="button" class="qr-close" aria-label="Close QR editor" title="Close">×</button></div><div class="qr-editor"></div>';
    const ui=root.DesmosPlusQRUI.mount(dialog.querySelector(".qr-editor"),{list,save});
    dialog.querySelector("button").onclick=()=>dialog.close();
    dialog.addEventListener("close",()=>{ui.destroy();dialog.remove();});
    document.body.appendChild(dialog);dialog.showModal();
  }
  root.DesmosPlusQRPage={list,save,open};
})(globalThis);
