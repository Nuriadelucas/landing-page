import { useState } from 'react';

function Registration() {
  const [form, setForm] = useState({ name: '', email: '', company: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required.';
    if (!form.email.trim()) {
      e.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!form.company.trim()) e.company = 'Company name is required.';
    return e;
  }

  function handleChange(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) {
      setErrors(e2);
      return;
    }
    setSubmitted(true);
  }

  return (
    <section className="section section-dark" id="registration">
      <div className="container container-narrow">
        <div className="section-label section-label-light">Register</div>
        <h2 className="section-title section-title-light">Secure Your Spot<br />Today</h2>
        <p className="reg-subtitle">
          Spaces are limited. Register now to join 500+ leaders at AI in Business Summit 2026.
        </p>

        {submitted ? (
          <div className="success-card">
            <div className="success-icon">✓</div>
            <h3>You're registered!</h3>
            <p>
              Thanks, <strong>{form.name}</strong>! A confirmation email has been sent to{' '}
              <strong>{form.email}</strong>. We look forward to seeing you in Madrid.
            </p>
          </div>
        ) : (
          <form className="reg-form" onSubmit={handleSubmit} noValidate>
            <div className="reg-field">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Jane Smith"
                value={form.name}
                onChange={e => handleChange('name', e.target.value)}
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>

            <div className="reg-field">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="jane@company.com"
                value={form.email}
                onChange={e => handleChange('email', e.target.value)}
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            <div className="reg-field">
              <label>Company</label>
              <input
                type="text"
                placeholder="Acme Corp"
                value={form.company}
                onChange={e => handleChange('company', e.target.value)}
                className={errors.company ? 'input-error' : ''}
              />
              {errors.company && <span className="field-error">{errors.company}</span>}
            </div>

            <button type="submit" className="btn-primary btn-lg btn-full">
              Register Now — It's Free
            </button>

            <p className="reg-note">
              By registering you agree to our privacy policy. No spam, ever.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

export default Registration;
