import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const certifications = [
  {
    title: 'Google UX Design Certificate',
    issuer: 'Google',
    detail: 'Focused on user-centered design, wireframing, prototyping, and UX research fundamentals.'
  },
  {
    title: 'Java Programming Basics',
    issuer: 'Coding Platform',
    detail: 'Strengthened core Java concepts, problem solving, and object-oriented programming practice.'
  },
  {
    title: 'Web Development Essentials',
    issuer: 'Self-led Learning',
    detail: 'Built strong fundamentals in modern frontend development, responsive design, and best practices.'
  }
];

function Certifications() {
  return (
    <section id="certifications" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Certifications" subtitle="Certifications" />
        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.06 }} className="glass-card p-7">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">{item.issuer}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
