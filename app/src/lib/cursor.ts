import { gsap } from 'gsap';

export function initCursor(): void {
  if (matchMedia('(pointer: coarse)').matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'kp-cursor';
  document.body.appendChild(cursor);

  const xTo = gsap.quickTo(cursor, 'x', { duration: 0.4, ease: 'expo.out' });
  const yTo = gsap.quickTo(cursor, 'y', { duration: 0.4, ease: 'expo.out' });

  let visible = false;
  cursor.style.opacity = '0';
  window.addEventListener('mousemove', (e) => {
    if (!visible) { cursor.style.opacity = '1'; visible = true; }
    xTo(e.clientX);
    yTo(e.clientY);
  });
  window.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; visible = false; });

  const hoverSel = 'a, button, [data-cursor="hover"], .kp-btn, .kp-nav__cta, input, textarea';
  document.addEventListener('mouseover', (e) => {
    const t = e.target as HTMLElement;
    if (t.closest(hoverSel)) cursor.classList.add('is-hover');
  });
  document.addEventListener('mouseout', (e) => {
    const t = e.target as HTMLElement;
    if (t.closest(hoverSel)) cursor.classList.remove('is-hover');
  });
}
