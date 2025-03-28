
import React from 'react'
import logo2 from '../assets/TKC.png'; 
import logo3 from '../assets/Intutive-Global.png'; 
import { FaHospital } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { IoSchoolSharp } from "react-icons/io5";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { RiCommunityFill } from "react-icons/ri";
import megaphone from '../assets/megaphone.png';
import { FaCheck, FaCircle, FaCircleCheck } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import 'animate.css';

const Partnerships = () => {
  return (
    <>
    <div className='bg-white border-t-2 border-b-2 border-black p-6 flex justify-between'>
          <div className='p-6 flex flex-col md:text-2xl'>
              <h1 className='font-bold text-3xl'>Pricing starts as low as $195/month</h1>
              <h1 className='italic '>&nbsp;&nbsp;&nbsp;&nbsp;a small investment for real, lasting results</h1>
          </div>
      </div>
      <div className='md:flex flex-col items-center justify-center'>
          <div className='p-6 flex flex-col italic  text-center md:w-1/2'>
          <p>With ConfiHealthFit’s expert guidance, you’re not just taking a supplement—you’re getting a proven strategy to support your metabolism, balance your hormones, and finally see the weight loss results you deserve. </p>
            <p className="mt-5 flex justify-center">➡ <h1 className="animate__animated animate__pulse animate__infinite font-bold text-xl ml-5 cursor-pointer"><a href="https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=3709145&require_offering=true&provider_ids=[3709145]&offering_ids=[180865]&hide_package_images=false&primary_color=16284A
" target="_blank">[Book Your Consultation Now]</a></h1> </p>
               <p>– Start feeling your best today!</p>
          </div>
      </div>    
      <div>
      <div className="bg-white md:flex justify-around">
      
    <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 p-5"
        >
          <h2 className="text-3xl font-bold text-left text-[#25BE37]-800 mb-12">
          What’s Inside BioBoost Plus?
          </h2>
          <p className="text-gray-600 mb-6">
          A premium blend of <span className="font-bold">essential vitamins and lipotropic nutrients</span> that help your body burn fat naturally:
          <ul className="my-5">
            <li className='flex items-baseline sm:items-center pb-2'>  <span><FaCircle className='w-2 h-2 mr-2' /></span> <span> Vitamin B12 – Supports energy production and metabolism</span></li>
            <li className='flex items-baseline sm:items-center pb-2'>  <span><FaCircle className='w-2 h-2 mr-2' /></span>   Methionine, Inositol, Choline (MIC) – Helps break down and transport fat</li>
            <li className='flex items-baseline sm:items-center pb-2'>  <span><FaCircle className='w-2 h-2 mr-2' /></span> L-Carnitine – Assists in fat metabolism for increased energy</li>
            <li className='flex items-baseline sm:items-center pb-2'> <span><FaCircle className='w-2 h-2 mr-2' /></span> Chromium – Supports blood sugar balance to reduce cravings</li>
          </ul>
          <p className='font-bold pb-4'>No artificial additives. Just clean, effective ingredients to help you reach your goals.</p>
          <p className="flex items-center ">
            <FaCircleCheck className="text-[#25BE37] h-5 w-5"/>
            <span className="ml-3"><span className="font-bold">Order Now</span> – Get the natural support your body needs</span>
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
          Who Should Use BioBoost Plus?
          </h2>
          <p className="text-gray-600 mb-6">
          BioBoost Plus is designed for <span className="font-bold">women who want to lose weight naturally</span> and boost their metabolism, including:
           <ul>
            <li className='flex sm:items-center m-2 mt-4'>
                            <FaCheck className='text-black h-5 w-5 mr-2'/>
                            Enhances fat-burning and metabolism naturally
            </li>
            <li className='flex sm:items-center m-2'>
            <FaCheck className='text-black h-5 w-5 mr-2'/>
            Supports liver detoxification for easier weight loss
            </li>
            <li className='flex sm:items-center m-2'>
            <FaCheck className='text-black h-5 w-5 mr-2'/>
            Boosts energy levels so you feel your best every day       
            </li>
    </ul>
            <p className='my-5'>
            At ConfiHealthFit, Sandra Bilson Afrifah and her team are committed to helping women lose weight and feel their best—without fad diets or extreme measures.
            </p>
          <p className="flex items-center ">
            <FaCircleCheck className="text-[#25BE37] h-5 w-5"/>
            <span className="ml-3"><span className='font-bold'>Get Started Today!</span> – Take the first step toward natural, sustainable weight loss</span>
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


