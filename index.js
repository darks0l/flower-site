const markets = [
  {
    category: "Climate",
    volume: "$182K volume",
    question: "Will NYC record its hottest September on record?",
    chance: 64,
    yes: 64,
    no: 36,
    trend: [24, 31, 28, 38, 42, 47, 41, 53, 51, 58],
  },
  {
    category: "Technology",
    volume: "$96K volume",
    question: "Will a frontier AI model ship before Q4 ends?",
    chance: 57,
    yes: 57,
    no: 43,
    trend: [19, 22, 26, 30, 35, 33, 39, 46, 52, 57],
  },
  {
    category: "Culture",
    volume: "$74K volume",
    question: "Will a creator token break into mainstream finance coverage this month?",
    chance: 41,
    yes: 41,
    no: 59,
    trend: [12, 18, 26, 29, 34, 38, 31, 35, 40, 41],
  },
];

const pillars = [
  {
    title: "Bloom-driven markets",
    copy:
      "Fresh markets open around culture, tech, climate, and crypto narratives that actually move attention.",
  },
  {
    title: "Readable probability",
    copy:
      "Every card is designed to feel intuitive on mobile: one question, one trend, two outcomes, no clutter.",
  },
  {
    title: "Soft conviction",
    copy:
      "flowers is serious about prediction design without looking like a hard-edged exchange terminal.",
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function trendPath(points) {
  const width = 320;
  const height = 110;
  const max = 100;

  return points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * width;
      const y = height - (point / max) * height;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}

function renderMarket(market) {
  const last = market.trend[market.trend.length - 1];

  return `
    <article class="market-card">
      <div class="market-top">
        <div class="meta-left">
          <span class="tiny-icon">${market.category.slice(0, 1)}</span>
          <span>${escapeHtml(market.category)}</span>
        </div>
        <span>${escapeHtml(market.volume)}</span>
      </div>
      <h3>${escapeHtml(market.question)}</h3>
      <div class="chance-row">
        <strong>${market.chance}%</strong>
        <span>current illustrative chance</span>
      </div>
      <div class="chart-shell">
        <svg viewBox="0 0 320 110" class="chart" role="img" aria-label="${escapeHtml(market.question)} trend line">
          <path class="grid-line" d="M 0 92 L 320 92"></path>
          <path class="trend-line" d="${trendPath(market.trend)}"></path>
          <circle class="trend-dot" cx="320" cy="${(110 - (last / 100) * 110).toFixed(2)}" r="6"></circle>
        </svg>
        <div class="chart-foot">
          <span>10-point illustrative trend</span>
          <span>latest ${market.chance}%</span>
        </div>
      </div>
      <div class="outcomes">
        <button class="outcome yes" type="button">
          <span>Yes</span>
          <strong>${market.yes}c</strong>
        </button>
        <button class="outcome no" type="button">
          <span>No</span>
          <strong>${market.no}c</strong>
        </button>
      </div>
    </article>
  `;
}

function renderPillar(pillar) {
  return `
    <article class="pillar">
      <h3>${escapeHtml(pillar.title)}</h3>
      <p>${escapeHtml(pillar.copy)}</p>
    </article>
  `;
}

function page(url) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>flowers | prediction market</title>
    <meta
      name="description"
      content="flowers is a soft-glass prediction market brand for culture, climate, technology, and crypto narratives."
    />
    <meta property="og:title" content="flowers | prediction market" />
    <meta property="og:description" content="A mobile-first prediction market with soft bloom lighting and readable market cards." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escapeHtml(url)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="flowers | prediction market" />
    <meta name="twitter:description" content="A mobile-first prediction market with soft bloom lighting and readable market cards." />
    <link rel="canonical" href="${escapeHtml(url)}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <style>
      :root {
        --bg: #041d2c;
        --bg-2: #072537;
        --panel: rgba(5, 20, 33, 0.76);
        --panel-2: rgba(8, 31, 45, 0.88);
        --line: rgba(121, 163, 188, 0.18);
        --text: #f3f6fb;
        --muted: rgba(218, 228, 239, 0.68);
        --muted-2: rgba(196, 214, 226, 0.52);
        --aqua: #64d6ef;
        --aqua-2: #59c5db;
        --coral: #ff7f76;
        --violet: #1a1636;
        --button: rgba(255, 255, 255, 0.035);
        --shadow: rgba(0, 0, 0, 0.28);
      }

      * { box-sizing: border-box; }

      html {
        background: linear-gradient(180deg, #041b29 0%, #08263a 100%);
        scroll-behavior: smooth;
      }

      body {
        margin: 0;
        min-height: 100vh;
        color: var(--text);
        font-family: "Manrope", system-ui, sans-serif;
        background:
          radial-gradient(circle at 20% 10%, rgba(70, 144, 180, 0.16), transparent 24rem),
          radial-gradient(circle at 82% 24%, rgba(86, 220, 219, 0.16), transparent 18rem),
          linear-gradient(180deg, #051a29 0%, #072335 48%, #041d2c 100%);
      }

      body::before {
        content: "";
        position: fixed;
        inset: 0;
        pointer-events: none;
        background:
          radial-gradient(circle at 74% 34%, rgba(78, 214, 221, 0.18), transparent 18rem),
          radial-gradient(circle at 88% 58%, rgba(78, 214, 221, 0.12), transparent 20rem);
        filter: blur(20px);
        opacity: 0.9;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      button {
        font: inherit;
      }

      .page {
        position: relative;
        width: min(1180px, calc(100% - 28px));
        margin: 0 auto;
        padding: 18px 0 64px;
      }

      .mobile-frame {
        position: relative;
        max-width: 620px;
        margin: 0 auto;
      }

      .hero-copy {
        margin: 0 0 18px;
        padding: 8px 6px 0;
      }

      .hero-copy h1 {
        margin: 0;
        font-family: "Geist", system-ui, sans-serif;
        font-size: clamp(3rem, 9vw, 5.5rem);
        line-height: 0.92;
        letter-spacing: -0.06em;
        font-weight: 600;
      }

      .hero-copy p {
        margin: 14px 0 0;
        color: var(--muted);
        font-size: 1rem;
        line-height: 1.65;
        max-width: 32rem;
      }

      .browser-pill {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        padding: 16px 18px;
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 28px;
        background: rgba(255,255,255,0.04);
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
        backdrop-filter: blur(14px);
        margin-bottom: 18px;
      }

      .brandbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        padding: 14px 16px;
        border-radius: 26px;
        border: 1px solid rgba(255,255,255,0.08);
        background: linear-gradient(180deg, rgba(14, 16, 42, 0.84), rgba(10, 16, 31, 0.92));
        box-shadow: 0 18px 40px var(--shadow);
      }

      .brand-left {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .flower-mark {
        position: relative;
        width: 26px;
        height: 26px;
      }

      .petal {
        position: absolute;
        width: 12px;
        height: 12px;
        border-radius: 999px;
        background: #f2f5fb;
      }

      .petal.one { top: 0; left: 7px; }
      .petal.two { top: 7px; left: 0; }
      .petal.three { top: 7px; right: 0; }
      .petal.four { bottom: 0; left: 7px; }
      .petal.core {
        width: 6px;
        height: 6px;
        top: 10px;
        left: 10px;
        background: var(--coral);
      }

      .brand-name {
        font-family: "Geist", system-ui, sans-serif;
        font-size: 2rem;
        line-height: 1;
        font-weight: 700;
        letter-spacing: -0.06em;
      }

      .menu-button {
        width: 54px;
        height: 54px;
        border: 0;
        border-radius: 18px;
        color: var(--text);
        background: rgba(255,255,255,0.05);
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
      }

      .menu-button span,
      .menu-button span::before,
      .menu-button span::after {
        display: block;
        width: 18px;
        height: 2px;
        margin: 0 auto;
        border-radius: 999px;
        background: currentColor;
        content: "";
      }

      .menu-button span::before { transform: translateY(-6px); }
      .menu-button span::after { transform: translateY(4px); }

      .markets {
        display: grid;
        gap: 16px;
        margin-top: 16px;
      }

      .market-card {
        position: relative;
        overflow: hidden;
        padding: 18px 18px 18px;
        border-radius: 34px;
        border: 1px solid var(--line);
        background:
          radial-gradient(circle at 82% 78%, rgba(77, 222, 219, 0.15), transparent 9rem),
          linear-gradient(180deg, rgba(6, 24, 36, 0.94), rgba(8, 26, 39, 0.9));
        box-shadow: 0 22px 48px var(--shadow), inset 0 1px 0 rgba(255,255,255,0.05);
      }

      .market-card::after {
        content: "";
        position: absolute;
        width: 220px;
        height: 220px;
        right: -60px;
        bottom: -80px;
        border-radius: 999px;
        border: 1px solid rgba(154, 223, 236, 0.1);
        opacity: 0.65;
      }

      .market-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        color: var(--muted-2);
        text-transform: uppercase;
        letter-spacing: 0.12em;
        font-size: 0.75rem;
      }

      .meta-left {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .tiny-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.08);
        font-size: 0.7rem;
      }

      .market-card h3 {
        margin: 28px 0 24px;
        font-family: "Geist", system-ui, sans-serif;
        font-size: clamp(2rem, 6vw, 3.2rem);
        line-height: 1.08;
        letter-spacing: -0.05em;
        font-weight: 500;
        max-width: 13ch;
      }

      .chance-row {
        display: flex;
        align-items: baseline;
        gap: 10px;
        margin-bottom: 14px;
      }

      .chance-row strong {
        font-family: "Geist", system-ui, sans-serif;
        font-size: clamp(4rem, 10vw, 5rem);
        line-height: 0.9;
        letter-spacing: -0.08em;
        font-weight: 700;
        color: #dffaf8;
      }

      .chance-row span {
        color: var(--muted);
        font-size: 0.98rem;
      }

      .chart-shell {
        margin-top: 8px;
      }

      .chart {
        width: 100%;
        height: auto;
        display: block;
      }

      .grid-line {
        stroke: rgba(255,255,255,0.12);
        stroke-width: 1;
      }

      .trend-line {
        fill: none;
        stroke: var(--aqua);
        stroke-width: 4;
        stroke-linejoin: round;
        stroke-linecap: round;
      }

      .trend-dot {
        fill: var(--coral);
        stroke: rgba(255,255,255,0.92);
        stroke-width: 3;
      }

      .chart-foot {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-top: 8px;
        color: var(--muted-2);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 0.72rem;
      }

      .outcomes {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        margin-top: 18px;
      }

      .outcome {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 58px;
        padding: 0 18px;
        border: 1px solid rgba(255,255,255,0.09);
        border-radius: 18px;
        color: var(--text);
        background: var(--button);
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);
      }

      .outcome strong {
        font-size: 1.12rem;
      }

      .yes:hover,
      .no:hover {
        border-color: rgba(100, 214, 239, 0.36);
      }

      .info {
        display: grid;
        gap: 16px;
        margin-top: 28px;
      }

      .pillars,
      .cta {
        padding: 22px;
        border-radius: 30px;
        border: 1px solid var(--line);
        background: linear-gradient(180deg, rgba(9, 26, 38, 0.82), rgba(6, 20, 30, 0.92));
        box-shadow: 0 20px 42px var(--shadow);
      }

      .section-kicker {
        margin: 0 0 10px;
        color: var(--muted-2);
        text-transform: uppercase;
        letter-spacing: 0.12em;
        font-size: 0.76rem;
      }

      .pillars h2,
      .cta h2 {
        margin: 0;
        font-family: "Geist", system-ui, sans-serif;
        font-size: clamp(2rem, 5vw, 2.9rem);
        line-height: 1.05;
        letter-spacing: -0.05em;
        font-weight: 600;
      }

      .pillars-grid {
        display: grid;
        gap: 14px;
        margin-top: 20px;
      }

      .pillar {
        padding: 16px 18px;
        border-radius: 22px;
        background: rgba(255,255,255,0.03);
        border: 1px solid rgba(255,255,255,0.06);
      }

      .pillar h3 {
        margin: 0 0 8px;
        font-family: "Geist", system-ui, sans-serif;
        font-size: 1.2rem;
        letter-spacing: -0.03em;
      }

      .pillar p,
      .cta p {
        margin: 0;
        color: var(--muted);
        line-height: 1.7;
      }

      .cta-actions {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        margin-top: 18px;
      }

      .cta-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 54px;
        padding: 0 18px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(255,255,255,0.05);
        color: var(--text);
      }

      .cta-button.primary {
        background: linear-gradient(180deg, rgba(107, 224, 241, 0.95), rgba(79, 189, 208, 0.92));
        color: #082130;
        border-color: transparent;
        font-weight: 700;
      }

      @media (min-width: 960px) {
        .page {
          width: min(1260px, calc(100% - 42px));
          padding-top: 26px;
        }

        .layout {
          display: grid;
          grid-template-columns: minmax(360px, 620px) minmax(300px, 1fr);
          gap: 22px;
          align-items: start;
        }

        .mobile-frame {
          margin: 0;
        }

        .info {
          margin-top: 0;
          position: sticky;
          top: 20px;
        }
      }

      @media (max-width: 720px) {
        .page {
          width: min(100% - 18px, 100%);
        }

        .brand-name {
          font-size: 1.9rem;
        }

        .market-card {
          border-radius: 30px;
        }

        .market-card h3 {
          max-width: 100%;
        }
      }
    </style>
  </head>
  <body>
    <main class="page">
      <div class="layout">
        <section class="mobile-frame">
          <div class="hero-copy">
            <h1>See the world in bloom.</h1>
            <p>
              flowers is a prediction market brand for people who want probability to feel elegant,
              readable, and alive on mobile.
            </p>
          </div>

          <div class="browser-pill">
            <span>flowers.chatgpt.site</span>
            <span>...</span>
          </div>

          <div class="brandbar">
            <div class="brand-left">
              <div class="flower-mark" aria-hidden="true">
                <span class="petal one"></span>
                <span class="petal two"></span>
                <span class="petal three"></span>
                <span class="petal four"></span>
                <span class="petal core"></span>
              </div>
              <span class="brand-name">flowers</span>
            </div>
            <button class="menu-button" type="button" aria-label="Open menu">
              <span></span>
            </button>
          </div>

          <div class="markets">
            ${markets.map(renderMarket).join("")}
          </div>
        </section>

        <aside class="info">
          <section class="pillars">
            <p class="section-kicker">Brand direction</p>
            <h2>Soft-glass prediction markets with bloom energy.</h2>
            <div class="pillars-grid">
              ${pillars.map(renderPillar).join("")}
            </div>
          </section>

          <section class="cta">
            <p class="section-kicker">Launch concept</p>
            <h2>Built for people who price the future all day on their phone.</h2>
            <p>
              The homepage leans into confidence without feeling cold: deep ocean background,
              violet brandbar, airy typography, clean market cards, and a subtle aqua glow that
              makes each probability feel alive.
            </p>
            <div class="cta-actions">
              <a class="cta-button primary" href="#top">Explore markets</a>
              <a class="cta-button" href="https://x.com/Meta_Captain_" target="_blank" rel="noreferrer">Brand social</a>
            </div>
          </section>
        </aside>
      </div>
    </main>
  </body>
</html>`;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    return new Response(page(url.toString()), {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300",
      },
    });
  },
};
