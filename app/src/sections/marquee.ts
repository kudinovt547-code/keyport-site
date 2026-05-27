export function renderMarquee(items: string[]): string {
  const row = items
    .map((t) => `<span class="text-cream-200/40 hover:text-cream-50 transition-colors duration-500 text-[clamp(28px,4vw,72px)] font-display font-light italic">${t}</span>
                 <span class="text-gold-500 text-[clamp(28px,4vw,72px)] font-display">·</span>`)
    .join('');
  return `
    <section class="border-y border-cream-100/10 py-10 overflow-hidden">
      <div class="kp-marquee">${row}${row}</div>
    </section>
  `;
}
