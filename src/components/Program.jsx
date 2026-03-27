const DAYS = [
  {
    day: 'April 20, 2026',
    sessions: [
      { time: '09:00', title: 'Registration & Welcome Coffee', desc: '', type: 'break' },
      { time: '09:30', title: 'Opening Keynote: The Future of AI in Business Strategy', desc: '', type: 'keynote' },
      { time: '10:30', title: 'Scaling AI: From Pilot to Production', desc: '', type: 'talk' },
      { time: '11:30', title: 'AI Ethics & Governance in Enterprise Environments', desc: '', type: 'talk' },
      { time: '13:30', title: 'Driving ROI with Machine Learning Applications', desc: '', type: 'workshop' },
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
        <h2 className="section-title">One Day of<br />Focused Learning</h2>

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
                      {s.desc && <p className="timeline-desc">{s.desc}</p>}
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
