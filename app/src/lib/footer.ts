import { brand, contacts, nav } from '../content';

export function mountFooter(): void {
  const footer = document.createElement('footer');
  footer.className = 'kp-footer grain';
  footer.innerHTML = `
    <div class="kp-container flex flex-col gap-16">
      <div class="overflow-hidden">
        <div class="kp-footer__bigword" data-reveal>${brand.name}</div>
      </div>

      <div class="grid md:grid-cols-12 gap-10 md:gap-6 pb-10 border-b border-cream-100/10">
        <div class="md:col-span-4 flex flex-col gap-3">
          <div class="kp-eyebrow">Контакты</div>
          <a href="mailto:${contacts.email}" class="text-cream-50 hover:text-gold-400 transition-colors text-lg" data-cursor="hover">${contacts.email}</a>
          <a href="tel:${contacts.phoneMain.replace(/\s/g, '')}" class="text-cream-200/70 hover:text-cream-50 transition-colors" data-cursor="hover">${contacts.phoneMain}</a>
          <a href="tel:${contacts.phoneFooter.replace(/\s/g, '')}" class="text-cream-200/70 hover:text-cream-50 transition-colors" data-cursor="hover">${contacts.phoneFooter}</a>
          <div class="text-cream-200/55 text-sm leading-relaxed mt-3 max-w-[280px]">${contacts.address}</div>
        </div>

        <div class="md:col-span-5">
          <div class="kp-eyebrow mb-4">Навигация</div>
          <div class="grid grid-cols-2 gap-x-6 gap-y-2">
            ${nav.map((n) => `<a href="${n.href}" class="text-cream-200/70 hover:text-cream-50 transition-colors text-sm uppercase tracking-widest" data-cursor="hover">${n.label}</a>`).join('')}
            <a href="privacypolicy.html" class="text-cream-200/40 hover:text-cream-50 transition-colors text-sm uppercase tracking-widest" data-cursor="hover">Политика</a>
          </div>
        </div>

        <div class="md:col-span-3 flex flex-col gap-3">
          <div class="kp-eyebrow">Офис</div>
          <div class="text-cream-200/70 text-sm leading-relaxed">${contacts.city}</div>
          <div class="text-cream-200/45 text-xs tracking-widest uppercase mt-6">est. 2026</div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-cream-200/45 text-xs uppercase tracking-widest">
        <div>© ${brand.year} ${brand.full}. Все права защищены.</div>
        <div>Сайт управляется ${brand.full}</div>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}
