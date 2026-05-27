import { numbers } from '../content';

export function renderNumbers(): string {
  return `
    <section class="kp-section" id="numbers">
      <div class="kp-narrow flex flex-col gap-12">
        <div class="flex items-center justify-between gap-6">
          <div class="kp-eyebrow" data-reveal>05 — Numbers</div>
          <div class="text-muted text-[11px] uppercase tracking-[0.32em]" data-reveal>фактика по проектам</div>
        </div>

        <div class="kp-numbers" data-reveal style="grid-template-columns: repeat(2, minmax(0, 1fr));">
          ${numbers.map(
            (n) => `
              <div class="kp-numbers__cell">
                <div class="kp-numbers__value"><em>${n.value}</em>${n.unit ? ` <span class="text-muted text-[0.5em] align-baseline">${n.unit}</span>` : ''}</div>
                <div class="kp-numbers__label">${n.label}</div>
              </div>
            `,
          ).join('')}
        </div>
      </div>
    </section>
  `;
}
