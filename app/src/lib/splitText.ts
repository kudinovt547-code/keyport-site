import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function splitAndAnimate(selector: string, options: {
  types?: 'lines' | 'words' | 'chars';
  stagger?: number;
  duration?: number;
  delay?: number;
  yPercent?: number;
} = {}): void {
  const {
    types = 'lines',
    stagger = 0.08,
    duration = 1.1,
    delay = 0,
    yPercent = 110,
  } = options;

  document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    const split = new SplitType(el, { types });

    const target =
      types === 'lines'
        ? split.lines
        : types === 'words'
          ? split.words
          : split.chars;

    if (!target) return;

    target.forEach((line) => {
      if (!line.parentElement?.classList.contains('kp-mask-line')) {
        const wrap = document.createElement('span');
        wrap.className = 'kp-mask-line';
        line.parentNode!.insertBefore(wrap, line);
        wrap.appendChild(line);
      }
    });

    gsap.fromTo(
      target,
      { yPercent },
      {
        yPercent: 0,
        duration,
        stagger,
        delay,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      },
    );
  });
}
