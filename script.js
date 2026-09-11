/* =============================================
   FLORAR CROCHÉS — script.js (v3)
   ============================================= */

/* ---- Filtro por coleção ---- */
(function () {
  var botoes = document.querySelectorAll('.filtro-btn');
  var blocos = document.querySelectorAll('.colecao-bloco');
  if (!botoes.length) return;

  botoes.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var alvo = btn.dataset.filtro;
      botoes.forEach(function (b) { b.classList.remove('ativo'); });
      btn.classList.add('ativo');

      blocos.forEach(function (bloco) {
        if (alvo === 'todas' || bloco.dataset.colecao === alvo) {
          bloco.classList.remove('colecao-bloco--oculto');
        } else {
          bloco.classList.add('colecao-bloco--oculto');
        }
      });
    });
  });
})();

/* ---- Lightbox (amplia a arte do card) ---- */
(function () {
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lightbox-img');
  var fechar = document.querySelector('.lightbox__fechar');
  if (!lb || !lbImg) return;

  function abrir(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lb.classList.add('aberto');
    document.body.style.overflow = 'hidden';
    fechar.focus();
  }
  function fecharLb() {
    lb.classList.remove('aberto');
    lbImg.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.card__art').forEach(function (botao) {
    botao.addEventListener('click', function () {
      var img = botao.querySelector('img');
      abrir(img.currentSrc || img.src, img.alt);
    });
  });

  fechar.addEventListener('click', fecharLb);
  lb.addEventListener('click', function (e) { if (e.target === lb) fecharLb(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lb.classList.contains('aberto')) fecharLb();
  });
})();

/* ---- Menu mobile ---- */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var aberto = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!aberto));
    nav.classList.toggle('aberto');
  });
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('aberto');
    });
  });
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('aberto');
    }
  });
})();
