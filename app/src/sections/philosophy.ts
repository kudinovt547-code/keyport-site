import { philosophy, philosophyContent, photos } from '../content';

export function renderPhilosophy(): string {
  return `
    <section class="kp-section bg-section-soft" id="philosophy">
      <div class="kp-narrow flex flex-col gap-16">
        <div class="kp-eyebrow" data-reveal>${philosophy.eyebrow}</div>

        <div class="grid md:grid-cols-12 gap-10 items-start">
          <p class="md:col-span-7 kp-display text-[clamp(28px,3.6vw,56px)] leading-[1.12] tracking-[-0.025em] text-balance"
             data-reveal data-reveal-delay="1">
            ${philosophy.big}
          </p>
          <div class="md:col-span-5" data-reveal data-reveal-delay="2">
            <div class="kp-imgcard kp-imgcard--wide" style="background-image: url('${photos.philo1}')"></div>
          </div>
        </div>

        <div class="kp-divider"></div>

        <div class="grid md:grid-cols-2 gap-10">
          ${philosophyContent.values.map(
            (v, i) => `
              <div class="flex flex-col gap-4 border-t pt-8" style="border-color: var(--line)" data-reveal data-reveal-delay="${(i % 4) + 1}">
                <div class="kp-no">— ${(i + 1).toString().padStart(2, '0')}</div>
                <h3 class="kp-display text-[clamp(22px,2.2vw,32px)]">${v.h}</h3>
                <p class="text-ink-3 text-base leading-relaxed">${v.t}</p>
              </div>
            `,
          ).join('')}
        </div>
      </div>
    </section>
  `;
}
