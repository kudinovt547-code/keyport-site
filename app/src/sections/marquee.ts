export function renderMarquee(items: string[]): string {
  const row = items
    .map((t) => `<span class="text-muted hover:text-ink transition-colors duration-500 text-[clamp(28px,4vw,72px)] font-display font-light italic">${t}</span>
                 <span class="text-ink text-[clamp(28px,4vw,72px)] font-display">·</span>`)
    .join('');
  return `
    <section class="border-y border py-10 overflow-hidden">
      <div class="kp-marquee">${row}${row}</div>
    </section>
  `;
}
