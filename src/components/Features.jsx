

import { motion } from 'framer-motion'
import React from 'react'

const Features = () => {
  return (
    <div>
       {/* Features Section */}
       <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-[#25BE37]-800 mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-bold text-[#25BE37]-800 mb-4">
                Feature {item}
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
