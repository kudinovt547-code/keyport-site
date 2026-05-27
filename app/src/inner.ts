/* Inner-page renderer with rich content and photos */

import { bootstrap } from './main';
import {
  pageHeads,
  servicesExtended,
  comparison,
  cases,
  numbers,
  testimonials,
  photos,
  aboutContent,
  productsContent,
  developerContent,
  experienceContent,
  philosophyContent,
  economyContent,
  contacts,
} from './content';
import { renderForm } from './sections/form';
import { renderMarquee } from './sections/marquee';

type PageKey =
  | 'about'
  | 'services'
  | 'developer'
  | 'products'
  | 'cases'
  | 'experience'
  | 'philosophy'
  | 'economy'
  | 'contacts'
  | 'feedback';

const root = document.getElementById('app');
if (!root) throw new Error('No #app root');

const page = (document.body.dataset.page ?? 'about') as PageKey;
const head = pageHeads[page]!;

/* — Page header (intro band with one big photo on the right) — */
function pageIntro(rightImage?: string): string {
  return `
    <section class="kp-pagehead kp-container">
      <div class="kp-eyebrow" data-reveal>${head.eyebrow}</div>
      <h1 class="kp-pagehead__title" data-reveal data-reveal-delay="1">${head.title}</h1>
      ${head.lead ? `<p class="kp-pagehead__lead" data-reveal data-reveal-delay="2">${head.lead}</p>` : ''}
      ${rightImage ? `
        <div class="mt-12 grid grid-cols-12 gap-6">
          <div class="col-span-12 kp-imgcard kp-imgcard--16x9" style="background-image: url('${rightImage}')" data-reveal data-reveal-delay="3"></div>
        </div>
      ` : ''}
    </section>
  `;
}

function pageContent(): string {
  switch (page) {
    case 'about':
      return `
        ${renderMarquee([
          'Девелоперам впервые',
          'Масштабирование через франшизу',
          'Капитализация актива',
          'Управляемая доходность',
          'Прозрачность вместо «просто сервиса»',
        ])}

        <section class="kp-section">
          <div class="kp-narrow grid md:grid-cols-12 gap-12 items-start">
            <h2 class="md:col-span-7 kp-display text-[clamp(32px,4.5vw,72px)] max-w-[18ch]" data-reveal>
              Мы — стратегический партнёр девелоперов с <em>длинным горизонтом</em>.
            </h2>
            <ul class="md:col-span-5 flex flex-col gap-3 text-ink-3 text-base leading-relaxed" data-reveal data-reveal-delay="1">
              ${aboutContent.forWhom.map((f) => `<li class="flex gap-3"><span class="text-accent">→</span><span>${f}</span></li>`).join('')}
            </ul>
          </div>
        </section>

        <section class="kp-section bg-section-soft">
          <div class="kp-narrow flex flex-col gap-16">
            <div class="grid md:grid-cols-12 gap-8 items-end">
              <div class="md:col-span-7">
                <div class="kp-eyebrow mb-6" data-reveal>— Логика работы</div>
                <h2 class="kp-display text-[clamp(32px,4.5vw,72px)] max-w-[18ch]" data-reveal data-reveal-delay="1">
                  Большинство проблем апарт-отелей решаются <em>до открытия</em>.
                </h2>
              </div>
              <div class="md:col-span-5" data-reveal data-reveal-delay="2">
                <div class="kp-imgcard kp-imgcard--wide" style="background-image: url('${photos.lobby}')"></div>
              </div>
            </div>

            <div class="grid md:grid-cols-3 gap-10">
              ${aboutContent.why.map((w, i) => `
                <div class="flex flex-col gap-4 border-t pt-8" style="border-color: var(--line)" data-reveal data-reveal-delay="${i + 1}">
                  <div class="kp-no">— ${(i + 1).toString().padStart(2, '0')}</div>
                  <h3 class="kp-display text-[clamp(22px,2.2vw,30px)]">${w.h}</h3>
                  <p class="text-ink-3 text-base leading-relaxed">${w.p}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <section class="kp-section">
          <div class="kp-narrow grid md:grid-cols-12 gap-10 items-center">
            <div class="md:col-span-5" data-reveal>
              <div class="kp-imgcard" style="background-image: url('${photos.bar}')"></div>
            </div>
            <div class="md:col-span-7 flex flex-col gap-8">
              <div class="kp-eyebrow" data-reveal>— Guarantee</div>
              <p class="kp-display text-[clamp(28px,3.6vw,52px)] leading-[1.12]" data-reveal data-reveal-delay="1">
                ${aboutContent.guarantee}
              </p>
            </div>
          </div>
        </section>

        <section class="kp-section bg-section-dark">
          <div class="kp-narrow">
            <p class="kp-display text-[clamp(32px,5vw,84px)] text-balance leading-[1.08]" style="color: var(--bg)" data-reveal>
              ${aboutContent.bigStatement}
            </p>
          </div>
        </section>

        ${renderForm()}
      `;

    case 'services':
      return `
        <section class="kp-section">
          <div class="kp-container grid md:grid-cols-12 gap-12 items-center">
            <div class="md:col-span-6" data-reveal>
              <div class="kp-imgcard kp-imgcard--wide" style="background-image: url('${photos.lobby}')"></div>
            </div>
            <div class="md:col-span-6 flex flex-col gap-6">
              <div class="kp-eyebrow" data-reveal>— Логика услуг</div>
              <p class="kp-display text-[clamp(26px,3vw,44px)] leading-[1.15] text-balance" data-reveal data-reveal-delay="1">
                Услуги KEYPORT собраны как <em>единый конвейер</em>: каждое следующее направление опирается на результат предыдущего и закрывает риски, которые иначе перекладываются на девелопера.
              </p>
            </div>
          </div>
        </section>

        <section class="kp-section bg-section-soft">
          <div class="kp-container flex flex-col gap-12">
            ${servicesExtended.map((s, i) => `
              <article class="grid md:grid-cols-12 gap-8 border-t pt-12" style="border-color: var(--line)" data-reveal data-reveal-delay="${(i % 6) + 1}">
                <div class="md:col-span-3 flex flex-col gap-2">
                  <div class="kp-no">${s.no} / 06</div>
                  <h3 class="kp-display text-[clamp(28px,3vw,48px)]">${s.title}</h3>
                </div>
                <div class="md:col-span-9 flex flex-col gap-6">
                  <p class="text-ink-3 text-lg leading-relaxed max-w-[760px]">${s.lead}</p>
                  <ul class="kp-service__list grid md:grid-cols-2 gap-x-12 gap-y-2">
                    ${s.items.map((it) => `<li>${it}</li>`).join('')}
                  </ul>
                </div>
              </article>
            `).join('')}
          </div>
        </section>

        ${renderForm()}
      `;

    case 'developer':
      return `
        <section class="kp-section">
          <div class="kp-narrow grid md:grid-cols-12 gap-10 items-center">
            <div class="md:col-span-7 flex flex-col gap-8">
              <p class="kp-display text-[clamp(28px,3.5vw,52px)] leading-[1.1] text-balance" data-reveal>
                ${developerContent.hero}
              </p>
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 text-ink-3" data-reveal data-reveal-delay="1">
                ${developerContent.bullets.map((b) => `<li class="flex gap-3"><span class="text-accent">→</span><span>${b}</span></li>`).join('')}
              </ul>
            </div>
            <div class="md:col-span-5" data-reveal data-reveal-delay="2">
              <div class="kp-imgcard kp-imgcard--wide" style="background-image: url('${photos.developer1}')"></div>
            </div>
          </div>
        </section>

        <section class="kp-section bg-section-soft">
          <div class="kp-narrow">
            <div class="flex items-end justify-between gap-10 mb-12">
              <div>
                <div class="kp-eyebrow mb-4" data-reveal>— Comparison</div>
                <h2 class="kp-display text-[clamp(36px,5vw,84px)] max-w-[18ch]" data-reveal data-reveal-delay="1">
                  Своя УК vs <em>KEYPORT</em>.
                </h2>
              </div>
              <p class="hidden md:block max-w-[280px] text-ink-3 text-sm leading-relaxed" data-reveal data-reveal-delay="2">
                Восемь ключевых параметров, которые определяют экономику и риски запуска.
              </p>
            </div>

            <div class="kp-compare" data-reveal>
              <div class="kp-compare__row">
                <div class="kp-compare__cell"><div class="kp-compare__head">Параметр</div></div>
                <div class="kp-compare__cell"><div class="kp-compare__head">Собственная УК</div></div>
                <div class="kp-compare__cell kp-compare__cell--keyport"><div class="kp-compare__head text-accent">KEYPORT</div></div>
              </div>
              ${comparison.map((c) => `
                <div class="kp-compare__row">
                  <div class="kp-compare__cell"><div class="kp-compare__axis">${c.axis}</div></div>
                  <div class="kp-compare__cell"><div class="kp-compare__text">${c.own}</div></div>
                  <div class="kp-compare__cell kp-compare__cell--keyport"><div class="kp-compare__text">${c.keyport}</div></div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <section class="kp-section">
          <div class="kp-narrow flex flex-col gap-12">
            <div class="kp-eyebrow" data-reveal>— Numbers</div>
            <div class="kp-numbers" style="grid-template-columns: repeat(2, minmax(0, 1fr));" data-reveal>
              ${numbers.map((n) => `
                <div class="kp-numbers__cell">
                  <div class="kp-numbers__value"><em>${n.value}</em>${n.unit ? ` <span class="text-ink-3 text-[0.5em]">${n.unit}</span>` : ''}</div>
                  <div class="kp-numbers__label">${n.label}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        ${renderForm()}
      `;

    case 'products':
      return `
        <section class="kp-section">
          <div class="kp-narrow grid md:grid-cols-12 gap-12 items-end">
            <div class="md:col-span-7 flex flex-col gap-8">
              <div class="kp-eyebrow" data-reveal>— Apartography</div>
              <h2 class="kp-display text-[clamp(36px,5vw,84px)] leading-[1.04] text-balance" data-reveal data-reveal-delay="1">
                Сбалансированный <em>номерной фонд</em> — основа доходности.
              </h2>
              <p class="text-ink-3 text-base leading-relaxed max-w-[640px]" data-reveal data-reveal-delay="2">
                Подход к планировке основан на локации и спросе. Каждая категория — отдельный продукт со своей экономикой загрузки, ценой и аудиторией.
              </p>
            </div>
            <div class="md:col-span-5" data-reveal data-reveal-delay="3">
              <div class="kp-imgcard" style="background-image: url('${photos.room}')"></div>
            </div>
          </div>
        </section>

        <section class="kp-section bg-section-soft">
          <div class="kp-narrow">
            <div class="kp-numbers" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));" data-reveal>
              ${productsContent.apartography.map((a) => `
                <div class="kp-numbers__cell">
                  <div class="kp-numbers__value" style="font-size: clamp(28px, 3vw, 44px)">${a.code}</div>
                  <div class="kp-numbers__label">
                    <strong style="color: var(--ink)">${a.cat}</strong> · ${a.size}<br/>
                    <span class="text-muted">${a.meaning}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <section class="kp-section">
          <div class="kp-narrow flex flex-col gap-12">
            <div class="flex items-end justify-between gap-10">
              <div>
                <div class="kp-eyebrow mb-4" data-reveal>— Стандарты</div>
                <h2 class="kp-display text-[clamp(36px,5vw,72px)] max-w-[14ch]" data-reveal data-reveal-delay="1">
                  Экосистема, в которой <em>работает каждый элемент</em>.
                </h2>
              </div>
            </div>
            <div class="grid md:grid-cols-3 gap-10">
              ${productsContent.standards.map((s, i) => `
                <div class="flex flex-col gap-3 border-t pt-6" style="border-color: var(--line)" data-reveal data-reveal-delay="${(i % 6) + 1}">
                  <div class="kp-no">${(i + 1).toString().padStart(2, '0')}</div>
                  <h3 class="text-ink text-lg font-medium">${s}</h3>
                </div>
              `).join('')}
            </div>

            <div class="grid md:grid-cols-12 gap-6 mt-12">
              <div class="col-span-12 md:col-span-7 kp-imgcard kp-imgcard--16x9" style="background-image: url('${photos.product1}')" data-reveal></div>
              <div class="col-span-12 md:col-span-5 kp-imgcard" style="background-image: url('${photos.product2}')" data-reveal data-reveal-delay="1"></div>
            </div>
          </div>
        </section>

        ${renderForm()}
      `;

    case 'cases':
      return `
        <section class="kp-section">
          <div class="kp-narrow flex flex-col gap-12">
            ${cases.map((c, i) => `
              <article class="grid md:grid-cols-12 gap-8 items-center ${i % 2 === 1 ? 'md:[direction:rtl]' : ''} border-t pt-12" style="border-color: var(--line)" data-reveal data-reveal-delay="${(i % 4) + 1}">
                <div class="md:col-span-7" style="direction: ltr">
                  <div class="kp-imgcard kp-imgcard--16x9" style="background-image: url('${c.image}')"></div>
                </div>
                <div class="md:col-span-5 flex flex-col gap-5" style="direction: ltr">
                  <div class="kp-no">${c.index}</div>
                  <div class="kp-case__scope">${c.scope}</div>
                  <h3 class="kp-display text-[clamp(28px,3vw,48px)]">${c.title}</h3>
                  <ul class="kp-case__list">
                    ${c.highlights.map((h) => `<li>${h}</li>`).join('')}
                  </ul>
                </div>
              </article>
            `).join('')}
          </div>
        </section>

        ${renderForm()}
      `;

    case 'experience':
      return `
        <section class="kp-section">
          <div class="kp-narrow grid md:grid-cols-12 gap-12 items-end">
            <div class="md:col-span-7 flex flex-col gap-8">
              <div class="kp-eyebrow" data-reveal>— Synthesis</div>
              <h2 class="kp-display text-[clamp(36px,5vw,84px)] max-w-[14ch] leading-[1.05]" data-reveal data-reveal-delay="1">
                KR.Consulting × <em>PORT&nbsp;PM</em>.
              </h2>
              <p class="text-ink-3 text-lg leading-relaxed max-w-[640px]" data-reveal data-reveal-delay="2">
                ${experienceContent.lead}
              </p>
            </div>
            <div class="md:col-span-5 grid grid-cols-2 gap-3" data-reveal data-reveal-delay="3">
              <div class="kp-imgcard" style="background-image: url('${photos.exp1}')"></div>
              <div class="kp-imgcard" style="background-image: url('${photos.exp2}'); transform: translateY(28px)"></div>
            </div>
          </div>
        </section>

        <section class="kp-section bg-section-soft">
          <div class="kp-narrow flex flex-col gap-12">
            <div class="kp-eyebrow" data-reveal>— Основатели</div>
            <div class="grid md:grid-cols-2 gap-12">
              ${experienceContent.founders.map((f, i) => `
                <div class="flex flex-col gap-5 border-t pt-8" style="border-color: var(--line)" data-reveal data-reveal-delay="${i + 1}">
                  <div class="kp-no">— ${(i + 1).toString().padStart(2, '0')}</div>
                  <h3 class="kp-display text-[clamp(28px,3vw,44px)]">${f.name}</h3>
                  <div class="kp-quote-meta">${f.role}</div>
                  <p class="text-ink-3 text-base leading-relaxed">${f.bio}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <section class="kp-section">
          <div class="kp-narrow flex flex-col gap-12">
            <div class="kp-eyebrow" data-reveal>— Экспертные блоки</div>
            <div class="grid md:grid-cols-3 gap-8">
              ${experienceContent.expertise.map((e, i) => `
                <div class="flex flex-col gap-3 border-t pt-6" style="border-color: var(--line)" data-reveal data-reveal-delay="${(i % 6) + 1}">
                  <div class="kp-no">${(i + 1).toString().padStart(2, '0')}</div>
                  <h3 class="text-ink text-lg font-medium">${e.h}</h3>
                  <p class="text-ink-3 text-sm leading-relaxed">${e.t}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <section class="kp-section bg-section-dark">
          <div class="kp-narrow">
            <div class="kp-numbers" style="grid-template-columns: repeat(2, minmax(0, 1fr));" data-reveal>
              ${numbers.map((n) => `
                <div class="kp-numbers__cell">
                  <div class="kp-numbers__value"><em>${n.value}</em>${n.unit ? ` <span style="color: rgba(243,237,226,0.55); font-size: 0.5em">${n.unit}</span>` : ''}</div>
                  <div class="kp-numbers__label">${n.label}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        ${renderForm()}
      `;

    case 'philosophy':
      return `
        <section class="kp-section">
          <div class="kp-narrow grid md:grid-cols-12 gap-12 items-start">
            <p class="md:col-span-7 kp-display text-[clamp(28px,3.6vw,52px)] leading-[1.12] text-balance" data-reveal>
              ${philosophyContent.intro}
            </p>
            <div class="md:col-span-5" data-reveal data-reveal-delay="1">
              <div class="kp-imgcard kp-imgcard--wide" style="background-image: url('${photos.philo1}')"></div>
            </div>
          </div>
        </section>

        <section class="kp-section bg-section-soft">
          <div class="kp-narrow flex flex-col gap-12">
            <div class="kp-eyebrow" data-reveal>— Values</div>
            <div class="grid md:grid-cols-2 gap-10">
              ${philosophyContent.values.map((v, i) => `
                <div class="flex flex-col gap-4 border-t pt-8" style="border-color: var(--line)" data-reveal data-reveal-delay="${(i % 4) + 1}">
                  <div class="kp-no">— ${(i + 1).toString().padStart(2, '0')}</div>
                  <h3 class="kp-display text-[clamp(24px,2.4vw,36px)]">${v.h}</h3>
                  <p class="text-ink-3 text-base leading-relaxed">${v.t}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <section class="kp-section">
          <div class="kp-narrow grid md:grid-cols-12 gap-12 items-center">
            <div class="md:col-span-5 grid grid-cols-2 gap-3" data-reveal>
              <div class="kp-imgcard" style="background-image: url('${photos.philo2}')"></div>
              <div class="kp-imgcard" style="background-image: url('${photos.philo3}'); transform: translateY(28px)"></div>
            </div>
            <p class="md:col-span-7 kp-display text-[clamp(28px,3.5vw,52px)] leading-[1.1] text-balance" data-reveal data-reveal-delay="1">
              ${philosophyContent.closing}
            </p>
          </div>
        </section>

        ${renderForm()}
      `;

    case 'economy':
      return `
        <section class="kp-section">
          <div class="kp-narrow grid md:grid-cols-12 gap-12 items-end">
            <p class="md:col-span-7 kp-display text-[clamp(28px,3.6vw,56px)] leading-[1.1] text-balance" data-reveal>
              ${economyContent.intro}
            </p>
            <div class="md:col-span-5" data-reveal data-reveal-delay="1">
              <div class="kp-imgcard kp-imgcard--wide" style="background-image: url('${photos.econ1}')"></div>
            </div>
          </div>
        </section>

        <section class="kp-section bg-section-soft">
          <div class="kp-narrow flex flex-col gap-12">
            <div class="kp-eyebrow" data-reveal>— Структура</div>
            <div class="grid md:grid-cols-2 gap-8">
              ${economyContent.blocks.map((b, i) => `
                <div class="flex flex-col gap-4 border-t pt-8" style="border-color: var(--line)" data-reveal data-reveal-delay="${(i % 4) + 1}">
                  <div class="kp-no">— ${(i + 1).toString().padStart(2, '0')}</div>
                  <h3 class="kp-display text-[clamp(22px,2.2vw,32px)]">${b.h}</h3>
                  <p class="text-ink-3 text-base leading-relaxed">${b.t}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <section class="kp-section">
          <div class="kp-narrow flex flex-col gap-12">
            <div class="kp-eyebrow" data-reveal>— Числа модели</div>
            <div class="kp-numbers" style="grid-template-columns: repeat(2, minmax(0, 1fr));" data-reveal>
              ${economyContent.numbers.map((n) => `
                <div class="kp-numbers__cell">
                  <div class="kp-numbers__value"><em>${n.value}</em>${n.unit ? ` <span class="text-ink-3 text-[0.5em]">${n.unit}</span>` : ''}</div>
                  <div class="kp-numbers__label">${n.label}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        ${renderForm()}
      `;

    case 'contacts':
      return `
        <section class="kp-section">
          <div class="kp-narrow grid md:grid-cols-12 gap-12">
            <div class="md:col-span-5 flex flex-col gap-8" data-reveal>
              <div class="kp-eyebrow">Почта</div>
              <a class="kp-display text-[clamp(28px,3vw,40px)]" href="mailto:${contacts.email}" data-cursor="hover">${contacts.email}</a>

              <div class="kp-eyebrow mt-6">Телефон</div>
              <a class="kp-display text-[clamp(24px,2.5vw,36px)]" href="tel:${contacts.phoneMain.replace(/\s/g, '')}" data-cursor="hover">${contacts.phoneMain}</a>
              <a class="text-ink-3 text-lg" href="tel:${contacts.phoneFooter.replace(/\s/g, '')}" data-cursor="hover">${contacts.phoneFooter}</a>

              <div class="kp-eyebrow mt-6">Адрес</div>
              <p class="text-ink-3 leading-relaxed">${contacts.address}</p>

              <div class="mt-6 kp-imgcard kp-imgcard--16x9" style="background-image: url('${photos.contactsMap}')"></div>
            </div>
            <div class="md:col-span-7" data-reveal data-reveal-delay="1">
              ${renderForm()}
            </div>
          </div>
        </section>
      `;

    case 'feedback':
      return `
        <section class="kp-section">
          <div class="kp-narrow flex flex-col gap-16">
            ${testimonials.map((t, i) => `
              <figure class="grid md:grid-cols-12 gap-8 border-t pt-12" style="border-color: var(--line)" data-reveal data-reveal-delay="${i + 1}">
                <div class="md:col-span-2 kp-no">№ ${(i + 1).toString().padStart(2, '0')}</div>
                <div class="md:col-span-10 flex flex-col gap-6">
                  <blockquote class="kp-quote">«${t.quote}»</blockquote>
                  <figcaption class="flex flex-col gap-1">
                    <span class="text-ink text-base">${t.author}</span>
                    <span class="kp-quote-meta">${t.role}</span>
                  </figcaption>
                </div>
              </figure>
            `).join('')}
          </div>
        </section>
        ${renderForm()}
      `;
  }
}

/* Pick a header photo per page */
const headerPhotos: Record<PageKey, string | undefined> = {
  about:      photos.heroFacade,
  services:   photos.bar,
  developer:  photos.portComfort,
  products:   photos.room,
  cases:      photos.case1,
  experience: photos.lobby,
  philosophy: photos.philo4,
  economy:    photos.scheme,
  contacts:   undefined,
  feedback:   undefined,
};

root.innerHTML = pageIntro(headerPhotos[page]) + pageContent();

(async () => { await bootstrap(); })();
