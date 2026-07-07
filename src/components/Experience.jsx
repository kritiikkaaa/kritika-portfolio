import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    title: 'Graphic Designer',
    company: 'Alexa Developers Community, CU',
    period: 'Aug 2025 — Present',
    points: [
      'Designed posters and event creatives to support community engagement and technical initiatives.',
      'Created visual content that strengthened branding and audience connection across social platforms.',
      'Worked with a creative and technical team to align visuals with event goals.'
    ]
  },
  {
    title: 'Graphic Design Intern',
    company: 'LaunchED Global',
    period: 'Jul 2025 — Aug 2025',
    points: [
      'Created digital design assets such as social media posts, banners, and promotional material.',
      'Delivered polished visuals while meeting deadlines and following brand guidelines.',
      'Built experience in translating ideas into clear and attractive design outputs.'
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Experiences" subtitle="Experience" />
        <div className="space-y-6">
          {experiences.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.07 }} className="experience-card glass-card p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(103,232,249,0.55)]"></span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-cyan-300">{item.company}</p>
                  </div>
                </div>
                <span className="text-sm uppercase tracking-[0.2em] text-slate-400">{item.period}</span>
              </div>
              <ul className="mt-4 space-y-2 pl-5 text-slate-300">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
