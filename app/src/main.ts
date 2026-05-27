/* Common bootstrap for every page */
import './styles/main.css';
import { initSmoothScroll } from './lib/lenis';
import { initCursor } from './lib/cursor';
import { initReveal } from './lib/reveal';
import { initPreloader } from './lib/preloader';
import { initMagnetic } from './lib/magnetic';
import { mountNav } from './lib/nav';
import { mountFooter } from './lib/footer';

export async function bootstrap(): Promise<void> {
  mountNav();
  mountFooter();
  initCursor();
  initSmoothScroll();

  await initPreloader();

  initReveal();
  initMagnetic();
}
