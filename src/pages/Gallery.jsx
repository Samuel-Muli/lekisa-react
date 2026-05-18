import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Topbar    from '../components/Topbar';
import Navbar    from '../components/Navbar';
import Footer    from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import useWow    from '../hooks/useWow';

const ITEMS = [
  { img: '/img/g1.jpeg', alt: 'Our Modern Facility',   title: 'Modern Facility',    desc: 'Our state-of-the-art chemical storage facility',    cat: 'facility', badge: 'Facility' },
  { img: '/img/g2.jpeg', alt: 'Chemical Products',     title: 'Quality Products',   desc: 'Our range of industrial chemical products',         cat: 'products', badge: 'Products' },
  { img: '/img/g3.jpeg', alt: 'Our Team',              title: 'Expert Team',        desc: 'Our dedicated team of chemical experts',            cat: 'team',     badge: 'Team'     },
  { img: '/img/g4.jpg',  alt: 'Storage Area',          title: 'Storage Area',       desc: 'Secure storage for all chemical products',          cat: 'facility', badge: 'Facility' },
  { img: '/img/g5.jpg',  alt: 'Chemical Packaging',    title: 'Secure Packaging',   desc: 'Industry-standard packaging for safety',            cat: 'products', badge: 'Products' },
  { img: '/img/g6.jpg',  alt: 'Team Collaboration',    title: 'Team Collaboration', desc: 'Our team working together to serve you better',     cat: 'team',     badge: 'Team'     },
  { img: '/img/1.jpg',  alt: 'Facility Entrance',      title: 'Facility Entrance',   desc: 'Welcoming entrance to our modern facility',          cat: 'facility', badge: 'Facility' },
  { img: '/img/2.jpg',  alt: 'Chemical Storage',       title: 'Chemical Storage',    desc: 'Organized storage for safe chemical handling',        cat: 'facility', badge: 'Facility' },
  { img: '/img/3.jpg',  alt: 'Production Floor',       title: 'Production Floor',    desc: 'Our facility production floor in action',           cat: 'facility', badge: 'Facility' },
  { img: '/img/4.jpg',  alt: 'Facility Inspection',    title: 'Facility Inspection', desc: 'Careful inspection of our storage and work areas',   cat: 'facility', badge: 'Facility' },
  { img: '/img/g7.jpg',  alt: 'Product Batch',          title: 'Product Batch',       desc: 'High-quality chemical batch ready for shipping',     cat: 'products', badge: 'Products' },
  { img: '/img/g8.jpg',  alt: 'Labelled Containers',    title: 'Labelled Containers', desc: 'Clearly labelled chemical containers for safety',   cat: 'products', badge: 'Products' },
  { img: '/img/g9.jpg',  alt: 'Product Lineup',         title: 'Product Lineup',      desc: 'A lineup of our chemical products on display',      cat: 'products', badge: 'Products' },
  { img: '/img/g10.jpg', alt: 'Product Packaging',      title: 'Product Packaging',   desc: 'Careful packaging to ensure safe delivery',          cat: 'products', badge: 'Products' },
  { img: '/img/g11.jpg', alt: 'Finished Products',      title: 'Finished Products',   desc: 'Finished chemical products ready for customers',    cat: 'products', badge: 'Products' },

];

const FILTERS = ['all', 'facility', 'products', 'team'];

export default function Gallery() {
  useWow();

  const [active, setActive] = useState('all');

  /* Reinitialise lightbox after filter change */
  useEffect(() => {
    if (window.lightbox) {
      window.lightbox.option({ resizeDuration: 200, wrapAround: true, showImageNumberLabel: true });
    }
  }, [active]);

  const visible = active === 'all' ? ITEMS : ITEMS.filter(i => i.cat === active);

  return (
    <>
      <Topbar />
      <Navbar />
      <Breadcrumb label="Our Visual Story" title="Gallery" crumbs={[{ label: 'Home', to: '/home' }, { label: 'Gallery' }]} />

      {/* Gallery section */}
      <div className="container-fluid py-5" style={{ background: 'var(--ltl-smoke)' }}>
        <div className="container py-4">
          <div className="text-center mx-auto mb-5 wow fadeInUp" style={{ maxWidth: 650 }}>
            <p className="label-gold mb-2">Behind the Scenes</p>
            <h2 className="display-5 mb-3">Explore Our Facilities &amp; Work</h2>
            <p className="lead">A look inside our chemical distribution operations, products, and the team that makes it happen.</p>
          </div>

          {/* Filter */}
          <div className="gallery-filter wow fadeIn" data-wow-delay="0.2s">
            {FILTERS.map(f => (
              <button key={f} className={`filter-btn${active === f ? ' active' : ''}`} onClick={() => setActive(f)}>
                {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="row g-4" id="galleryGrid">
            {visible.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6 gallery-col wow fadeInUp" data-wow-delay={`${0.1 * ((i % 3) + 1)}s`}>
                <div className="gallery-item">
                  <div className="gallery-img-wrap">
                    <span className="gallery-badge">{item.badge}</span>
                    <img src={item.img} alt={item.alt} loading="lazy" />
                    <a href={item.img} data-lightbox="gallery" data-title={item.alt} className="gallery-overlay">
                      <div className="gallery-overlay-icon"><i className="fas fa-search-plus"></i></div>
                      <span className="gallery-overlay-label">View Full Image</span>
                    </a>
                  </div>
                  <div className="gallery-caption">
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visible.length === 0 && (
            <div className="text-center py-5">
              <div className="value-icon mx-auto mb-3"><i className="fas fa-images"></i></div>
              <p className="text-muted" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600 }}>No images in this category yet.</p>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      {/* <div className="container-fluid cta-section">
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center wow fadeInUp">
              <p className="label-gold mb-3">Want to See More?</p>
              <h2 className="display-5 text-white mb-4">Visit Our Facility</h2>
              <p className="lead text-white-50 mb-5">Interested in seeing our operations firsthand? Get in touch to arrange a site visit.</p>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <Link to="/contact" className="btn btn-primary rounded-pill py-3 px-5">Contact Us</Link>
                <Link to="/about"   className="btn btn-outline-light rounded-pill py-3 px-5">About Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Footer />
    </>
  );
}
