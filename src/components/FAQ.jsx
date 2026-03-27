import { useState } from 'react';
import { useLang } from '../LangContext';

function FAQ() {
  const { t } = useLang();
  const f = t.faq;
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(i) {
    setOpenIndex(prev => prev === i ? null : i);
  }

  return (
    <section className="section section-light" id="faq">
      <div className="container container-narrow">
        <div className="section-label">{f.label}</div>
        <h2 className="section-title">{f.title1}<br />{f.title2}</h2>

        <div className="faq-list">
          {f.items.map((item, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? 'faq-open' : ''}`}>
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{item.q}</span>
                <span className="faq-icon">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && (
                <div className="faq-answer"><p>{item.a}</p></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
