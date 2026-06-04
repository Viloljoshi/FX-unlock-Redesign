/* Contact Us page */

function ContactHero() {
  return (
    <section className="page-hero" style={{ paddingBottom: 40 }}>
      <div className="hero-fx" aria-hidden="true">
        <div className="mesh mesh-a"></div>
        <div className="mesh mesh-b"></div>
      </div>
      <div className="container">
        <span className="eyebrow"><span className="dot"></span>Get In Touch</span>
        <h1>Get In <span className="accent">Touch</span></h1>
        <p className="lead">
          Affiliate, IB, or trading platform, tell us a bit about your business and your regional country manager will be in touch within 24 hours.
        </p>
      </div>
    </section>
  );
}

function ContactBlock() {
  return (
    <section style={{ background: "var(--bg-soft)", padding: "0 0 96px" }}>
      <div className="container">
        <div className="contact-shell" style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 32px 64px -32px rgba(20,30,80,0.25)" }}>
          <div className="contact-info">
            <div className="ci-block">
              <h4>Address</h4>
              <p>Floor 38, Media One Tower, Dubai Marina, UAE</p>
            </div>
            <div className="ci-block">
              <h4>Phone</h4>
              <p>+971 58 578 4483</p>
            </div>
            <div className="ci-block">
              <h4>Email</h4>
              <p>hello@fx-unlocked.com</p>
            </div>
            <div className="ci-block">
              <h4>WhatsApp</h4>
              <p><a href="https://wa.me/971585784483" className="contact-inline-link">+971 58 578 4483 (tap to message directly)</a></p>
            </div>
            <div className="ci-block">
              <h4>Social</h4>
              <div className="social-inline-list">
                <a href="https://www.instagram.com/fx.unlocked/">Instagram: @fx.unlocked</a>
                <a href="https://www.tiktok.com/@fx.unlocked">TikTok: @fx.unlocked</a>
                <a href="https://www.linkedin.com/">LinkedIn: FX Unlocked</a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h2>Contact Us</h2>
            <p className="sub">Tell us a bit about your business and we&apos;ll be in touch.</p>
            <form>
              <div className="field">
                <label>Full name</label>
                <input type="text" placeholder="Your name"/>
              </div>
              <div className="row-2">
                <div className="field">
                  <label>Email address</label>
                  <input type="email" placeholder="you@email.com"/>
                </div>
                <div className="field">
                  <label>Phone number including country code</label>
                  <input type="tel" placeholder="+971 50 123 4567"/>
                </div>
              </div>
              <div className="row-2">
                <div className="field">
                  <label>Country</label>
                  <select defaultValue="">
                    <option value="" hidden>Select your country</option>
                    <option>United Arab Emirates</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>India</option>
                    <option>Singapore</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="field">
                  <label>I am a...</label>
                  <select defaultValue="">
                    <option value="" hidden>Select one</option>
                    <option>Affiliate</option>
                    <option>Introducing Broker (IB)</option>
                    <option>Trading Platform or Broker</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label>Tell us about your business</label>
                <textarea placeholder="Audience size, current deal, what you're looking for"></textarea>
              </div>
              <div className="field">
                <label>How did you hear about us?</label>
                <select defaultValue="">
                  <option value="" hidden>Select one</option>
                  <option>Social media</option>
                  <option>Google</option>
                  <option>Referral</option>
                  <option>Event</option>
                  <option>Other</option>
                </select>
              </div>
              <button type="button" className="btn-submit">
                Send message
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: 10 }}>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <p style={{ textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.45)", margin: "14px 0 0", fontFamily: "var(--mono)", letterSpacing: "0.06em" }}>We respond within 24 h · Your data stays private</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

window.ContactHero = ContactHero;
window.ContactBlock = ContactBlock;
