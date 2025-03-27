

import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { GiFlowerStar } from "react-icons/gi";
import lightbulb from '../assets/lightbulb.png';
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";



const Highlights = () => {
  return (
    <div className='bg-[#25BE37] text-white py-20 grid grid-cols-1 md:grid-cols-3 gap-8'>
      <div className='text-center font-bold'>
        <p className='text-left ml-5 text-4xl'>Testimonies from<br/>  Happy Customers</p>
        {/* <img src={lightbulb} alt=""  className='mt-10 ml-5 h-25 w-25'/>
         */}
         <FaQuoteLeft className='ml-5 text-2xl mt-5' />
      </div>
      <div className='m-2'>
        <ul>
            <li className='m-2 my-8'>
            <FaQuoteLeft/>
            <p className='italic'> After two pregnancies, my metabolism felt broken. Sandra recommended Lipotropic injections and guided me on how to eat for my hormones. The combination helped me lose 10 lbs in the first month, and I finally have the energy to keep up with my kids!  
            </p>
            <FaQuoteRight />
            — Lisa Peterson, 36
            </li>
            <li className='m-2 my-8'>
            <FaQuoteLeft/>
            <p className='italic'> After two pregnancies, my metabolism felt broken. Sandra recommended Lipotropic injections and guided me on how to eat for my hormones. The combination helped me lose 10 lbs in the first month, and I finally have the energy to keep up with my kids!  
            </p>
            <FaQuoteRight />
            — Lisa Peterson, 36
            </li>
            <li className='m-2'>
            <FaQuoteLeft/>
            <p className='italic'> After two pregnancies, my metabolism felt broken. Sandra recommended Lipotropic injections and guided me on how to eat for my hormones. The combination helped me lose 10 lbs in the first month, and I finally have the energy to keep up with my kids!  
            </p>
            <FaQuoteRight />
            — Lisa Peterson, 36
            </li>
            
        </ul>
      </div>

    </div>
  )
}

export default Highlights
