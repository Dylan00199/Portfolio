/**
 * nav.js
 * Handles: sticky header background state on scroll, mobile menu open/close,
 * and active-link highlighting as the user scrolls through sections.
 */
(function () {
  'use strict';

  function initNav() {
    var header = document.getElementById('site-header');
    var toggle = document.getElementById('nav-toggle');
    var mobileMenu = document.getElementById('mobile-menu');
    var navLinks = document.querySelectorAll('[data-nav-link]');
    var sections = document.querySelectorAll('main section[id], footer[id]');

    if (!header) return;

    /* --- Header background once the page has scrolled a little --- */
    function onScroll() {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* --- Mobile menu --- */
    function closeMenu() {
      if (!toggle || !mobileMenu) return;
      toggle.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('data-state', 'closed');
      toggle.classList.remove('is-open');
    }

    function openMenu() {
      toggle.setAttribute('aria-expanded', 'true');
      mobileMenu.setAttribute('data-state', 'open');
      toggle.classList.add('is-open');
    }

    if (toggle && mobileMenu) {
      toggle.addEventListener('click', function () {
        var isOpen = toggle.getAttribute('aria-expanded') === 'true';
        if (isOpen) {
          closeMenu();
        } else {
          openMenu();
        }
      });

      mobileMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeMenu);
      });

      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') closeMenu();
      });

      document.addEventListener('click', function (event) {
        var isOpen = mobileMenu.getAttribute('data-state') === 'open';
        var clickedInsideMenu = mobileMenu.contains(event.target);
        var clickedToggle = toggle.contains(event.target);
        if (isOpen && !clickedInsideMenu && !clickedToggle) closeMenu();
      });
    }

    /* --- Active section -> active nav link --- */
    if ('IntersectionObserver' in window && sections.length) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var id = entry.target.getAttribute('id');
            navLinks.forEach(function (link) {
              var isMatch = link.getAttribute('href') === '#' + id;
              link.classList.toggle('is-active', isMatch);
              if (isMatch) {
                link.setAttribute('aria-current', 'true');
              } else {
                link.removeAttribute('aria-current');
              }
            });
          });
        },
        { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
      );

      sections.forEach(function (section) {
        observer.observe(section);
      });
    }
  }

  window.Portfolio = window.Portfolio || {};
  window.Portfolio.nav = { init: initNav };
})();
