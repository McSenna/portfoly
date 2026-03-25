import { useState } from 'react';
import useScrolled from '../../hooks/useScrolled';
import useActiveSection from '../../hooks/useActiveSection';
import { NAV_LINKS } from '../../utils/data';
import ThemeToggle from '../ui/ThemeToggle';
import Hamburger from '../ui/Hamburger';

const SECTION_IDS = ['hero', 'about', 'projects', 'experience', 'contact'];

const Navbar = ({ isLight, toggleTheme }) => {
  const scrolled = useScrolled();
  const active = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[5%] py-5 transition-all duration-300
      ${scrolled ? 'bg-ink/85 backdrop-blur-xl border-b border-[var(--border)]' : ''}`}>

      <a href="#hero" className="font-serif text-[1.6rem] font-bold text-gold tracking-widest no-underline z-[101]">
        J.V.
      </a>

      {/* Desktop nav */}
      <ul className="hidden md:flex gap-10 list-none">
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={`relative text-[0.82rem] tracking-[0.12em] uppercase no-underline transition-colors duration-300 pb-1
                after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300
                ${active === href.slice(1)
                  ? 'text-gold after:w-full'
                  : 'text-cream-dim hover:text-cream after:w-0 hover:after:w-full'}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile menu overlay — full screen, blurred, links centered */}
      {menuOpen && (
        <div className="fixed inset-0 z-[99] md:hidden flex items-center justify-center
          bg-ink/80 backdrop-blur-xl">
          <ul className="flex flex-col items-center justify-center gap-8 list-none m-0 p-0">
            {NAV_LINKS.map(({ href, label }, i) => (
              <li
                key={href}
                style={{ animationDelay: `${i * 0.07}s` }}
                className="opacity-0 translate-y-4 animate-[fadeSlideUp_0.4s_cubic-bezier(0.22,1,0.36,1)_forwards]"
              >
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-[1.6rem] font-serif font-bold tracking-[0.08em] uppercase no-underline
                    transition-colors duration-300
                    ${active === href.slice(1) ? 'text-gold' : 'text-cream hover:text-gold'}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex items-center gap-4 z-[101]">
        <ThemeToggle isLight={isLight} onToggle={toggleTheme} />
        <div className="md:hidden">
          <Hamburger open={menuOpen} onToggle={() => setMenuOpen(o => !o)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;