import React, { useState } from "react";
import { motion } from "framer-motion";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (e.g., API call)
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto mb-10"
    >
      {submitted ? (
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#ff3130]-800 mb-4">
            Thank You!
          </h3>
          <p className="text-gray-600">
            We&apos;ll get back to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-[#ff3130]-800 mb-6 text-center">
            Contact Us
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border-gray-400 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3130]-600 "
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
              className="w-full px-4 py-2 border-gray-400 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3130]-600"
              placeholder="Enter your email"
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
              className="w-full px-4 py-2 border-gray-400 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3130]-600"
              placeholder="Enter your message"
              rows={4}
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-[#ff3130] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ff3130] transition duration-300"
          >
            Submit
          </motion.button>
        </form>
      )}
    </motion.div>
  );
};

export default Form;