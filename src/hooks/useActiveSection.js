import { useState, useEffect } from 'react';

/**
 * Tracks which section is currently in view based on scroll position.
 * @param {string[]} sectionIds - Ordered list of section element IDs.
 * @returns {string} The ID of the currently active section.
 */
const useActiveSection = (sectionIds) => {
  const [active, setActive] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const handleScroll = () => {
      let current = sectionIds[0];
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      });
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return active;
};

export default useActiveSection;
