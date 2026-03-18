import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.message.trim() || form.message.length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setErrors({});
  };

  const details = [
    { icon: '📍', text: '142 Design District, Lahore, Pakistan' },
    { icon: '✉️', text: 'hello@nexora.design' },
    { icon: '📞', text: '+92 300 123 4567' },
    { icon: '🕐', text: 'Mon–Fri, 9am–6pm PKT' },
  ];

  return (
    <div className="page section-wrap">
      <span className="section-tag">Contact Us</span>
      <h2 className="section-title">Let's start a conversation.</h2>
      <p className="section-sub">Have a question or want to collaborate? Drop us a message and we'll get back within 24 hours.</p>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>We love hearing from our community — whether it's feedback, partnership ideas, or just a hello.</p>
          {details.map(d => (
            <div className="contact-detail" key={d.text}>
              <span>{d.icon}</span>
              <span>{d.text}</span>
            </div>
          ))}
        </div>

        <div className="form-card">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text" placeholder="Your full name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                style={errors.name ? { borderColor: 'var(--accent2)' } : {}}
              />
              {errors.name && <p className="field-error">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email" placeholder="you@example.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                style={errors.email ? { borderColor: 'var(--accent2)' } : {}}
              />
              {errors.email && <p className="field-error">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="Tell us what's on your mind..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                style={errors.message ? { borderColor: 'var(--accent2)' } : {}}
              />
              {errors.message && <p className="field-error">{errors.message}</p>}
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Send Message ✦
            </button>

            {sent && (
              <div className="form-success">
                ✅ Your message was sent! We'll reply shortly.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;