import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 },
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.toLowerCase());
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-900/50 px-4 py-3 shadow-[0_0_40px_rgba(8,15,30,0.45)] backdrop-blur-xl sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300 sm:text-base"
        >
          &lt;Kritika /&gt;
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <motion.a
                key={item}
                href={`#${id}`}
                whileHover={{ y: -2, color: "#67e8f9" }}
                className={`transition ${isActive ? "text-cyan-300" : "text-slate-300"}`}
              >
                {item}
              </motion.a>
            );
          })}
        </nav>
        <motion.a
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 22px rgba(34,211,238,0.28)",
          }}
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.18)]"
        >
          Resume
        </motion.a>
      </div>
    </motion.header>
  );
}

export default Navbar;
