import { Link } from 'react-router-dom';
import Topbar    from '../components/Topbar';
import Navbar    from '../components/Navbar';
import Footer    from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import useWow       from '../hooks/useWow';
import useCounterUp from '../hooks/useCounterUp';

const TEAM = [
  {
    img:   'img/ceo.jpg',
    name:  'Stephen Kioko Mwania',
    role:  'Director & C.E.O',
    dept:  'Leadership',
    bio:   'Founding director and chief executive driving Lekisa Trading\'s strategic vision, client partnerships, and commitment to quality in chemical distribution.',
    delay: '0.1s',
  },
  {
    img:   'img/md.jpg',
    name:  'James Mulinge',
    role:  'Managing Director',
    dept:  'Leadership',
    bio:   'Oversees the day-to-day management of the company\'s operations, supply chain, and client relationships across all business divisions.',
    delay: '0.2s',
  },
  {
    img:   'img/operations-manager.jpg',
    name:  'Sarah Chemutai',
    role:  'Chief Operations Manager',
    dept:  'Operations',
    bio:   'Leads logistics, warehouse management, and distribution operations — ensuring every delivery meets our strict standards for safety and timeliness.',
    delay: '0.3s',
  },
  {
    img:   'img/secretary.jpg',
    name:  'Grace Auma',
    role:  'Company Secretary',
    dept:  'Legal & Compliance',
    bio:   'Manages corporate governance, regulatory compliance, and legal documentation — keeping the company aligned with all applicable laws and standards.',
    delay: '0.4s',
  },
];

const STATS = [
  { n: 13,  label: 'Team Members'   },
  { n: 4,   label: 'Departments'    },
  { n: 67,  label: 'Happy Clients'  },
  { n: 369, label: 'Deliveries Made'},
];

const CULTURE = [
  { icon: 'fa-handshake', title: 'Integrity',     desc: 'We hold ourselves to the highest ethical standards in every decision we make.' },
  { icon: 'fa-lightbulb', title: 'Innovation',    desc: 'We encourage creative thinking and new approaches to solve complex problems.' },
  { icon: 'fa-users',     title: 'Collaboration', desc: 'We work as one team, sharing knowledge and supporting each other to deliver results.' },
  { icon: 'fa-award',     title: 'Excellence',    desc: 'We hold ourselves accountable to the highest quality in everything we deliver.' },
];

const SOCIAL_ICONS = ['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-linkedin-in', 'fab fa-instagram'];

export default function Staff() {
  useWow();
  useCounterUp();

  return (
    <>
      <Topbar />
      <Navbar />
      <Breadcrumb label="The People Behind the Brand" title="Our Staff" crumbs={[{ label: 'Home', to: '/home' }, { label: 'Staff' }]} />

      {/* Team grid */}
      <div className="container-fluid py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" style={{ maxWidth: 720 }}>
            <p className="label-gold mb-2">Our Team</p>
            <h2 className="display-5 mb-4">Meet Our Expert Staff</h2>
            <p className="lead mb-3">The top leadership, operations and support teams at Lekisa Trading Limited are committed to providing top-tier, adaptable and economical solutions for diverse industries.</p>
            <p className="text-muted" style={{ fontSize: '.95rem' }}>Over time, we have built trusted collaborations with reputable businesses of various scales nationwide and across the region.</p>
          </div>

          <div className="row g-4 justify-content-center">
            {TEAM.map(member => (
              <div key={member.name} className="col-sm-6 col-lg-3 wow fadeInUp" data-wow-delay={member.delay}>
                <StaffCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="container-fluid team-stats-strip">
        <div className="container">
          <div className="row">
            {STATS.map((s, i) => (
              <div key={s.label} className="col-6 col-md-3">
                <div className="team-stat-item">
                  <div className="team-stat-num" data-toggle="counter-up">{s.n}</div>
                  <p className="team-stat-label">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Culture */}
      <div className="container-fluid py-5" style={{ background: 'var(--ltl-smoke)' }}>
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeInLeft">
              <p className="label-gold mb-2">Our Culture</p>
              <h2 className="display-5 mb-4">A Team Built on Shared Values</h2>
              <p className="text-muted mb-4">Every member of the Lekisa Trading team is selected and developed around the same principles that guide our business — integrity, accountability, and a genuine commitment to the people we serve.</p>
              <p className="text-muted mb-5">We invest in our people because we know that exceptional service starts from within. Our team's expertise and dedication are what set us apart.</p>
              <Link to="/contact" className="btn btn-primary rounded-pill py-3 px-5">Get In Touch</Link>
            </div>
            <div className="col-lg-7 wow fadeInRight">
              <div className="row g-3">
                {CULTURE.map((c, i) => (
                  <div key={c.title} className="col-6">
                    <div className="rounded-3 p-4 h-100" style={{ background: 'var(--ltl-white)', border: '1px solid rgba(11,30,61,.07)' }}>
                      <div className="mb-3" style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--ltl-gold-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ltl-gold)' }}>
                        <i className={`fas ${c.icon}`}></i>
                      </div>
                      <h6 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: 'var(--ltl-navy)' }}>{c.title}</h6>
                      <p className="mb-0 small text-muted" style={{ fontFamily: "'Lora',Georgia,serif" }}>{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join us CTA */}
      <div className="container-fluid join-section py-5">
        <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center wow fadeInUp">
              <p className="label-gold mb-3">Careers</p>
              <h2 className="display-5 text-white mb-4">Interested in Joining Our Team?</h2>
              <p className="lead text-white-50 mb-5">We're always looking for talented, driven individuals who share our commitment to quality and excellence. Get in touch to explore opportunities.</p>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <Link to="/contact" className="btn btn-primary rounded-pill py-3 px-5">
                  <i className="fas fa-envelope me-2"></i>Contact Us
                </Link>
                <Link to="/about" className="btn btn-outline-light rounded-pill py-3 px-5">
                  <i className="fas fa-info-circle me-2"></i>About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

/* ── Staff Card sub-component ── */
function StaffCard({ member }) {
  return (
    <div className="staff-card">
      <div className="staff-img-wrap">
        <span className="staff-dept-badge">{member.dept}</span>
        <img src={member.img} alt={`${member.name} — ${member.role}`} loading="lazy" />
        <div className="staff-social">
          {SOCIAL_ICONS.map(ic => (
            <a key={ic} href="#" aria-label={ic.replace('fab fa-', '')}>
              <i className={ic}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="staff-info">
        <h4>{member.name}</h4>
        <span className="staff-role">{member.role}</span>
        <div className="staff-divider"></div>
        <p>{member.bio}</p>
      </div>
    </div>
  );
}
