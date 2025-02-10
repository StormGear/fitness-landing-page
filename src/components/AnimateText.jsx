import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TextRotator = ({ texts, interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [texts.length, interval]);

  return (
    <div className="inline-block overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="inline-block font-bold text-4xl italic text-white"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default TextRotator;