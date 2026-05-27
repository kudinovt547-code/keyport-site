import { testimonials } from '../content';

export function renderTestimonials(): string {
  return `
    <section class="kp-section bg-section-dark" id="testimonials">
      <div class="kp-narrow flex flex-col gap-16">
        <div class="kp-eyebrow" data-reveal>07 — Voices</div>
        <div class="flex flex-col gap-16">
          ${testimonials.map(
            (t, i) => `
              <figure class="grid md:grid-cols-12 gap-8 items-start" data-reveal data-reveal-delay="${i + 1}">
                <div class="md:col-span-2 kp-no">№ ${(i + 1).toString().padStart(2, '0')}</div>
                <div class="md:col-span-10 flex flex-col gap-6">
                  <blockquote class="kp-quote" style="color: var(--bg)">«${t.quote}»</blockquote>
                  <figcaption class="flex flex-col gap-1">
                    <span class="text-base" style="color: var(--bg)">${t.author}</span>
                    <span class="kp-quote-meta" style="color: rgba(243,237,226,0.55)">${t.role}</span>
                  </figcaption>
                </div>
              </figure>
            `,
          ).join('')}
        </div>
      </div>
    </section>
  `;
}
