import { useEffect } from 'react';

/**
 * Initialises WOW.js on every page mount so scroll-reveal
 * animations run correctly after client-side navigation.
 */
export default function useWow() {
  useEffect(() => {
    if (window.WOW) {
      const wow = new window.WOW({ live: false });
      wow.init();
    }
  }, []);
}
