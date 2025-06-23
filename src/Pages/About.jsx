

import React from 'react';
import html from '../assets/html.jpg';
import css from '../assets/css.jpg';
import js from '../assets/js.jpg';
import tailwind from '../assets/tailwind.jpg';
import react from '../assets/react.jpg';

const About = () => {
  const skills = [
    { img: html, label: 'HTML' },
    { img: css, label: 'CSS' },
    { img: js, label: 'JavaScript' },
    { img: tailwind, label: 'Tailwind' },
    { img: react, label: 'React' },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col px-4 md:px-10 items-center py-10">

        <div className="border-2 border-teal-400 border-dashed bg-slate-100 rounded-lg shadow-md w-full p-6 md:p-10 space-y-6 md:mt-12">
          <h1 className="text-2xl md:text-4xl text-blue-300 font-bold text-center underline">
            ABOUT ME
          </h1>

          <p className="text-base md:text-lg text-center leading-relaxed text-gray-700">
            <span className="font-semibold text-black">Hi I'm Dhivyadharshini</span>, BCA graduate with a strong passion in frontend development. Skilled in creating responsive and modern websites, with expertise in 
            <span className="font-semibold text-black"> React.js, JavaScript, HTML</span>, and 
            <span className="font-semibold text-black"> Tailwind CSS</span>. Completed a frontend development internship at IDM Techpark in Coimbatore, gaining hands-on experience working on real-world projects. Committed to continuous learning and focused on delivering clean, user-friendly designs that enhance the overall user experience.
          </p>
        </div>

        <h2 className="text-2xl md:text-4xl text-blue-300 font-bold text-center underline mt-10">
          SKILLS
        </h2>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-full justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-4 bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group
                ${index === skills.length - 1 ? 'col-span-2 justify-self-center sm:col-span-1' : ''}`}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center rounded-full border-4 border-teal-300 overflow-hidden group-hover:scale-110 transform transition duration-300">
                <img
                  src={skill.img}
                  alt={skill.label}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-3 text-sm sm:text-base font-semibold text-gray-700 group-hover:text-teal-500">
                {skill.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;
