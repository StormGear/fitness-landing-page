

import { motion } from 'framer-motion'
import hargrovy from '../assets/hargrovy.jpg'
import kyra from '../assets/kyra.jpg'
import jd from '../assets/jd.jpeg'
import React from 'react'
import TextWithSeeMore from './LongText'
import { hargrovebio, jdbio, kyrabio } from '../utils/constants'

const AboutTeam = () => {
   

return (
    <div>
        <h2 className="text-2xl font-bold text-[#25BE37]-800 m-6 text-center">
            About Our Team
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  
                >
                  <div className="border-8 border-white">
                      <img
                        src={kyra}
                        alt="Placeholder"
                        className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg border-4 border-[#25BE37]"
                      />
                  </div>
                </motion.div>
                <p className="mx-6 my-5">
                    <i><b>Kyra Rénel (Hardwick), MBA Master Business Strategist | Founder & CEO of The Kyra Company, LLC Founder of Smart CEO & BWA Media | Author & Speaker</b></i>
                </p>
                <p className="mx-6 my-5">
                
                <TextWithSeeMore text={kyrabio} />
                
                </p>
            </div>

            <div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
               
                >
                  <div className="border-8 border-white">
                      <img
                        src={hargrovy} // Replace with your image URL
                        alt="Placeholder"
                        className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg border-4 border-[#25BE37]"
                      />
                  </div>
                </motion.div>
                <p className='mx-6 my-5'>
                    <i><b>Arquella Hargrove, MBA</b></i> 
                    <TextWithSeeMore text={hargrovebio} />
                </p>
            </div>

            <div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
               
                >
                  <div className="border-8 border-white">
                      <img
                        src={jd} // Replace with your image URL
                        alt="Placeholder"
                        className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg border-4 border-[#25BE37]"
                      />
                  </div>
                </motion.div>
                <p className='mx-6 my-5'>
                    <i><b>Ambassador Angelique Bartholomew, JD</b></i> 
                    <TextWithSeeMore text={jdbio} />
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutTeam
