import { useEffect } from 'react';
export default function useInfiniteScroll(callback) {
  useEffect(() => {
    const handle = () => {
      if (window.innerHeight + document.documentElement.scrollTop
           >= document.documentElement.offsetHeight - 100) {
        callback();
      }
    };
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, [callback]);
}

