
import React from 'react';
import me from '../assets/me.jpg';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-10 py-20 bg-gray-100 text-center">
     
      <div className="mb-6 mt-1">
        <img
          src={me}
          alt="Dhivyadharshini"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-contain border-[3px] border-black shadow-md"
        />
      </div>

     
      <h1 className="text-xl md:text-5xl font-bold text-blue-300 tracking-tight">
        Hi, I'M DHIVYADHARSHINI
      </h1>
      <h2 className="text-xl md:text-2xl font-medium text-gray-700 mt-2">
        A Passionate Aspiring Frontend Developer
      </h2>

      <p className="mt-4 text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
        As a fresher with hands-on experience in building responsive web interfaces,<br />
        I am open to opportunities where I can <span className="text-blue-500 font-semibold">learn</span>, <span className="text-blue-500 font-semibold">grow</span>, and <span className="text-blue-500 font-semibold">add value</span>.
      </p>

       <a
        href="/DhivyadharshiniK_resume.pdf"
        download
        className="mt-6 inline-block px-6 py-2 bg-blue-400 text-white font-semibold rounded-md hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Home;




