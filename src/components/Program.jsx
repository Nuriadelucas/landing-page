import { useLang } from '../LangContext';

const TYPE_COLORS = {
  keynote: 'tag-keynote', talk: 'tag-talk',
  workshop: 'tag-workshop', break: 'tag-break',
};

function Program() {
  const { t } = useLang();
  const p = t.program;

  return (
    <section className="section section-light" id="program">
      <div className="container">
        <div className="section-label">{p.label}</div>
        <h2 className="section-title">{p.title1}<br />{p.title2}</h2>

        <div className="program-days">
          <div className="program-day">
            <h3 className="day-title">{p.day}</h3>
            <div className="timeline">
              {p.sessions.map((s, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-time">{s.time}</div>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4 className="timeline-title">{s.title}</h4>
                      <span className={`session-tag ${TYPE_COLORS[s.type]}`}>
                        {p.types[s.type]}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Program;
