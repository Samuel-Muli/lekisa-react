import { Link } from 'react-router-dom';
import Topbar    from '../components/Topbar';
import Navbar    from '../components/Navbar';
import Footer    from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import useWow    from '../hooks/useWow';

const SERVICES = [
  {
    img:   'img/1.jpg',
    alt:   'Chemical Engineering',
    badge: 'Quality Assured',
    icon:  'fa-flask',
    title: 'Chemical Engineering',
    desc:  'Our chemical engineering services deliver comprehensive solutions tailored to diverse industrial needs, with a strong emphasis on environmental responsibility and sustainable practices.',
    features: [
      'Process design and optimization for enhanced efficiency',
      'Chemical plant design adhering to industry standards',
      'Environmental engineering with sustainable practices',
      'Waste management and treatment solutions',
      'Safety assessments and hazard analyses',
      'Research and development for innovation',
      'Expert consultancy and technical evaluations',
      'Rigorous quality control measures',
      'Training programs and ongoing technical support',
    ],
    delay: '0.1s',
  },
  {
    img:   'img/2.jpeg',
    alt:   'Mechanical Engineering',
    badge: 'Innovation Focused',
    icon:  'fa-cogs',
    title: 'Mechanical Engineering & Design',
    desc:  'We deliver robust mechanical engineering solutions with innovative designs that prioritize efficiency, reliability, and environmental sustainability.',
    features: [
      'Innovative machinery and equipment design',
      'Detailed technical drawings and 3D modeling',
      'Prototype development and testing',
      'Manufacturing process optimization',
      'Eco-friendly design practices',
      'Comprehensive safety and reliability assessments',
      'Advanced mechanical technology development',
      'Expert consultancy from concept to implementation',
      'Stringent testing and validation processes',
    ],
    delay: '0.2s',
  },
  {
    img:   'img/3.jpeg',
    alt:   'Process Engineering',
    badge: 'Efficiency Driven',
    icon:  'fa-project-diagram',
    title: 'Process Engineering & Design',
    desc:  'Our process engineering services optimize industrial operations through innovative techniques and advanced technologies, ensuring higher performance and sustainability.',
    features: [
      'Industrial process development and refinement',
      'State-of-the-art facility design',
      'Process optimization for maximum productivity',
      'Advanced technology integration',
      'Comprehensive safety assessments',
      'Environmental compliance and emissions control',
      'Waste management solutions',
      'Rigorous quality testing and monitoring',
      'Project planning and feasibility studies',
    ],
    delay: '0.3s',
  },
  {
    img:   'img/4.jpg',
    alt:   'Project Management',
    badge: 'Results Guaranteed',
    icon:  'fa-tasks',
    title: 'Project Management',
    desc:  'We guide clients through every project phase with meticulous planning and execution, ensuring successful outcomes that align with objectives and timelines.',
    features: [
      'Comprehensive project planning and scoping',
      'Detailed objective and deliverable definition',
      'Budget and timeline management',
      'Resource coordination and allocation',
      'Stakeholder communication management',
      'Progress monitoring and issue identification',
      'Corrective action implementation',
      'Quality assurance protocols',
      'Risk assessment and mitigation',
    ],
    delay: '0.4s',
  },
];

const VALUES = [
  { icon: 'fa-award',         title: 'Quality Assurance',           desc: 'We guarantee reliable provision of high quality chemicals that align with industry benchmarks.' },
  { icon: 'fa-users',         title: 'Customer Commitment',         desc: 'We put customer needs first by offering responsive services, dependable supply, and customized solutions.' },
  { icon: 'fa-handshake',     title: 'Integrity & Transparency',    desc: 'We deploy unmatched commitment to ethical standards in all our dealings, ensuring trust and accountability.' },
  { icon: 'fa-lightbulb',     title: 'Innovation',                  desc: 'We go beyond obvious solutions and business trends, continuously improving our services and products.' },
  { icon: 'fa-leaf',          title: 'Environmental Responsibility', desc: 'We promote sustainable practices and comply with regulatory standards to reduce environmental footprint.' },
  { icon: 'fa-check-double',  title: 'Accountability',              desc: 'We steadfastly uphold our commitments and are responsible for what we do, ensuring client satisfaction.' },
];

const VALUE_PILLS = ['Quality Assurance', 'Customer Commitment', 'Integrity & Transparency', 'Accountability', 'Innovation', 'Environmental Responsibility'];

export default function Service() {
  useWow();

  return (
    <>
      <Topbar />
      <Navbar />
      <Breadcrumb label="What We Offer" title="Our Services" crumbs={[{ label: 'Home', to: '/home' }, { label: 'Services' }]} />

      {/* Commitment intro */}
      <div className="container-fluid py-5 bg-white">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInLeft">
              <img src="img/service-mission.jpg" className="img-fluid rounded-3 shadow-sm" alt="Our Commitment" style={{ border: '1px solid rgba(11,30,61,.07)' }} />
            </div>
            <div className="col-lg-6 wow fadeInRight">
              <p className="label-gold mb-2">Our Commitment</p>
              <h2 className="display-5 mb-4">Delivering Excellence Through Our Values</h2>
              <p className="text-muted mb-4">At Lekisa Trading Limited, our services are built upon a foundation of integrity, quality, and customer commitment. We strive to be your trusted partner in industrial chemical solutions.</p>
              <p className="text-muted mb-5">Every service we deliver is guided by the same core principles that have made us a reliable name in the industry.</p>
              <div className="d-flex flex-wrap mb-5">
                {VALUE_PILLS.map(p => (
                  <span key={p} className="value-pill">{p}</span>
                ))}
              </div>
              <Link to="/about" className="btn btn-primary rounded-pill py-3 px-5">Learn More About Us</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="container-fluid py-5" style={{ background: 'var(--ltl-smoke)' }}>
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" style={{ maxWidth: 680 }}>
            <p className="label-gold mb-2">Our Specialisations</p>
            <h2 className="display-5 mb-3">Comprehensive Chemical Solutions</h2>
            <p className="lead">Leveraging our expertise to deliver top-tier industrial chemical services with a commitment to quality and sustainability.</p>
          </div>

          <div className="row g-4 justify-content-center">
            {SERVICES.map(svc => (
              <div key={svc.title} className="col-md-6 col-xl-6 wow fadeInUp" data-wow-delay={svc.delay}>
                <div className="service-detail-card">
                  <div className="service-img-wrap">
                    <img src={svc.img} alt={svc.alt} loading="lazy" />
                    <div className="service-img-overlay"></div>
                    <span className="service-badge">{svc.badge}</span>
                  </div>
                  <div className="service-detail-body">
                    <h4><i className={`fas ${svc.icon} me-2`} style={{ color: 'var(--ltl-gold)' }}></i>{svc.title}</h4>
                    <p>{svc.desc}</p>
                    <ul className="service-feature-list">
                      {svc.features.map(f => <li key={f}>{f}</li>)}
                    </ul>
                    <Link to="/contact" className="btn btn-outline-primary rounded-pill py-2 px-4">Enquire About This Service</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container-fluid py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" style={{ maxWidth: 680 }}>
            <p className="label-gold mb-2">The Lekisa Advantage</p>
            <h2 className="display-5 mb-3">Why Choose Us</h2>
            <p className="lead">In the complex business of chemicals, our company embodies excellence in supplying and distributing chemical solutions.</p>
          </div>
          <div className="row g-4 justify-content-center">
            {VALUES.map((v, i) => (
              <div key={v.title} className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay={`${0.1 * (i + 1)}s`}>
                <div className="card value-card h-100">
                  <div className="card-body p-4 text-center">
                    <div className="value-icon"><i className={`fas ${v.icon}`}></i></div>
                    <h5 className="mb-2" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700 }}>{v.title}</h5>
                    <p className="text-muted small">{v.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container-fluid cta-section">
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center wow fadeInUp">
              <p className="label-gold mb-3">Ready to Get Started?</p>
              <h2 className="display-5 text-white mb-4">Speak With Our Experts</h2>
              <p className="lead text-white-50 mb-5">Contact us today to discuss your industrial chemical requirements and how we can tailor our services to your needs.</p>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <Link to="/contact"        className="btn btn-primary rounded-pill py-3 px-5">Get In Touch</Link>
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
