/**
 * heroType.js
 * Cycles the word(s) shown after "$ currently building" in the hero section,
 * giving a small terminal-prompt flourish that ties into the developer brand.
 */
(function () {
  'use strict';

  var ROLES = ['back-end systems', 'full-stack web apps', 'developer tools'];
  var ROTATE_INTERVAL_MS = 2600;
  var SWAP_TRANSITION_MS = 280;

  function initRoleRotator() {
    var el = document.querySelector('[data-role-rotator]');
    if (!el) return;

    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.textContent = ROLES[0];
    if (prefersReducedMotion) return;

    var index = 0;
    setInterval(function () {
      index = (index + 1) % ROLES.length;
      el.classList.add('is-swapping');
      setTimeout(function () {
        el.textContent = ROLES[index];
        el.classList.remove('is-swapping');
      }, SWAP_TRANSITION_MS);
    }, ROTATE_INTERVAL_MS);
  }

  window.Portfolio = window.Portfolio || {};
  window.Portfolio.heroType = { init: initRoleRotator };
})();
