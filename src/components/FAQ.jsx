import { useState } from 'react';

const ITEMS = [
  {
    q: 'Who should attend Digital Horizons Summit?',
    a: 'The summit is designed for technology and business leaders — CTOs, CIOs, engineering managers, architects, and senior developers who are responsible for shaping or executing digital strategy in their organisations.',
  },
  {
    q: 'Where is the event held?',
    a: 'The summit takes place at the Warsaw Marriott Hotel, Al. Jerozolimskie 65/79, Warsaw, Poland. The venue is easily accessible by public transport and is a 20-minute drive from Warsaw Chopin Airport.',
  },
  {
    q: 'Is there an online / remote attendance option?',
    a: 'Yes. All keynotes and main-stage talks will be live-streamed for registered remote participants. Workshop sessions are in-person only to ensure the best hands-on experience.',
  },
  {
    q: 'What is included in the registration fee?',
    a: 'Full access to all sessions and workshops, catered lunches and coffee breaks on both days, the evening reception on Day 1, and digital access to all presentation recordings after the event.',
  },
  {
    q: 'Can I get a refund if I can\'t attend?',
    a: 'Full refunds are available up to 30 days before the event. Within 30 days, you may transfer your ticket to a colleague at no cost. Please contact us at tickets@digitalhorizons.io for assistance.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(i) {
    setOpenIndex(prev => prev === i ? null : i);
  }

  return (
    <section className="section section-light" id="faq">
      <div className="container container-narrow">
        <div className="section-label">FAQ</div>
        <h2 className="section-title">Frequently Asked<br />Questions</h2>

        <div className="faq-list">
          {ITEMS.map((item, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? 'faq-open' : ''}`}>
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{item.q}</span>
                <span className="faq-icon">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && (
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
