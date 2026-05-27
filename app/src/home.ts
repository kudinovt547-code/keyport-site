import { bootstrap } from './main';
import { renderHero, animateHero } from './sections/hero';
import { renderMarquee } from './sections/marquee';
import { renderManifesto } from './sections/manifesto';
import { renderGallery } from './sections/gallery';
import { renderPillars } from './sections/pillars';
import { renderServices } from './sections/services';
import { renderComparison } from './sections/comparison';
import { renderNumbers } from './sections/numbers';
import { renderCases } from './sections/cases';
import { renderPhilosophy } from './sections/philosophy';
import { renderTestimonials } from './sections/testimonials';
import { renderForm } from './sections/form';

const root = document.getElementById('app');
if (!root) throw new Error('No #app root');

root.innerHTML = [
  renderHero(),
  renderMarquee([
    'Продукт',
    'Концепция',
    'Девелопмент',
    'Операционка',
    'Маркетинг',
    'Франшиза',
    'Доходность',
    'Управление',
    'Practical Aesthetics',
    'Managed Profitability',
  ]),
  renderManifesto(),
  renderPillars(),
  renderGallery(),
  renderServices(),
  renderComparison(),
  renderNumbers(),
  renderCases(),
  renderPhilosophy(),
  renderTestimonials(),
  renderForm(),
].join('\n');

(async () => {
  await bootstrap();
  animateHero();
})();
