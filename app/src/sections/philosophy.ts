import { philosophy } from '../content';

export function renderPhilosophy(): string {
  return `
    <section class="kp-section" id="philosophy">
      <div class="kp-narrow flex flex-col gap-16">
        <div class="kp-eyebrow" data-reveal>${philosophy.eyebrow}</div>
        <p class="kp-display text-[clamp(28px,4vw,64px)] leading-[1.1] tracking-[-0.025em] text-balance max-w-[22ch]"
           data-reveal data-reveal-delay="1">
          ${philosophy.big}
        </p>
        <div class="kp-divider"></div>
        <div class="grid md:grid-cols-3 gap-10">
          ${philosophy.smallParas.map(
            (p, i) => `
              <div class="flex flex-col gap-4" data-reveal data-reveal-delay="${i + 1}">
                <div class="kp-no">— ${(i + 1).toString().padStart(2, '0')}</div>
                <p class="text-cream-200/75 text-base leading-relaxed">${p}</p>
              </div>
            `,
          ).join('')}
        </div>
      </div>
    </section>
  `;
}
