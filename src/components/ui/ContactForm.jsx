import useContactForm from '../../hooks/useContactForm';

const inputCls = `w-full bg-ink-3 border border-[var(--border)] text-cream
  px-4 py-[0.8rem] text-[0.88rem] font-sans outline-none resize-none
  transition-colors duration-300 focus:border-gold
  placeholder:text-cream-dim`;

const labelCls = `text-[0.7rem] tracking-[0.2em] uppercase text-cream-dim`;

const SuccessMessage = () => (
  <div className="text-center py-12 text-gold font-serif text-2xl">
    Message sent — I&apos;ll be in touch soon ✦
  </div>
);

const ContactForm = () => {
  const { fields, sent, loading, error, handleChange, handleSubmit } = useContactForm();

  if (sent) return <SuccessMessage />;

  return (
    <div className="text-left w-full">
      {error && (
        <p className="text-[0.8rem] text-red-400 mb-4 px-4 py-[0.6rem]
          border border-red-400/30 bg-red-400/5">
          {error}
        </p>
      )}

      {/* Row: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col gap-2">
          <label className={labelCls} htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name"
            className={inputCls} value={fields.name} onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelCls} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="your@email.com"
            className={inputCls} value={fields.email} onChange={handleChange} />
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2 mb-4">
        <label className={labelCls} htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Tell me about your project..."
          className={`${inputCls} h-[120px]`}
          value={fields.message} onChange={handleChange} />
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-gold text-ink px-8 py-3 text-[0.82rem] tracking-[0.12em]
          uppercase font-semibold border-none cursor-pointer font-sans
          transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5
          hover:shadow-[0_8px_30px_rgba(201,168,76,0.3)]
          disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0">
        {loading ? 'Sending…' : 'Send Message'}
      </button>
    </div>
  );
};

export default ContactForm;
