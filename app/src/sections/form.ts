import { form } from '../content';

export function renderForm(): string {
  return `
    <section class="kp-section" id="contact">
      <div class="kp-narrow">
        <div class="kp-eyebrow mb-6" data-reveal>${form.eyebrow}</div>
        <h2 class="kp-display text-[clamp(40px,7vw,110px)] max-w-[18ch]" data-reveal data-reveal-delay="1">
          ${form.title}
        </h2>
        <p class="mt-6 max-w-xl text-cream-200/70 text-base leading-relaxed" data-reveal data-reveal-delay="2">
          ${form.subtitle}
        </p>

        <form class="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-4" data-reveal data-reveal-delay="3" onsubmit="event.preventDefault(); alert('Спасибо! Мы свяжемся с вами в течение рабочего дня.');">
          ${form.fields.map(
            (f) => `
              <label class="flex flex-col gap-2">
                <span class="kp-label">${f.label}${f.required ? ' *' : ''}</span>
                <input class="kp-input" type="${f.type}" name="${f.name}" ${f.required ? 'required' : ''}/>
              </label>
            `,
          ).join('')}
          <div class="md:col-span-2 mt-6 flex flex-col gap-6">
            <label class="flex items-start gap-3 text-cream-200/55 text-sm leading-relaxed">
              <input type="checkbox" required class="mt-1 accent-gold-500"/>
              <span>${form.consent}</span>
            </label>
            <div>
              <button type="submit" class="kp-btn" data-magnetic data-cursor="hover">
                <span>${form.submit}</span>
                <svg class="kp-btn__arrow" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.2"/></svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  `;
}
