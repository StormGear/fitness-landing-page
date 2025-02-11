import Navbar from "./Navbar";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import CTA from "./CTA";
import React from 'react'
import Form from "./Form";
import Partnerships from "./Partnerships";
import Highlights from "./Highlights";
import TextImageSection from "./Choose";

const LandingPage = () => {


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-[#ff3130]-100">
        <Navbar />
        <Hero />
        <Testimonials />
        <Partnerships />
        <Highlights />
         {/* <CTA /> */}
         <Form /> 
        <Footer />
    </div>
  );
};

export default LandingPage;