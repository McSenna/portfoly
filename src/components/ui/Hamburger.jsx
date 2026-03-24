const Hamburger = ({ open, onToggle }) => (
  <div
    onClick={onToggle}
    role="button"
    aria-label="Toggle menu"
    aria-expanded={open}
    className="flex flex-col gap-[5px] cursor-pointer z-[101]"
  >
    <span className="block w-6 h-px bg-cream transition-transform duration-300"
      style={open ? { transform: 'rotate(45deg) translate(4px,4px)' } : {}} />
    <span className="block w-6 h-px bg-cream transition-opacity duration-300"
      style={open ? { opacity: 0 } : {}} />
    <span className="block w-6 h-px bg-cream transition-transform duration-300"
      style={open ? { transform: 'rotate(-45deg) translate(4px,-4px)' } : {}} />
  </div>
);

export default Hamburger;
