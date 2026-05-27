import { brand, nav } from '../content';

export function mountNav(): void {
  const navEl = document.createElement('header');
  navEl.className = 'kp-nav';
  navEl.innerHTML = `
    <div class="kp-nav__row">
      <a href="index.html" class="kp-nav__logo" data-cursor="hover">${brand.name}</a>
      <nav class="kp-nav__links">
        ${nav.map((n) => `<a href="${n.href}" data-cursor="hover">${n.label}</a>`).join('')}
      </nav>
      <a href="contacts.html" class="kp-nav__cta" data-cursor="hover">Связаться</a>
      <button class="kp-nav__burger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;
  document.body.insertBefore(navEl, document.body.firstChild);

  const onScroll = () => {
    navEl.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
