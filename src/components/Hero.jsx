function Hero() {
  function scrollToRegistration() {
    document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-badge">September 18–19, 2025 · Warsaw, Poland</div>
        <h1 className="hero-title">Digital Horizons<br />Summit 2025</h1>
        <p className="hero-subtitle">
          Where Technology Meets Business Strategy — two days of keynotes,
          workshops, and networking with industry leaders shaping the future of enterprise tech.
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
          <div className="stat"><strong>20+</strong><span>Speakers</span></div>
          <div className="stat-divider" />
          <div className="stat"><strong>2 Days</strong><span>of Content</span></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
