import React, { useRef, useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    console.log(result); 

    if (result.success) {
      formRef.current.reset(); 
      setSubmitted(true); 
     
      window.location.href =
        "https://wa.me/917867077402?text=Hi%20Dhivya,%20I%20have%20submitted%20the%20form!";
    } else {
      alert("❌ Message failed to send.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg mt-1 mb-14">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-blue-300 underline mb-8 sm:mb-10">
          CONTACT
        </h2>

        {submitted && (
          <p className="text-green-600 font-semibold text-center mb-6">
            ✅ Message sent successfully!
          </p>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        >
          <input type="hidden" name="access_key" value="dcef4d89-daa9-47b2-b3d9-044832b1667b" />
          <input type="hidden" name="replyto" value="dhivyak463@gmail.com" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="md:col-span-2 p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
          />
          <textarea
            rows="5"
            name="message"
            placeholder="Message"
            required
            className="md:col-span-2 p-3 sm:p-4 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
          ></textarea>

          <button
            type="submit"
            className="md:col-span-2 bg-blue-300 text-white py-3 text-lg rounded-xl hover:bg-indigo-700 transition duration-300 w-full"
          >
            Send Message
          </button>
        </form>

    
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-gray-600 justify-items-center">
          <a
            href="mailto:dhivyak463@gmail.com"
            className="flex flex-col items-center hover:text-indigo-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-3xl" />
            <span className="text-sm mt-1">Email</span>
          </a>

          <a
            href="tel:+917867077402"
            className="flex flex-col items-center hover:text-green-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPhoneAlt className="text-3xl" />
            <span className="text-sm mt-1">Phone</span>
          </a>

          <a
            href="https://wa.me/917867077402"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-green-500 transition"
          >
            <FaWhatsapp className="text-3xl" />
            <span className="text-sm mt-1">WhatsApp</span>
          </a>

          <a
            href="https://github.com/DHIVYADHARSHINI78"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-gray-800 transition"
          >
            <FaGithub className="text-3xl" />
            <span className="text-sm mt-1">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
