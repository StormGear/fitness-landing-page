

import React from 'react'

const Navbar = () => {
  return (
    <div>
         {/* Navbar */}
        <nav className="p-6 bg-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-800">MyBrand</h1>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
            Get Started
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
