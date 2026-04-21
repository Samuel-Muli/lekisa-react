import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Topbar   from '../components/Topbar';
import Navbar   from '../components/Navbar';
import Footer   from '../components/Footer';
import useWow       from '../hooks/useWow';
import useCounterUp from '../hooks/useCounterUp';

const VALUES = [
  { icon: 'fa-award',        title: 'Quality Assurance',          desc: 'We guarantee reliable provision of high quality chemicals that align with industry benchmarks and customer requirements.' },
  { icon: 'fa-users',        title: 'Customer Commitment',        desc: 'We put customer needs and satisfaction first by offering responsive services, dependable supply and customized solutions.' },
  { icon: 'fa-handshake',    title: 'Integrity & Transparency',   desc: 'We deploy unmatched commitment to ethical standards in all our dealings, ensuring transparency in every interaction.' },
  { icon: 'fa-balance-scale',title: 'Accountability',             desc: 'We steadfastly uphold our commitments and are responsible for what we do, standing behind our products and services.' },
  { icon: 'fa-lightbulb',    title: 'Innovation',                 desc: 'We go beyond obvious solutions and business trends, continuously seeking better ways to serve our customers.' },
  { icon: 'fa-leaf',         title: 'Environmental Responsibility',desc: 'We promote sustainable practices and comply with regulatory standards to reduce our environmental footprint.' },
];

const SERVICES = [
  { icon: 'fa-flask',        title: 'Chemical Procurement',    desc: 'We source high-quality industrial chemicals from reputable manufacturers worldwide, ensuring consistent supply and competitive pricing.' },
  { icon: 'fa-truck-loading',title: 'Logistics & Distribution',desc: 'Our efficient logistics network ensures timely and safe delivery of chemicals to your location, with proper handling and documentation.' },
  { icon: 'fa-cogs',         title: 'Technical Support',       desc: 'Our team of experts provides technical guidance on chemical applications, handling, storage, and safety protocols.' },
];

const TEAM = [
  { img: 'img/ceo.jpg',                  name: 'Stephen Kioko Mwania', role: 'Director & CEO',           delay: '0.2s' },
  { img: 'img/md.jpg',                   name: 'Managing Director',    role: 'Managing Director',         delay: '0.4s' },
  { img: 'img/operations-manager.jpg',   name: 'Chief Operations Mgr', role: 'Operations Leadership',    delay: '0.6s' },
];

export default function Home() {
  useWow();
  useCounterUp();

  /* Spinner hide */
  useEffect(() => {
    const el = document.getElementById('spinner');
    if (el) { el.classList.remove('show'); }
  }, []);

  return (
    <>
      {/* Spinner */}
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="visually-hidden">Loading…</span>
        </div>
      </div>

      <Topbar />
      <Navbar />

      {/* ── Hero ── */}
      <div className="container-fluid hero-section">
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-7 wow fadeInLeft">
              <p className="label-gold mb-3">Welcome to Lekisa Trading Limited</p>
              <h1 className="display-3 mb-4">Your Trusted Chemical Distribution Partner</h1>
              <p className="lead text-white-50 mb-5">Providing top-tier industrial chemicals with commitment to quality, safety, and environmental responsibility across East Africa.</p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/contact" className="btn btn-primary rounded-pill py-3 px-5">Get In Touch</Link>
                <Link to="/about"   className="btn btn-outline-light rounded-pill py-3 px-5">Learn More</Link>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInRight d-none d-lg-block">
              <img src="img/hero-image.png" className="img-fluid" alt="Industrial Chemicals" style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,.3))' }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Mission & Vision ── */}
      <div className="container-fluid mission-vision-section py-5">
        <div className="container py-5">
          <div className="row g-4">
            {[
              { icon: 'fa-bullseye', title: 'Our Mission', text: 'To reliably and efficiently supply top-tier industrial chemicals that meet the diverse needs of our customers, while upholding our commitment to environmental responsibility and sustainable practices.' },
              { icon: 'fa-eye',      title: 'Our Vision',  text: 'To be a trusted partner and industry leader in supplying top-quality industrial chemicals, fostering sustainable growth and excellence across global markets.' },
            ].map((mv) => (
              <div key={mv.title} className="col-lg-6 wow fadeInUp">
                <div className="card value-card h-100 border-0">
                  <div className="card-body text-center p-5">
                    <div className="value-icon"><i className={`fas ${mv.icon}`}></i></div>
                    <h3 className="card-title mb-3">{mv.title}</h3>
                    <p className="card-text text-muted">{mv.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── About ── */}
      <div className="container-fluid bg-white py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInLeft">
              <p className="label-gold mb-2">About Our Company</p>
              <h2 className="display-5 mb-4">Who We Are</h2>
              <p className="text-muted mb-4">Lekisa Trading Limited is a reputable and extensively diversified company specializing in industrial chemicals. At our core lie the fundamental principles of integrity, customer centricity, and partnerships.</p>
              <p className="text-muted mb-4">We strive to build trusted partnerships with our clients, customers, and stakeholders which are vital to our operations. Quality isn't just a strategy — it is the cornerstone of our competitive edge.</p>
              <Link to="/about" className="btn btn-primary rounded-pill py-3 px-5">More About Us</Link>
            </div>
            <div className="col-lg-6 wow fadeInRight">
              <div className="row g-4">
                <div className="col-12">
                  <img src="img/a1.jpg" className="img-fluid rounded-3 shadow-sm" alt="Our Facility" style={{ border: '1px solid rgba(11,30,61,.07)' }} />
                </div>
                {[{ n: 11, label: 'Chemical Agents' }, { n: 369, label: 'Successful Deliveries' }].map(s => (
                  <div key={s.label} className="col-sm-6">
                    <div className="rounded-3 p-4 text-center" style={{ background: 'var(--ltl-gold-pale)', border: '1px solid rgba(201,168,76,.25)' }}>
                      <h3 className="mb-1" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: 'var(--ltl-navy)' }} data-toggle="counter-up">{s.n}</h3>
                      <p className="mb-0 small text-muted" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase' }}>{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Core Values ── */}
      <div className="container-fluid py-5" style={{ background: 'var(--ltl-smoke)' }}>
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" style={{ maxWidth: 700 }}>
            <p className="label-gold mb-2">Our Foundation</p>
            <h2 className="display-5 mb-3">Core Values</h2>
            <p className="lead">The principles that guide everything we do</p>
          </div>
          <div className="row g-4">
            {VALUES.map((v, i) => (
              <div key={v.title} className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay={`${0.1 * (i + 1)}s`}>
                <div className="card value-card h-100">
                  <div className="card-body p-4 text-center">
                    <div className="value-icon"><i className={`fas ${v.icon}`}></i></div>
                    <h5 className="card-title mb-2" style={{ fontFamily: "'Syne',sans-serif" }}>{v.title}</h5>
                    <p className="card-text text-muted">{v.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="container-fluid stats-section py-5">
        <div className="container py-3 position-relative" style={{ zIndex: 2 }}>
          <div className="row">
            {[{ n: 11, l: 'Chemical Agents' }, { n: 369, l: 'Successful Deliveries' }, { n: 13, l: 'Skilled Workers' }, { n: 67, l: 'Happy Clients' }].map((s, i) => (
              <div key={s.l} className="col-md-3 col-6">
                <div className="stat-item wow fadeInUp" data-wow-delay={`${0.1 * (i + 1)}s`}>
                  <div className="stat-number" data-toggle="counter-up">{s.n}</div>
                  <p>{s.l}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services ── */}
      <div className="container-fluid py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" style={{ maxWidth: 700 }}>
            <p className="label-gold mb-2">Our Services</p>
            <h2 className="display-5 mb-3">Comprehensive Chemical Solutions</h2>
            <p className="lead">End-to-end distribution services tailored to your industry needs</p>
          </div>
          <div className="row g-4 justify-content-center">
            {SERVICES.map((s, i) => (
              <div key={s.title} className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay={`${0.2 * (i + 1)}s`}>
                <div className="service-card card h-100">
                  <div className="card-body p-4 text-center">
                    <div className="service-icon mx-auto mb-3"><i className={`fas ${s.icon}`}></i></div>
                    <h4 className="card-title mb-3" style={{ fontFamily: "'Syne',sans-serif" }}>{s.title}</h4>
                    <p className="card-text text-muted">{s.desc}</p>
                    <Link to="/service" className="btn btn-primary rounded-pill mt-3">Learn More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5 wow fadeInUp">
            <Link to="/service" className="btn btn-outline-primary rounded-pill py-3 px-5">View All Services</Link>
          </div>
        </div>
      </div>

      {/* ── CEO Statement ── */}
      <div className="container-fluid py-5" style={{ background: 'var(--ltl-smoke)' }}>
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-4 wow fadeInLeft">
              <img src="img/ceo.jpg" className="img-fluid rounded-3 shadow-sm" alt="Stephen Kioko Mwania — CEO" style={{ border: '1px solid rgba(11,30,61,.07)' }} />
            </div>
            <div className="col-lg-8 wow fadeInRight">
              <div className="ceo-statement">
                <p className="label-gold mb-2">Policy & Compliance Statement</p>
                <h3 className="mb-4">From Our Director &amp; CEO</h3>
                <blockquote className="blockquote mb-4">
                  <p>"We aim at consistently enhancing the quality of our products while ensuring the safety of both individuals and the environment. We commit and are dedicated to safeguard and continuously enhance the quality, environment, health and occupational safety of our personnel at all times."</p>
                  <footer className="blockquote-footer mt-3">Stephen Kioko Mwania, <cite>Director &amp; CEO</cite></footer>
                </blockquote>
                <Link to="/policy" className="btn btn-primary rounded-pill py-3 px-5">Read Our Full Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Team ── */}
      <div className="container-fluid py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" style={{ maxWidth: 700 }}>
            <p className="label-gold mb-2">Our Team</p>
            <h2 className="display-5 mb-3">Meet Our Expert Staff</h2>
            <p className="lead">Dedicated professionals committed to excellence</p>
          </div>
          <div className="row g-4 justify-content-center">
            {TEAM.map(m => (
              <div key={m.name} className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay={m.delay}>
                <div className="team-member">
                  <img src={m.img} className="team-img" alt={m.name} />
                  <h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700 }}>{m.name}</h4>
                  <p className="text-primary mb-3">{m.role}</p>
                  <div className="d-flex justify-content-center gap-2">
                    {['fab fa-linkedin-in', 'fas fa-envelope'].map(ic => (
                      <a key={ic} className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: 36, height: 36, background: 'var(--ltl-gold-pale)', color: 'var(--ltl-navy)' }} href="#">
                        <i className={ic}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5 wow fadeInUp">
            <Link to="/staff" className="btn btn-outline-primary rounded-pill py-3 px-5">Meet the Full Team</Link>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="container-fluid cta-section">
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center wow fadeInUp">
              <p className="label-gold mb-3">Partner With Us</p>
              <h2 className="display-5 text-white mb-4">Ready to Work Together?</h2>
              <p className="lead text-white-50 mb-5">Experience the Lekisa difference in chemical distribution. Contact us today.</p>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <Link to="/contact"     className="btn btn-primary rounded-pill py-3 px-5">Get In Touch</Link>
                <a href="tel:+254713506664" className="btn btn-outline-light rounded-pill py-3 px-5">Call Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
