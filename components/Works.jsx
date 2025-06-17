import { assets, workData } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";

const Works = ({ isDarkMode }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="work"
        className="w-full px-[12%] py-10 scroll-mt-20 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 overflow-hidden"
      >
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center mb-2 text-lg font-Ovo text-blue-500 dark:text-green-400"
        >
          My Portfolio
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center text-5xl font-Ovo text-gray-800 dark:text-white"
        >
          My Latest Works
        </motion.h2>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-300"
        >
          Showcasing innovative software projects focused on solving real-world
          problems with clean code, efficient design, and scalable solutions.
          Each project highlights expertise in various technologies, development
          methodologies, and a commitment to delivering impactful results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10 dark:text-black"
        >
          {workData.map((project, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={index}
              style={{ backgroundImage: `url(${project.bgImage})` }}
              className="aspect-square bg-cover bg-center rounded-xl relative cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              {/* Glass effect overlay that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Project info card with glass effect */}
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md w-10/12 rounded-lg absolute bottom-4 left-1/2 transform -translate-x-1/2 py-4 px-5 flex items-center justify-between shadow-lg transition-all duration-500 group-hover:bottom-8 group-hover:bg-white/95 dark:group-hover:bg-gray-800/95">
                <div>
                  <h2 className="font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
                <div
                  className="border rounded-full p-2 border-blue-500 dark:border-green-500 w-10 aspect-square flex items-center justify-center bg-white dark:bg-gray-800 shadow-lg group-hover:bg-blue-500 dark:group-hover:bg-green-500 transition-all duration-300 group-hover:scale-110"
                >
                  <Image
                    src={assets.send_icon}
                    alt="send icon"
                    width={20}
                    height={20}
                    className="group-hover:filter group-hover:brightness-200 transition-all"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="w-max flex items-center justify-center gap-3 text-white bg-gradient-to-r from-blue-500 to-blue-700 dark:from-green-500 dark:to-green-700 rounded-full py-3.5 px-10 mx-auto my-20 shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-green-500/20 transition-all duration-300"
            href="#"
          >
            Show More Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Works;
