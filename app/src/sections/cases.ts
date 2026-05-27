import { cases } from '../content';

export function renderCases(): string {
  return `
    <section class="kp-section" id="cases">
      <div class="kp-narrow flex flex-col gap-12">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <div class="kp-eyebrow mb-6" data-reveal>06 — Cases</div>
            <h2 class="kp-display text-[clamp(40px,7vw,110px)] max-w-[16ch]" data-reveal data-reveal-delay="1">
              Решения, которые <em>уже работают</em>.
            </h2>
          </div>
          <a href="cases.html" class="kp-btn kp-btn--ghost self-start md:self-end" data-magnetic data-cursor="hover">
            <span>Все кейсы</span>
            <svg class="kp-btn__arrow" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.2"/></svg>
          </a>
        </div>
      </div>

      <div class="mt-16">
        <div class="kp-cases-h">
          ${cases.map((c, i) => `
            <article class="kp-case" data-reveal data-reveal-delay="${i + 1}">
              <div class="kp-case__cover" style="background-image: url('${c.image}')"></div>
              <div class="kp-case__body">
                <div class="flex items-center justify-between">
                  <div class="kp-case__index">${c.index}</div>
                  <div class="kp-case__scope">${c.scope}</div>
                </div>
                <h3 class="kp-case__title">${c.title}</h3>
                <ul class="kp-case__list">
                  ${c.highlights.map((h) => `<li>${h}</li>`).join('')}
                </ul>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
