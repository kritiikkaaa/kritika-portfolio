import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const basePath = import.meta.env.BASE_URL;

const projects = [
  {
    featured: true,
    title: 'YouTube Comment Sentiment Analyzer',
    highlights: [
      'Built a Flask-based NLP application to extract YouTube comments using the YouTube Data API.',
      'Classified feedback as Positive, Negative, or Neutral with a machine learning approach.',
      'Focused on making sentiment insights accessible and easy to interpret.'
    ],
    tags: ['Flask', 'NLP', 'Machine Learning'],
    image: `${basePath}images/projects/sentiment.png`,
    demo: 'https://youtube-comment-sentiment-yt.vercel.app/',
    github: 'https://github.com/kritiikkaaa/youtube-comment-sentiment'
  },
  {
    title: 'Fake News Detection App',
    highlights: [
      'Developed a Flask app that identifies fake news from article text or headlines.',
      'Used natural language processing techniques to support faster content evaluation.',
      'Designed the experience to be simple, interactive, and practical for users.'
    ],
    tags: ['Flask', 'NLP', 'Web App'],
    image: `${basePath}images/projects/news.png`,
    demo: 'https://fake-news-app-kritikkaa.vercel.app/',
    github: 'https://github.com/kritiikkaaa/FakeNewsApp'
  },
  {
  title: 'News Scraper',
  highlights: [
    'Built a Python-based web scraper to fetch the latest articles from Hacker News.',
    'Extracted article titles and full content using BeautifulSoup and Newspaper3k.',
    'Automated news collection into a structured format for further analysis.'
  ],
  tags: ['Python', 'BeautifulSoup', 'Requests', 'Newspaper3k'],
  image: `${basePath}images/projects/news-scraper.png`,
  demo: 'https://news-scraper-kritikkaa.vercel.app/',
  github: 'https://github.com/kritiikkaaa/NewsScrapper'
},
  {
    title: 'Online Learning Management System',
    highlights: [
      'Built a learning platform with user authentication, course enrollment, and progress tracking.',
      'Improved the structure of online education workflows through a user-friendly interface.',
      'Created a polished experience for learners and administrators alike.'
    ],
    tags: ['Web Development', 'Education', 'Full Stack'],
    image: `${basePath}images/projects/lms.png`,
    demo: 'https://kritiikkaaa.github.io/Online-Learning-Management-System/',
    github: 'https://github.com/kritiikkaaa/Online-Learning-Management-System'
  }
];

function Projects() {
  return (
    <section id="projects" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Some Things I’ve Built" subtitle="Projects" />
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.07 }} className={`project-card glass-card overflow-hidden p-0 ${project.featured ? 'lg:col-span-2' : ''}`}>
              <div className={project.featured ? 'grid gap-0 lg:grid-cols-[1.05fr_0.95fr]' : ''}>
                <div className={project.featured ? 'order-2 lg:order-1' : ''}>
                  <img src={project.image} alt={project.title} className={`w-full object-cover ${project.featured ? 'h-full min-h-[280px]' : 'h-48'}`} />
                </div>
                <div className={`p-8 ${project.featured ? 'order-1 lg:order-2' : ''}`}>
                {project.featured && (
                  <span className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                    Featured Project
                  </span>
                )}
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <ul className="mt-4 space-y-2 text-slate-300">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={project.demo} target="_blank" rel="noreferrer" className="project-link rounded-full bg-cyan-400/90 px-5 py-2.5 font-medium text-slate-950 transition hover:bg-cyan-300">
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link rounded-full border border-white/15 px-5 py-2.5 font-medium text-white transition hover:border-cyan-400 hover:text-cyan-300">
                    GitHub Repo
                  </a>
                </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
