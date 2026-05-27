import { gsap } from 'gsap';

export function initMagnetic(selector = '[data-magnetic]'): void {
  if (matchMedia('(pointer: coarse)').matches) return;
  document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    const setX = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'expo.out' });
    const setY = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'expo.out' });

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setX(x * 0.3);
      setY(y * 0.3);
    });
    el.addEventListener('mouseleave', () => {
      setX(0);
      setY(0);
    });
  });
}
