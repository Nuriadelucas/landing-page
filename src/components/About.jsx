import { useLang } from '../LangContext';

function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section className="section section-white" id="about">
      <div className="container">
        <div className="section-label">{a.label}</div>
        <h2 className="section-title">{a.title1}<br />{a.title2}</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>{a.p1}</p>
            <p>{a.p2}</p>
            <p><strong>{a.p3}</strong></p>
          </div>

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
        </div>
      </div>
    </section>
  );
}

export default About;
