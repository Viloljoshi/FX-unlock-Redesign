/* Tools page */

function ToolsHero() {
  return (
    <section className="page-hero">
      <div className="hero-fx" aria-hidden="true">
        <div className="mesh mesh-a"></div>
        <div className="mesh mesh-b"></div>
        <div className="mesh mesh-c"></div>
      </div>
      <div className="container">
        <span className="eyebrow"><span className="dot"></span>Built In-House. Free for Every Partner.</span>
        <h1>Software Built for the Way IBs and Affiliates Actually <span className="accent">Work.</span></h1>
        <p className="lead">
          We didn&apos;t just build a network. We built the tools to run and support one. Every active FX Unlocked partner gets free access to our proprietary software suite: a trading journal with AI analysis, a risk and lot size calculator, and a CRM built specifically for IBs and affiliates who manage trading communities.
        </p>
        <div className="cta-row">
          <a href="contact-us.html" className="btn-grad">Become a partner to get access <span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}

function ToolsWhy() {
  return (
    <section className="section">
      <div className="container">
        <span className="section-eyebrow">Why We Built These Tools</span>
        <h2>Purpose-built for the realities of running a <span className="accent">trading community.</span></h2>
        <p className="lede">
          Managing a trading community is a business. It means tracking members, monitoring their progress, understanding their risk behaviour, and helping them improve while also managing your own revenue and broker relationships. Most IBs and affiliates do this with a patchwork of spreadsheets, generic CRMs, and tools built for a completely different industry.
        </p>
        <p className="lede" style={{ marginBottom: 0 }}>
          We built something better. Our tools were developed from scratch, specifically for the way FX IBs and affiliates operate. They&apos;re free for every active partner and built to give your community a genuinely better experience, which means stronger retention, better trading outcomes, and more revenue for you.
        </p>
      </div>
    </section>
  );
}

function ToolCard({ eyebrow, title, headline, body, bullets, audience, cost }) {
  return (
    <section className="section alt">
      <div className="container">
        <div className="tool-showcase">
          <div className="tool-visual">
            <div className="tool-screen">
              <div className="tool-screen-bar"></div>
              <div className="tool-chart"></div>
              <div className="tool-panels">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
          <div>
            <span className="section-eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
            <p className="lede">{headline}</p>
            <p className="lede">{body}</p>
            <div className="feature-card tool-copy-card">
              <h3>What it does</h3>
              <ul className="bullet-list icon-list">
                {bullets.map((bullet, i) => <li key={i}><span>{bullet}</span></li>)}
              </ul>
            </div>
            <div className="feature-grid" style={{ marginTop: 20 }}>
              <div className="feature-card">
                <h3>Who it&apos;s for</h3>
                <p>{audience}</p>
              </div>
              <div className="feature-card">
                <h3>Cost</h3>
                <p>{cost}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ToolsJournal() {
  return (
    <ToolCard
      eyebrow="Tool 1 — The Trading Journal"
      title="The FX Unlocked Trading Journal"
      headline="The Best Trading Journal on the Market. Built by Us. Free for Your Community."
      body="Most trading journals are glorified spreadsheets. Ours is different. We built the FX Unlocked Trading Journal from scratch, and it&apos;s better than any standalone product currently available, with one feature that nothing else has: built-in AI analysis. Every trade a community member logs is analysed by our AI engine, which identifies patterns in behaviour, highlights recurring mistakes, and delivers personalised feedback based on their own trading history."
      bullets={[
        "Log every trade: entry, exit, size, instrument, setup type, and emotional state",
        "Track performance metrics automatically, including win rate, average R:R, drawdown, and best and worst sessions",
        "AI-powered pattern analysis across a trader’s full trade history",
        "Personalised feedback reports generated after every trading session",
        "Clean visual performance dashboard built for traders, not data scientists",
        "Accessible on desktop and mobile",
      ]}
      audience="Any trader in your community who wants to improve systematically. The journal gives them the structure and feedback loop that separates traders who develop a genuine edge from those who repeat the same mistakes indefinitely."
      cost="Free, included as a partner benefit for all active FX Unlocked affiliates and IBs to offer to their audience."
    />
  );
}

function ToolsCalculator() {
  return (
    <ToolCard
      eyebrow="Tool 2 — Risk and Lot Size Calculator"
      title="The FX Unlocked Risk and Lot Size Calculator"
      headline="Calculate Your Risk in Seconds. Every Trade. No Spreadsheets."
      body="Position sizing is where most traders go wrong. Our Risk and Lot Size Calculator is simple, fast, and accurate, built to be used in the moment right before a live trade. Enter account size, risk percentage, stop loss distance, and instrument, and get the exact lot size instantly."
      bullets={[
        "Instant lot size output based on account size, risk percentage, and stop loss distance",
        "Supports all major FX pairs, indices, commodities, and metals",
        "Clean, minimal interface designed for live-trade use",
        "Fully mobile-optimised",
      ]}
      audience="Traders in your community who need a fast, practical risk control tool as part of their pre-trade workflow."
      cost="Free for active FX Unlocked partners and available for them to offer directly to their audience."
    />
  );
}

function ToolsCRM() {
  return (
    <ToolCard
      eyebrow="Tool 3 — The IB and Affiliate CRM"
      title="The FX Unlocked IB and Affiliate CRM"
      headline="Run Your IB Business Like a Business. One Platform, Built for You."
      body="Generic CRMs were not built for FX IBs. They don’t understand trading communities, rebate structures, broker relationships, or the metrics that matter when you’re managing a book of active traders. The FX Unlocked CRM is purpose-built for introducing brokers and affiliates who manage trading communities, giving you one clear view of members, their activity, their status, and the revenue they generate."
      bullets={[
        "Full community member management from first contact through to active trading status",
        "Monitor trading activity and engagement across your entire book in real time",
        "Revenue tracking to see exactly what each member is generating in CPA or rebate terms",
        "Pipeline view to track leads and prospects from introduction to conversion",
        "Communication tools for individual members or your whole community",
        "Broker relationship management for deal terms and payment history",
        "Weekly and monthly reporting dashboards",
      ]}
      audience="Any IB or affiliate managing more than a handful of community members. Whether you have 20 active traders or 2,000, the CRM scales with your business and keeps everything in one place."
      cost="Free for all active FX Unlocked IB and affiliate partners."
    />
  );
}

function ToolsAll() {
  return (
    <section className="section dark">
      <div className="container">
        <span className="section-eyebrow">All Three. All Free.</span>
        <h2>Everything You Need. All Included. <span className="accent">All Free.</span></h2>
        <p className="lede">
          No other FX affiliate network offers a proprietary software suite built specifically for IBs and affiliates. These aren&apos;t third-party integrations or generic SaaS products with our logo on them. They were designed and built in-house for the way our partners actually work.
        </p>
        <div className="feature-grid" style={{ marginTop: 32 }}>
          <div className="feature-card">
            <h3>Trading Journal</h3>
            <p>AI analysis, behavioural insight, and a structured feedback loop for your community.</p>
          </div>
          <div className="feature-card">
            <h3>Risk Calculator</h3>
            <p>Fast, accurate position sizing designed for real-world use right before a live trade.</p>
          </div>
          <div className="feature-card">
            <h3>IB &amp; Affiliate CRM</h3>
            <p>Revenue, member management, pipeline visibility, and broker relationship tracking in one place.</p>
          </div>
        </div>
        <div className="cta-row" style={{ marginTop: 32 }}>
          <a href="contact-us.html" className="btn-grad">Become a partner to get access <span className="arrow">→</span></a>
          <a href="contact-us.html" className="btn-outline">Contact us to find out more</a>
        </div>
      </div>
    </section>
  );
}

window.ToolsHero = ToolsHero;
window.ToolsWhy = ToolsWhy;
window.ToolsJournal = ToolsJournal;
window.ToolsCalculator = ToolsCalculator;
window.ToolsCRM = ToolsCRM;
window.ToolsAll = ToolsAll;
