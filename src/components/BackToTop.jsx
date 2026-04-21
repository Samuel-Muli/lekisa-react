import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#"
      className="back-to-top"
      aria-label="Back to top"
      onClick={scrollUp}
      style={{ display: visible ? 'flex' : 'none' }}
    >
      <i className="fa fa-arrow-up"></i>
    </a>
  );
}
