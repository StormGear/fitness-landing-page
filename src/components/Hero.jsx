

import { motion } from 'framer-motion'
import React from 'react'

const Hero = () => {
  return (
    <div>
            {/* Hero Section */}
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 py-20 text-center"
      >
        <h1 className="text-5xl font-bold text-purple-800 mb-6">
          Transform Your Business
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover the tools and strategies to grow your business online.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition duration-300"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Hero
