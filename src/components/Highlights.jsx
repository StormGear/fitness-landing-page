

import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { GiFlowerStar } from "react-icons/gi";
import lightbulb from '../assets/lightbulb.png';
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";



const Highlights = () => {
  return (
    <div className='bg-[#25BE37] text-white py-20'>
      <div className='text-center font-bold'>
        <p className='text-left ml-5 text-4xl'>Testimonies from<br/>  Happy Customers</p>
        {/* <img src={lightbulb} alt=""  className='mt-10 ml-5 h-25 w-25'/>
         */}
         <FaQuoteLeft className='ml-5 text-2xl mt-5' />
      </div>
      <div className='m-5 p-5'>
        <ul>
            <div className="md:grid md:grid-cols-2">
              <li className='m-2 my-8'>
              <FaQuoteLeft/>
              <p className='italic'> After two pregnancies, my metabolism felt broken. Sandra recommended Lipotropic injections and guided me on how to eat for my hormones. The combination helped me lose 10 lbs in the first month, and I finally have the energy to keep up with my kids!
              </p>
              <FaQuoteRight />
              — Lisa Peterson, 36
              </li>
              <li className='m-2 my-8'>
              <FaQuoteLeft/>
              <p className='italic'> I struggled with weight loss for years due to hormonal imbalances. Sandra’s approach helped me reset my metabolism. With the right guidance, I’ve lost 18 lbs and kept it off!
              </p>
              <FaQuoteRight />
              — Megan Williams, 34
              </li>
            </div>
            <div className="md:grid md:grid-cols-2">
              <li className='m-2 my-8'>
              <FaQuoteLeft/>
              <p className='italic'> Sandra’s holistic approach was exactly what I needed. I had been struggling with PCOS-related weight gain, and her gut health program combined with targeted supplements helped me lose 15 lbs naturally. I feel healthier, my bloating is gone, and I have so much more energy!
              </p>
              <FaQuoteRight />
              — Shanice Nkrumah, 31
              </li>
              <li className='m-2 my-8'>
              <FaQuoteLeft/>
              <p className='italic'> Sandra truly listens and customizes her approach to fit your lifestyle. I travel a lot for work, and she helped me incorporate holistic weight loss supplements and healthy travel-friendly meal options. I lost 13 lbs without feeling restricted or deprived!
              </p>
              <FaQuoteRight />
              — Michelle Jansen, 39
              </li>
            </div>
            
        </ul>
      </div>

    </div>
  )
}

export default Highlights
