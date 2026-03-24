import { useRef } from 'react';
import useIntersection from '../../hooks/useIntersection';

const FadeUp = ({ children, delay = 0, className = '' }) => {
  const ref = useRef();
  const visible = useIntersection(ref);

  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? 'visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : {}}
    >
      {children}
    </div>
  );
};

export default FadeUp;
