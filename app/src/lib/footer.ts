import { brand, contacts, logoSrc, nav } from '../content';

export function mountFooter(): void {
  const footer = document.createElement('footer');
  footer.className = 'kp-footer';
  footer.innerHTML = `
    <div class="kp-container flex flex-col gap-16">
      <div class="overflow-hidden flex items-end justify-between gap-10">
        <img class="kp-footer__logo" src="${logoSrc}" alt="KEYPORT" data-reveal />
        <div class="hidden md:flex flex-col items-end gap-2 text-[11px] uppercase tracking-[0.32em] text-muted">
          <span>Practical Aesthetics</span>
          <span>Managed Profitability</span>
        </div>
      </div>

      <div class="grid md:grid-cols-12 gap-10 md:gap-6 pb-10 border-b border-line" style="border-color: var(--line)">
        <div class="md:col-span-4 flex flex-col gap-3">
          <div class="kp-eyebrow">Контакты</div>
          <a href="mailto:${contacts.email}" class="text-lg hover:underline" data-cursor="hover">${contacts.email}</a>
          <a href="tel:${contacts.phoneMain.replace(/\s/g, '')}" class="hover:underline text-ink-3" data-cursor="hover">${contacts.phoneMain}</a>
          <a href="tel:${contacts.phoneFooter.replace(/\s/g, '')}" class="hover:underline text-ink-3" data-cursor="hover">${contacts.phoneFooter}</a>
          <div class="text-sm leading-relaxed mt-3 max-w-[280px] text-muted">${contacts.address}</div>
        </div>

        <div class="md:col-span-5">
          <div class="kp-eyebrow mb-4">Навигация</div>
          <div class="grid grid-cols-2 gap-x-6 gap-y-2">
            ${nav.map((n) => `<a href="${n.href}" class="text-sm uppercase tracking-widest hover:underline text-ink-3" data-cursor="hover">${n.label}</a>`).join('')}
            <a href="privacypolicy.html" class="text-sm uppercase tracking-widest hover:underline text-muted" data-cursor="hover">Политика</a>
          </div>
        </div>

        <div class="md:col-span-3 flex flex-col gap-3">
          <div class="kp-eyebrow">Офис</div>
          <div class="text-sm leading-relaxed text-ink-3">${contacts.city}</div>
          <div class="text-xs tracking-widest uppercase mt-6 text-muted">est. ${brand.year}</div>
        </div>
      </div>

      <div class="overflow-hidden">
        <div class="kp-footer__bigword" data-reveal>KEYPORT</div>
      </div>

      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs uppercase tracking-widest text-muted">
        <div>© ${brand.year} ${brand.full}. Все права защищены.</div>
        <div>Сайт управляется ${brand.full}</div>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}
