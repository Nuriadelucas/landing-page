const DAYS = [
  {
    day: 'Day 1 — September 18',
    sessions: [
      { time: '09:00', title: 'Opening Keynote', desc: 'Welcome address and state of the industry from our executive panel.', type: 'keynote' },
      { time: '10:30', title: 'AI at Scale: From Pilot to Production', desc: 'Real-world lessons from enterprises that successfully deployed AI across their operations.', type: 'talk' },
      { time: '12:00', title: 'Lunch & Networking', desc: 'Catered lunch with structured networking tables by industry vertical.', type: 'break' },
      { time: '13:30', title: 'Cloud Resilience Workshop', desc: 'Hands-on session: designing fault-tolerant architectures on multi-cloud infrastructure.', type: 'workshop' },
      { time: '16:00', title: 'Evening Reception', desc: 'Drinks and networking at the Warsaw Marriott rooftop terrace.', type: 'break' },
    ],
  },
  {
    day: 'Day 2 — September 19',
    sessions: [
      { time: '09:00', title: 'Engineering Excellence Keynote', desc: 'How elite engineering cultures attract talent and ship faster without sacrificing quality.', type: 'keynote' },
      { time: '10:30', title: 'Platform Engineering Deep Dive', desc: 'Building internal developer platforms that reduce cognitive load and accelerate delivery.', type: 'talk' },
      { time: '12:00', title: 'Lunch & Expo', desc: 'Lunch break with partner demos and technology showcase.', type: 'break' },
      { time: '13:30', title: 'Panel: The Future of Work in Tech', desc: 'Industry leaders discuss remote-first culture, AI-augmented roles, and what teams will look like in 2030.', type: 'talk' },
      { time: '15:30', title: 'Closing Remarks & Awards', desc: 'Celebrating innovation with the Digital Horizons Innovation Awards ceremony.', type: 'keynote' },
    ],
  },
];

const TYPE_COLORS = {
  keynote: 'tag-keynote',
  talk: 'tag-talk',
  workshop: 'tag-workshop',
  break: 'tag-break',
};

const TYPE_LABELS = {
  keynote: 'Keynote',
  talk: 'Talk',
  workshop: 'Workshop',
  break: 'Break',
};

function Program() {
  return (
    <section className="section section-light" id="program">
      <div className="container">
        <div className="section-label">Program</div>
        <h2 className="section-title">Two Days of<br />Focused Learning</h2>

        <div className="program-days">
          {DAYS.map((day, di) => (
            <div key={di} className="program-day">
              <h3 className="day-title">{day.day}</h3>
              <div className="timeline">
                {day.sessions.map((s, si) => (
                  <div key={si} className="timeline-item">
                    <div className="timeline-time">{s.time}</div>
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4 className="timeline-title">{s.title}</h4>
                        <span className={`session-tag ${TYPE_COLORS[s.type]}`}>
                          {TYPE_LABELS[s.type]}
                        </span>
                      </div>
                      <p className="timeline-desc">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Program;
