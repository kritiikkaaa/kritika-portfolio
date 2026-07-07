import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

function Education() {
  return (
    <section id="education" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Education" subtitle="Education" />
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="glass-card p-8 sm:p-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">Bachelor of Engineering in Computer Science</h3>
              <p className="text-cyan-300">Chandigarh University</p>
            </div>
            <span className="text-sm uppercase tracking-[0.2em] text-slate-400">2023 — 2027</span>
          </div>
          <p className="mt-4 text-slate-300">CGPA: 7.255/10.0</p>
          <div className="mt-6 space-y-4">
            <div>
              <h4 className="font-semibold text-white">Government School, Chandigarh</h4>
              <p className="text-slate-300">Class XII: 82.3%</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Shivalik Public School, Mohali</h4>
              <p className="text-slate-300">Class X: 91.45%</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
