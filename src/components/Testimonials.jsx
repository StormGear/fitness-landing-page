

// import { motion } from 'framer-motion'
// import React from 'react'
import Choose from './Choose'

const Testimonials = () => {
  return (
    <div>
       {/* Testimonials Section */}
       <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <Choose />
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: item % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: item * 0.2 }}
                className="bg-[#ff3130]-50 p-8 rounded-lg shadow-lg"
              >
                <p className="text-gray-600 mb-4">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.&quot;
                </p>
                <p className="text-[#ff3130]-800 font-semibold">- Customer {item}</p>
              </motion.div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
