import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { hero } from '../content';

gsap.registerPlugin(ScrollTrigger);

export function renderHero(): string {
  const titleHtml = hero.titleWords
    .map((w, i) => {
      const tag = i === 1 ? 'em' : 'span';
      return `<span class="kp-line" data-line><${tag}>${w}</${tag}></span>`;
    })
    .join('');

  return `
    <section class="kp-hero" id="hero">
      <div class="kp-hero__photo" style="background-image: url('${hero.background}')"></div>
      <div class="kp-hero__grid"></div>

      <div class="kp-hero__inner kp-container">
        <div class="flex justify-between items-start gap-6">
          <div class="kp-tag" data-reveal>
            <span class="kp-tag__dot"></span>
            ${hero.eyebrow}
          </div>
          <div class="hidden md:flex flex-col gap-1 text-right">
            <div class="text-muted text-[11px] tracking-[0.32em] uppercase">N 59°56′ E 30°18′</div>
            <div class="text-muted text-[11px] tracking-[0.32em] uppercase">St. Petersburg · Yevpatoria</div>
          </div>
        </div>

        <h1 class="kp-hero__title">${titleHtml}</h1>

        <div class="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <p class="kp-hero__subtitle" data-reveal>${hero.subtitle}</p>

          <div class="flex items-center gap-6 md:gap-10">
            <div>
              <div class="kp-hero__metric" data-reveal><em>${hero.metric}</em></div>
              <div class="kp-hero__metric-label mt-3" data-reveal data-reveal-delay="1">${hero.metricLabel}</div>
            </div>
          </div>
        </div>

        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-2">
          <a href="contacts.html" class="kp-btn" data-magnetic data-cursor="hover">
            <span>${hero.cta}</span>
            <svg class="kp-btn__arrow" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.2"/>
            </svg>
          </a>
          <div class="flex items-center gap-3 text-muted text-[11px] tracking-[0.32em] uppercase">
            <span>${hero.scroll}</span>
            <div class="w-px h-10 relative overflow-hidden" style="background: var(--line-2)">
              <span class="absolute inset-x-0 top-0 h-3" style="background: var(--ink); animation: breath 2.6s ease-in-out infinite"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function animateHero(): void {
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  tl.from('.kp-hero__title [data-line] > *', {
    yPercent: 110,
    duration: 1.2,
    stagger: 0.1,
  })
    .from('.kp-tag', { y: 18, opacity: 0, duration: 0.9 }, '-=0.8')
    .from('.kp-hero__subtitle', { y: 18, opacity: 0, duration: 0.9 }, '-=0.8')
    .from('.kp-hero__metric', { y: 36, opacity: 0, duration: 1.1 }, '-=0.6')
    .from('.kp-btn', { y: 18, opacity: 0, duration: 0.8 }, '-=0.5');

  gsap.to('.kp-hero__photo', {
    yPercent: 18,
    ease: 'none',
    scrollTrigger: { trigger: '.kp-hero', start: 'top top', end: 'bottom top', scrub: true },
  });
  gsap.to('.kp-hero__grid', {
    yPercent: -10,
    ease: 'none',
    scrollTrigger: { trigger: '.kp-hero', start: 'top top', end: 'bottom top', scrub: true },
  });
}
