/* Affiliates / IBs page */

function AffHero() {
  return (
    <section className="page-hero">
      <div className="hero-fx" aria-hidden="true">
        <div className="mesh mesh-a"></div>
        <div className="mesh mesh-b"></div>
        <div className="mesh mesh-c"></div>
      </div>
      <div className="container">
        <span className="eyebrow"><span className="dot"></span>Affiliates | IBs</span>
        <h1>Market-Leading CPA &amp; Rebate Deals. <span className="accent">Guaranteed.</span></h1>
        <p className="lead">
          If you&apos;re an FX educator, content creator, or introducing broker with an active client base, we will get you a better deal than you&apos;re currently on. That&apos;s what our network of 200+ partners and 12 platform relationships makes possible.
        </p>
        <div className="cta-row">
          <a href="contact-us.html" className="btn-grad">Apply now <span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}

function AffIntro() {
  const items = [
    {
      title: "We Guarantee a Better Deal",
      text: "Show us your current CPA or rebate structure. We will go to our network of regulated broker partners, backed by the collective volume of our affiliate and IB network, and secure you a materially better arrangement. If we genuinely can’t, we’ll tell you honestly and explain why.",
    },
    {
      title: "Off-Market Access",
      text: "The deals we negotiate are not available through broker websites or standard affiliate portals. They’re structured specifically for our network based on volume, geography, and traffic quality.",
    },
    {
      title: "A Free, Dedicated Marketing Manager",
      text: "Every active FX Unlocked partner gets access to our in-house marketing team at no cost. We review your social presence, help you plan content, advise on audience growth, and support you with campaign execution.",
    },
    {
      title: "Free Educational Content for Your Community",
      text: "Our professionally produced trading courses are available for you to offer to your audience free of charge to you, whether as a lead magnet, member benefit, or premium bundle.",
    },
    {
      title: "Full FX Product Portfolio",
      text: "Our partner offering goes beyond broker referrals. You’ll have access to our full suite of FX products, including AI-powered trading tools and educational content series.",
    },
    {
      title: "Bi-Monthly Reviews & Half-Yearly Growth Audits",
      text: "We schedule a fortnightly call with every active partner and conduct a full growth audit every six months, including a written action plan with specific recommendations.",
    },
    {
      title: "Dedicated Regional Country Managers",
      text: "You’ll have a named contact in your region who understands your local market, the regulatory environment, and the broker landscape where you operate.",
    },
  ];

  return (
    <section className="section" id="why">
      <div className="container">
        <span className="section-eyebrow">The FX Unlocked Difference</span>
        <h2>Why 200+ Affiliates &amp; IBs Choose <span className="accent">FX Unlocked</span></h2>
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

function AffWhy() {
  return (
    <section className="section dark">
      <div className="container">
        <span className="section-eyebrow">3-Step Process</span>
        <h2>Getting Started Takes <span className="accent">Minutes</span></h2>
        <div className="step-list" style={{ marginTop: 32 }}>
          <div className="step">
            <div className="step-num">1</div>
            <div>
              <h3>Apply &amp; Arrange a Call</h3>
              <p>Fill in our short form with your audience size, current deal, and geographic focus. We&apos;ll arrange a call with your regional country manager within 24 hours.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div>
              <h3>Get Matched &amp; Onboarded</h3>
              <p>Based on your audience, traffic quality, geography, and growth potential, we&apos;ll identify the right broker partner and negotiate your deal. We handle the compliance and onboarding process end to end.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div>
              <h3>Start Earning. Keep Growing.</h3>
              <p>Go live on your new deal and start earning. We&apos;ll be with you every step of the way through regular reviews, marketing support, and ongoing access to our wider product suite.</p>
            </div>
          </div>
        </div>
        <div className="cta-row" style={{ marginTop: 32 }}>
          <a href="contact-us.html" className="btn-grad">Apply now <span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}

function AffSteps() {
  return (
    <section className="section">
      <div className="container">
        <span className="section-eyebrow">Trading Platforms</span>
        <h2>Are You a Trading Platform or <span className="accent">Broker?</span></h2>
        <p className="lede">
          FX Unlocked works with regulated trading platforms looking to grow their active client base through quality affiliate and IB partnerships. We vet our partners rigorously and match them to brokers based on traffic quality, geographic focus, and audience fit, so the clients you acquire are the right ones.
        </p>
        <ul className="bullet-list icon-list">
          <li><span>Vetted affiliates and IBs matched to your target regions and client profile</span></li>
          <li><span>Quality FTD acquisition from engaged, conversion-ready audiences</span></li>
          <li><span>Flexible partnership structures: CPA, rebate, or hybrid</span></li>
          <li><span>Transparent reporting and regular strategy reviews</span></li>
          <li><span>A single point of contact managing the affiliate relationship on your behalf</span></li>
        </ul>
        <div className="cta-row" style={{ marginTop: 28 }}>
          <a href="contact-us.html" className="btn-outline-dark">Speak to our team</a>
        </div>
      </div>
    </section>
  );
}

function AffMonetize() {
  const faqs = [
    {
      q: "What’s the difference between an Affiliate and an IB?",
      a: "An Affiliate typically promotes a broker through online content and earns a CPA for each new funded client. An Introducing Broker usually has a more direct, ongoing relationship with clients and earns rebates based on their trading volume. FX Unlocked works effectively with both models and matches you based on what suits your business best.",
    },
    {
      q: "What counts as a deal and how does FX Unlocked improve it?",
      a: "Your deal is the commercial arrangement between you and your broker partner, usually a CPA rate per funded client or a pip-based rebate per lot traded. Because FX Unlocked aggregates the volume and traffic of 200+ partners, we negotiate at a network level individual affiliates and IBs can’t access alone.",
    },
    {
      q: "How quickly can I get started?",
      a: "Once you’ve applied, we aim to arrange an initial call within 24 hours. Full onboarding to a broker partner typically takes 3 to 7 business days depending on the broker’s compliance process and your geography.",
    },
    {
      q: "Can I switch broker partners if things aren’t working?",
      a: "Yes. We’re not tied to a single broker, and we’re not incentivised to keep you somewhere that isn’t performing. If the match isn’t right, we’ll review your options and move you.",
    },
    {
      q: "Do I need a minimum audience size or client base?",
      a: "We work with partners at different stages of growth. Larger, higher-quality audiences usually unlock higher CPA rates, but we’ve also successfully onboarded and grown smaller educators and IBs through our marketing support.",
    },
  ];

  return (
    <section className="section dark">
      <div className="container">
        <span className="section-eyebrow">FAQ</span>
        <h2>Frequently Asked <span className="accent">Questions</span></h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <details key={i} className="faq-item" open={i === 0}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function AffPlatforms() {
  const partners = ["IC Markets", "IC Trading", "Pepperstone", "FXPro", "Exness", "ThinkMarkets"];
  return (
    <section className="section">
      <div className="container">
        <span className="section-eyebrow">Partner Logos</span>
        <h2>Our Platform <span className="accent">Partners</span></h2>
        <div className="feature-grid" style={{ marginTop: 32 }}>
          {partners.map((partner, i) => (
            <div key={i} className="feature-card partner-card">
              <h3>{partner}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.AffHero = AffHero;
window.AffIntro = AffIntro;
window.AffWhy = AffWhy;
window.AffSteps = AffSteps;
window.AffMonetize = AffMonetize;
window.AffPlatforms = AffPlatforms;
