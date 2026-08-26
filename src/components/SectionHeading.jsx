function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
        {subtitle}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}

export default SectionHeading;
