import { useEffect } from 'react';

const useScrollToHash = () => {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
};

export default useScrollToHash;
