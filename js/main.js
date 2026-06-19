/**
 * main.js
 * Entry point. Loaded last (after nav.js, scrollReveal.js, cardGlow.js,
 * heroType.js, utils.js) and simply initializes each module once the DOM
 * is ready. Keeping this file tiny makes it obvious where everything starts.
 */
document.addEventListener('DOMContentLoaded', function () {
  var Portfolio = window.Portfolio || {};

  if (Portfolio.nav) Portfolio.nav.init();
  if (Portfolio.scrollReveal) Portfolio.scrollReveal.init();
  if (Portfolio.cardGlow) Portfolio.cardGlow.init();
  if (Portfolio.heroType) Portfolio.heroType.init();

  if (Portfolio.utils) {
    Portfolio.utils.setFooterYear();
    Portfolio.utils.initImageFallback();
    Portfolio.utils.initBackToTop();
  }
});
