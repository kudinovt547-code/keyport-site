/* Generic inner-page renderer.
   Reads data-page on <main> and renders matching template. */

import { bootstrap } from './main';
import {
  pageHeads,
  services,
  comparison,
  cases,
  pillars,
  numbers,
  testimonials,
  philosophy,
  manifesto,
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

function pageIntro(): string {
  return `
    <section class="kp-pagehead kp-container grain">
      <div class="kp-eyebrow" data-reveal>${head.eyebrow}</div>
      <h1 class="kp-pagehead__title" data-reveal data-reveal-delay="1">${head.title}</h1>
      ${head.lead ? `<p class="kp-pagehead__lead" data-reveal data-reveal-delay="2">${head.lead}</p>` : ''}
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
          <div class="kp-narrow grid md:grid-cols-2 gap-12">
            <h2 class="kp-display text-[clamp(36px,5vw,80px)] max-w-[16ch]" data-reveal>
              Стратегический партнёр девелоперов с длинным горизонтом.
            </h2>
            <div class="flex flex-col gap-6 text-cream-200/72 text-base leading-relaxed">
              <p data-reveal data-reveal-delay="1">Апарт-отель — сложный актив с длинным жизненным циклом, в котором ранние решения определяют экономику, управляемость и репутацию спустя годы.</p>
              <p data-reveal data-reveal-delay="2">Большинство проблем возникает не на эксплуатации, а значительно раньше — на этапе концепции и проектирования.</p>
              <p data-reveal data-reveal-delay="3">KEYPORT подключается к проекту на ранних стадиях, формирует продукт, сопровождает запуск и обеспечивает устойчивую операционную модель и репутацию.</p>
            </div>
          </div>
        </section>
        ${renderForm()}
      `;

    case 'services':
      return `
        <section class="kp-section">
          <div class="kp-container">
            <div class="kp-services-grid">
              ${services.map((s, i) => `
                <div class="kp-service" data-reveal data-reveal-delay="${(i % 6) + 1}">
                  <div class="flex items-center justify-between">
                    <div class="kp-service__no">${s.no} / 06</div>
                    <div class="w-10 h-px bg-cream-100/20"></div>
                  </div>
                  <h3 class="kp-service__h">${s.title}</h3>
                  <ul class="kp-service__list">
                    ${s.items.map((it) => `<li>${it}</li>`).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
        ${renderForm()}
      `;

    case 'developer':
      return `
        <section class="kp-section bg-ink-950">
          <div class="kp-narrow">
            <div class="kp-compare" data-reveal>
              <div class="kp-compare__row">
                <div class="kp-compare__cell"><div class="kp-compare__head">Параметр</div></div>
                <div class="kp-compare__cell"><div class="kp-compare__head">Собственная УК</div></div>
                <div class="kp-compare__cell kp-compare__cell--keyport"><div class="kp-compare__head text-gold-400">KEYPORT</div></div>
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
          <div class="kp-narrow">
            <div class="kp-numbers" style="grid-template-columns: repeat(2, minmax(0, 1fr));">
              ${numbers.map((n) => `
                <div class="kp-numbers__cell">
                  <div class="kp-numbers__value"><em>${n.value}</em>${n.unit ? ` <span class="text-cream-200/55 text-[0.5em]">${n.unit}</span>` : ''}</div>
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
          <div class="kp-narrow flex flex-col gap-16">
            <h2 class="kp-display text-[clamp(36px,5vw,84px)] max-w-[18ch]" data-reveal>
              Апартография: <em class="text-gold-400 italic">сбалансированный номерной фонд</em>.
            </h2>
            <div class="kp-numbers" data-reveal style="grid-template-columns: repeat(3, minmax(0, 1fr));">
              <div class="kp-numbers__cell">
                <div class="kp-numbers__value">Focus</div>
                <div class="kp-numbers__label">Standard · 22–25 м² · «Пространство для работы и сна»</div>
              </div>
              <div class="kp-numbers__cell">
                <div class="kp-numbers__value">Family</div>
                <div class="kp-numbers__label">Junior Suite · 32–43 м² · «Простор для маленькой семьи»</div>
              </div>
              <div class="kp-numbers__cell">
                <div class="kp-numbers__value">Signature</div>
                <div class="kp-numbers__label">Suite / Presidential · 60+ м² · «Главный продукт сети»</div>
              </div>
            </div>
            <div class="kp-stack">
              ${pillars.map((p, i) => `
                <div class="kp-stack__row" data-reveal data-reveal-delay="${(i % 4) + 1}">
                  <div class="kp-stack__no">${p.no}</div>
                  <div>
                    <h3 class="kp-stack__h">${p.title}</h3>
                    <p class="kp-stack__items max-w-[760px]">${p.text}</p>
                  </div>
                </div>
              `).join('')}
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
              <article class="grid md:grid-cols-12 gap-8 border-t border-cream-100/10 pt-12" data-reveal data-reveal-delay="${i + 1}">
                <div class="md:col-span-3 flex flex-col gap-2">
                  <div class="kp-no">${c.index}</div>
                  <div class="kp-compare__head text-cream-200/55">${c.scope}</div>
                </div>
                <div class="md:col-span-9 flex flex-col gap-6">
                  <h3 class="kp-display text-[clamp(28px,3.5vw,56px)]">${c.title}</h3>
                  <ul class="kp-case__list grid md:grid-cols-3 gap-4">
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
          <div class="kp-narrow grid md:grid-cols-2 gap-12">
            <h2 class="kp-display text-[clamp(36px,5vw,84px)] max-w-[14ch]" data-reveal>
              KR.Consulting × <em class="text-gold-400 italic">PORT&nbsp;PM</em>.
            </h2>
            <div class="flex flex-col gap-6 text-cream-200/72 text-base leading-relaxed">
              ${manifesto.paragraphs.map((p, i) => `
                <p data-reveal data-reveal-delay="${i + 1}">${p}</p>
              `).join('')}
            </div>
          </div>
        </section>
        <section class="kp-section bg-ink-950">
          <div class="kp-narrow">
            <div class="kp-numbers" style="grid-template-columns: repeat(2, minmax(0, 1fr));">
              ${numbers.map((n) => `
                <div class="kp-numbers__cell">
                  <div class="kp-numbers__value"><em>${n.value}</em>${n.unit ? ` <span class="text-cream-200/55 text-[0.5em]">${n.unit}</span>` : ''}</div>
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
          <div class="kp-narrow flex flex-col gap-16">
            <p class="kp-display text-[clamp(28px,4vw,64px)] leading-[1.1] tracking-[-0.025em] text-balance max-w-[22ch]" data-reveal>
              ${philosophy.big}
            </p>
            <div class="kp-divider"></div>
            <div class="grid md:grid-cols-3 gap-10">
              ${philosophy.smallParas.map((p, i) => `
                <div class="flex flex-col gap-4" data-reveal data-reveal-delay="${i + 1}">
                  <div class="kp-no">— ${(i + 1).toString().padStart(2, '0')}</div>
                  <p class="text-cream-200/75 text-base leading-relaxed">${p}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
        ${renderForm()}
      `;

    case 'economy':
      return `
        <section class="kp-section">
          <div class="kp-narrow flex flex-col gap-16">
            <h2 class="kp-display text-[clamp(36px,5vw,84px)] max-w-[18ch]" data-reveal>
              Работаем с экономикой проекта <em class="italic text-gold-400">как с собственной</em>.
            </h2>
            <div class="kp-numbers" data-reveal style="grid-template-columns: repeat(3, minmax(0, 1fr));">
              <div class="kp-numbers__cell">
                <div class="kp-numbers__value">Q</div>
                <div class="kp-numbers__label">Ежеквартальные лицензионные платежи</div>
              </div>
              <div class="kp-numbers__cell">
                <div class="kp-numbers__value">1×</div>
                <div class="kp-numbers__label">Единоразовый паушальный взнос</div>
              </div>
              <div class="kp-numbers__cell">
                <div class="kp-numbers__value">∞</div>
                <div class="kp-numbers__label">Полная прозрачность финансовых потоков</div>
              </div>
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
              <a class="kp-display text-[clamp(28px,3vw,40px)]" href="mailto:connect@keyport.group" data-cursor="hover">connect@keyport.group</a>
              <div class="kp-eyebrow mt-6">Телефон</div>
              <a class="kp-display text-[clamp(24px,2.5vw,36px)]" href="tel:+79213185056" data-cursor="hover">+7 921 318-50-56</a>
              <a class="text-cream-200/65 text-lg" href="tel:+79936430610" data-cursor="hover">+7 993 643 06 10</a>
              <div class="kp-eyebrow mt-6">Адрес</div>
              <p class="text-cream-200/75 leading-relaxed">г. Санкт-Петербург, ул. Александра Невского, д. 9, литера В</p>
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
              <figure class="grid md:grid-cols-12 gap-8 border-t border-cream-100/10 pt-12" data-reveal data-reveal-delay="${i + 1}">
                <div class="md:col-span-2 kp-no">№ ${(i + 1).toString().padStart(2, '0')}</div>
                <div class="md:col-span-10 flex flex-col gap-6">
                  <blockquote class="kp-quote">"${t.quote}"</blockquote>
                  <figcaption class="flex flex-col gap-1">
                    <span class="text-cream-50 text-base">${t.author}</span>
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

root.innerHTML = pageIntro() + pageContent();

(async () => { await bootstrap(); })();
