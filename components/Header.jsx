import { assets } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full text-center mx-auto h-screen flex flex-col items-center justify-center gap-8 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-950 text-gray-800 dark:text-white relative overflow-hidden">
      {/* Modern Abstract Shapes in Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
        <div className="absolute top-[10%] left-[5%] w-60 h-60 rounded-full bg-blue-400 dark:bg-blue-600 filter blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-purple-400 dark:bg-purple-700 filter blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[20%] w-40 h-40 rounded-full bg-green-400 dark:bg-green-700 filter blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="shadow-xl rounded-full overflow-hidden border-4 border-white dark:border-gray-800 mx-auto mb-2"
        >
          <Image
            src={assets.sunil_neupane}
            alt="photo of Sunil Neupane"
            className="rounded-full w-36 h-36 object-cover"
            width={144}
            height={144}
          />
        </motion.div>

        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-4 font-Ovo text-blue-600 dark:text-blue-400"
        >
          Hello, I'm Sunil Neupane{" "}
          <Image src={assets.hand_icon} alt="hand icon" className="w-6 animate-wave" />
        </motion.h3>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-Ovo font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent pb-2"
        >
          Full-Stack Software Developer <br /> Tech Enthusiast
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-2xl mx-auto font-Ovo text-gray-600 dark:text-gray-300 text-lg mt-4"
        >
          Emerging software developer passionate about technology and innovation.
        </motion.p>
      </div>
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex flex-col sm:flex-row items-center gap-5 mt-10 z-10"
      >
        <a
          href="#contact"
          className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white flex items-center gap-2 shadow-lg shadow-blue-500/30 dark:shadow-blue-600/20 hover:shadow-blue-600/40 hover:scale-[1.03] transition-all duration-300 font-medium"
        >
          <span>Contact Me</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-8 py-4 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 font-medium"
        >
          <span>Download CV</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </a>
      </motion.div>
    </div>
  );
};

export default Header;
