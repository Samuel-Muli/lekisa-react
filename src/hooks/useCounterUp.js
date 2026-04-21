import { useEffect } from 'react';

/**
 * Initialises jQuery CounterUp on elements with
 * data-toggle="counter-up" after page mount.
 */
export default function useCounterUp() {
  useEffect(() => {
    const $ = window.jQuery;
    if ($ && $.fn.counterUp) {
      $('[data-toggle="counter-up"]').counterUp({ delay: 10, time: 2000 });
    }
  }, []);
}
