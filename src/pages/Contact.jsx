import { useState } from 'react';
import { Link } from 'react-router-dom';
import Topbar    from '../components/Topbar';
import Navbar    from '../components/Navbar';
import Footer    from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import useWow    from '../hooks/useWow';

const INFO = [
  { icon: 'fa-map-marker-alt', label: 'Our Address', content: 'Godown No.4, Off Outering Road\nDonholm, Nairobi — KENYA' },
  { icon: 'fa-envelope',       label: 'Email Us',    href: 'mailto:info@lekisatrading.co.ke', text: 'info@lekisatrading.co.ke' },
  { icon: 'fa-phone-alt',      label: 'Call Us',     lines: ['+254 713 506 664', '+254 741 077 018'], hrefs: ['tel:+254713506664','tel:+254741077018'] },
  { icon: 'fa-globe',          label: 'Website',     href: 'https://lekisatrading.co.ke', text: 'lekisatrading.co.ke' },
];

export default function Contact() {
  useWow();

  const [form, setForm] = useState({ from_name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'ok' | 'error'

  const change = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const data = new FormData();
      data.append('access_key', 'bc5139d2-b18d-46fa-85d4-4f5a11272896');
      Object.entries(form).forEach(([k, v]) => data.append(k, v));
      data.append('botcheck', '');
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      setStatus(res.ok ? 'ok' : 'error');
      if (res.ok) setForm({ from_name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Topbar />
      <Navbar />
      <Breadcrumb label="Reach Out" title="Contact Us" crumbs={[{ label: 'Home', to: '/home' }, { label: 'Contact' }]} />

      {/* Info cards */}
      <div className="container-fluid py-5" style={{ background: 'var(--ltl-smoke)' }}>
        <div className="container py-4">
          <div className="row g-4 justify-content-center">
            {INFO.map((card, i) => (
              <div key={i} className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay={`${0.1 * (i + 1)}s`}>
                <div className="contact-info-card">
                  <div className="contact-info-icon"><i className={`fas ${card.icon}`}></i></div>
                  <h5>{card.label}</h5>
                  {card.content && <p className="mb-0">{card.content.split('\n').map((l, j) => <span key={j}>{l}{j === 0 && <br />}</span>)}</p>}
                  {card.href   && <a href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{card.text}</a>}
                  {card.lines  && card.lines.map((l, j) => <a key={j} href={card.hrefs[j]} className="d-block">{l}</a>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form + image */}
      <div className="container-fluid py-5 bg-white">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="contact d-flex justify-content-center">
                <div className="contact-img-inner">
                  <img src="img/contact-img.png" className="img-fluid w-100" alt="Contact Lekisa Trading" />
                </div>
              </div>
            </div>
            <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.3s">
              <div className="contact-form-wrap">
                <p className="label-gold mb-2">Send a Message</p>
                <h2 className="mb-2">Have a Question?</h2>
                <p className="text-muted mb-4">Fill in the form and our team will get back to you within one business day.</p>

                {status === 'ok' && (
                  <div className="alert mb-4" style={{ background: 'var(--ltl-gold-pale)', border: '1px solid var(--ltl-gold)', color: 'var(--ltl-navy)', borderRadius: 10 }}>
                    <i className="fas fa-check-circle me-2"></i>Message sent — we'll be in touch shortly.
                  </div>
                )}
                {status === 'error' && (
                  <div className="alert alert-danger mb-4">Something went wrong. Please call us directly.</div>
                )}

                <form onSubmit={submit}>
                  <div className="row g-3">
                    <div className="col-lg-6">
                      <div className="form-floating">
                        <input type="text" name="from_name" className="form-control" id="from_name" placeholder="Full Name" value={form.from_name} onChange={change} required />
                        <label htmlFor="from_name">Full Name</label>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-floating">
                        <input type="email" name="email" className="form-control" id="email" placeholder="Email Address" value={form.email} onChange={change} required />
                        <label htmlFor="email">Email Address</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="tel" name="phone" className="form-control" id="phone" placeholder="Phone Number" value={form.phone} onChange={change} required />
                        <label htmlFor="phone">Phone Number</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" name="subject" className="form-control" id="subject" placeholder="Subject" value={form.subject} onChange={change} required />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea name="message" className="form-control" id="message" placeholder="Your message" style={{ height: 140 }} value={form.message} onChange={change} required></textarea>
                        <label htmlFor="message">Your Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary w-100 py-3 rounded-pill" disabled={status === 'sending'}>
                        {status === 'sending'
                          ? <><span className="spinner-border spinner-border-sm me-2" role="status"></span>Sending…</>
                          : <><i className="fas fa-paper-plane me-2"></i>Send Message</>}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="container-fluid py-5" style={{ background: 'var(--ltl-smoke)' }}>
        <div className="container">
          <div className="text-center mb-4 wow fadeInUp">
            <p className="label-gold mb-2">Find Us</p>
            <h2 className="mb-0">Our Location</h2>
          </div>
          <div className="map-wrapper wow fadeInUp" data-wow-delay="0.2s">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d947.8562265141337!2d36.89229626954762!3d-1.3029259999177893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMTgnMTAuNSJTIDM2wrA1MyczNC42IkU!5e1!3m2!1sen!2ske!4v1753177593126!5m2!1sen!2ske"
              className="w-100" style={{ height: 420, border: 0, display: 'block' }} allowFullScreen loading="lazy" title="Lekisa Trading Location">
            </iframe>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
