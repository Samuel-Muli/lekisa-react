import { Link } from 'react-router-dom';

/**
 * Reusable page header with breadcrumb trail.
 *
 * @param {string}  label     - gold label above title (e.g. "Who We Are")
 * @param {string}  title     - main h1 text
 * @param {Array}   crumbs    - [{ label, to? }]  last item has no `to`
 */
export default function Breadcrumb({ label, title, crumbs = [] }) {
  return (
    <div className="container-fluid bg-breadcrumb">
      <div className="container text-center py-5" style={{ maxWidth: 800 }}>
        {label && <p className="label-gold mb-3 wow fadeInDown">{label}</p>}
        <h1 className="display-4 text-white mb-4 wow fadeInDown" data-wow-delay="0.1s">{title}</h1>
        <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
          {crumbs.map((c, i) =>
            c.to
              ? <li key={i} className="breadcrumb-item"><Link to={c.to}>{c.label}</Link></li>
              : <li key={i} className="breadcrumb-item active">{c.label}</li>
          )}
        </ol>
      </div>
    </div>
  );
}
