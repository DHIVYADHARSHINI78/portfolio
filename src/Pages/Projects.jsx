
import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Pros = [
  {
    img: project1,
    heading: "REPAIR SERVICE AND PRODUCT STORE",
    Github: "https://github.com/DHIVYADHARSHINI78/Phonefix",
    Live: "https://fixyourgadgets11.netlify.app/",
    desc: `FixYourGadgets is a responsive React-based web app for booking gadget repairs and purchasing products.
Integrated dynamic service request handling and cart management using useState and useEffect.
Users can schedule repairs for phones, laptops, and appliances, and shop tech accessories.`,
    lan: ["ReactJs", "Tailwind CSS", "ReactRouter", "Javascript"]
  },
  {
    img: project2,
    heading: "GIPHY CLONE",
    Github: "https://github.com/DHIVYADHARSHINI78/Giphyclone",
    Live: "https://giphycclone.netlify.app/",
    desc: `Giphy Clone is a React-based GIF and sticker browser powered by the GIPHY API.
Includes real-time search, trending filters, and a smooth experience with React Router.`,
    lan: ["ReactJs", "Tailwind CSS", "ReactRouter", "Javascript"]
  },
  {
    img: project3,
    heading: "RECIPE FINDER",
    Github: "https://github.com/DHIVYADHARSHINI78/Recipe",
    Live: "https://thereciperadar.netlify.app/",
    desc: `Recipe Finder helps users explore international dishes using TheMealDB API.
Includes alphabet filtering, full recipe steps, embedded YouTube videos, and easy navigation.`,
    lan: ["React Js", "CSS", "ReactRouter", "Javascript"]
  },
  {
    img: project4,
    heading: "WEATHER APP",
    Github: "https://github.com/DHIVYADHARSHINI78/weatherapp",
    Live: "https://weatherappusingreactjs1.netlify.app/",
    desc: `Weather App uses OpenWeatherMap API to show real-time data.
It fetches and displays temperature, humidity, wind speed, and geo-coordinates of the user.`,
    lan: ["React Js", "CSS", "Javascript"]
  },
  {
    img: project5,
    heading: "MEMORY GAME USING JAVASCRIPT",
    Github: "https://github.com/DHIVYADHARSHINI78/Memorygame",
    Live: "https://memorygameo.netlify.app/",
    desc: `A responsive and interactive memory card game where users flip cards to find matching icon pairs. Built using pure JavaScript with shuffle, flip, and match logic, this game dynamically updates the UI and tracks the player's progress. Each card displays a fun Font Awesome icon, and a win message is shown upon matching all pairs. Great for improving logic-building and DOM manipulation skills.`,
    lan: ["HTML", "CSS", "Javascript"]
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-100">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-16 text-center text-blue-300 underline">
        MY PROJECTS
      </h1>

      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {Pros.map((pro, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="flex flex-col lg:flex-row gap-10 bg-gray-100 rounded-xl shadow-lg p-5 sm:p-8 transition-transform hover:scale-[1.01] group"
          >
            {/* Image & heading section */}
            <a
              href={pro.Live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center w-full lg:w-1/2 cursor-pointer"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-center text-emerald-600 mb-4 px-2">
                {pro.heading}
              </h2>
              <img
                src={pro.img}
                alt={pro.heading}
                className="w-full max-w-[400px] object-contain mb-4 rounded-md group-hover:opacity-95"
              />
            </a>

            {/* Description section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <p className="text-gray-700 mb-6 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                {pro.desc}
              </p>

              <h3 className="text-base sm:text-lg font-medium mb-3 text-emerald-600">TECH STACK:</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {pro.lan.map((tech, idx) => (
                  <span
                    key={idx}
                    title={`Tech: ${tech}`}
                    className="bg-gray-200 text-xs sm:text-sm px-3 py-1 rounded-full hover:bg-teal-200 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href={pro.Github} target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center gap-2 border border-gray-700 px-4 py-2 rounded hover:bg-gray-700 hover:text-white transition text-sm sm:text-base">
                    <FaGithub /> Source Code
                  </button>
                </a>
                <a href={pro.Live} target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center gap-2 border border-blue-700 px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition text-sm sm:text-base">
                    <FaExternalLinkAlt /> Live Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
