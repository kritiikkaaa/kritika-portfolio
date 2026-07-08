import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

function Contact() {
  return (
    <section id="contact" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Get In Touch" subtitle="Contact" />
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="glass-card p-8 sm:p-10">
          <p className="section-copy">
            I’m currently looking for new opportunities and my inbox is always open. Whether you have a question, want to collaborate, or just want to say hi, I’ll try my best to get back to you.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="mailto:kritikama58@gmail.com" className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
              Say Hello!
            </a>
            <a href="https://www.linkedin.com/in/kritikkaa/" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300">
              LinkedIn
            </a>
            <a href="https://github.com/kritiikkaaa" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300">
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
