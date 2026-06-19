/**
 * utils.js
 * Small, focused helpers that don't deserve their own file:
 * - setFooterYear: keeps the copyright year current automatically
 * - initImageFallback: shows a styled placeholder if a real image is missing
 * - initBackToTop: shows/hides and wires the floating back-to-top button
 */
(function () {
  'use strict';

  function setFooterYear() {
    var el = document.getElementById('current-year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  function initImageFallback() {
    document.querySelectorAll('[data-img-fallback]').forEach(function (img) {
      img.addEventListener(
        'error',
        function () {
          var wrapper = img.closest('[data-img-wrapper]');
          if (wrapper) wrapper.classList.add('img-fallback-active');
        },
        { once: true }
      );
    });
  }

  function initBackToTop() {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;

    function onScroll() {
      btn.classList.toggle('is-visible', window.scrollY > 600);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.Portfolio = window.Portfolio || {};
  window.Portfolio.utils = {
    setFooterYear: setFooterYear,
    initImageFallback: initImageFallback,
    initBackToTop: initBackToTop,
  };
})();
