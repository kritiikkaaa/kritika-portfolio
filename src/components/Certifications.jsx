import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const certifications = [
  {
    title: 'TATA Crucible Campus Quiz 2025',
    issuer: 'Unstop',
    detail:
      'Participated in a national-level business quiz, demonstrating analytical thinking, business awareness, and problem-solving skills.',
    link: 'https://unstop.com/certificate-preview/1650e222-12ad-4713-bd4f-6e1a67cfa1fc'
  },
  {
    title: 'Data Science & Analytics',
    issuer: 'HP LIFE',
    detail:
      'Completed a foundational program covering data science, analytics, data visualization, and data-driven decision making.',
    link: 'https://www.life-global.org/certificate/d1a761dd-d190-4559-8646-8795464bfb07'
  },
  {
    title: 'Data Analytics',
    issuer: 'Deloitte',
    detail:
      'Completed a practical data analytics program focused on business insights, data interpretation, and analytical problem-solving.',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_D4W6tFyKgJAJcv4su_1750341788831_completion_certificate.pdf'
    // Replace this with the correct Deloitte Data Analytics credential link
  },
  {
    title: 'Technology Job Simulation',
    issuer: 'Deloitte Australia',
    detail:
      'Completed a virtual technology job simulation involving software development, debugging, coding tasks, and real-world technical workflows.',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_D4W6tFyKgJAJcv4su_1748444657126_completion_certificate.pdf'
  }
];

function Certifications() {
  return (
    <section id="certifications" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Professional Certifications"
          subtitle="Certifications"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-card flex h-full flex-col justify-between rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                  {item.issuer}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.detail}
                </p>
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-cyan-400 hover:text-cyan-300"
              >
                View Credential
                <FiExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;