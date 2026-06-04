/* Marketing support page */

function MktHero() {
  return (
    <section className="page-hero">
      <div className="hero-fx" aria-hidden="true">
        <div className="mesh mesh-a"></div>
        <div className="mesh mesh-b"></div>
        <div className="mesh mesh-c"></div>
      </div>
      <div className="container">
        <span className="eyebrow"><span className="dot"></span>Marketing Support</span>
        <h1>Grow Your Audience. We&apos;ll Show You <span className="accent">How.</span></h1>
        <p className="lead">
          Every FX Unlocked partner gets access to a dedicated in-house marketing manager at no cost. We&apos;ll help you build a bigger, better-quality audience that converts, because a stronger audience means a stronger affiliate business.
        </p>
        <div className="cta-row">
          <a href="contact-us.html" className="btn-grad">Become a partner <span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}

function MktFeatures() {
  const items = [
    {
      title: "Social Media Strategy & Content Planning",
      text: "We’ll audit your current presence across Instagram, TikTok, YouTube, and LinkedIn, then build a content calendar and growth strategy tailored to your niche, voice, and audience stage.",
    },
    {
      title: "Brand Building",
      text: "If you’re not yet established as a recognisable brand, we’ll help you get there, from naming and logo through to tone of voice and visual identity.",
    },
    {
      title: "Website & Customer Journey Review",
      text: "Got a website or landing page? We’ll review it end to end and give you a written report on how to improve the conversion rate, the messaging, and the customer journey from first click to broker sign-up.",
    },
    {
      title: "Audience Growth Tactics",
      text: "We’ll tell you exactly what content is working right now in the FX education space: the formats, hooks, topics, and posting cadence that drive real follower and subscriber growth.",
    },
    {
      title: "Bi-Monthly Strategy Calls",
      text: "A call with your dedicated marketing manager every two weeks. We review what’s performing, what isn’t, and agree the next steps with specific actions for your business.",
    },
    {
      title: "Half-Yearly Growth Audit",
      text: "Every six months, a full review of your business covering traffic, content performance, audience growth, and revenue, with a detailed action plan for the next six months.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <span className="section-eyebrow">What We Help With</span>
        <h2>What Your Free Marketing Support <span className="accent">Covers</span></h2>
        <div className="feature-grid" style={{ marginTop: 32 }}>
          {items.map((item, i) => (
            <div key={i} className="feature-card">
              <div className="feature-num">{String(i + 1).padStart(2, "0")}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MktFocus() {
  return (
    <section className="section dark">
      <div className="container">
        <span className="section-eyebrow">Why We Offer This</span>
        <h2>Growth support is central to how <span className="accent">FX Unlocked works.</span></h2>
        <p className="lede">
          The marketing support isn&apos;t a gesture. It&apos;s central to how FX Unlocked works. Our broker partners need quality, consistent traffic. Our affiliate and IB partners need growing audiences to deliver that traffic. When we help you grow, everyone benefits, including us.
        </p>
        <p className="lede" style={{ marginBottom: 0 }}>
          This is why it&apos;s genuinely free, genuinely substantive, and genuinely ongoing, not a one-time call or a PDF of generic tips.
        </p>
      </div>
    </section>
  );
}

function MktManager() {
  return (
    <section className="section tight">
      <div className="container">
        <div className="wide-cta">
          <h2>Ready to Build Your <span style={{ fontStyle: "italic" }}>FX Business?</span></h2>
          <div className="cta-row">
            <a href="contact-us.html" className="btn-grad">Become a partner <span className="arrow">→</span></a>
            <a href="contact-us.html" className="btn-outline">Contact us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

window.MktHero = MktHero;
window.MktFeatures = MktFeatures;
window.MktFocus = MktFocus;
window.MktManager = MktManager;
