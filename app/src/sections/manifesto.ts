import { manifesto } from '../content';

export function renderManifesto(): string {
  return `
    <section class="kp-section" id="manifesto">
      <div class="kp-narrow flex flex-col gap-16">
        <div class="flex items-center justify-between gap-6">
          <div class="kp-eyebrow" data-reveal>${manifesto.eyebrow}</div>
          <div class="text-cream-200/50 text-[11px] uppercase tracking-[0.32em]" data-reveal>${manifesto.signature}</div>
        </div>
        <div class="flex flex-col gap-12">
          ${manifesto.paragraphs.map(
            (p, i) => `
              <p class="kp-display font-display font-light text-[clamp(28px,4.5vw,72px)] leading-[1.04] tracking-[-0.025em] text-balance"
                 data-reveal data-reveal-delay="${i + 1}">${p}</p>
            `,
          ).join('')}
        </div>
        <div class="kp-divider"></div>
      </div>
    </section>
  `;
}
