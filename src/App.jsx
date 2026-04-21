import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home    from './pages/Home';
import About   from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Policy  from './pages/Policy';
import Service from './pages/Service';
import Staff   from './pages/Staff';
import NotFound from './pages/NotFound';
import BackToTop from './components/BackToTop';

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/"        element={<Navigate to="/home" replace />} />
        <Route path="/home"    element={<Home />} />
        <Route path="/about"   element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/policy"  element={<Policy />} />
        <Route path="/service" element={<Service />} />
        <Route path="/staff"   element={<Staff />} />
        {/* Legacy .html routes redirect cleanly */}
        <Route path="/index"   element={<Navigate to="/home" replace />} />
        <Route path="*"        element={<NotFound />} />
      </Routes>
      <BackToTop />
    </>
  );
}
