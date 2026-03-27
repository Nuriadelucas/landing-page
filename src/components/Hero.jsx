function Hero() {
  function scrollToRegistration() {
    document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-badge">April 20, 2026 · EPAM Office, Madrid</div>
        <h1 className="hero-title">AI in Business<br />Summit 2026</h1>
        <p className="hero-subtitle">
          Where AI meets business strategy — keynotes, real-world cases and networking
          with industry leaders transforming the future of enterprise.
        </p>
        <div className="hero-actions">
          <button className="btn-primary btn-lg" onClick={scrollToRegistration}>
            Register Now
          </button>
          <a href="#program" className="btn-ghost btn-lg">View Program</a>
        </div>
        <div className="hero-stats">
          <div className="stat"><strong>500+</strong><span>Attendees</span></div>
          <div className="stat-divider" />
          <div className="stat"><strong>4</strong><span>Speakers</span></div>
          <div className="stat-divider" />
          <div className="stat"><strong>1 Day</strong><span>of Content</span></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
