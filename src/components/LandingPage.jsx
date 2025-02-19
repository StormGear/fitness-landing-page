import Navbar from "./Navbar";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
// import CTA from "./CTA";
import React from 'react'
import Form from "./Form";
import Partnerships from "./Partnerships";
import Highlights from "./Highlights";
// import TextImageSection from "./Choose";
import AboutTeam from "./AboutTeam";

const LandingPage = () => {


  return (
    <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Testimonials />
        <Partnerships />
        <Highlights />
         {/* <CTA /> */}
         <AboutTeam />
         <Form /> 
        <Footer />
    </div>
  );
};

export default LandingPage;