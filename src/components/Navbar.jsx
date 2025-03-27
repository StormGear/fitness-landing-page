

import React from 'react'
import 'animate.css';
// import logo from '../assets/logo.jpeg'; 
// import logo2 from '../assets/TKC.png'; 
// import logo3 from '../assets/Intutive-Global.png'; 
import logo4 from '../assets/ALCHEMY.png';
import dumbell from '../assets/dumbell.webp';
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='animate__animated animate__fadeInDown cursor-pointer'>
         {/* Navbar */}
        <nav className="p-6 bg-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* <h1 className="text-2xl font-bold text-[#25BE37]-800">MyBrand</h1> */}
          {/* <img src={logo4} alt="Logo" className="h-15 w-15" />
           */}
           <div className='flex justify-between items-center text-2xl font-bold text-[#25BE37]-800'>
            <p>ConfiHealthFit</p>
            <img src={dumbell} alt="" className='w-15 h-15' />
            </div>
          <Link to="footer" smooth={true} duration={3000}>
              <button className="bg-[#25BE37] text-white px-6 py-2 rounded-lg hover:bg-[#25BE37] transition duration-300 hover:scale-110 cursor-pointer">
                Order Now!
              </button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
