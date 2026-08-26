import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setIsPointer(
        target instanceof HTMLElement &&
          ["A", "BUTTON", "INPUT", "TEXTAREA"].includes(target.tagName),
      );
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[80] h-6 w-6 rounded-full border border-cyan-300/70"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: isPointer ? 1.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[79] h-2 w-2 rounded-full bg-cyan-300/80"
        animate={{ x: position.x - 4, y: position.y - 4 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </>
  );
}

export default Cursor;
