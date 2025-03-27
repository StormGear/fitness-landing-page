import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react'

const TextWithSeeMore = ({ text, maxLength = 150 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // If text is shorter than maxLength, don't show button
  if (text.length <= maxLength) {
    return <p className="text-gray-700">{text}</p>;
  }

  const truncatedText = text.slice(0, maxLength) + '...';

  return (
    <div className="space-y-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={isExpanded ? 'expanded' : 'collapsed'}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <p className="text-gray-700">
            {isExpanded ? text : truncatedText}
          </p>
        </motion.div>
      </AnimatePresence>
      
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-[#25BE37]  text-sm font-medium focus:outline-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {isExpanded ? 'See Less' : 'See More'}
      </motion.button>
    </div>
  );
};

export default TextWithSeeMore;