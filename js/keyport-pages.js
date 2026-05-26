/*!
 * KEYPORT — Page Animations (all pages except main)
 */
(function () {
  'use strict';

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
    setTimeout(function () { reveal.init(); parallax.init(); }, 200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
