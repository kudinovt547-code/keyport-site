import { pillars } from '../content';

export function renderPillars(): string {
  return `
    <section class="kp-section bg-ink-950" id="pillars">
      <div class="kp-narrow flex flex-col gap-16">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <div class="kp-eyebrow mb-6" data-reveal>02 — Why KEYPORT</div>
            <h2 class="kp-display text-[clamp(40px,7vw,110px)]" data-reveal data-reveal-delay="1">
              Один контур.<br/>
              <em class="text-gold-400 font-display font-light italic">Полный цикл.</em>
            </h2>
          </div>
          <p class="max-w-md text-cream-200/65 text-base leading-relaxed" data-reveal data-reveal-delay="2">
            Четыре опоры, на которых стоит компания. Каждая закрывает целый класс задач, которые иначе перекладываются на девелопера.
          </p>
        </div>

        <div class="kp-stack">
          ${pillars.map(
            (p, i) => `
              <div class="kp-stack__row" data-reveal data-reveal-delay="${(i % 4) + 1}">
                <div class="kp-stack__no">${p.no}</div>
                <div>
                  <h3 class="kp-stack__h">${p.title}</h3>
                  <p class="kp-stack__items max-w-[760px]">${p.text}</p>
                </div>
              </div>
            `,
          ).join('')}
        </div>
      </div>
    </section>
  `;
}
