

import { motion } from 'framer-motion'
import React from 'react'
import legsCrossed from '../assets/leg_crossed.PNG';
// import female from '../assets/female.PNG'

const ConfiHealth = () => {
  return (
       <div className='flex flex-col items-center justify-center'>
         
           {/* <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-96 border-4 border-[#25BE37] my-5" // Replace with your border color
            >
              <div className="overflow-hidden border-8 border-white">
                  <img
                    src={legsCrossed} // Replace with your image URL
                    alt="Placeholder"
                    className="w-full md:w-96 md:h-96"
                  />
              </div>
            </motion.div> */}
              {/* Image on the left (or top on smaller screens) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="border-4 border-[#ff3130]-200 rounded-full" // Replace with your border color
        >
          <div className="overflow-hidden rounded-full border-8 border-white">
              <img
                src={legsCrossed} // Replace with your image URL
                alt="Placeholder"
                className="sm:w-80 sm:h-80 rounded-full object-cover"
              />
          </div>
        </motion.div>
        <p className="md:text-center pt-5"><span className="font-bold">ConfiHealthFit is founded by <span className="italic">Sandra Bilson Afrifah</span>, a passionate advocate for preventive health and helping women get into the best shape of their lives.</span> Her mission is to empower women with <span className="font-bold">science-backed, sustainable weight loss solutions</span> that fit their lifestyle.</p>
       </div>
    
  )
}

export default ConfiHealth
