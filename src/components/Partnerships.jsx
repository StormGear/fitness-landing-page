
import React from 'react'
import logo2 from '../assets/TKC.png'; 
import logo3 from '../assets/Intutive-Global.png'; 
import { FaHospital } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { IoSchoolSharp } from "react-icons/io5";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { RiCommunityFill } from "react-icons/ri";

const Partnerships = () => {
  return (
    <>
    <div className='border-t-2 border-b-2 border-black p-6 flex justify-between'>
          <div className='p-6 flex flex-col'>
              <p>In Partnership</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;With...</p>
          </div>
          <div className='p-6 flex flex-col'>
              <p>Designed Specifically</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;For...</p>
          </div>
      </div>
      <div>
      <div className="md:flex justify-around">
          <div>
              <div className='p-6 flex flex-col  italic text-gray-400 text-center'>
                      <p className='underline'>Intuitive Global Consulting &</p>
                      <p>&nbsp;&nbsp;&nbsp;<span className="underline">The Kyra Company</span></p>
              </div>
              <div className='flex text-center justify-center'>
               <img src={logo3} alt="" className='h-24 w-24 mx-4'/>
                <img src={logo2} alt="" className='h-20 w-24 '/>
              </div>
          </div>
          <div className='mt-6 p-6'>
            <ul>
                <li className='flex place-items-baseline mb-4'>
                     <div className='rounded-full bg-[#ff3130] h-8 w-8 flex items-center justify-center mr-2'>
                        <FaHospital className='' />
                    </div>
                    Healthcare Organizations
                </li>
                <li className='flex place-items-baseline mb-4'>
                    <div className='rounded-full bg-[#ff3130] h-8 w-8 flex items-center justify-center mr-2'>
                        <GoLaw className='' />
                    </div>
                    Government Agencies
                </li>
                <li className='flex place-items-baseline mb-4'>
                    <div className='rounded-full bg-[#ff3130] h-8 w-8 flex items-center justify-center mr-2'>
                        <IoSchoolSharp className='' />
                    </div>
                    School Districts
                </li>
                <li className='flex place-items-baseline mb-4'>
                    <div className='rounded-full bg-[#ff3130] h-8 w-8 flex items-center justify-center mr-2'>
                        <RiCommunityFill className='' />
                    </div>
                    Municipalities
                </li>
                <li className='flex place-items-baseline mb-4'>
                    <div className='rounded-full bg-[#ff3130] h-8 w-8 flex items-center justify-center mr-2'>
                        <BsSuitcaseLgFill className='' />
                    </div>
                    Nonprofit Organizations <br/>
                    Comprehensive Service <br/>
                    Categories
                </li>
            </ul>
          </div>
      </div>
      <div className="flex justify-end">
          <div className='border border-r-0 rounded-l-4xl border-t-black border-b-black text-right p-3 w-full md:w-1/2'>
                <p >Elevate Your Organization with Expert Consulting & Training Services</p>
         </div>
      </div>


    </div>
          </>
  )
}

export default Partnerships


