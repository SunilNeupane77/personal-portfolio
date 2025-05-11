import { assets } from "@/assets/assets";
import { Moon, Sun } from 'lucide-react';
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
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="header bg color"
          className="w-full"
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-md dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top">
          <Image
            src={assets.sunil_logo}
            className="w-28 cursor-pointer mr-14"
            alt="logo"
          />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-md bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent">
          <li>
            <a className="font-Ovo hover:text-blue-500" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-blue-500" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-blue-500" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-blue-500" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-blue-500" href="#contact">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300"
            onClick={() => setIsDarkMode((prev) => !prev)}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center justify-center gap-4 px-4 py-2 border border-gray-500 rounded-full font-Ovo dark:border-white/50 hover:bg-blue-500 dark:hover:bg-green-500 transition-all duration-300"
          >
            Connect
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="arrow icon"
              className="w-3"
            />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu icon"
              className="w-6"
            />
          </button>
        </div>
        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 transform translate-x-full dark:bg-darkHover dark:text-white"
        >
          <div
            className="absolute right-6 top-6 cursor-pointer"
            onClick={closeMenu}
          >
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close icon"
              className="w-5"
            />
          </div>
          <li>
            <a className="font-Ovo hover:text-blue-500" onClick={closeMenu} href="#">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-blue-500" onClick={closeMenu} href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-blue-500" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-blue-500" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-blue-500" onClick={closeMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
