import { useState, useEffect } from 'react';

/**
 * Returns true once the referenced element enters the viewport.
 * Stays true after the first intersection (one-shot reveal).
 * @param {React.RefObject} ref - Ref attached to the target element.
 * @param {IntersectionObserverInit} options - Optional observer options.
 */
const useIntersection = (ref, options = {}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return visible;
};

export default useIntersection;
