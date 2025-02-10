

import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { GiFlowerStar } from "react-icons/gi";

const Highlights = () => {
  return (
    <div className='bg-[#ff3130] text-white py-20 grid grid-cols-1 md:grid-cols-3 gap-8'>
      <div className='text-center font-bold'>
        <p className='text-left ml-5 text-4xl'>Key <br/>  Highlights</p>
      </div>
      <div>
        <p className='ml-10'>NIGP Code: 91838</p>
        <ul>
            <li className='flex items-center m-2'>
                <div className='rounded-full bg-black h-6 w-6 flex items-center justify-center mr-2'> 
                    <GiFlowerStar className='text-white h-3 w-3' /> 
                </div>
                Education & Training
                Consulting
            </li>
            <li className='flex items-center m-2'>
                <div className='rounded-full bg-black h-6 w-6 flex items-center justify-center mr-2'> 
                    <GiFlowerStar className='text-white h-3 w-3' /> 
                </div>
                Professional Development
                Programs
            </li>
            <li className='flex items-start m-2'>
                <div className='rounded-full bg-black h-6 w-6 flex items-center justify-center mr-2'> 
                    <GiFlowerStar className='text-white h-3 w-3' /> 
                </div>
                <div className="flex flex-col">
                    <span>Leadership Training</span> 
                    <span>Motivational Speaking</span> 
                    <span>Team Building Workshops</span>
                </div>
            </li>
        </ul>
      </div>
      <div>
        <p className='ml-10'>NIGP Code: 91875</p>
        <ul>
            <li className='flex items-center m-2'>
                    <div className='rounded-full bg-black h-6 w-6 flex items-center justify-center mr-2'> 
                        <GiFlowerStar className='text-white h-3 w-3' /> 
                    </div>
                    Management Consulting
            </li>
            <li className='flex items-center m-2'>
                    <div className='rounded-full bg-black h-6 w-6 flex items-center justify-center mr-2'> 
                        <GiFlowerStar className='text-white h-3 w-3' /> 
                    </div>
                    Strategic Planning
            </li>
            <li className='flex items-center m-2'>
                    <div className='rounded-full bg-black h-6 w-6 flex items-center justify-center mr-2'> 
                        <GiFlowerStar className='text-white h-3 w-3' /> 
                    </div>
                    Organizational Development
            </li>
            <li className='flex items-center m-2'>
                    <div className='rounded-full bg-black h-6 w-6 flex items-center justify-center mr-2'> 
                        <GiFlowerStar className='text-white h-3 w-3' /> 
                    </div>
                    Change Management
            </li>
            <li className='flex items-center m-2'>
                    <div className='rounded-full bg-black h-6 w-6 flex items-center justify-center mr-2'> 
                        <GiFlowerStar className='text-white h-3 w-3' /> 
                    </div>
                    Executive Coaching
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Highlights
