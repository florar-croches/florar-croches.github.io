/* =============================================
   FLORAR CROCHÉS — script.js
   ============================================= */

/* ---- Filtro de categorias ---- */
(function () {
  var btnsFiltro = document.querySelectorAll('.filtro-btn');
  var cards = document.querySelectorAll('.produto-card');

  btnsFiltro.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filtro = btn.dataset.filtro;

      btnsFiltro.forEach(function (b) { b.classList.remove('filtro-btn--active'); });
      btn.classList.add('filtro-btn--active');

      cards.forEach(function (card) {
        if (filtro === 'todas' || card.dataset.categoria === filtro) {
          card.classList.remove('produto-card--hidden');
        } else {
          card.classList.add('produto-card--hidden');
        }
      });
    });
  });
})();

/* ---- Menu mobile ---- */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('nav--open');
  });

  /* Fechar ao clicar num link do menu */
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('nav--open');
    });
  });

  /* Fechar ao clicar fora */
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('nav--open');
    }
  });
})();

/* ---- Scroll suave para âncoras (fallback para browsers sem scroll-behavior) ---- */
(function () {
  if ('scrollBehavior' in document.documentElement.style) return;
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
