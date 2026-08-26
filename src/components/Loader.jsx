import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950"
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="h-14 w-14 rounded-full border-2 border-cyan-400/30 border-t-cyan-300"
        />
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
          Loading Kritika
        </p>
      </div>
    </motion.div>
  );
}

export default Loader;
