const SPEAKERS = [
  {
    initials: 'EC',
    name: 'Dr. Emily Carter',
    title: 'Chief AI Officer',
    company: 'NexaTech',
    talk: 'Opening Keynote: The Future of AI in Business Strategy',
    bio: 'Emily leads AI strategy and deployment across NexaTech\'s global product portfolio, driving the adoption of machine learning at enterprise scale.',
    linkedin: 'https://linkedin.com',
    color: '#3399ff',
  },
  {
    initials: 'MZ',
    name: 'Michael Zhang',
    title: 'Head of Data Science',
    company: 'GlobalCorp',
    talk: 'Scaling AI: From Pilot to Production',
    bio: 'Michael oversees data science initiatives at GlobalCorp, translating complex datasets into actionable business intelligence across 40+ markets.',
    linkedin: 'https://linkedin.com',
    color: '#7b5ea7',
  },
  {
    initials: 'SM',
    name: 'Sofia Martinez',
    title: 'AI Strategy Consultant',
    company: 'InnovateAI',
    talk: 'AI Ethics & Governance in Enterprise Environments',
    bio: 'Sofia helps organisations design and execute AI transformation roadmaps, with a focus on practical implementation and measurable ROI.',
    linkedin: 'https://linkedin.com',
    color: '#0d9488',
  },
  {
    initials: 'DR',
    name: 'David Rosenberg',
    title: 'CTO',
    company: 'FutureScale Systems',
    talk: 'Driving ROI with Machine Learning Applications',
    bio: 'David architects scalable AI infrastructure for high-growth companies, specialising in MLOps, model deployment, and platform engineering.',
    linkedin: 'https://linkedin.com',
    color: '#e06c1a',
  },
];

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

function Speakers() {
  return (
    <section className="section section-white" id="speakers">
      <div className="container">
        <div className="section-label">Speakers</div>
        <h2 className="section-title">Learn from the<br />Best in the Industry</h2>

        <div className="speakers-grid">
          {SPEAKERS.map((s, i) => (
            <div key={i} className="speaker-card">
              <div className="speaker-card-front">
                <div className="speaker-avatar" style={{ background: s.color }}>
                  {s.initials}
                </div>
                <h3 className="speaker-name">{s.name}</h3>
                <p className="speaker-title">{s.title}</p>
                <p className="speaker-company">{s.company}</p>
                <div className="speaker-talk-badge">{s.talk}</div>
              </div>
              <div className="speaker-card-hover">
                <p className="speaker-bio">{s.bio}</p>
                <a
                  href={s.linkedin}
                  className="speaker-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon /> LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Speakers;
