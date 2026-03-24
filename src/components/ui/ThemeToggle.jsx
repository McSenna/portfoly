const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>  <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>  <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
  </svg>
);

const ThemeToggle = ({ isLight, onToggle }) => (
  <button
    onClick={onToggle}
    title={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    aria-label="Toggle theme"
    className="flex items-center justify-center w-[38px] h-[38px] bg-transparent
      border border-[var(--border)] text-cream-dim cursor-pointer flex-shrink-0
      transition-all duration-300 hover:border-gold hover:text-gold hover:bg-gold/5 hover:rotate-[20deg]"
  >
    {isLight ? <MoonIcon /> : <SunIcon />}
  </button>
);

export default ThemeToggle;
