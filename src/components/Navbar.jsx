import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Navbar() {
  const { pathname } = useLocation();

  const isActive  = (path) => pathname === path;
  const aboutActive = ['/about', '/policy'].includes(pathname);

  /* Close mobile menu on route change */
  useEffect(() => {
    const el = document.getElementById('navbarCollapse');
    if (el?.classList.contains('show')) {
      if (window.bootstrap?.Collapse) {
        window.bootstrap.Collapse.getInstance(el)?.hide();
      } else {
        el.classList.remove('show');
      }
    }
  }, [pathname]);

  /* Sticky on scroll */
  useEffect(() => {
    const onScroll = () => {
      const bar = document.querySelector('.nav-bar');
      if (!bar) return;
      if (window.scrollY > 45) {
        bar.classList.add('sticky-top', 'shadow-sm');
        bar.style.top = '0px';
      } else {
        bar.classList.remove('sticky-top', 'shadow-sm');
        bar.style.top = '-100px';
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="container-fluid nav-bar px-0 px-lg-4 py-lg-0">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">

          {/* Brand */}
          <Link to="/home" className="navbar-brand p-0">
            <h1 className="mb-0" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, letterSpacing: '-.03em', color: 'var(--ltl-navy)' }}>
              <span style={{ color: 'var(--ltl-gold)' }}>L</span>TL
            </h1>
          </Link>

          {/* Hamburger */}
          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
            aria-label="Toggle navigation">
            <span className="fa fa-bars"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto">
              <Link to="/home"    className={`nav-item nav-link${isActive('/home')    ? ' active' : ''}`}>Home</Link>

              <div className={`nav-item dropdown${aboutActive ? ' active' : ''}`}>
                <a href="#" className={`nav-link dropdown-toggle${aboutActive ? ' active' : ''}`}
                  data-bs-toggle="dropdown">About</a>
                <div className="dropdown-menu">
                  <Link to="/about"  className={`dropdown-item${isActive('/about')  ? ' active' : ''}`}>About Us</Link>
                  <Link to="/policy" className={`dropdown-item${isActive('/policy') ? ' active' : ''}`}>Our Policy</Link>
                </div>
              </div>

              <Link to="/service" className={`nav-item nav-link${isActive('/service') ? ' active' : ''}`}>Services</Link>
              <Link to="/staff"   className={`nav-item nav-link${isActive('/staff')   ? ' active' : ''}`}>Staff</Link>
              <Link to="/gallery" className={`nav-item nav-link${isActive('/gallery') ? ' active' : ''}`}>Gallery</Link>
              <Link to="/contact" className={`nav-item nav-link${isActive('/contact') ? ' active' : ''}`}>Contact</Link>
            </div>
          </div>

          {/* Call CTA */}
          <div className="d-none d-xl-flex align-items-center flex-shrink-0 ps-4 gap-3">
            <a href="tel:+254713506664" className="btn btn-lg-square rounded-circle"
              style={{ background: 'var(--ltl-gold-pale)', color: 'var(--ltl-navy)' }}>
              <i className="fa fa-phone-alt"></i>
            </a>
            <div className="d-flex flex-column">
              <span style={{ fontFamily: "'Syne',sans-serif", fontSize: '.7rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ltl-muted)' }}>
                Call Our Experts
              </span>
              <a href="tel:+254713506664" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: 'var(--ltl-navy)', textDecoration: 'none' }}>
                +254 713 506 664
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
