export function initPreloader(brand = 'KEYPORT'): Promise<void> {
  return new Promise((resolve) => {
    const root = document.createElement('div');
    root.className = 'kp-curtain';
    root.innerHTML = `
      <div class="kp-curtain__cover kp-curtain__cover--top"></div>
      <div class="kp-curtain__cover kp-curtain__cover--bottom"></div>
      <div class="kp-curtain__brand">
        <div class="kp-curtain__word" aria-label="${brand}">
          ${brand.split('').map((c) => `<span>${c}</span>`).join('')}
        </div>
        <div class="kp-curtain__sub">Apart Hotel Management</div>
      </div>
    `;
    document.body.appendChild(root);
    document.documentElement.style.overflow = 'hidden';

    requestAnimationFrame(() => root.classList.add('is-show'));

    window.setTimeout(() => root.classList.add('is-open'), 1500);

    window.setTimeout(() => {
      root.classList.add('is-done');
      document.documentElement.style.overflow = '';
      resolve();
    }, 2650);
  });
}
