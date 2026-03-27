import { useState } from 'react';
import { useLang } from '../LangContext';
import Reveal from './Reveal';

function Registration() {
  const { t } = useLang();
  const r = t.registration;

  const [form, setForm] = useState({ name: '', email: '', company: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = r.errName;
    if (!form.email.trim()) {
      e.email = r.errEmailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = r.errEmailInvalid;
    }
    if (!form.company.trim()) e.company = r.errCompany;
    return e;
  }

  function handleChange(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }
    setSubmitted(true);
  }

  return (
    <section className="section section-dark" id="registration">
      <div className="container container-narrow">
        <Reveal>
          <div className="section-label section-label-light">{r.label}</div>
          <h2 className="section-title section-title-light">{r.title1}<br />{r.title2}</h2>
          <p className="reg-subtitle">{r.subtitle}</p>
        </Reveal>

        <Reveal delay={150}>
          {submitted ? (
            <div className="success-card">
              <div className="success-icon">✓</div>
              <h3>{r.successTitle}</h3>
              <p>
                {r.successThanks} <strong>{form.name}</strong>! {r.successSent}{' '}
                <strong>{form.email}</strong>. {r.successClosing}
              </p>
            </div>
          ) : (
            <form className="reg-form" onSubmit={handleSubmit} noValidate>
              <div className="reg-field">
                <label>{r.nameLabel}</label>
                <input type="text" placeholder={r.namePlaceholder} value={form.name}
                  onChange={e => handleChange('name', e.target.value)}
                  className={errors.name ? 'input-error' : ''} />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>

              <div className="reg-field">
                <label>{r.emailLabel}</label>
                <input type="email" placeholder={r.emailPlaceholder} value={form.email}
                  onChange={e => handleChange('email', e.target.value)}
                  className={errors.email ? 'input-error' : ''} />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              <div className="reg-field">
                <label>{r.companyLabel}</label>
                <input type="text" placeholder={r.companyPlaceholder} value={form.company}
                  onChange={e => handleChange('company', e.target.value)}
                  className={errors.company ? 'input-error' : ''} />
                {errors.company && <span className="field-error">{errors.company}</span>}
              </div>

              <button type="submit" className="btn-primary btn-lg btn-full">{r.submitBtn}</button>
              <p className="reg-note">{r.note}</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export default Registration;
