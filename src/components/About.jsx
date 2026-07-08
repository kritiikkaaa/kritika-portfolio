import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const highlights = [
  'Dedicated and proactive CSE student with hands-on experience in software development.',
  'Strong in problem solving, design thinking, and turning ideas into meaningful digital products.',
  'Passionate about building polished user experiences and learning through real-world projects.'
];

function About() {
  return (
    <section id="about" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Me" subtitle="About" />
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }} className="glass-card p-8 sm:p-10">
            <p className="section-copy">
              I’m a dedicated and proactive CSE student at Chandigarh University with hands-on experience in software development. I’m driven by strong problem solving, curiosity about emerging technologies, and a commitment to building impactful solutions.
            </p>
            <div className="mt-6 space-y-3">
              {highlights.map((item) => (
                <div key={item} className="flex gap-3 text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, delay: 0.1 }} className="space-y-4">
            {[
              { school: 'Chandigarh University', degree: 'Bachelor of Engineering in Computer Science', period: 'Aug 2023 – Present', detail: 'CGPA: 7.25/10' },
              { school: 'Government School, Chandigarh', degree: 'Class XII', period: '2023', detail: '82.3%' },
              { school: 'Shivalik Public School, Mohali', degree: 'Class X', period: '2021', detail: '91.45%' }
            ].map((item) => (
              <div key={item.school} className="glass-card p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.school}</h3>
                    <p className="mt-1 text-sm text-cyan-300">{item.degree}</p>
                  </div>
                  <span className="text-sm uppercase tracking-[0.2em] text-slate-400">{item.period}</span>
                </div>
                <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
