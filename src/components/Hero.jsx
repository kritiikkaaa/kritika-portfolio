import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const socialLinks = [
  { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/kritiikkaaa' },
  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/kritikkaa/' },
  { icon: <FaEnvelope />, label: 'Email', href: 'mailto:kritikama58@gmail.com' }
];

const basePath = import.meta.env.BASE_URL;

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-[-8rem] top-[-4rem] h-[28rem] w-[28rem] rounded-full bg-cyan-400/25 blur-[120px]" />
        <div className="absolute bottom-[-6rem] right-[-5rem] h-[30rem] w-[30rem] rounded-full bg-fuchsia-600/25 blur-[140px]" />
        <div className="absolute left-[45%] top-[30%] h-[22rem] w-[22rem] rounded-full bg-violet-600/25 blur-[130px]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:46px_46px]" />
        <motion.div animate={{ x: ['-10%', '10%', '-10%'], y: ['0%', '-8%', '0%'] }} transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-[10%] top-[20%] h-40 w-72 rounded-full border border-cyan-400/20 bg-cyan-400/10 blur-3xl" />
        <motion.div animate={{ x: ['8%', '-6%', '8%'], y: ['10%', '-12%', '10%'] }} transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-[12%] right-[12%] h-56 w-80 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 blur-3xl" />
        <motion.div animate={{ x: ['-6%', '8%', '-6%'], y: ['-6%', '10%', '-6%'] }} transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-[32%] top-[50%] h-48 w-64 rounded-full border border-violet-400/20 bg-violet-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.08),_transparent_50%)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center text-center">
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">
          Hi, my name is
        </motion.p>

        <motion.h1 initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.06 }} className="text-5xl font-black leading-[0.85] tracking-[-0.03em] text-white sm:text-7xl lg:text-8xl">
          Kritika
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16 }} className="mt-5 flex min-h-[3rem] items-center justify-center text-xl font-medium text-cyan-200 sm:text-2xl lg:text-3xl">
          <span className="mr-2 text-slate-400">I am a</span>
          <span className="typewriter tracking-wide text-cyan-300">
            <Typewriter
              words={['Data Analyst.', 'QA Engineer.', 'Java Developer.', 'Problem Solver.', 'Tech Enthusiast.']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1200}
            />
          </span>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.22 }} className="mt-8 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg lg:text-xl">
          I am a Computer Science undergraduate passionate about Data Analytics, QA Testing, and Software Development. I enjoy working with SQL, Java, MySQL, Excel, and learning Power BI. I love building practical projects and solving real-world problems through technology.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.28 }} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <motion.a whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(34,211,238,0.25)' }} whileTap={{ scale: 0.97 }} href={`${basePath}resume.pdf`} target="_blank" rel="noreferrer" className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 font-semibold text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.18)] backdrop-blur-md">
            Resume
          </motion.a>
          <motion.a whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(217,70,239,0.25)' }} whileTap={{ scale: 0.97 }} href="#contact" className="rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10 px-6 py-3 font-semibold text-fuchsia-100 shadow-[0_0_24px_rgba(217,70,239,0.16)] backdrop-blur-md">
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.34 }} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map((item, index) => (
            <motion.a
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.08 }}
              whileHover={{ scale: 1.1, rotate: 4, y: -4, boxShadow: '0 0 24px rgba(34,211,238,0.2)' }}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-slate-200 shadow-[0_10px_30px_rgba(2,8,23,0.32)] backdrop-blur-md"
              aria-label={item.label}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.a initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: [0, 8, 0] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.8 }} href="#about" className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center text-slate-400">
          <span className="mb-2 text-xs uppercase tracking-[0.35em]">Scroll</span>
          <FaChevronDown className="text-xl" />
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
