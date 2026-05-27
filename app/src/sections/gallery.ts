/* Intro photo gallery — mosaic of real renders */
import { photos } from '../content';

export function renderGallery(): string {
  return `
    <section class="kp-section bg-section-soft" id="gallery">
      <div class="kp-container flex flex-col gap-16">
        <div class="flex items-end justify-between gap-10">
          <div>
            <div class="kp-eyebrow mb-6" data-reveal>— Look</div>
            <h2 class="kp-display text-[clamp(32px,4.5vw,76px)] max-w-[18ch]" data-reveal data-reveal-delay="1">
              Эстетика, в которой <em>экономика — главный архитектор</em>.
            </h2>
          </div>
          <div class="hidden md:block text-muted text-[11px] uppercase tracking-[0.32em] max-w-[280px] text-right" data-reveal data-reveal-delay="2">
            Реальные рендеры проектов команды KEYPORT
          </div>
        </div>

        <div class="grid grid-cols-12 gap-4 md:gap-6">
          <div class="col-span-12 md:col-span-8 kp-imgcard kp-imgcard--16x9" style="background-image: url('${photos.lobby}')" data-reveal></div>
          <div class="col-span-6 md:col-span-4 kp-imgcard" style="background-image: url('${photos.room}')" data-reveal data-reveal-delay="1"></div>
          <div class="col-span-6 md:col-span-4 kp-imgcard" style="background-image: url('${photos.bar}')" data-reveal data-reveal-delay="2"></div>
          <div class="col-span-12 md:col-span-8 kp-imgcard kp-imgcard--16x9" style="background-image: url('${photos.popupStore}')" data-reveal data-reveal-delay="3"></div>
        </div>
      </div>
    </section>
  `;
}
