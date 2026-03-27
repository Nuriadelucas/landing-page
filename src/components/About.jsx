const HIGHLIGHTS = [
  { icon: '🎯', title: 'Strategic Insights', desc: 'Learn how top enterprises are aligning technology investments with long-term business goals.' },
  { icon: '🤝', title: 'Expert Network', desc: 'Connect with 500+ decision-makers, architects, and innovators from across the industry.' },
  { icon: '⚡', title: 'Hands-on Workshops', desc: 'Apply new skills immediately in practical workshops led by certified practitioners.' },
];

function About() {
  return (
    <section className="section section-white" id="about">
      <div className="container">
        <div className="section-label">About the Event</div>
        <h2 className="section-title">Built for Leaders<br />Who Build the Future</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Digital Horizons Summit is the premier annual gathering for technology and
              business leaders navigating the rapidly evolving digital landscape. Now in its
              fifth year, the summit brings together CIOs, CTOs, architects, and innovators
              from over 30 countries to share hard-won insights and explore what's next.
            </p>
            <p>
              Whether you're driving a cloud migration, scaling an AI initiative, or rethinking
              your engineering culture, you'll leave with concrete strategies, a stronger network,
              and the confidence to lead your organisation through transformation.
            </p>
            <p>
              The 2025 edition centres on three pillars: <strong>AI at Scale</strong>,
              <strong> Cloud Resilience</strong>, and <strong>Engineering Excellence</strong> —
              reflecting the priorities that matter most to technology teams today.
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
