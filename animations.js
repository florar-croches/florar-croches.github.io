/* =============================================
   FLORAR CROCHÉS — animations.js
   Animações de entrada com Motion (motion@12.41.0).

   Importado via CDN ESM para funcionar no GitHub Pages
   (o node_modules não é publicado). A versão é fixada na
   mesma instalada localmente em package.json. Para trocar
   por um bundler (Vite) no futuro, basta importar de "motion".
   ============================================= */
import { animate, inView, stagger } from "https://cdn.jsdelivr.net/npm/motion@12.41.0/+esm";

/* Sem .anim (ex.: prefers-reduced-motion), a CSS mantém tudo
   visível e não animamos nada. */
if (document.documentElement.classList.contains("anim")) {
  const ease = [0.22, 1, 0.36, 1];
  const sobe = (de = 24) => ["translateY(" + de + "px)", "translateY(0)"];

  /* ---- Hero: entra ao carregar, em cascata ---- */
  animate(
    ".hero__titulo, .hero__sub, .hero__ctas",
    { opacity: [0, 1], transform: sobe(24) },
    { duration: 0.7, delay: stagger(0.12), ease }
  );

  /* ---- Títulos de secção: revelam ao rolar ---- */
  inView(
    ".section-titulo, .colecao-bloco__titulo",
    (info) => {
      animate(
        info.target,
        { opacity: [0, 1], transform: sobe(24) },
        { duration: 0.6, ease }
      );
    },
    { amount: 0.4 }
  );

  /* ---- Cards: revelam em cascata por grelha ---- */
  const revelarCards = (cards) => {
    if (!cards.length) return;
    animate(
      cards,
      { opacity: [0, 1], transform: sobe(28) },
      { duration: 0.5, delay: stagger(0.08), ease }
    );
  };
  inView(
    ".grid",
    (info) => revelarCards(info.target.querySelectorAll(".card")),
    { amount: 0.15 }
  );

  /* ---- Rede de segurança para o filtro ----
     Ao trocar de coleção, garante que os cards do bloco visível
     não fiquem invisíveis caso o inView já não dispare. */
  document.querySelectorAll(".filtro-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      requestAnimationFrame(() => {
        document
          .querySelectorAll(".colecao-bloco:not(.colecao-bloco--oculto) .card")
          .forEach((card) => {
            if (getComputedStyle(card).opacity === "0") {
              animate(
                card,
                { opacity: 1, transform: "translateY(0)" },
                { duration: 0.4, ease }
              );
            }
          });
      });
    });
  });
}
