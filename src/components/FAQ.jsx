import { useState } from 'react';

const ITEMS = [
  {
    q: 'Who should attend this event?',
    a: 'Business leaders, product managers, data professionals, and anyone interested in applying AI in a business context.',
  },
  {
    q: 'Do I need a technical background to attend?',
    a: 'No, sessions are designed for both technical and non-technical audiences.',
  },
  {
    q: 'Will the sessions be recorded?',
    a: 'Yes, all registered attendees will receive access to session recordings after the event.',
  },
  {
    q: 'Is there an opportunity for networking?',
    a: 'Absolutely, there are dedicated networking sessions and informal meetups throughout the day.',
  },
  {
    q: 'How can I register?',
    a: 'You can register through the official event website by completing the online registration form.',
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
