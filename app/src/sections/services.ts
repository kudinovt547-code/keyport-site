import { services } from '../content';

export function renderServices(): string {
  return `
    <section class="kp-section" id="services">
      <div class="kp-container flex flex-col gap-16">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <div class="kp-eyebrow mb-6" data-reveal>03 — Services</div>
            <h2 class="kp-display text-[clamp(40px,7vw,110px)] max-w-[14ch]" data-reveal data-reveal-delay="1">
              От концепции — до операционного управления.
            </h2>
          </div>
          <p class="max-w-md text-muted text-base leading-relaxed" data-reveal data-reveal-delay="2">
            Шесть направлений. Один контур ответственности.
          </p>
        </div>

        <div class="kp-services-grid">
          ${services.map(
            (s, i) => `
              <div class="kp-service" data-reveal data-reveal-delay="${(i % 6) + 1}">
                <div class="flex items-center justify-between">
                  <div class="kp-service__no">${s.no} / ${services.length.toString().padStart(2, '0')}</div>
                  <div class="w-10 h-px bg-transparent"></div>
                </div>
                <h3 class="kp-service__h">${s.title}</h3>
                <ul class="kp-service__list">
                  ${s.items.map((item) => `<li>${item}</li>`).join('')}
                </ul>
              </div>
            `,
          ).join('')}
        </div>
      </div>
    </section>
  `;
}
