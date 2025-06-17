import { assets } from "@/assets/assets"
import { motion } from "framer-motion"
import Image from "next/image"

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="mt-20 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-24 bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-purple-700 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 text-center py-12">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={assets.sunil_logo}
            alt="sunil logo"
            className="w-36 mx-auto mb-6 transition-transform hover:scale-110 filter brightness-125"
          />
        </motion.div>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-max flex items-center gap-3 mx-auto text-gray-300 bg-gray-800/30 px-4 py-2 rounded-full backdrop-blur-sm"
        >
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail logo"
            className="w-5"
          />
          <span className="hover:text-blue-300 transition-colors">
            sunilneupane957@gmail.com
          </span>
        </motion.div>
      </div>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center sm:flex items-center justify-between border-t border-gray-700/50 mx-[10%] mt-8 py-6"
      >
        <p className="text-gray-400 font-light">© 2025 Sunil Neupane. All rights reserved.</p>
        <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/SunilNeupane77"
              className="px-3 py-1.5 rounded-md hover:bg-blue-600/20 transition-all duration-300 text-gray-300 hover:text-white flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sunilneupane77"
              className="px-3 py-1.5 rounded-md hover:bg-blue-600/20 transition-all duration-300 text-gray-300 hover:text-white flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://x.com/sunilneupane778"
              className="px-3 py-1.5 rounded-md hover:bg-blue-600/20 transition-all duration-300 text-gray-300 hover:text-white flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              Twitter
            </a>
          </li>
        </ul>
      </motion.div>
    </footer>
  )
}

export default Footer