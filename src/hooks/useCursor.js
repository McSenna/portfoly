import { useEffect } from 'react';

const useCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    if (!cursor || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;
    };

    const onHover = () => {
      cursor.style.width = '18px';
      cursor.style.height = '18px';
      cursor.style.background = 'transparent';
      cursor.style.border = '2px solid var(--gold)';
    };

    const onUnhover = () => {
      cursor.style.width = '10px';
      cursor.style.height = '10px';
      cursor.style.background = 'var(--gold)';
      cursor.style.border = 'none';
    };

    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      raf = requestAnimationFrame(animateRing);
    };

    const attachHoverListeners = () => {
      document.querySelectorAll('a, button, .project-card, .social-link').forEach((el) => {
        el.addEventListener('mouseenter', onHover);
        el.addEventListener('mouseleave', onUnhover);
      });
    };

    window.addEventListener('mousemove', onMove);
    animateRing();

    // Attach after a brief delay to allow DOM to render
    const timer = setTimeout(attachHoverListeners, 500);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);
};

export default useCursor;
