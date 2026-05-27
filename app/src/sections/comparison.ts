import { comparison } from '../content';

export function renderComparison(): string {
  return `
    <section class="kp-section bg-ink-950" id="comparison">
      <div class="kp-narrow flex flex-col gap-12">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <div class="kp-eyebrow mb-6" data-reveal>04 — Comparison</div>
            <h2 class="kp-display text-[clamp(40px,7vw,110px)] max-w-[18ch]" data-reveal data-reveal-delay="1">
              Своя УК vs <em class="text-gold-400 font-display italic font-light">KEYPORT</em>.
            </h2>
          </div>
          <p class="max-w-md text-cream-200/65 text-base leading-relaxed" data-reveal data-reveal-delay="2">
            Восемь осей сравнения. По каждой — что получает девелопер, который запускает УК сам, и что — с нами.
          </p>
        </div>

        <div class="kp-compare" data-reveal>
          <div class="kp-compare__row">
            <div class="kp-compare__cell"><div class="kp-compare__head">Параметр</div></div>
            <div class="kp-compare__cell"><div class="kp-compare__head">Собственная УК</div></div>
            <div class="kp-compare__cell kp-compare__cell--keyport"><div class="kp-compare__head text-gold-400">KEYPORT</div></div>
          </div>
          ${comparison.map(
            (c) => `
              <div class="kp-compare__row">
                <div class="kp-compare__cell"><div class="kp-compare__axis">${c.axis}</div></div>
                <div class="kp-compare__cell"><div class="kp-compare__text">${c.own}</div></div>
                <div class="kp-compare__cell kp-compare__cell--keyport"><div class="kp-compare__text">${c.keyport}</div></div>
              </div>
            `,
          ).join('')}
        </div>
      </div>
    </section>
  `;
}
