import { Link } from 'react-router-dom';
import Topbar    from '../components/Topbar';
import Navbar    from '../components/Navbar';
import Footer    from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import useWow       from '../hooks/useWow';
import useCounterUp from '../hooks/useCounterUp';

const VALUES = [
  { icon: 'fa-award',         title: 'Quality Assurance',           desc: 'We guarantee reliable provision of high quality chemicals that align with industry benchmarks.' },
  { icon: 'fa-users',         title: 'Customer Commitment',         desc: 'We put customer needs first by offering responsive services, dependable supply and customized solutions.' },
  { icon: 'fa-handshake',     title: 'Integrity & Transparency',    desc: 'We deploy unmatched commitment to ethical standards, ensuring transparency in every interaction.' },
  { icon: 'fa-balance-scale', title: 'Accountability',              desc: 'We steadfastly uphold our commitments and stand behind our products and services.' },
  { icon: 'fa-lightbulb',     title: 'Innovation',                  desc: 'We continuously seek better ways to serve our customers beyond obvious solutions.' },
  { icon: 'fa-leaf',          title: 'Environmental Responsibility', desc: 'We promote sustainable practices and comply with regulatory standards to reduce our footprint.' },
];

const TEAM = [
  { img: 'img/ceo.jpg',                name: 'Stephen Kioko Mwania', role: 'Director & CEO',         delay: '0.2s' },
  { img: 'img/md.jpg',                 name: 'Managing Director',    role: 'Managing Director',       delay: '0.3s' },
  { img: 'img/operations-manager.jpg', name: 'Chief Ops Manager',    role: 'Operations Leadership',   delay: '0.4s' },
  { img: 'img/secretary.jpg',          name: 'Company Secretary',    role: 'Legal & Compliance',      delay: '0.5s' },
];

export default function About() {
  useWow();
  useCounterUp();

  return (
    <>
      <Topbar />
      <Navbar />
      <Breadcrumb label="Who We Are" title="About Us" crumbs={[{ label: 'Home', to: '/home' }, { label: 'About Us' }]} />

      {/* About Company */}
      <div className="container-fluid py-5 bg-white">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInLeft">
              <p className="label-gold mb-2">Our Company</p>
              <h2 className="display-5 mb-4">Who We Are</h2>
              <p className="text-muted mb-4">Lekisa Trading Limited is a reputable and extensively diversified company specializing in industrial chemicals. At our core lie the fundamental principles of integrity, customer centricity, and partnerships.</p>
              <p className="text-muted mb-5">We strive to build trusted partnerships with our clients, customers, and stakeholders which are vital to our operations. Quality isn't just a strategy — it is the cornerstone of our competitive edge.</p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/contact" className="btn btn-primary rounded-pill py-3 px-5">Contact Us</Link>
                <Link to="/service" className="btn btn-outline-primary rounded-pill py-3 px-5">Our Services</Link>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight">
              <div className="row g-4">
                <div className="col-12">
                  <img src="img/a1.jpg" className="img-fluid rounded-3 shadow-sm" alt="Our Facility" style={{ border: '1px solid rgba(11,30,61,.07)' }} />
                </div>
                {[{ n: 11, l: 'Chemical Agents' }, { n: 369, l: 'Successful Deliveries' }].map(s => (
                  <div key={s.l} className="col-sm-6">
                    <div className="rounded-3 p-4 text-center" style={{ background: 'var(--ltl-gold-pale)', border: '1px solid rgba(201,168,76,.25)' }}>
                      <h3 className="mb-1" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: 'var(--ltl-navy)' }} data-toggle="counter-up">{s.n}</h3>
                      <p className="mb-0 small text-muted" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase' }}>{s.l}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container-fluid mission-vision-section py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" style={{ maxWidth: 700 }}>
            <p className="label-gold mb-2">Purpose & Direction</p>
            <h2 className="display-5 mb-3">Mission &amp; Vision</h2>
          </div>
          <div className="row g-4">
            {[
              { icon: 'fa-bullseye', title: 'Our Mission', text: 'To reliably and efficiently supply top-tier industrial chemicals that meet the diverse needs of our customers, while upholding our commitment to environmental responsibility.' },
              { icon: 'fa-eye',      title: 'Our Vision',  text: 'To be a trusted partner and industry leader in supplying top-quality industrial chemicals, fostering sustainable growth and excellence across global markets.' },
            ].map((mv, i) => (
              <div key={mv.title} className="col-lg-6 wow fadeInUp" data-wow-delay={`${0.1 * (i + 1)}s`}>
                <div className="card value-card h-100 border-0">
                  <div className="card-body text-center p-5">
                    <div className="value-icon"><i className={`fas ${mv.icon}`}></i></div>
                    <h3 className="mb-3">{mv.title}</h3>
                    <p className="text-muted mb-0">{mv.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="container-fluid py-5 bg-white">
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

      {/* Stats */}
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

      {/* Team */}
      <div className="container-fluid py-5" style={{ background: 'var(--ltl-smoke)' }}>
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" style={{ maxWidth: 700 }}>
            <p className="label-gold mb-2">Our People</p>
            <h2 className="display-5 mb-3">Meet Our Expert Staff</h2>
            <p className="lead">The top leadership, operations and support teams committed to excellence.</p>
          </div>
          <div className="row g-4 justify-content-center">
            {TEAM.map(m => (
              <div key={m.name} className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay={m.delay}>
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
            <Link to="/staff" className="btn btn-outline-primary rounded-pill py-3 px-5">View Full Team</Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container-fluid py-5 bg-white">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInLeft">
              <img src="img/why-choose-us.jpg" className="img-fluid rounded-3 shadow-sm" alt="Why Choose Lekisa" style={{ border: '1px solid rgba(11,30,61,.07)' }} />
            </div>
            <div className="col-lg-6 wow fadeInRight">
              <p className="label-gold mb-2">Why Choose Us</p>
              <h2 className="display-5 mb-4">The Lekisa Advantage</h2>
              <p className="text-muted mb-5">In the complex and diverse business of chemicals, our company embodies excellence in supplying and distributing chemical solutions.</p>
              {[
                { title: 'Expertise & Experience',  desc: 'Extensive knowledge of industrial chemicals and their applications across diverse industries.' },
                { title: 'Reliable Supply Chain',   desc: 'Efficient logistics ensuring timely and safe delivery of chemicals to your location.' },
                { title: 'Customized Solutions',    desc: 'Tailored approaches to meet specific industry needs and requirements.' },
              ].map(item => (
                <div key={item.title} className="d-flex mb-4 gap-4 align-items-start">
                  <div className="btn-lg-square rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center"
                    style={{ background: 'var(--ltl-gold-pale)', color: 'var(--ltl-gold)', minWidth: 56 }}>
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <h5 className="mb-1" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700 }}>{item.title}</h5>
                    <p className="text-muted mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container-fluid cta-section">
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center wow fadeInUp">
              <p className="label-gold mb-3">Partner With Us</p>
              <h2 className="display-5 text-white mb-4">Ready to Work Together?</h2>
              <p className="lead text-white-50 mb-5">Experience the Lekisa difference in chemical distribution.</p>
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
