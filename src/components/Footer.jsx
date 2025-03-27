import React from 'react'
import { FaSquarePhone } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SocialIcon } from 'react-social-icons/component'

const Footer = () => {
  return (
    <div>
      
      {/* Footer */}
      <footer id="footer" className="bg-white text-black pt-40 pb-5">
        <div className="container mx-auto px-6 text-center flex flex-col md:flex-row items-center justify-center">
          <p className='flex items-baseline mr-4'>
          <div className='rounded-full bg-black h-8 w-8 flex items-center justify-center mr-2'> 
          <TbWorldWww className='text-white' /> 
            </div>
         <span className="underline cursor-pointer"><a href="https://alchemy-consulting.com/" target='_blank'>alchemy-consulting.com</a></span></p>
         <SocialIcon url="www.vimeo.com" />
          <p className='flex items-baseline mr-4'>
          <div className='rounded-full bg-black h-8 w-8 flex items-center justify-center mr-2 my-1'> 
                <MdEmail className='text-white' /> 
            </div>
            <span className="underline cursor-pointer">
            <a href="mailto:arquella@alchemy-consulting.com">arquella@alchemy-consulting.com</a></span></p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
