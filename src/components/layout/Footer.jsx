const Footer = () => (
  <footer className="relative z-[2] px-[5%] py-8 border-t border-[var(--border)] flex items-center justify-between
    text-[0.72rem] tracking-widest text-cream-dim flex-wrap gap-4">
    <span className="font-serif text-gold text-lg tracking-widest">J.V.</span>
    <span>Crafted with React · {new Date().getFullYear()}</span>
    <a href="#hero" className="flex items-center gap-2 text-cream-dim no-underline text-[0.72rem] tracking-widest
      transition-colors duration-300 hover:text-gold">
      Back to top ↑
    </a>
  </footer>
);

export default Footer;
