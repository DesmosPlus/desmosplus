/* Load the native graph once. QR encoding subsequently runs inside Desmos. */
(async function () {
  try {
    const response = await fetch('/qr-code/qr-generator-state.json');
    if (!response.ok) throw new Error('Unable to load the QR graph.');
    const state = await response.json();
    const start = Date.now();
    while (!window.Calc || typeof window.Calc.setState !== 'function') {
      if (Date.now() - start > 30000) throw new Error('Calculator did not finish loading.');
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    window.Calc.setState(state);
  } catch (error) {
    const notice = document.createElement('p');
    notice.textContent = error.message;
    notice.style.cssText = 'position:fixed;top:0;left:0;background:white;color:#a00;padding:20px;z-index:9999';
    document.body.appendChild(notice);
  }
}());
