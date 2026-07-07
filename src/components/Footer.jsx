import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-sm text-slate-400 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Kritika. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a href="#home" className="transition hover:text-cyan-300">Home</a>
          <a href="#about" className="transition hover:text-cyan-300">About</a>
          <a href="#skills" className="transition hover:text-cyan-300">Skills</a>
          <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
          <a href="#experience" className="transition hover:text-cyan-300">Experience</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">Resume</a>
        </div>
        <div className="flex gap-3 text-base text-slate-300">
          <a href="https://github.com/kritiikkaaa" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/kritikkaa/" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300"><FaLinkedin /></a>
          <a href="mailto:kritikama58@gmail.com" className="transition hover:text-cyan-300"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
