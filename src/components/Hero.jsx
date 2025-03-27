

import { motion } from 'framer-motion'
import React from 'react'
import logo4 from '../assets/ALCHEMY.png';
import logowhite from '../assets/ALCHEMY-white.png';
import TextRotator from './AnimateText';
import { Link } from 'react-scroll';
import backgroundVideo from '../assets/bg-video.mp4'; 
import woman from '../assets/woman.png'

const Hero = () => {
      // Array of text strings to rotate
  const rotatingTexts = [
    "Natural",
    "Effective",
    "Science-Backed",

  ];
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">

         {/* Video Background */}
      {/* <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Overlay Content */}
      
      {/* Semi-Transparent Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 text-center relative z-20"
      >
        {/* Hero Section */}
        <div className='animate__animated animate__fadeInDown flex items-center justify-center'>
            <img src={woman} alt="logo" className='h-48 w-48 text-center mb-20' />
        </div>
        <h1 className="text-3xl font-bold text-white mb-6">
          Struggling with Low Energy and Stubborn Weight? BioBoost Plus Can Help!
        </h1>
        <p className="text-xl text-white mb-8">
            <TextRotator texts={rotatingTexts} interval={2000} />
        </p>
        <p className='text-2xl font-bold text-white mb-8'>
            Order Now – Limited Supply Available
        </p>
        
       
        <Link to="footer" smooth={true} duration={3000}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#25BE37] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#25BE37] transition duration-300 cursor-pointer"
            >
              Order Now!
            </motion.button>
        </Link>
      </motion.div>
    </div>
  )
}

export default Hero
