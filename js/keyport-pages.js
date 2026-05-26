/*!
 * KEYPORT — Page Animations (all pages except main)
 */
(function () {
  'use strict';

  /* Custom Cursor */
  var cursor = {
    dot: null, ring: null,
    mx: -100, my: -100,
    rx: -100, ry: -100,

    init: function () {
      if ('ontouchstart' in window) return;
      this.dot = this.make('kp-cursor-dot');
      this.ring = this.make('kp-cursor-ring');
      document.body.appendChild(this.dot);
      document.body.appendChild(this.ring);
      document.addEventListener('mousemove', this.onMove.bind(this));
      document.querySelectorAll('a, button, [role="button"], .tn-atom, .t-btn, input, textarea')
        .forEach(this.bindHover.bind(this));
      this.loop();
    },
    make: function (id) { var el = document.createElement('div'); el.id = id; return el; },
    onMove: function (e) { this.mx = e.clientX; this.my = e.clientY; },
    bindHover: function (el) {
      var self = this;
      el.addEventListener('mouseenter', function () { self.dot.classList.add('kp-cursor--hover'); self.ring.classList.add('kp-cursor--hover'); });
      el.addEventListener('mouseleave', function () { self.dot.classList.remove('kp-cursor--hover'); self.ring.classList.remove('kp-cursor--hover'); });
    },
    loop: function () {
      this.rx += (this.mx - this.rx) * 0.12;
      this.ry += (this.my - this.ry) * 0.12;
      this.dot.style.transform = 'translate3d(' + (this.mx - 4) + 'px,' + (this.my - 4) + 'px,0)';
      this.ring.style.transform = 'translate3d(' + (this.rx - 20) + 'px,' + (this.ry - 20) + 'px,0)';
      requestAnimationFrame(this.loop.bind(this));
    }
  };

  /* Scroll Reveal */
  var reveal = {
    init: function () {
      if (!window.IntersectionObserver) return;
      var targets = document.querySelectorAll('.t-title, .t-text, .t-descr, .tn-atom__text, .t396__elem, .t-img, .t-btn');
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('kp-revealed'); obs.unobserve(e.target); }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      targets.forEach(function (el, i) {
        el.classList.add('kp-reveal');
        el.style.setProperty('--kp-delay', (i % 6) * 70 + 'ms');
        obs.observe(el);
      });
    }
  };

  /* Parallax */
  var parallax = {
    els: [],
    init: function () {
      document.querySelectorAll('.t396__carrier').forEach(function (el) {
        var bg = el.style.backgroundImage || getComputedStyle(el).backgroundImage;
        if (bg && bg !== 'none') parallax.els.push(el);
      });
      if (this.els.length) window.addEventListener('scroll', this.update.bind(this), { passive: true });
      this.update();
    },
    update: function () {
      var scrollY = window.scrollY;
      this.els.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        el.style.backgroundPositionY = 'calc(50% + ' + (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.12 + 'px)';
      });
    }
  };

  function init() {
    cursor.init();
    setTimeout(function () { reveal.init(); parallax.init(); }, 200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
