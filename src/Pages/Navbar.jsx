

import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  User,
  Code2,
  Mail
} from 'lucide-react';

const Navbar = () => {
  return (
    <>
    
      <nav className="bg-blue-200 text-white px-4 py-3 shadow-md hidden md:flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">PORTFOLIO</h1>

        <div className="flex space-x-8 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center space-x-1 ${
                isActive ? "font-bold text-teal-700" : "text-white"
              }`
            }
          >
            <Home size={18} />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center space-x-1 ${
                isActive ? "font-bold text-teal-700" : "text-white"
              }`
            }
          >
            <User size={18} />
            <span>About</span>
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex items-center space-x-1 ${
                isActive ? "font-bold text-teal-700" : "text-white"
              }`
            }
          >
            <Code2 size={18} />
            <span>Projects</span>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center space-x-1 ${
                isActive ? "font-bold text-teal-700" : "text-white"
              }`
            }
          >
            <Mail size={18} />
            <span>Contact</span>
          </NavLink>
        </div>
      </nav>

      <div className="md:hidden flex justify-center items-center bg-blue-200 px-4 py-3 shadow-md">
        <h1 className="text-xl font-bold text-white">PORTFOLIO</h1>
      </div>

   
      <div className="fixed bottom-0 left-0 right-0 bg-blue-200 text-white flex justify-around items-center py-2 md:hidden shadow-md z-50">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-teal-400" : "text-white"
            }`
          }
        >
          <Home size={22} />
          <span className="text-xs mt-1">Home</span>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-teal-400" : "text-white"
            }`
          }
        >
          <User size={22} />
          <span className="text-xs mt-1">About</span>
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-teal-400" : "text-white"
            }`
          }
        >
          <Code2 size={22} />
          <span className="text-xs mt-1">Projects</span>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-teal-400" : "text-white"
            }`
          }
        >
          <Mail size={22} />
          <span className="text-xs mt-1">Contact</span>
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
