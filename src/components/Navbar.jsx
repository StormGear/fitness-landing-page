

import React from 'react'
import 'animate.css';
// import logo from '../assets/logo.jpeg'; 
// import logo2 from '../assets/TKC.png'; 
// import logo3 from '../assets/Intutive-Global.png'; 
import logo4 from '../assets/ALCHEMY.png';
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='animate__animated animate__fadeInDown cursor-pointer'>
         {/* Navbar */}
        <nav className="p-6 bg-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* <h1 className="text-2xl font-bold text-[#ff3130]-800">MyBrand</h1> */}
          <img src={logo4} alt="Logo" className="h-15 w-15" />
          <Link to="footer" smooth={true} duration={3000}>
              <button className="bg-[#ff3130] text-white px-6 py-2 rounded-lg hover:bg-[#ff3130] transition duration-300 hover:scale-110 cursor-pointer">
                Book Consultation
              </button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
