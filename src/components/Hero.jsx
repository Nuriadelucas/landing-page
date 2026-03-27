import { useState, useEffect } from 'react';
import { useLang } from '../LangContext';

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
  const { t } = useLang();
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
        <div className="hero-badge">{t.hero.badge}</div>
        <h1 className="hero-title">{t.hero.title1}<br />{t.hero.title2}</h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>

        {timeLeft === null ? (
          <div className="countdown-started">{t.hero.started}</div>
        ) : (
          <div className="countdown">
            <div className="countdown-unit">
              <strong>{String(timeLeft.days).padStart(2, '0')}</strong>
              <span>{t.hero.days}</span>
            </div>
            <div className="countdown-sep">:</div>
            <div className="countdown-unit">
              <strong>{String(timeLeft.hours).padStart(2, '0')}</strong>
              <span>{t.hero.hours}</span>
            </div>
            <div className="countdown-sep">:</div>
            <div className="countdown-unit">
              <strong>{String(timeLeft.minutes).padStart(2, '0')}</strong>
              <span>{t.hero.minutes}</span>
            </div>
          </div>
        )}

        <div className="hero-actions">
          <button className="btn-primary btn-lg" onClick={scrollToRegistration}>
            {t.hero.registerBtn}
          </button>
          <a href="#program" className="btn-ghost btn-lg">{t.hero.programBtn}</a>
        </div>
        <div className="hero-stats">
          <div className="stat"><strong>500+</strong><span>{t.hero.attendees}</span></div>
          <div className="stat-divider" />
          <div className="stat"><strong>4</strong><span>{t.hero.speakers}</span></div>
          <div className="stat-divider" />
          <div className="stat"><strong>{t.hero.content}</strong></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
