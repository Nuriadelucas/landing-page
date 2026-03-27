const SPEAKERS = [
  {
    initials: 'EC',
    name: 'Dr. Emily Carter',
    title: 'Chief AI Officer',
    company: 'NexaTech',
    bio: 'Emily leads AI strategy and deployment across NexaTech\'s global product portfolio, driving the adoption of machine learning at enterprise scale.',
    color: '#3399ff',
  },
  {
    initials: 'MZ',
    name: 'Michael Zhang',
    title: 'Head of Data Science',
    company: 'GlobalCorp',
    bio: 'Michael oversees data science initiatives at GlobalCorp, translating complex datasets into actionable business intelligence across 40+ markets.',
    color: '#7b5ea7',
  },
  {
    initials: 'SM',
    name: 'Sofia Martinez',
    title: 'AI Strategy Consultant',
    company: 'InnovateAI',
    bio: 'Sofia helps organisations design and execute AI transformation roadmaps, with a focus on practical implementation and measurable ROI.',
    color: '#0d9488',
  },
  {
    initials: 'DR',
    name: 'David Rosenberg',
    title: 'CTO',
    company: 'FutureScale Systems',
    bio: 'David architects scalable AI infrastructure for high-growth companies, specialising in MLOps, model deployment, and platform engineering.',
    color: '#e06c1a',
  },
];

function Speakers() {
  return (
    <section className="section section-white" id="speakers">
      <div className="container">
        <div className="section-label">Speakers</div>
        <h2 className="section-title">Learn from the<br />Best in the Industry</h2>

        <div className="speakers-grid">
          {SPEAKERS.map((s, i) => (
            <div key={i} className="speaker-card">
              <div className="speaker-avatar" style={{ background: s.color }}>
                {s.initials}
              </div>
              <h3 className="speaker-name">{s.name}</h3>
              <p className="speaker-title">{s.title}</p>
              <p className="speaker-company">{s.company}</p>
              <p className="speaker-bio">{s.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Speakers;
