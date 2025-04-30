import { useEffect } from 'react';
import { scroller } from 'react-scroll';

interface ScrollToHashOptions {
  offset?: number;
  delay?: number;
  duration?: number; 
  smooth?: boolean | string; 
}

const useScrollToHash = (options: ScrollToHashOptions = {}) => {
  const {
    offset = 0,
    delay = 0,
    duration = 500,
    smooth = true,
  } = options;

  useEffect(() => {
    const hash = window.location.hash;
    
    if (!hash) return;

    const scrollToElement = () => {
      scroller.scrollTo(hash, {
        duration,
        delay,
        smooth,
        offset: -offset, 
      });
    };

    const timeoutId = setTimeout(scrollToElement, delay);

    return () => clearTimeout(timeoutId);
  }, [offset, delay, duration, smooth]);
};

export default useScrollToHash;
