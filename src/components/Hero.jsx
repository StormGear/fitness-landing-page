

import { motion } from 'framer-motion'
import React from 'react'
import logo4 from '../assets/ALCHEMY.png';
import TextRotator from './AnimateText';

const Hero = () => {
      // Array of text strings to rotate
  const rotatingTexts = [
    "Leadership Development",
    "Professional Consulting",
    "Organizational Training",
    "Public Sector Solutions",
  ];
  return (
    <div>
            {/* Hero Section */}
        <div className='animate__animated animate__fadeInDown flex items-center justify-center bg-gradient-to-br from-blue-50 to-[#ff3130]-100 mt-20'>
            <img src={logo4} alt="logo" className='h-48 w-48 text-center' />
        </div>
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 py-20 text-center"
      >
        <h1 className="text-3xl font-bold text-[#ff3130]-800 mb-6">
          Decades of Collective Experience In
        </h1>
        <p className="text-xl text-gray-600 mb-8">
            <TextRotator texts={rotatingTexts} interval={2000} />
        </p>
        <p className='text-xl text-gray-600 mb-8'>
            Now Available Through Your PCA Membership | Contract OD-418-24
        </p>
        
       
        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#ff3130] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#ff3130] transition duration-300"
        >
          Get Started
        </motion.button> */}
      </motion.div>
    </div>
  )
}

export default Hero
