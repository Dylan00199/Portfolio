/**
 * scrollReveal.js
 * Fades + slides elements with [data-reveal] into view as they enter the
 * viewport. Elements sharing a [data-reveal-group] ancestor are staggered
 * automatically; an explicit data-reveal-delay (ms) always wins.
 */
(function () {
  'use strict';

  function initScrollReveal() {
    var items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;

    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    items.forEach(function (el) {
      var explicitDelay = el.getAttribute('data-reveal-delay');
      if (explicitDelay !== null) {
        el.style.setProperty('--reveal-delay', explicitDelay + 'ms');
      }
    });

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  window.Portfolio = window.Portfolio || {};
  window.Portfolio.scrollReveal = { init: initScrollReveal };
})();
