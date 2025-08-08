import { assets } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  // Simple local state for demo; replace with global dark mode logic if needed
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync dark mode with <html> element for Tailwind
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="w-full mx-auto min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12 py-20 bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/80 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/80 text-gray-800 dark:text-white relative overflow-hidden">
      {/* Mode toggle button at top right */}
      <div
        className="absolute top-6 right-8 z-20 flex items-center justify-center select-none"
        style={{ minWidth: 80 }}
        onClick={() => setIsDarkMode((prev) => !prev)}
        role="button"
        tabIndex={0}
        aria-label="Toggle dark mode"
      >
        <motion.span
          key={isDarkMode ? 'dark' : 'light'}
          initial={{ rotate: 0, opacity: 0, scale: 0.8 }}
          animate={{ rotate: 360, opacity: 1, scale: 1 }}
          exit={{ rotate: 0, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.7, type: 'spring' }}
          className={`px-6 py-2 rounded-full font-bold text-lg shadow-md border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 cursor-pointer tracking-widest uppercase transition-colors duration-300 ${isDarkMode ? 'text-blue-600 dark:text-blue-300' : 'text-yellow-600 dark:text-yellow-400'}`}
        >
          {isDarkMode ? 'Dark' : 'Light'}
        </motion.span>
      </div>

      {/* Modern Abstract Shapes in Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-80 h-80 rounded-full bg-blue-400 dark:bg-blue-600 filter blur-[100px]" style={{ animation: "float 20s infinite alternate ease-in-out" }}></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-purple-400 dark:bg-purple-700 filter blur-[120px]" style={{ animation: "float 15s infinite alternate-reverse ease-in-out" }}></div>
        <div className="absolute bottom-[10%] left-[20%] w-64 h-64 rounded-full bg-green-400 dark:bg-green-700 filter blur-[80px]" style={{ animation: "float 18s infinite alternate ease-in-out" }}></div>
      </div>
      
      {/* Content container with modern layout */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        {/* Left column - text content */}
        <motion.div 
          className="w-full md:w-7/12 lg:w-3/5 text-center md:text-left order-2 md:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm text-blue-700 dark:text-blue-300 font-medium">Available for new projects</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block">Hello, I'm</span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500 bg-clip-text text-transparent">
              Sunil Neupane
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
            A full-stack software developer passionate about creating clean, user-centered digital experiences with modern technologies.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white flex items-center gap-2 shadow-lg shadow-blue-500/20 dark:shadow-blue-600/10 hover:shadow-blue-600/30 hover:scale-105 transition-all duration-300 font-medium"
            >
              <span>Let's Connect</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <a
              href="/Sunil_Neupane_Resume.pdf"
              download
              className="px-8 py-3.5 rounded-full border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
            >
              <span>Download CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>

          {/* Tech stack pills */}
          <div className="mt-10 md:mt-14">
            <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 font-medium">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'TypeScript', 'Next.js', 'MongoDB', 'Tailwind'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right column - profile image */}
        <motion.div 
          className="relative w-56 h-56 md:w-5/12 lg:w-2/5 order-1 md:order-2 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Decorative rings */}
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-blue-200 dark:border-blue-800/50 animate-spin-slow"></div>
            <div className="absolute -inset-10 rounded-full border-2 border-dashed border-indigo-200 dark:border-indigo-800/50 animate-spin-slow-reverse"></div>
            
            {/* Profile image with glass effect card */}
            <div className="relative bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl rounded-2xl p-2 shadow-xl border border-white/30 dark:border-gray-700/30 w-64">
              <div className="relative rounded-xl overflow-hidden aspect-square">
                <Image
                  src={assets.sunil_neupane}
                  alt="Sunil Neupane"
                  className="object-cover"
                  fill
                  priority
                />
              </div>
              
              {/* Name badge */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-1.5 rounded-full shadow-lg border border-gray-100 dark:border-gray-700">
                <span className="font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">Sunil Neupane</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Removed duplicate buttons as they are now in the main content section */}
    </div>
  );
};

export default Header;
