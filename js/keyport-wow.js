/*!
 * KEYPORT × WOW — Full Animation Suite
 * • YSL-style scroll snap (раздел пролистывается до конца при первом касании)
 * • Custom magnetic cursor
 * • Global reveal animations (IntersectionObserver)
 * • Parallax on hero images
 * • Smooth text split reveal
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────
   *  1. YSL SCROLL SNAP
   *  Минимальный скролл/свайп → секция долистывает до конца
   * ───────────────────────────────────────────── */
  var SLIDE_IDS = [
    'rec2075049161',
    'rec2068055171',
    'rec2068059641',
    'rec2068059721'
  ];

  var snap = {
    slides: [],
    isLocked: false,
    current: 0,
    stackTop: 0,

    init: function () {
      this.slides = SLIDE_IDS.map(function (id) {
        return document.getElementById(id);
      }).filter(Boolean);

      if (this.slides.length === 0) return;

      this.recalc();
      window.addEventListener('resize', this.recalc.bind(this));
      window.addEventListener('load', this.recalc.bind(this));

      window.addEventListener('wheel', this.onWheel.bind(this), { passive: false });
      window.addEventListener('touchstart', this.onTouchStart.bind(this), { passive: true });
      window.addEventListener('touchend', this.onTouchEnd.bind(this), { passive: false });
    },

    recalc: function () {
      if (!this.slides[0]) return;
      /* Получаем натуральный offsetTop первой секции */
      var el = this.slides[0];
      var rect = el.getBoundingClientRect();
      this.stackTop = rect.top + window.scrollY;
    },

    vh: function () { return window.innerHeight; },

    /* Позиция скролла, при которой нужная секция встаёт точно вверху */
    targetY: function (idx) {
      return this.stackTop + idx * this.vh();
    },

    /* Текущий "активный" индекс секции */
    currentIndex: function () {
      var relative = window.scrollY - this.stackTop;
      var idx = Math.round(relative / this.vh());
      return Math.max(0, Math.min(this.slides.length - 1, idx));
    },

    /* Находимся ли в зоне стека (±100px снаружи) */
    inZone: function () {
      var y = window.scrollY;
      var top = this.stackTop - 100;
      var bottom = this.stackTop + this.slides.length * this.vh();
      return y >= top && y <= bottom;
    },

    /* Кастомный easeInOutQuart */
    ease: function (t) {
      return t < 0.5
        ? 8 * t * t * t * t
        : 1 - Math.pow(-2 * t + 2, 4) / 2;
    },

    /* Плавный скролл к targetY за duration мс */
    scrollTo: function (targetY, duration) {
      var self = this;
      var startY = window.scrollY;
      var dist = targetY - startY;
      if (Math.abs(dist) < 2) { self.isLocked = false; return; }
      var startTime = null;

      function step(now) {
        if (!startTime) startTime = now;
        var elapsed = now - startTime;
        var t = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startY + dist * self.ease(t));
        if (t < 1) {
          requestAnimationFrame(step);
        } else {
          setTimeout(function () { self.isLocked = false; }, 120);
        }
      }
      requestAnimationFrame(step);
    },

    go: function (dir) {
      if (this.isLocked) return;
      this.isLocked = true;

      var cur = this.currentIndex();
      var next = cur + dir;

      /* Клипаем в пределы стека */
      if (next < 0) {
        this.scrollTo(this.stackTop - this.vh() * 0.3, 700);
        return;
      }
      if (next >= this.slides.length) {
        this.scrollTo(this.stackTop + this.slides.length * this.vh() + 50, 700);
        return;
      }
      this.scrollTo(this.targetY(next), 780);
    },

    onWheel: function (e) {
      if (!this.inZone()) return;
      e.preventDefault();
      if (this.isLocked) return;
      this.go(e.deltaY > 0 ? 1 : -1);
    },

    _touchStartY: 0,
    onTouchStart: function (e) {
      this._touchStartY = e.touches[0].clientY;
    },
    onTouchEnd: function (e) {
      if (!this.inZone()) return;
      var diff = this._touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 20) return;
      e.preventDefault();
      this.go(diff > 0 ? 1 : -1);
    }
  };


  /* ─────────────────────────────────────────────
   *  3. SCROLL REVEAL (IntersectionObserver)
   * ───────────────────────────────────────────── */
  var reveal = {
    init: function () {
      if (!window.IntersectionObserver) return;

      var targets = document.querySelectorAll(
        '.t-title, .t-text, .t-descr, .tn-atom__text, ' +
        '.t396__elem, .t-img, .t-btn, .t396__artboard .tn-elem'
      );

      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('kp-revealed');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

      targets.forEach(function (el, i) {
        /* Небольшой stagger через CSS var */
        el.classList.add('kp-reveal');
        el.style.setProperty('--kp-delay', (i % 8) * 60 + 'ms');
        obs.observe(el);
      });
    }
  };

  /* ─────────────────────────────────────────────
   *  4. SLIDE INDICATOR — прогресс-точки
   * ───────────────────────────────────────────── */
  var dots = {
    container: null,
    dotEls: [],

    init: function () {
      if (SLIDE_IDS.length === 0) return;

      this.container = document.createElement('div');
      this.container.id = 'kp-dots';

      for (var i = 0; i < SLIDE_IDS.length; i++) {
        var d = document.createElement('span');
        d.className = 'kp-dot' + (i === 0 ? ' kp-dot--active' : '');
        d.dataset.idx = i;
        var self = this;
        d.addEventListener('click', (function (idx) {
          return function () {
            snap.scrollTo(snap.targetY(idx), 800);
          };
        })(i));
        this.container.appendChild(d);
        this.dotEls.push(d);
      }
      document.body.appendChild(this.container);
      window.addEventListener('scroll', this.update.bind(this), { passive: true });
    },

    update: function () {
      if (!snap.inZone()) {
        this.container.classList.remove('kp-dots--visible');
        return;
      }
      this.container.classList.add('kp-dots--visible');
      var cur = snap.currentIndex();
      this.dotEls.forEach(function (d, i) {
        d.classList.toggle('kp-dot--active', i === cur);
      });
    }
  };

  /* ─────────────────────────────────────────────
   *  5. PARALLAX на hero-картинках
   * ───────────────────────────────────────────── */
  var parallax = {
    els: [],

    init: function () {
      document.querySelectorAll('.t396__carrier').forEach(function (el) {
        var bg = el.style.backgroundImage || getComputedStyle(el).backgroundImage;
        if (bg && bg !== 'none') {
          el.dataset.kpParallax = '1';
          parallax.els.push(el);
        }
      });
      if (this.els.length) {
        window.addEventListener('scroll', this.update.bind(this), { passive: true });
        this.update();
      }
    },

    update: function () {
      var scrollY = window.scrollY;
      this.els.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        var center = rect.top + rect.height / 2;
        var offset = (center - window.innerHeight / 2) * 0.15;
        el.style.backgroundPositionY = 'calc(50% + ' + offset + 'px)';
      });
    }
  };

  /* ─────────────────────────────────────────────
   *  INIT
   * ───────────────────────────────────────────── */
  function init() {
    snap.init();
    dots.init();
    parallax.init();

    /* Reveal с небольшой задержкой чтобы DOM отрендерился */
    setTimeout(function () { reveal.init(); }, 300);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Пересчёт stackTop после полной загрузки */
  window.addEventListener('load', function () {
    snap.recalc();
    dots.update();
  });

})();
