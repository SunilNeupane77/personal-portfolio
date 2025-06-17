import { assets } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(0)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(100%)";
  };

  const handleNavClick = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "glass-effect shadow-lg dark:shadow-blue-900/10"
            : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <Image
            src={assets.sunil_logo}
            className="w-24 cursor-pointer transition-transform hover:scale-105"
            alt="logo"
          />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-10 py-3 glass-effect">
          <li>
            <a
              className="font-Ovo text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer relative group"
              onClick={() => handleNavClick("#about")}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              className="font-Ovo text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer relative group"
              onClick={() => handleNavClick("#services")}
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              className="font-Ovo text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer relative group"
              onClick={() => handleNavClick("#work")}
            >
              My Work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              className="font-Ovo text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer relative group"
              onClick={() => handleNavClick("#contact")}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => setIsDarkMode((prev) => !prev)}
            aria-label="Toggle dark mode"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="mode toggle icon"
              className="w-5 h-5"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center justify-center gap-3 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-600/30 transition-all duration-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:shadow-indigo-900/20"
          >
            <span>Let's Connect</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
