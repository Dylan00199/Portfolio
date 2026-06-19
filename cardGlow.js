/**
 * cardGlow.js
 * Tracks pointer position over .glow-card elements and exposes it as CSS
 * custom properties (--x, --y) so the card's radial-gradient spotlight
 * (defined in style.css) follows the cursor. Skipped on touch devices and
 * when the user prefers reduced motion.
 */
(function () {
  'use strict';

  function initCardGlow() {
    var cards = document.querySelectorAll('.glow-card');
    if (!cards.length) return;

    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (prefersReducedMotion || isTouchDevice) return;

    cards.forEach(function (card) {
      card.addEventListener('pointermove', function (event) {
        var rect = card.getBoundingClientRect();
        var x = ((event.clientX - rect.left) / rect.width) * 100;
        var y = ((event.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--x', x + '%');
        card.style.setProperty('--y', y + '%');
      });

      card.addEventListener('pointerleave', function () {
        card.style.setProperty('--x', '50%');
        card.style.setProperty('--y', '50%');
      });
    });
  }

  window.Portfolio = window.Portfolio || {};
  window.Portfolio.cardGlow = { init: initCardGlow };
})();
