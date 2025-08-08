import { assets } from "@/assets/assets";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sideMenuRef = useRef(null); // Added ref for mobile menu

  // Enhanced menu handling with animations
  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = ""; // Re-enable scrolling
  };

  const handleNavClick = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants for mobile menu
  const menuVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
    closed: { x: "100%", transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 backdrop-blur-md ${
          isScroll 
            ? "bg-white/80 dark:bg-gray-900/80 shadow-lg shadow-gray-200/20 dark:shadow-blue-900/5 border-b border-gray-200/50 dark:border-gray-800/50" 
            : "bg-transparent"
        }`}
      >
        <motion.a 
          href="#top" 
          className="flex items-center gap-2 font-extrabold text-2xl tracking-widest bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg uppercase"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          SUNIL NEUPANE
        </motion.a>
        
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 lg:gap-8 rounded-full px-8 py-2.5 bg-white/80 dark:bg-gray-800/50 backdrop-blur-md border border-gray-100/60 dark:border-gray-700/30 shadow-sm">
            <motion.li whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
              <a
                className="font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer relative group"
                onClick={() => handleNavClick("#about")}
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
            <motion.li whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
              <a
                className="font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer relative group"
                onClick={() => handleNavClick("#work")}
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
            <motion.li whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
              <a
                className="font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer relative group"
                onClick={() => handleNavClick("#contact")}
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <button
                onClick={() => setIsDarkMode((prev) => !prev)}
                aria-label="Toggle dark mode"
                className="ml-2 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {isDarkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500 dark:text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" /></svg>
                )}
              </button>
            </motion.li>
          </ul>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden lg:flex items-center justify-center gap-3 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-600/30 transition-all duration-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:shadow-indigo-900/20"
            >
              <span>Let's Connect</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            {/* Mobile menu button */}
            <button
              onClick={openMenu}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Open menu"
            >
              <Image
                src={assets.menu_white}
                alt="menu"
                className="w-5 dark:hidden"
              />
              <Image
                src={assets.menu_black}
                alt="menu"
                className="w-5 hidden dark:block"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={sideMenuRef}
            className="fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 shadow-2xl z-[60] md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-800">
              <Image src={assets.sunil_logo} alt="logo" className="w-24" />
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"
              >
                <Image
                  src={assets.close_black}
                  alt="close"
                  className="w-5 dark:hidden"
                />
                <Image
                  src={assets.close_white}
                  alt="close"
                  className="w-5 hidden dark:block"
                />
              </button>
            </div>
            <ul className="flex flex-col gap-2 p-4">
              <li>
                <button
                  onClick={() => handleNavClick("#about")}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#work")}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  My Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Contact
                </button>
              </li>
              <li className="pt-2 border-t border-gray-200 dark:border-gray-800 mt-2">
                <button
                  onClick={() => setIsDarkMode((prev) => !prev)}
                  className="w-full flex items-center justify-center px-4 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 font-semibold text-lg transition-all duration-300"
                >
                  <span className="relative inline-block">
                    <span
                      key={isDarkMode ? 'dark' : 'light'}
                      className="inline-block transition-transform duration-500 will-change-transform"
                      style={{
                        transform: 'rotate(360deg)',
                        transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)'
                      }}
                    >
                      {isDarkMode ? 'Dark' : 'Light'}
                    </span>
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsDarkMode((prev) => !prev)}
                  aria-label="Toggle dark mode"
                  className="flex items-center justify-start w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 mb-1"
                >
                  {isDarkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500 dark:text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" /></svg>
                  )}
                  <span className="ml-3 text-sm font-medium">Toggle Mode</span>
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;