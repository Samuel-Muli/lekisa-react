export default function Topbar() {
  return (
    <div className="container-fluid topbar px-0 px-lg-4 py-2 d-none d-lg-block">
      <div className="container">
        <div className="row gx-0 align-items-center">
          <div className="col-lg-8 text-center text-lg-start">
            <div className="d-flex flex-wrap gap-3 align-items-center">
              <a href="mailto:info@lekisatrading.co.ke" className="small d-flex align-items-center gap-2">
                <i className="fas fa-envelope" style={{ color: 'var(--ltl-gold)' }}></i>
                info@lekisatrading.co.ke
              </a>
              <span className="text-white-50" style={{ opacity: .3 }}>|</span>
              <a href="tel:+254713506664" className="small d-flex align-items-center gap-2">
                <i className="fas fa-phone-alt" style={{ color: 'var(--ltl-gold)' }}></i>
                +254 713 506 664
              </a>
            </div>
          </div>
          <div className="col-lg-4 text-end">
            <div className="d-flex justify-content-end align-items-center gap-3">
              <a className="btn p-0 text-primary" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="btn p-0 text-primary" href="#"><i className="fab fa-twitter"></i></a>
              <a className="btn p-0 text-primary" href="#"><i className="fab fa-instagram"></i></a>
              <a className="btn p-0 text-primary" href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
