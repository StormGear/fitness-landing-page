import { motion } from 'framer-motion'
import React from 'react'
import logo4 from '../assets/ALCHEMY.png';
import logowhite from '../assets/ALCHEMY-white.png';
import TextRotator from './AnimateText';
import { Link } from 'react-scroll';
import backgroundVideo from '../assets/bg-video.mp4'; 
import woman from '../assets/woman.png'
import bg from '../assets/bg_image.jpg'

const Hero = () => {
      // Array of text strings to rotate
  const rotatingTexts = [
    "Natural",
    "Effective",
    "Science-Backed",

  ];
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Semi-Transparent Overlay */}
      <div className="absolute inset-0 bg-white opacity-50 z-10"></div>
      <div className="container mx-auto px-6 relative z-20">
      <div className="md:flex md:items-center md:justify-between grid grid-cols-1 gap-4">
        <div className="md:w-1/2 text-left">
          {/* Hero Section */}
          
            <h1 className="text-3xl font-bold text-black mb-6">
              Struggling with Low Energy and Stubborn Weight? BioBoost Plus Can Help!
            </h1>
            {/* <p className="text-xl mb-8"> */}
              <TextRotator texts={rotatingTexts} interval={2000} />
            {/* </p> */}
            <p className='text-2xl font-bold text-black mb-8'>
              Order Now – Limited Supply Available
            </p>


            <div className="text-left">
              <Link to="footer" smooth={true} duration={3000}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#25BE37] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#25BE37] transition duration-300 cursor-pointer"
                >
                  Order Now!
                </motion.button>
              </Link>
            </div>
          
        </div>

        <div className="md:w-1/2">
          <motion.img 
            src={bg} 
            alt="logo" 
            className='w-full rounded-lg'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
      </div>

      <div>

      </div>
    </div>
  )
}

export default Hero