const HIGHLIGHTS = [
  { icon: '🎯', title: 'Estrategia Práctica', desc: 'Descubre cómo las empresas líderes aplican la IA para impulsar la innovación y la competitividad.' },
  { icon: '🤝', title: 'Networking de Alto Nivel', desc: 'Conecta con 500+ líderes, ejecutivos y expertos en tecnología que están transformando sus sectores.' },
  { icon: '⚡', title: 'Casos de Éxito Reales', desc: 'Aprende de organizaciones que ya están generando resultados concretos con inteligencia artificial.' },
];

function About() {
  return (
    <section className="section section-white" id="about">
      <div className="container">
        <div className="section-label">About the Event</div>
        <h2 className="section-title">IA que transforma<br />el mundo empresarial</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              El AI in Business Summit 2026 reunirá a líderes de la industria, expertos en tecnología
              y ejecutivos para explorar cómo la inteligencia artificial está transformando el mundo empresarial.
            </p>
            <p>
              A través de conferencias, casos de éxito y espacios de networking, los asistentes
              descubrirán estrategias prácticas para impulsar la innovación y la competitividad.
            </p>
            <p>
              Un evento clave para quienes buscan <strong>adelantarse al futuro de los negocios</strong>.
            </p>
          </div>

          <div className="about-highlights">
            {HIGHLIGHTS.map((h, i) => (
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
