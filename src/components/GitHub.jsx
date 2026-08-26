import SectionHeading from "./SectionHeading";

function GitHub() {
  return (
    <section id="github" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="GitHub" subtitle="Code and projects" />
        <div className="glass-card p-8">
          <p className="section-copy">
            I enjoy building practical, maintainable projects and continuously
            improving my skills through code, testing, and data-focused problem
            solving.
          </p>
          <a
            href="https://github.com/kritiikkaaa"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full border border-cyan-400/30 px-5 py-3 text-cyan-300 transition hover:bg-cyan-400/10"
          >
            Visit GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default GitHub;
