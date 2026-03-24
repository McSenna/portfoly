import { useState, useEffect } from 'react';

/**
 * Cycles through an array of strings with a typewriter + erase effect.
 * @param {string[]} strings - List of strings to cycle through.
 * @param {{ typeSpeed?: number, eraseSpeed?: number, pauseDuration?: number, initialDelay?: number }} options
 */
const useTypewriter = (strings, options = {}) => {
  const {
    typeSpeed = 55,
    eraseSpeed = 30,
    pauseDuration = 2000,
    initialDelay = 1300,
  } = options;

  const [displayed, setDisplayed] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [phase, setPhase] = useState('wait'); // wait | type | pause | erase

  // Initial wait before typing starts
  useEffect(() => {
    const timer = setTimeout(() => setPhase('type'), initialDelay);
    return () => clearTimeout(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const current = strings[roleIdx];
    let timer;

    if (phase === 'type') {
      if (charIdx < current.length) {
        timer = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, typeSpeed);
      } else {
        timer = setTimeout(() => setPhase('pause'), pauseDuration);
      }
    } else if (phase === 'pause') {
      timer = setTimeout(() => setPhase('erase'), 200);
    } else if (phase === 'erase') {
      if (charIdx > 0) {
        timer = setTimeout(() => {
          setCharIdx((c) => c - 1);
          setDisplayed(current.slice(0, charIdx - 1));
        }, eraseSpeed);
      } else {
        setRoleIdx((r) => (r + 1) % strings.length);
        setPhase('type');
      }
    }

    return () => clearTimeout(timer);
  }, [phase, charIdx, roleIdx]); // eslint-disable-line react-hooks/exhaustive-deps

  return displayed;
};

export default useTypewriter;
