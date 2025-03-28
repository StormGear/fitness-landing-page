import React from 'react'
import { FaSquarePhone } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import youtube from '../assets/youtube.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import tiktok from '../assets/tiktok.svg';

const Footer = () => {
  return (
    <div>
      
      {/* Footer */}
      <footer id="footer" className="bg-white text-black pt-40 pb-5">
        <div className="text-center flex flex-col md:flex-row items-center justify-center">
          <p className='flex items-center mr-1 mb-1' >
            <TbWorldWww className='text-black-500 w-7 h-7' /> 
         <span className=" cursor-pointer ml-2"><a href="https://www.confihealthfit.com 
              " target='_blank'>confihealthfit.com</a></span>
          </p>

          <p className='flex items-start mr-7 mb-1'>
         <img src={facebook} alt="" className='h-7 w-7 '/>
            <span className="cursor-pointer ml-2">
            <a href="https://www.facebook.com/sandrabafrifah/" target='_blank'>sandrabafrifah</a></span>
            </p>

          <p className='flex items-center mr-4 mb-1'>
          <img src={youtube} alt="" className='h-7 w-7'/>
            <span className="cursor-pointer ml-2">
            <a href="https://www.youtube.com/@sandrabafrifah">@sandrabafrifah</a></span>
            </p>

          <p className='flex items-center mr-4 mb-1'>
          <img src={tiktok} alt="" className='h-7 w-7 ' />
 
            <span className=" cursor-pointer ml-2">
            <a href="https://www.tiktok.com/@sandrabafrifah">@sandrabafrifah</a></span>
            </p>

          <p className='flex items-center mr-4 mb-1'>
          <img src={instagram} alt="" className='h-7 w-7' />
     
            <span className=" cursor-pointer ml-2">
            <a href="https://www.instagram.com/sandrabafrifah/
">@sandrabafrifah</a></span>
            </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
