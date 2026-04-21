import { Link } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import useWow from '../hooks/useWow';

const QUICK_LINKS = [
  { to: '/about',   label: 'About'    },
  { to: '/service', label: 'Services' },
  { to: '/staff',   label: 'Staff'    },
  { to: '/gallery', label: 'Gallery'  },
  { to: '/contact', label: 'Contact'  },
];

export default function NotFound() {
  useWow();

  return (
    <>
      <Topbar />
      <Navbar />

      {/* Breadcrumb */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 800 }}>
          <h1 className="display-4 text-white mb-4 wow fadeInDown" data-wow-delay="0.1s">
            404 — Not Found
          </h1>
          <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
            <li className="breadcrumb-item active">404</li>
          </ol>
        </div>
      </div>

      {/* Body */}
      <div className="container-fluid py-5" style={{ background: 'var(--ltl-smoke)' }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center wow fadeInUp" data-wow-delay="0.2s">

              {/* Icon circle */}
              <div className="mb-4 position-relative d-inline-block">
                {/* Watermark */}
                <span style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: 'clamp(5rem,16vw,10rem)',
                  fontWeight: 800,
                  lineHeight: 1,
                  color: 'var(--ltl-navy)',
                  opacity: .06,
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%,-50%)',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}>
                  404
                </span>
                {/* Icon */}
                <div style={{
                  width: 120, height: 120,
                  borderRadius: '50%',
                  background: 'var(--ltl-gold-pale)',
                  border: '3px solid rgba(201,168,76,.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  <i className="far fa-frown-open" style={{ fontSize: '3rem', color: 'var(--ltl-gold)' }}></i>
                </div>
              </div>

              {/* Numbers & heading */}
              <h1 style={{
                fontFamily: "'Syne',sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(3rem,10vw,6rem)',
                lineHeight: 1,
                color: 'var(--ltl-navy)',
                marginBottom: '.25rem',
              }}>
                404
              </h1>
              <h2 className="mb-4" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, color: 'var(--ltl-navy)' }}>
                Page Not Found
              </h2>

              <p className="text-muted mb-5" style={{ maxWidth: 480, margin: '0 auto 2.5rem', fontFamily: "'Lora',Georgia,serif" }}>
                We couldn't find the page you were looking for. It may have been moved, renamed, or doesn't exist. Head back to the homepage and explore from there.
              </p>

              {/* CTA buttons */}
              <div className="d-flex flex-wrap gap-3 justify-content-center mb-5">
                <Link to="/home"    className="btn btn-primary rounded-pill py-3 px-5">
                  <i className="fas fa-home me-2"></i>Back to Home
                </Link>
                <Link to="/contact" className="btn btn-outline-primary rounded-pill py-3 px-5">
                  <i className="fas fa-envelope me-2"></i>Contact Us
                </Link>
              </div>

              {/* Quick nav pills */}
              <div className="pt-4" style={{ borderTop: '1px solid rgba(11,30,61,.08)' }}>
                <p className="label-gold mb-3">Or try one of these pages</p>
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  {QUICK_LINKS.map(l => (
                    <Link key={l.to} to={l.to}
                      className="btn btn-sm rounded-pill py-2 px-4"
                      style={{
                        background: 'var(--ltl-white)',
                        border: '1px solid rgba(11,30,61,.1)',
                        color: 'var(--ltl-navy)',
                        fontFamily: "'Syne',sans-serif",
                        fontWeight: 600,
                        fontSize: '.78rem',
                        letterSpacing: '.06em',
                        textTransform: 'uppercase',
                      }}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Minimal copyright footer (no full footer on error pages) */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <span className="text-white-50">
                &copy; <Link to="/home">2026 Lekisa Trading Limited</Link> — All rights reserved.
              </span>
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
