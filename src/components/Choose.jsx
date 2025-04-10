import React from "react";
import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import ConfiHealth from "./ConfiHealth";

const TextImageSection = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row items-center gap-8">
      <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl font-bold text-left text-[#25BE37]-800 mb-12">
          Struggling to Lose Weight? Unlock Your Body’s Natural Fat-Burning Power with BioBoost Plus!
          </h2>
          <p className="text-gray-600 mb-6">
          At <span className="font-bold">ConfiHealthFit</span>, we specialize in <span className="font-bold">women-only weight loss</span>, helping you break free from slow metabolism, low energy, and stubborn fat—<span className="font-bold">naturally</span>.
          <br />
          <br />
          <span className="font-bold">BioBoost Plus</span> is a powerful <span className="font-bold">lipotropic vitamin blend</span> designed to <span>boost metabolism, burn fat, and increase energy</span>—without extreme diets or medications.
          <br />

          </p>
        </motion.div>

        {/* Text on the right (or bottom on smaller screens) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl font-bold text-left text-[#25BE37]-800 mb-12">
          Why Choose BioBoost Plus?
          </h2>
          <div className="text-gray-600 mb-6">
          Unlike traditional weight loss supplements, <span className="font-bold">BioBoost Plus</span> works by supporting your body's natural fat-burning processes.
          <ul className="list-disc ml-6 my-5">
            <li>  <span className="font-bold">Boosts Metabolism </span>– Helps your body break down and burn fat efficiently</li>
            <li>  <span className="font-bold">Increases Energy</span> – Say goodbye to sluggishness and low motivation</li>
            <li>  <span className="font-bold">Supports Liver Health</span> – Helps eliminate toxins that slow weight loss</li>
            <li>  <span className="font-bold">Naturally Curbs Cravings</span> – Stay on track without constant hunger</li>
          </ul>
          <p className="flex items-center ">
            <FaCircleCheck className="text-[#25BE37] h-5 w-5"/>
            <span className="ml-3"><span className="font-bold">Order Now!</span> – Get the natural support your body needs</span>
          </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <div>
              <p>
              If your metabolism feels sluggish, you’re constantly battling cravings, or weight loss feels harder than it should, BioBoost Plus is the natural solution you need. This powerful lipotropic vitamin blend is designed to support fat metabolism, boost energy, and help your body burn fat efficiently—without extreme dieting or harsh stimulants.
              </p>
            <ul>
                 <li className='flex items-center m-2 mt-4'>
                                <FaCheck className='text-black h-5 w-5 mr-2'/>
                                Enhances fat-burning and metabolism naturally
                </li>
                 <li className='flex items-center m-2'>
                 <FaCheck className='text-black h-5 w-5 mr-2'/>
                 Supports liver detoxification for easier weight loss
                </li>
                 <li className='flex items-center m-2'>
                 <FaCheck className='text-black h-5 w-5 mr-2'/>
                 Boosts energy levels so you feel your best every day       
                </li>
            </ul>
                        
          <br />
       
          </div>

        </motion.div>

        {/* Image on the left (or top on smaller screens) */}
       
      </div>
      < ConfiHealth />
    </div>
  );
};

export default TextImageSection;
