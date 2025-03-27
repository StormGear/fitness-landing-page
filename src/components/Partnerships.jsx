
import React from 'react'
import logo2 from '../assets/TKC.png'; 
import logo3 from '../assets/Intutive-Global.png'; 
import { FaHospital } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { IoSchoolSharp } from "react-icons/io5";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { RiCommunityFill } from "react-icons/ri";
import megaphone from '../assets/megaphone.png';
import { FaCircleCheck } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Partnerships = () => {
  return (
    <>
    <div className='bg-white border-t-2 border-b-2 border-black p-6 flex justify-between'>
          <div className='p-6 flex flex-col md:text-2xl'>
              <h1 className='font-bold text-3xl'>Pricing starts as low as $195/month</h1>
              <h1 className='italic '>&nbsp;&nbsp;&nbsp;&nbsp;a small investment for real, lasting results</h1>
          </div>
          <div className='hidden p-6 md:flex flex-col md:text-2xl'>
              <p>Designed Specifically</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;For...</p>
          </div>
      </div>
      <div>
      <div className="bg-white md:flex justify-around">
          <div>
              <div className='p-6 flex flex-col  italic  text-center'>
              With ConfiHealthFit’s expert guidance, you’re not just taking a supplement—you’re getting a proven strategy to support your metabolism, balance your hormones, and finally see the weight loss results you deserve. <br/>
<span className="mt-5">➡ <span className="font-bold text-xl">[Book Your Consultation Now]</span> – Start feeling your best today!</span>

              </div>
          </div>
               {/* <div className='border-b-2 border-black p-6 flex justify-between md:hidden'>
         
        </div> */}
    <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 p-5"
        >
          <h2 className="text-3xl font-bold text-left text-[#25BE37]-800 mb-12">
          Why Choose BioBoost Plus?
          </h2>
          <p className="text-gray-600 mb-6">
          Unlike traditional weight loss supplements, <span className="font-bold">BioBoost Plus</span> works by supporting your body's natural fat-burning processes.
          <ul className="list-disc ml-6 my-5">
            <li>  <span className="font-bold">Boosts Metabolism </span>– Helps your body break down and burn fat efficiently</li>
            <li>  <span className="font-bold">Increases Energy</span> – Say goodbye to sluggishness and low motivation</li>
            <li>  <span className="font-bold">Supports Liver Health</span> – Helps eliminate toxins that slow weight loss</li>
            <li>  <span className="font-bold">Naturally Curbs Cravings</span> – Stay on track without constant hunger</li>
          </ul>
          <p className="flex items-center ">
            <FaCircleCheck className="text-[#25BE37] h-5 w-5"/>
            <span className="ml-3">Order Now – Get the natural support your body needs</span>
          </p>
          </p>
        </motion.div>

        <div className='border-b-1 border-gray-400 pl-10 pr-10 flex justify-between md:hidden'>
         </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 p-5"
        >
          <h2 className="text-3xl font-bold text-left text-[#25BE37]-800 mb-12">
          Why Choose BioBoost Plus?
          </h2>
          <p className="text-gray-600 mb-6">
          Unlike traditional weight loss supplements, <span className="font-bold">BioBoost Plus</span> works by supporting your body's natural fat-burning processes.
          <ul className="list-disc ml-6 my-5">
            <li>  <span className="font-bold">Boosts Metabolism </span>– Helps your body break down and burn fat efficiently</li>
            <li>  <span className="font-bold">Increases Energy</span> – Say goodbye to sluggishness and low motivation</li>
            <li>  <span className="font-bold">Supports Liver Health</span> – Helps eliminate toxins that slow weight loss</li>
            <li>  <span className="font-bold">Naturally Curbs Cravings</span> – Stay on track without constant hunger</li>
          </ul>
          <p className="flex items-center ">
            <FaCircleCheck className="text-[#25BE37] h-5 w-5"/>
            <span className="ml-3">Order Now – Get the natural support your body needs</span>
          </p>
          </p>
        </motion.div>

 <div className='border-b-1 border-gray-400 pl-10 pr-10 flex justify-between md:hidden'>
         
        </div>
          
          <div className='p-6 font-bold text-3xl'>
          Real Women. Real Results.
          </div>
      </div>
  


    </div>
          </>
  )
}

export default Partnerships


