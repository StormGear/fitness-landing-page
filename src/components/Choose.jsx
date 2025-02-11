import React from "react";
import { motion } from "framer-motion";
import { GiFlowerStar } from "react-icons/gi";
import three from '../assets/three.png';

const TextImageSection = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text on the right (or bottom on smaller screens) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl font-bold text-left text-[#ff3130]-800 mb-12">
            WHY CHOOSE OUR CONSURTIUM?
          </h2>
          <p className="text-gray-600 mb-6">
          We deliver comprehensive
          motivational speaking and
          coaching Services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <div>
              <div className="flex justify-center items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="border-4 border-[#ff3130]-200 rounded-full flex justify-center items-center" // Replace with your border color
                          >
                 <div className="h-20 w-20 rounded-full border-8 border-white p-1 flex justify-center items-center">
                  <img
                    src={three} // Replace with your image URL
                    alt="Placeholder"
                    className="w-1/2 rounded-full"
                  />
                </div>
            </motion.div>
                  
                <p className="text-gray-600 ml-4"> DECADES OF EXPERIENCE IN </p>
              </div>
            <ul>
                 <li className='flex items-center m-2'>
                                <div className='rounded-full bg-black h-6 w-6 flex items-center justify-center mr-2'> 
                                    <GiFlowerStar className='text-white h-3 w-3' /> 
                                </div>
                               Leadership Development
                </li>
                 <li className='flex items-center m-2'>
                                <div className='rounded-full bg-black h-6 w-6 flex items-center justify-center mr-2'> 
                                    <GiFlowerStar className='text-white h-3 w-3' /> 
                                </div>
                                Professional Consulting
                </li>
                 <li className='flex items-center m-2'>
                                <div className='rounded-full bg-black h-6 w-6 flex items-center justify-center mr-2'> 
                                    <GiFlowerStar className='text-white h-3 w-3' /> 
                                </div>
                            Organizational Training
                </li>
                 <li className='flex items-center m-2'>
                                <div className='rounded-full bg-black h-6 w-6 flex items-center justify-center mr-2'> 
                                    <GiFlowerStar className='text-white h-3 w-3' /> 
                                </div>
                                Public Sector Solutions
                </li>
            </ul>
          </div>

        </motion.div>

        {/* Image on the left (or top on smaller screens) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 border-4 border-[#ff3130]-200 rounded-full" // Replace with your border color
        >
          <div className="overflow-hidden rounded-full border-8 border-white">
              <img
                src="https://alchemy-consulting.com/wp-content/uploads/2023/01/diverse-768x768.jpg" // Replace with your image URL
                alt="Placeholder"
                className="w-full rounded-full"
              />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TextImageSection;
