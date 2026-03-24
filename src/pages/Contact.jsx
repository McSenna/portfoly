import FadeUp      from '../components/common/FadeUp';
import ContactForm from '../components/ui/ContactForm';
import SocialLinks from '../components/ui/SocialLinks';

const Contact = () => (
  <section id="contact" className="relative z-[2] px-[5%] py-28">
    <FadeUp>
      <div className="max-w-[700px] mx-auto text-center">

        <p className="flex items-center justify-center gap-3
          text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-4
          before:content-[''] before:block before:w-6 before:h-px before:bg-gold">
          Get in touch
        </p>

        <h2 className="font-serif text-[clamp(3rem,6vw,6rem)] font-bold leading-none
          text-cream mb-6">
          Let&apos;s Work<br />
          <span className="text-gold">Together</span>
        </h2>

        <p className="text-[0.95rem] leading-[1.8] text-cream-dim mb-12">
          Have a project in mind or want to collaborate? I&apos;m always open
          to discussing new opportunities and interesting challenges.
        </p>

        <a href="mailto:catc.valladolod@gmail.com"
          className="font-serif text-[1.8rem] text-gold no-underline tracking-[0.05em]
            block mb-12 transition-all duration-300
            hover:text-gold-light hover:tracking-[0.1em]">
          catc.valladolod@gmail.com
        </a>

        <SocialLinks />
        <ContactForm />
      </div>
    </FadeUp>
  </section>
);

export default Contact;
