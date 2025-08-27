import { assets } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

const Header = ({ isDarkMode }) => {

  return (
    <div className="w-full mx-auto min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12 py-20 bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/80 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/80 text-gray-800 dark:text-white relative overflow-hidden">

      {/* Modern Abstract Shapes in Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-80 h-80 rounded-full bg-blue-400 dark:bg-blue-600 filter blur-[100px]" style={{ animation: "float 20s infinite alternate ease-in-out" }}></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-purple-400 dark:bg-purple-700 filter blur-[120px]" style={{ animation: "float 15s infinite alternate-reverse ease-in-out" }}></div>
        <div className="absolute bottom-[10%] left-[20%] w-64 h-64 rounded-full bg-green-400 dark:bg-green-700 filter blur-[80px]" style={{ animation: "float 18s infinite alternate ease-in-out" }}></div>
      </div>
      
      {/* Content container with modern layout */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Text content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
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

            <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl lg:max-w-none">
              Passionate about creating clean, user-centered digital experiences with modern technologies.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white flex items-center gap-2 shadow-lg shadow-blue-500/20 dark:shadow-blue-600/10 hover:shadow-blue-600/30 hover:scale-105 transition-all duration-300 font-medium"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/Sunil_Neupane_Resume.pdf"
                download
                className="px-8 py-3.5 rounded-full border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4" />
              </a>
            </div>

            {/* Tech stack pills */}
            <div className="mt-10 md:mt-14">
              <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 font-medium">Tech Stack</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {['React', 'Node.js', 'TypeScript', 'Next.js', 'MongoDB', 'Tailwind'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Decorative background elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-xl"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 dark:border-gray-700/30 shadow-2xl">
                <Image
                  src={assets.sunil_neupane}
                  alt="Sunil Neupane - Full Stack Developer"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  priority
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-green-500 rounded-full animate-ping shadow-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Removed duplicate buttons as they are now in the main content section */}
    </div>
  );
};

export default Header;
