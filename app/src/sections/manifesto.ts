import { manifesto, photos } from '../content';

export function renderManifesto(): string {
  return `
    <section class="kp-section" id="manifesto">
      <div class="kp-narrow flex flex-col gap-16">
        <div class="flex items-center justify-between gap-6">
          <div class="kp-eyebrow" data-reveal>01 — Manifesto</div>
          <div class="text-muted text-[11px] uppercase tracking-[0.32em]" data-reveal>${manifesto.signature}</div>
        </div>

        <div class="grid md:grid-cols-12 gap-10 items-end">
          <div class="md:col-span-7 flex flex-col gap-10">
            ${manifesto.paragraphs.map(
              (p, i) => `
                <p class="kp-display text-[clamp(28px,4vw,64px)] leading-[1.06] tracking-[-0.025em] text-balance"
                   data-reveal data-reveal-delay="${i + 1}">${p}</p>
              `,
            ).join('')}
          </div>
          <div class="md:col-span-5" data-reveal data-reveal-delay="2">
            <div class="kp-imgcard" style="background-image: url('${photos.popupStore}')"></div>
          </div>
        </div>

        <div class="kp-divider"></div>
      </div>
    </section>
  `;
}
