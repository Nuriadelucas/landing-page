import { useState } from 'react';
import { useLang } from '../LangContext';
import Reveal from './Reveal';

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
        <Reveal>
          <div className="section-label">{f.label}</div>
          <h2 className="section-title">{f.title1}<br />{f.title2}</h2>
        </Reveal>

        <div className="faq-list">
          {f.items.map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className={`faq-item ${openIndex === i ? 'faq-open' : ''}`}>
                <button className="faq-question" onClick={() => toggle(i)}>
                  <span>{item.q}</span>
                  <span className="faq-icon">{openIndex === i ? '−' : '+'}</span>
                </button>
                {openIndex === i && (
                  <div className="faq-answer"><p>{item.a}</p></div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
