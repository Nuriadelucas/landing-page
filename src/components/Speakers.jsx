const SPEAKERS = [
  {
    initials: 'AM',
    name: 'Alexandra Moore',
    title: 'Chief Technology Officer',
    company: 'NovaTech Systems',
    bio: 'Alexandra leads engineering for a 2,000-person technology organisation. She speaks internationally on platform engineering and developer experience.',
    color: '#3399ff',
  },
  {
    initials: 'RK',
    name: 'Rajiv Kumar',
    title: 'VP of AI & Data',
    company: 'Meridian Analytics',
    bio: 'Rajiv has spent 15 years turning data into business value. He pioneered Meridian\'s AI-at-scale programme, which now processes 10B events daily.',
    color: '#7b5ea7',
  },
  {
    initials: 'SL',
    name: 'Sophie Laurent',
    title: 'Head of Cloud Architecture',
    company: 'Eurocloud Partners',
    bio: 'Sophie designs multi-cloud resilience strategies for Fortune 500 clients across Europe. She is a Google Cloud and AWS certified architect.',
    color: '#0d9488',
  },
  {
    initials: 'TW',
    name: 'Thomas Weber',
    title: 'Director of Engineering',
    company: 'FinanceCore AG',
    bio: 'Thomas transformed FinanceCore\'s legacy monolith into a microservices platform serving 40M users. He is a frequent contributor to open-source DevOps tooling.',
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
