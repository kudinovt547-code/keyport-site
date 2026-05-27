import { pillars } from '../content';

export function renderPillars(): string {
  return `
    <section class="kp-section bg-section-soft" id="pillars">
      <div class="kp-narrow flex flex-col gap-16">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <div class="kp-eyebrow mb-6" data-reveal>02 — Why KEYPORT</div>
            <h2 class="kp-display text-[clamp(40px,7vw,110px)]" data-reveal data-reveal-delay="1">
              Один контур.<br/>
              <em>Полный цикл.</em>
            </h2>
          </div>
          <p class="max-w-md text-ink-3 text-base leading-relaxed" data-reveal data-reveal-delay="2">
            Четыре опоры, на которых стоит компания. Каждая закрывает целый класс задач, которые иначе перекладываются на девелопера.
          </p>
        </div>

        <div class="grid gap-12">
          ${pillars.map((p, i) => `
            <div class="grid md:grid-cols-12 gap-8 items-center ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}" data-reveal data-reveal-delay="${(i % 4) + 1}">
              <div class="md:col-span-5" style="direction: ltr">
                <div class="kp-imgcard kp-imgcard--wide" style="background-image: url('${p.image}')"></div>
              </div>
              <div class="md:col-span-7 flex flex-col gap-5" style="direction: ltr">
                <div class="kp-no">${p.no} / 04</div>
                <h3 class="kp-display text-[clamp(28px,3.5vw,56px)]">${p.title}</h3>
                <p class="text-ink-3 text-base leading-relaxed max-w-[640px]">${p.text}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
