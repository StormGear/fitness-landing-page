

import { motion } from 'framer-motion'
import React from 'react'

const CTA = () => {
  return (
    <div>
      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-20 text-center"
      >
        <h2 className="text-3xl font-bold text-purple-800 mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of businesses growing with MyBrand.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition duration-300"
        >
          Sign Up Now
        </motion.button>
      </motion.div>
    </div>
  )
}

export default CTA
