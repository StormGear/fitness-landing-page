import React, { useReducer, useState } from "react";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import { useNetworkStatus } from "../utils/internet";
import { Resend } from 'resend';

// Initial state for the reducer
const initialState = {
  loading: false,
  error: null,
  success: false,
};

// Reducer function to manage loading states
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true, error: null, success: false };
    case 'SUCCESS':
      return { ...state, loading: false, success: true };
    case 'ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Form = () => {
  const isOnline = useNetworkStatus();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [state, dispatch] = useReducer(reducer, initialState);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isOnline) {
      dispatch({ 
        type: 'ERRPR', 
        payload: 'No internet connection. Please try again when you\'re online.' 
      });
      return;
    }
    dispatch({ type: 'LOADING' });

     // Replace with your EmailJS service ID, template ID, and user ID
     const serviceID = 'service_z6k0ixq';
     const templateID = 'template_0je1wuh';
     const userID = 'FMln_4viTGxeet27B';

     const emailData = {
      ...formData,
      from_name: formData.name,
      reply_to: formData.email,
      phone: formData.phone,
      // to_email: "papa.boahen@acity.edu.gh", // Replace with the recipient's email
    };

    try {
  
    // Simulate form submission (e.g., API call)
    emailjs.send(serviceID, templateID, emailData, userID)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      dispatch({ type: 'SUCCESS' });
      console.log("Form Data Submitted:", formData);
    }, (err) => {
      console.log('FAILED...', err);
      dispatch({ type: 'ERROR', payload: err });
    });
  } catch (e) {
    dispatch({ type: 'ERROR', payload: e.toString() });
  }


   
  };

  return (
    <div className="max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg my-10"
      >
        {state.success ? (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#25BE37]-800 mb-4">
              Thank You!
            </h3>
            <p className="text-gray-600">
              We&apos;ll get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-[#25BE37]-800 mb-6 text-center">
              Book Consultation
            </h2>
            {!isOnline && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
            You are currently offline. The form will be available when you reconnect.
          </div>
        )}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border-gray-400 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25BE37]-600 "
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border-gray-400 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25BE37]-600"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border-gray-400 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25BE37]-600"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border-gray-400 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25BE37]-600"
                placeholder="Enter your message"
                rows={4}
                required
              />
            </div>
            <motion.button
              disabled={state.loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-[#25BE37] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#25BE37] transition duration-300"
            >
              {state.loading ?  'Submitting...' : 'Submit'}
            </motion.button>
            { state.error !== null ? <p className="my-6 text-center">An error occurred: {state.error}</p> : null }
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default Form;