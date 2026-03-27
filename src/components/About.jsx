import { useLang } from '../LangContext';
import Reveal from './Reveal';

function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section className="section section-white" id="about">
      <div className="container">
        <Reveal>
          <div className="section-label">{a.label}</div>
          <h2 className="section-title">{a.title1}<br />{a.title2}</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal direction="left" delay={100}>
            <div className="about-text">
              <p>{a.p1}</p>
              <p>{a.p2}</p>
              <p><strong>{a.p3}</strong></p>
            </div>
          </Reveal>

          <Reveal direction="right" delay={200}>
            <div className="about-highlights">
              {a.highlights.map((h, i) => (
                <div key={i} className="highlight-card">
                  <div className="highlight-icon">{h.icon}</div>
                  <div>
                    <h3 className="highlight-title">{h.title}</h3>
                    <p className="highlight-desc">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
