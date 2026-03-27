import { useState, useEffect } from 'react';

const EVENT_DATE = new Date('2026-04-20T09:00:00');

function getTimeLeft() {
  const diff = EVENT_DATE - Date.now();
  if (diff <= 0) return null;
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
  };
}

function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 60000);
    return () => clearInterval(id);
  }, []);

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

        {timeLeft === null ? (
          <div className="countdown-started">Event has started!</div>
        ) : (
          <div className="countdown">
            <div className="countdown-unit">
              <strong>{String(timeLeft.days).padStart(2, '0')}</strong>
              <span>Days</span>
            </div>
            <div className="countdown-sep">:</div>
            <div className="countdown-unit">
              <strong>{String(timeLeft.hours).padStart(2, '0')}</strong>
              <span>Hours</span>
            </div>
            <div className="countdown-sep">:</div>
            <div className="countdown-unit">
              <strong>{String(timeLeft.minutes).padStart(2, '0')}</strong>
              <span>Minutes</span>
            </div>
          </div>
        )}

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
