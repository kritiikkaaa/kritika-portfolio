import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import Loader from './components/Loader';
import Cursor from './components/Cursor';

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <AnimatePresence mode="wait">
        {loading ? <Loader key="loader" /> : null}
      </AnimatePresence>
      <motion.div className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500" style={{ scaleX }} />
      <Cursor />
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <AnimatePresence>
        {showScrollTop ? (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/80 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.2)] backdrop-blur-xl"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default App;
