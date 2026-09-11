# Florar Crochés — Landing Page

Landing page estática (HTML + CSS + JS vanilla, sem build) da **Florar Crochés** — bolsas de crochê feitas à mão, em Braga (Portugal). A conversão acontece pelo WhatsApp.

## Estrutura

| Arquivo | Uso |
|---|---|
| `index.html` + `style.css` + `script.js` + `assets/` | Site para **publicar** (GitHub Pages / Vercel). Arquivos separados = melhor performance. |
| `florar-croches-standalone.html` | Versão de **arquivo único** (CSS, JS, imagens e fonte embutidos). Abre por duplo-clique / AirDrop em qualquer dispositivo, sem servidor. |

## Publicar no GitHub Pages

1. Suba este repositório para o GitHub.
2. **Settings → Pages → Build and deployment → Source: _Deploy from a branch_**, branch `main`, pasta `/ (root)`.
3. O site fica em `https://<usuario>.github.io/<repo>/`.

O arquivo `.nojekyll` garante que o GitHub Pages sirva os arquivos como estão.

## Rastreamento (Google Ads)

Os botões de WhatsApp disparam evento de conversão `gtag`. Substituir os placeholders `AW-SEU_ID_AQUI` e `SEU_LABEL_AQUI` pelos valores reais da conta Google Ads.

## Contato oficial

WhatsApp / Telefone: **+351 912 703 380** — `https://wa.me/351912703380`
