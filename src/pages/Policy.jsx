import { Link } from 'react-router-dom';
import Topbar    from '../components/Topbar';
import Navbar    from '../components/Navbar';
import Footer    from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import useWow    from '../hooks/useWow';

const COMMITMENTS = [
  { icon: 'fa-shield-alt',   title: 'Safeguard Quality & Safety',     desc: 'Continuously enhance the quality, environment, health and occupational safety of our personnel at all times.' },
  { icon: 'fa-ban',          title: 'Eliminate Non-Conformances',      desc: 'Identify and eliminate quality non-conformances through rigorous quality control processes and systematic review.' },
  { icon: 'fa-chart-line',   title: 'Performance Framework',           desc: 'Establish a framework for defining quality and performance goals, and regularly evaluate and enhance processes, services, and product quality.' },
  { icon: 'fa-user-check',   title: 'Customer Satisfaction',           desc: 'Surpass customer requirements and ensure top-notch satisfaction to all customers we serve.' },
  { icon: 'fa-balance-scale',title: 'Regulatory Compliance',           desc: 'Adhere to all relevant environmental and safety laws, values, and regulations as we believe it is essential for conducting business responsibly.' },
  { icon: 'fa-recycle',      title: 'Environmental Responsibility',    desc: 'Reduce our environmental footprint by preventing pollution, minimizing waste, and promoting sustainable business practices.' },
  { icon: 'fa-users',        title: 'Employee Participation',          desc: 'Ensure employees actively participate in and are consulted on matters concerning occupational health and safety.' },
  { icon: 'fa-comments',     title: 'Transparent Communication',       desc: 'Maintain transparent communication with all stakeholders so they understand our policies, standards, programs, and performance.' },
];

const ONGOING = [
  { icon: 'fa-sync-alt',      title: 'Regular Reviews',         desc: 'We continuously evaluate our policies to ensure compliance with changing regulations and industry standards.' },
  { icon: 'fa-chart-pie',     title: 'Performance Monitoring',  desc: 'We track our performance against established benchmarks and goals, acting promptly on any deviations.' },
  { icon: 'fa-graduation-cap',title: 'Continuous Improvement',  desc: 'We invest in training and development to enhance our practices, products, and team capabilities continually.' },
];

export default function Policy() {
  useWow();

  return (
    <>
      <Topbar />
      <Navbar />
      <Breadcrumb label="Our Standards" title="Policy & Compliance" crumbs={[{ label: 'Home', to: '/home' }, { label: 'About', to: '/about' }, { label: 'Policy' }]} />

      {/* CEO Statement */}
      <div className="container-fluid py-5 bg-white">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-4 wow fadeInLeft">
              <img src="img/ceo.jpg" className="img-fluid rounded-3 shadow-sm" alt="Stephen Kioko Mwania — CEO" style={{ border: '1px solid rgba(11,30,61,.07)' }} />
            </div>
            <div className="col-lg-8 wow fadeInRight">
              <p className="label-gold mb-2">Policy &amp; Compliance Statement</p>
              <h2 className="mb-4">From Our Director &amp; CEO</h2>
              <div className="policy-statement mb-4">
                <blockquote className="blockquote mb-3">
                  <p>"We aim at consistently enhancing the quality of our products while ensuring the safety of both individuals and the environment. We commit and are dedicated to safeguarding and continuously enhancing the quality, environment, health and occupational safety of our personnel at all times."</p>
                </blockquote>
                <footer className="blockquote-footer">
                  Stephen Kioko Mwania, <cite>Director &amp; CEO — Lekisa Trading Limited</cite>
                </footer>
              </div>
              <Link to="/contact" className="btn btn-primary rounded-pill py-3 px-5">Speak With Our Team</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Commitments grid */}
      <div className="container-fluid py-5" style={{ background: 'var(--ltl-smoke)' }}>
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" style={{ maxWidth: 680 }}>
            <p className="label-gold mb-2">What We Stand For</p>
            <h2 className="display-5 mb-3">Our Commitments</h2>
            <p className="lead">The standards and obligations we hold ourselves to across every area of our operations.</p>
          </div>
          <div className="row g-4">
            {COMMITMENTS.map((c, i) => (
              <div key={c.title} className="col-lg-6 wow fadeInUp" data-wow-delay={`${0.1 * (i + 1)}s`}>
                <div className="policy-item">
                  <div className="policy-icon"><i className={`fas ${c.icon}`}></i></div>
                  <div>
                    <h5>{c.title}</h5>
                    <p>{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ongoing commitment */}
      <div className="container-fluid commitment-section py-5">
        <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
          <div className="text-center mx-auto pb-5 wow fadeInUp" style={{ maxWidth: 680 }}>
            <p className="label-gold mb-2">Continuous Improvement</p>
            <h2 className="display-5 text-white mb-3">Our Ongoing Commitment</h2>
            <p className="lead text-white-50">This policy will undergo regular reviews to ensure its continued alignment with regulations, standards, and applicable laws in all our operational locations.</p>
          </div>
          <div className="row g-4">
            {ONGOING.map((o, i) => (
              <div key={o.title} className="col-md-4 wow fadeInUp" data-wow-delay={`${0.15 * (i + 1)}s`}>
                <div className="commitment-card">
                  <div className="commitment-card-icon"><i className={`fas ${o.icon}`}></i></div>
                  <h4>{o.title}</h4>
                  <p>{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container-fluid py-5 bg-white">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center wow fadeInUp">
              <p className="label-gold mb-2">Questions?</p>
              <h2 className="display-5 mb-4">Have Questions About Our Policies?</h2>
              <p className="lead text-muted mb-5">Contact us to learn more about our commitment to quality, safety, and environmental responsibility.</p>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <Link to="/contact" className="btn btn-primary rounded-pill py-3 px-5">Contact Us</Link>
                <Link to="/about"   className="btn btn-outline-primary rounded-pill py-3 px-5">About Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
