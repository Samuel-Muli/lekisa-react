import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-5">
          <div className="row g-5">

            {/* Brand */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-item mb-4">
                <Link to="/home" className="p-0 mb-4 d-block text-decoration-none">
                  <h3 className="text-white mb-0" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, letterSpacing: '-.02em' }}>
                    <span style={{ color: 'var(--ltl-gold)' }}>L</span>TL
                    <span style={{ fontSize: '.7em', fontWeight: 500, opacity: .7, letterSpacing: 0 }}> Lekisa Trading</span>
                  </h3>
                </Link>
                <p className="text-white-50 mb-4">Your trusted partner in delivering top-tier industrial chemicals with commitment to quality and environmental responsibility.</p>
                <div className="footer-social d-flex gap-2">
                  <a className="btn" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn" href="#"><i className="fab fa-twitter"></i></a>
                  <a className="btn" href="#"><i className="fab fa-instagram"></i></a>
                  <a className="btn" href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="col-lg-2 col-md-6">
              <div className="footer-item mb-4">
                <h4 className="text-white mb-4">Quick Links</h4>
                <Link to="/about"   className="text-decoration-none"><i className="fas fa-angle-right me-2" style={{ color: 'var(--ltl-gold)' }}></i>About Us</Link>
                <Link to="/service" className="text-decoration-none"><i className="fas fa-angle-right me-2" style={{ color: 'var(--ltl-gold)' }}></i>Services</Link>
                <Link to="/staff"   className="text-decoration-none"><i className="fas fa-angle-right me-2" style={{ color: 'var(--ltl-gold)' }}></i>Our Team</Link>
                <Link to="/gallery" className="text-decoration-none"><i className="fas fa-angle-right me-2" style={{ color: 'var(--ltl-gold)' }}></i>Gallery</Link>
                <Link to="/contact" className="text-decoration-none"><i className="fas fa-angle-right me-2" style={{ color: 'var(--ltl-gold)' }}></i>Contact</Link>
              </div>
            </div>

            {/* Contact */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-item mb-4">
                <h4 className="text-white mb-4">Contact Info</h4>
                {[
                  { icon: 'fa-map-marker-alt', label: 'Address',  content: <p className="text-white-50 mb-0 small">Godown No.4, Off Outering Road<br />Donholm, Nairobi – KENYA</p> },
                  { icon: 'fa-envelope',       label: 'Email',    content: <a href="mailto:info@lekisatrading.co.ke" className="text-white-50 text-decoration-none small">info@lekisatrading.co.ke</a> },
                  { icon: 'fa-phone-alt',      label: 'Phone',    content: <><a href="tel:+254713506664" className="text-white-50 text-decoration-none small d-block">+254 713 506 664</a><a href="tel:+254741077018" className="text-white-50 text-decoration-none small d-block">+254 741 077 018</a></> },
                ].map(({ icon, label, content }, i) => (
                  <div className={`d-flex gap-3${i < 2 ? ' mb-3' : ''}`} key={label}>
                    <div className="btn-square bg-primary rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center">
                      <i className={`fas ${icon}`}></i>
                    </div>
                    <div>
                      <h6 className="text-white mb-1" style={{ fontFamily: "'Syne',sans-serif", fontSize: '.78rem', letterSpacing: '.08em', textTransform: 'uppercase' }}>{label}</h6>
                      {content}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map + newsletter */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-item mb-4">
                <h4 className="text-white mb-4">Location</h4>
                <div className="rounded-3 mb-4 overflow-hidden" style={{ border: '1px solid rgba(201,168,76,.15)' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d947.8562265141337!2d36.89229626954762!3d-1.3029259999177893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMTgnMTAuNSJTIDM2wrA1MyczNC42IkU!5e1!3m2!1sen!2ske!4v1753177593126!5m2!1sen!2ske"
                    width="100%" height="145" style={{ border: 0 }} allowFullScreen loading="lazy" title="Our Location">
                  </iframe>
                </div>
                <h4 className="text-white mb-3">Newsletter</h4>
                <p className="text-white-50 mb-3 small">Subscribe for product updates and industry news.</p>
                <div className="position-relative">
                  <input className="form-control rounded-pill py-3 ps-4 pe-5" type="email" placeholder="Your email address" />
                  <button type="button" className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">Sign Up</button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom call row */}
          <div className="row mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,.06)' }}>
            <div className="col-12 text-center">
              <div className="d-flex align-items-center justify-content-center gap-3">
                <div className="btn-square bg-primary rounded-circle d-flex align-items-center justify-content-center">
                  <i className="fa fa-phone-alt"></i>
                </div>
                <div className="text-start">
                  <span className="text-white-50 small" style={{ fontFamily: "'Syne',sans-serif", fontSize: '.72rem', letterSpacing: '.1em', textTransform: 'uppercase' }}>Call to Our Experts</span>
                  <a href="tel:+254713506664" className="d-block text-white text-decoration-none" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.1rem' }}>+254 713 506 664</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <span className="text-white-50">&copy; <Link to="/home">2026 Lekisa Trading Limited</Link> — All rights reserved.</span>
            </div>
            <div className="col-md-6 text-center text-md-end text-white-50">
              Designed by <a href="https://muli-samuel.onrender.com" target="_blank" rel="noreferrer">Samuel Muli</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
