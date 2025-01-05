import { assets } from "@/assets/assets";
import Image from "next/image";
import { useRef } from "react";
const Navbar = () => {
    const sideMenuRef = useRef();
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(0)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(100%)';
    }
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10">
        <Image
          src={assets.header_bg_color}
          alt="header bg color"
          className="w-full"
        />
      </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <a href="">
          <Image
            src={assets.sunil_logo}
            className="w-28 cursor-pointer mr-14 rounded-md"
            alt="image"
          />
        </a>
        <ul className="hidden md:flex items-center gap lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li>
            <a className="font-Ovo" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">

          <button className="w-6 h-6">
            <Image
              src={assets.moon_icon}
              alt="moon icon"
              className="w-full h-full"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center justify-center gap-4 px-2 py-2.5 border border-gray-500 rounded-lg font-Ovo"
          >
            Contact{" "}
            <Image
              src={assets.arrow_icon}
              alt="arrow icon sunil"
              className="w-3"
            />

          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="black menu" className="w-6"/>
          </button>
        </div>
        {/* Mobile menu */}
        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 transform translate-x-full">
            <div className="absolute right-6 top-6 " onClick={closeMenu}>
                <Image src={assets.close_black} alt="close icon" className="w-5 cursor-pointer"/>
            </div>
        <li>
            <a className="font-Ovo" onClick={closeMenu} href="#">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
