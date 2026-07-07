function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:36px_36px]" />
    </div>
  );
}

export default Background;
