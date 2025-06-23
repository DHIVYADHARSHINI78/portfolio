import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';


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
    desc: `A responsive and interactive memory card game where users flip cards to find matching icon pairs. Built using pure JavaScript with shuffle, flip, and match logic, this game dynamically updates the UI and tracks the player's progress. Each card displays a fun Font Awesome icon, and a win message is shown upon matching all pairs. Great for improving logic-building and DOM manipulation skills.

`,
    lan: ["HTML" ,"CSS", "Javascript"]
  }
];

const Projects = () => {
  return (
    
    <div className="min-h-screen py-12 px-6 bg-gray-100">
      <h1 className="text-2xl md:text-4xl font-bold mb-16 text-center text-blue-300 underline">MY PROJECTS</h1>

      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        {Pros.map((pro, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-10 items-start">
            
         
            <div className="flex flex-col items-center w-full md:w-1/2">
              <img 
                src={pro.img} 
                alt={pro.heading} 
                className="w-full max-w-sm object-contain mb-4"
              />

              <div className="flex gap-4 mt-2">
                <a href={pro.Github} target="_blank" rel="noopener noreferrer">
                  <button className="border border-gray-700 px-4 py-2 rounded hover:bg-gray-700 hover:text-white transition">
                  Source Code
                  </button>
                </a>
                <a href={pro.Live} target="_blank" rel="noopener noreferrer">
                  <button className="border border-blue-700 px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition">
                    Live Demo
                  </button>
                </a>
              </div>
            </div>

          
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl text-emerald-600 font-semibold mb-4">{pro.heading}</h2>
              <p className="text-gray-700 mb-6 whitespace-pre-line">{pro.desc}</p>

              <h3 className="text-lg font-medium mb-3 text-emerald-600">TECH STACK:</h3>
              <div className="flex flex-wrap gap-2">
                {pro.lan.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="bg-gray-200 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Projects;
