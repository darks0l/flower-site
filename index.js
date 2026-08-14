const page = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>flower | prediction market</title>
    <meta
      name="description"
      content="flower is a mobile-first prediction market brand with soft-glass design, category worlds, and Privy-ready onboarding."
    />
    <meta property="og:title" content="flower | prediction market" />
    <meta
      property="og:description"
      content="A bloom-lit prediction market shell with category worlds, clean onboarding, and no terminal ugliness."
    />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="flower | prediction market" />
    <meta
      name="twitter:description"
      content="A bloom-lit prediction market shell with category worlds, clean onboarding, and no terminal ugliness."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <style>
      :root {
        --bg: #06121f;
        --bg-2: #0a1c2e;
        --panel: rgba(7, 16, 30, 0.8);
        --panel-2: rgba(10, 22, 38, 0.92);
        --line: rgba(161, 198, 223, 0.12);
        --text: #f6f8fc;
        --muted: rgba(221, 229, 239, 0.72);
        --muted-2: rgba(188, 205, 220, 0.54);
        --teal: #8de7d9;
        --teal-2: #58d3c5;
        --rose: #ff8e97;
        --gold: #ffd887;
        --ink: #0b1728;
        --shadow: rgba(0, 0, 0, 0.32);
      }

      * { box-sizing: border-box; }

      html {
        background: linear-gradient(180deg, #05111d 0%, #081a2b 100%);
        scroll-behavior: smooth;
      }

      body {
        margin: 0;
        min-height: 100vh;
        color: var(--text);
        font-family: "Manrope", system-ui, sans-serif;
        background:
          radial-gradient(circle at 16% 12%, rgba(110, 196, 165, 0.16), transparent 26rem),
          radial-gradient(circle at 82% 18%, rgba(103, 171, 255, 0.12), transparent 24rem),
          radial-gradient(circle at 70% 72%, rgba(255, 152, 163, 0.12), transparent 20rem),
          linear-gradient(180deg, #05111d 0%, #08192a 54%, #071522 100%);
      }

      body::before {
        content: "";
        position: fixed;
        inset: 0;
        pointer-events: none;
        background-image:
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
        background-size: 36px 36px;
        mask-image: radial-gradient(circle at center, black 30%, transparent 90%);
        opacity: 0.22;
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
        width: min(1240px, calc(100% - 28px));
        margin: 0 auto;
        padding: 20px 0 72px;
      }

      .topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 18px;
        padding: 12px 14px;
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 26px;
        background: rgba(255,255,255,0.04);
        backdrop-filter: blur(16px);
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.06);
      }

      .brand-left,
      .nav,
      .status-chip,
      .auth-row,
      .statline,
      .cluster-top,
      .chip-row,
      .section-head,
      .panel-foot {
        display: flex;
        align-items: center;
      }

      .brand-left {
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
        background: #f8fbff;
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
        background: var(--rose);
      }

      .brand-name,
      h1,
      h2,
      h3,
      .big-number,
      .browser-pill {
        font-family: "Instrument Sans", system-ui, sans-serif;
      }

      .brand-name {
        font-size: 1.65rem;
        font-weight: 700;
        letter-spacing: -0.06em;
      }

      .nav {
        gap: 10px;
        flex-wrap: wrap;
        justify-content: center;
      }

      .nav a,
      .status-chip,
      .mini-chip,
      .cluster-status,
      .beta-pill {
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(255,255,255,0.04);
      }

      .nav a,
      .status-chip {
        min-height: 42px;
        padding: 0 14px;
        border-radius: 999px;
        color: var(--muted);
      }

      .status-chip {
        gap: 10px;
        justify-content: center;
      }

      .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: var(--teal);
        box-shadow: 0 0 16px rgba(141, 231, 217, 0.85);
      }

      .layout {
        display: grid;
        grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
        gap: 18px;
      }

      .hero,
      .panel,
      .cluster,
      .onboard-card {
        position: relative;
        overflow: hidden;
        border: 1px solid var(--line);
        border-radius: 34px;
        background: linear-gradient(180deg, rgba(7, 16, 30, 0.92), rgba(8, 20, 34, 0.86));
        box-shadow: 0 28px 64px var(--shadow), inset 0 1px 0 rgba(255,255,255,0.05);
      }

      .hero {
        padding: 28px;
        min-height: 420px;
        background:
          radial-gradient(circle at 76% 20%, rgba(111, 224, 207, 0.18), transparent 16rem),
          radial-gradient(circle at 80% 74%, rgba(252, 142, 158, 0.12), transparent 15rem),
          linear-gradient(180deg, rgba(8, 18, 33, 0.96), rgba(7, 17, 29, 0.9));
      }

      .hero::after,
      .panel::after,
      .cluster::after,
      .onboard-card::after {
        content: "";
        position: absolute;
        inset: auto -80px -100px auto;
        width: 240px;
        height: 240px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.06);
        opacity: 0.7;
      }

      .browser-pill {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        min-height: 44px;
        padding: 0 16px;
        border-radius: 999px;
        color: var(--muted);
        letter-spacing: -0.03em;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.08);
      }

      h1 {
        margin: 18px 0 16px;
        max-width: 11ch;
        font-size: clamp(3.4rem, 8vw, 6.4rem);
        line-height: 0.9;
        letter-spacing: -0.08em;
        font-weight: 700;
      }

      .hero p,
      .panel p,
      .cluster p,
      .auth-copy,
      .subtle {
        color: var(--muted);
        line-height: 1.7;
      }

      .hero p {
        max-width: 40rem;
        font-size: 1.02rem;
      }

      .hero-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 240px;
        gap: 18px;
        margin-top: 28px;
      }

      .mini-panel,
      .signal-card {
        padding: 18px;
        border-radius: 26px;
        background: rgba(255,255,255,0.035);
        border: 1px solid rgba(255,255,255,0.07);
      }

      .mini-kicker,
      .eyebrow {
        margin: 0 0 10px;
        color: var(--muted-2);
        text-transform: uppercase;
        letter-spacing: 0.14em;
        font-size: 0.72rem;
      }

      .mini-panel h2,
      .panel h2,
      .onboard-card h2 {
        margin: 0;
        font-size: clamp(1.9rem, 4vw, 3rem);
        line-height: 0.96;
        letter-spacing: -0.06em;
        font-weight: 700;
      }

      .mini-panel p {
        margin: 12px 0 0;
      }

      .signal-card {
        display: grid;
        gap: 14px;
      }

      .big-number {
        font-size: 4rem;
        line-height: 0.9;
        letter-spacing: -0.08em;
        font-weight: 700;
      }

      .statline {
        justify-content: space-between;
        gap: 10px;
        color: var(--muted-2);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 0.72rem;
      }

      .curve {
        width: 100%;
        height: 86px;
      }

      .curve path:first-child {
        fill: none;
        stroke: rgba(255,255,255,0.1);
        stroke-width: 1;
      }

      .curve path:last-child {
        fill: none;
        stroke: var(--teal);
        stroke-width: 4;
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .section {
        margin-top: 18px;
      }

      .section-head {
        justify-content: space-between;
        gap: 14px;
        margin-bottom: 12px;
      }

      .section-head h2 {
        margin: 0;
        font-size: clamp(1.6rem, 3vw, 2.2rem);
        letter-spacing: -0.05em;
      }

      .chip-row {
        gap: 10px;
        flex-wrap: wrap;
      }

      .mini-chip,
      .beta-pill,
      .cluster-status {
        min-height: 34px;
        padding: 0 12px;
        border-radius: 999px;
        color: var(--muted);
        font-size: 0.82rem;
      }

      .cluster-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
      }

      .cluster {
        padding: 20px;
        min-height: 218px;
      }

      .cluster-top,
      .panel-foot {
        justify-content: space-between;
        gap: 12px;
      }

      .cluster-top {
        margin-bottom: 18px;
      }

      .cluster-icon {
        width: 42px;
        height: 42px;
        border-radius: 14px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.08);
        color: var(--gold);
        font-size: 1rem;
      }

      .cluster h3 {
        margin: 0;
        font-size: 2rem;
        line-height: 0.98;
        letter-spacing: -0.05em;
      }

      .cluster p {
        margin: 12px 0 18px;
      }

      .cluster-list {
        display: grid;
        gap: 8px;
        color: var(--text);
      }

      .cluster-list span::before {
        content: "• ";
        color: var(--teal);
      }

      .side {
        display: grid;
        gap: 18px;
        align-content: start;
      }

      .panel,
      .onboard-card {
        padding: 24px;
      }

      .panel-grid {
        display: grid;
        gap: 12px;
        margin-top: 18px;
      }

      .panel-tile {
        padding: 16px 16px 18px;
        border-radius: 24px;
        background: rgba(255,255,255,0.035);
        border: 1px solid rgba(255,255,255,0.07);
      }

      .panel-tile h3 {
        margin: 0 0 8px;
        font-size: 1.15rem;
        letter-spacing: -0.03em;
      }

      .panel-tile p {
        margin: 0;
      }

      .auth-row {
        gap: 12px;
        flex-wrap: wrap;
        margin-top: 18px;
      }

      .auth-button,
      .ghost-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        min-height: 54px;
        padding: 0 18px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.08);
      }

      .auth-button {
        background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(234, 240, 249, 0.94));
        color: var(--ink);
        font-weight: 700;
      }

      .ghost-button {
        background: rgba(255,255,255,0.045);
        color: var(--text);
      }

      .button-icon {
        width: 22px;
        height: 22px;
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 0.82rem;
        font-weight: 800;
        background: rgba(8, 22, 39, 0.08);
      }

      .onboard-card {
        background:
          radial-gradient(circle at 86% 14%, rgba(255, 213, 140, 0.18), transparent 12rem),
          linear-gradient(180deg, rgba(10, 21, 35, 0.96), rgba(9, 17, 28, 0.9));
      }

      .steps {
        display: grid;
        gap: 12px;
        margin-top: 18px;
      }

      .step {
        display: grid;
        grid-template-columns: 34px 1fr;
        gap: 12px;
        align-items: start;
      }

      .step-number {
        width: 34px;
        height: 34px;
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--ink);
        font-weight: 800;
        background: linear-gradient(180deg, var(--gold), #f0c05a);
      }

      .step strong {
        display: block;
        margin-bottom: 4px;
      }

      .footer {
        margin-top: 20px;
        padding: 18px 8px 0;
        color: var(--muted-2);
        font-size: 0.9rem;
      }

      @media (max-width: 1040px) {
        .layout {
          grid-template-columns: 1fr;
        }

        .side {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      @media (max-width: 760px) {
        .page {
          width: min(100% - 18px, 100%);
          padding-top: 14px;
        }

        .topbar {
          flex-direction: column;
          align-items: stretch;
        }

        .nav {
          justify-content: flex-start;
        }

        .hero {
          padding: 22px;
          min-height: auto;
        }

        h1 {
          max-width: none;
        }

        .hero-grid,
        .cluster-grid,
        .side {
          grid-template-columns: 1fr;
        }

        .section-head {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    </style>
  </head>
  <body>
    <main class="page">
      <header class="topbar">
        <div class="brand-left">
          <div class="flower-mark" aria-hidden="true">
            <span class="petal one"></span>
            <span class="petal two"></span>
            <span class="petal three"></span>
            <span class="petal four"></span>
            <span class="petal core"></span>
          </div>
          <span class="brand-name">flower</span>
        </div>
        <nav class="nav" aria-label="Primary">
          <a href="#markets">markets</a>
          <a href="#thesis">thesis</a>
          <a href="#access">access</a>
          <a href="https://x.com/Meta_Captain_" target="_blank" rel="noreferrer">x</a>
        </nav>
        <div class="status-chip">
          <span class="status-dot" aria-hidden="true"></span>
          <span>privy-ready beta shell</span>
        </div>
      </header>

      <div class="layout">
        <section>
          <article class="hero" id="top">
            <div class="browser-pill">flower beta preview</div>
            <h1>Price attention before the crowd does.</h1>
            <p>
              flower is a prediction market designed like a product people actually want to open.
              Soft glass, bloom lighting, category worlds, and clean conviction paths instead of
              terminal cosplay.
            </p>

            <div class="hero-grid">
              <div class="mini-panel">
                <p class="mini-kicker">What it feels like</p>
                <h2>Calm enough to trust. Sharp enough to trade.</h2>
                <p>
                  The shell is built for fast reads on mobile: obvious categories, visible sentiment,
                  elegant onboarding, and space for live markets later without the page feeling noisy.
                </p>
              </div>

              <div class="signal-card" aria-label="Illustrative activity card">
                <p class="mini-kicker">Launch mood</p>
                <div class="big-number">04</div>
                <div class="statline">
                  <span>category worlds</span>
                  <span>queued first</span>
                </div>
                <svg class="curve" viewBox="0 0 220 86" role="img" aria-label="Bloom curve illustration">
                  <path d="M 0 64 L 220 64"></path>
                  <path d="M 8 70 C 36 64, 56 52, 82 56 S 132 28, 158 34 S 192 16, 212 18"></path>
                </svg>
                <div class="statline">
                  <span>sentiment rising</span>
                  <span>beta</span>
                </div>
              </div>
            </div>
          </article>

          <section class="section" id="markets">
            <div class="section-head">
              <h2>Market worlds</h2>
              <div class="chip-row">
                <span class="mini-chip">no fake live prices</span>
                <span class="mini-chip">mobile-first</span>
                <span class="mini-chip">category-led</span>
              </div>
            </div>

            <div class="cluster-grid">
              <article class="cluster">
                <div class="cluster-top">
                  <span class="cluster-icon">✦</span>
                  <span class="cluster-status">culture bloom</span>
                </div>
                <h3>Culture</h3>
                <p>Memes, creators, virality, product launches, and internet attention swings.</p>
                <div class="cluster-list">
                  <span>streamers and creator arcs</span>
                  <span>music drops and viral breakouts</span>
                  <span>internet-native event markets</span>
                </div>
              </article>

              <article class="cluster">
                <div class="cluster-top">
                  <span class="cluster-icon">◌</span>
                  <span class="cluster-status">chain bloom</span>
                </div>
                <h3>Crypto</h3>
                <p>Protocols, tokens, launches, listings, and the next thing people suddenly care about.</p>
                <div class="cluster-list">
                  <span>token narrative rotations</span>
                  <span>launch timing and chain momentum</span>
                  <span>exchange and product catalysts</span>
                </div>
              </article>

              <article class="cluster">
                <div class="cluster-top">
                  <span class="cluster-icon">✺</span>
                  <span class="cluster-status">world bloom</span>
                </div>
                <h3>Macro</h3>
                <p>Rates, headlines, policy, and high-signal public events with real consequence.</p>
                <div class="cluster-list">
                  <span>policy and election timing</span>
                  <span>economic headline sentiment</span>
                  <span>global event outcome lanes</span>
                </div>
              </article>

              <article class="cluster">
                <div class="cluster-top">
                  <span class="cluster-icon">❋</span>
                  <span class="cluster-status">wildcard bloom</span>
                </div>
                <h3>Frontier</h3>
                <p>AI, science, tech, and strange edge cases that feel obvious only after they happen.</p>
                <div class="cluster-list">
                  <span>frontier model release timing</span>
                  <span>consumer tech moments</span>
                  <span>breakout experimental markets</span>
                </div>
              </article>
            </div>
          </section>
        </section>

        <aside class="side">
          <section class="panel" id="thesis">
            <p class="eyebrow">Brand thesis</p>
            <h2>Prediction design without exchange-terminal ugliness.</h2>
            <p>
              flower should feel premium, not sterile. The visual system stays soft and inviting
              while the product language stays clear: what is the question, where is conviction,
              and how fast can I act?
            </p>
            <div class="panel-grid">
              <article class="panel-tile">
                <h3>Readable first</h3>
                <p>Cards, categories, and probabilities should scan in seconds on a phone.</p>
              </article>
              <article class="panel-tile">
                <h3>Identity-friendly</h3>
                <p>Google and X sign-in create an easy first touch before wallet complexity shows up.</p>
              </article>
              <article class="panel-tile">
                <h3>Built to bloom</h3>
                <p>Start with category shells and onboarding now, then layer live market rails later.</p>
              </article>
            </div>
          </section>

          <section class="onboard-card" id="access">
            <p class="eyebrow">Access flow</p>
            <h2>Privy-style onboarding, no wallet anxiety.</h2>
            <p class="auth-copy">
              The primary action is identity-first. Users enter through familiar accounts, then the
              app can connect wallet logic quietly behind the scenes.
            </p>
            <div class="auth-row">
              <a class="auth-button" href="#access">
                <span class="button-icon">G</span>
                <span>Continue with Google</span>
              </a>
              <a class="ghost-button" href="#access">
                <span class="button-icon">X</span>
                <span>Continue with X</span>
              </a>
            </div>
            <div class="steps">
              <div class="step">
                <span class="step-number">1</span>
                <div>
                  <strong>Pick an identity</strong>
                  <span class="subtle">Google or X gives the fastest first-touch login path.</span>
                </div>
              </div>
              <div class="step">
                <span class="step-number">2</span>
                <div>
                  <strong>Land in category view</strong>
                  <span class="subtle">Open directly into culture, crypto, macro, or frontier worlds.</span>
                </div>
              </div>
              <div class="step">
                <span class="step-number">3</span>
                <div>
                  <strong>Unlock market actions later</strong>
                  <span class="subtle">When the backend is ready, pricing and order flow slide into the same shell.</span>
                </div>
              </div>
            </div>
            <div class="panel-foot" style="margin-top: 18px;">
              <span class="beta-pill">beta concept</span>
              <span class="subtle">designed for live data later</span>
            </div>
          </section>
        </aside>
      </div>

      <footer class="footer">
        flower is a brand shell for a prediction market product. Live market data and execution rails can be added later without changing the design language.
      </footer>
    </main>
  </body>
</html>`;

export default {
  async fetch() {
    return new Response(page, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300",
      },
    });
  },
};
