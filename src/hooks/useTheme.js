import { useState, useEffect } from 'react';

/**
 * Dark mode by default. Toggles `dark` class on <html>.
 */
const useTheme = () => {
  const [isDark, setIsDark] = useState(true);

  const applyTheme = (dark) => {
    document.documentElement.classList.toggle('dark', dark);
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // Initialize (dark first)
  useEffect(() => {
    const stored = localStorage.getItem('theme');

    if (stored) {
      const isStoredDark = stored === 'dark';
      setIsDark(isStoredDark);
      applyTheme(isStoredDark);
    } else {
      // default: dark
      applyTheme(true);
    }
  }, []);

  // Persist + apply
  useEffect(() => {
    applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return { isDark, toggleTheme };
};

export default useTheme;