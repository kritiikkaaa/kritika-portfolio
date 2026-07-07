import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const skills = [
  { title: 'Languages', items: ['C/C++', 'Java', 'Python', 'SQL', 'HTML5', 'CSS3'] },
  { title: 'Frameworks & Libraries', items: ['Flask', 'React', 'NLP', 'Machine Learning', 'JDBC'] },
  { title: 'Tools & Platforms', items: ['MySQL', 'Figma', 'Canva', 'VS Code', 'GitHub', 'Notion'] },
  { title: 'Core Competencies', items: ['Problem Solving', 'Team Collaboration', 'Time Management', 'Design Thinking'] }
];

function Skills() {
  return (
    <section id="skills" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Technologies I Work With" subtitle="Skills" />
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div key={skill.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.05 }} className="glass-card p-7">
              <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
