import { workData } from "@/assets/assets";
import { motion } from "framer-motion";

const Works = ({ isDarkMode }) => {
  // Animation variants
  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15
      }
    }
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="work"
        className="w-full px-5 md:px-[8%] xl:px-[12%] py-24 scroll-mt-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-950 overflow-hidden relative"
      >
        {/* Modern background elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-40 left-[15%] w-80 h-80 bg-purple-400 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <motion.span
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="block text-center mb-2 text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wider text-sm"
          >
            My Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 bg-clip-text text-transparent mb-6"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mt-4 mb-16 text-gray-600 dark:text-gray-300"
          >
            Showcasing innovative software projects focused on solving real-world
            problems with clean code, efficient design, and scalable solutions.
            Each project highlights expertise in various technologies, development
            methodologies, and a commitment to delivering impactful results.
          </motion.p>
        </div>

        {/* Vertical timeline with alternating nodes */}
        <div className="relative flex flex-col items-center min-h-[600px]">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-indigo-400 dark:from-blue-900 dark:via-blue-700 dark:to-indigo-800 rounded-full z-0" style={{ transform: 'translateX(-50%)' }}></div>
          <div className="w-full max-w-3xl mx-auto flex flex-col gap-16 z-10">
            {workData.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className={`relative flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'} group`}
                style={{ minHeight: 180 }}
              >
                {/* Connector dot */}
                <div className="absolute left-1/2 top-8 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 z-20 shadow-lg"></div>
                {/* Card */}
                <div className={`w-full max-w-md bg-white dark:bg-gray-900 border border-blue-200 dark:border-blue-800 shadow-xl rounded-2xl px-7 py-8 flex flex-col items-center gap-3 hover:shadow-blue-400/30 dark:hover:shadow-blue-700/30 transition-all duration-300 group ${i % 2 === 0 ? 'ml-0 md:ml-12 mr-auto' : 'mr-0 md:mr-12 ml-auto'}`}
                  style={{ marginLeft: i % 2 === 0 ? 0 : undefined, marginRight: i % 2 === 1 ? 0 : undefined }}
                >
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2 text-center">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-center mb-2">
                    {project.description}
                  </p>
                  <ul className="mb-3 flex flex-col gap-1 text-gray-500 dark:text-gray-400 text-sm list-disc list-inside">
                    {project.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md transition-all duration-300 group-hover:scale-105"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action and GitHub section remain unchanged */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="flex flex-col items-center justify-center gap-2"
        >
          <motion.a
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" 
            }}
            className="w-max flex items-center justify-center gap-3 text-white bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-500 dark:to-indigo-600 rounded-full py-4 px-8 mx-auto mt-16 mb-4 shadow-lg transition-all duration-300"
            href="#"
          >
            <span className="font-medium">View All Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.a>
          <span className="text-gray-500 dark:text-gray-400 text-sm mt-1">Discover more of my creative work</span>
        </motion.div>
        {/* GitHub activity section remains unchanged */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 mb-10 backdrop-blur-md bg-white/60 dark:bg-gray-800/40 p-6 rounded-2xl shadow-xl border border-gray-100/80 dark:border-gray-700/30"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="md:max-w-md">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3">
                Check My GitHub Activity
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                See my coding patterns, open source contributions, and project activity on GitHub.
              </p>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium"
                href="https://github.com/SunilNeupane77" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Follow me on GitHub
              </motion.a>
            </div>
            
            <div className="flex-shrink-0 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-20 w-20 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 animate-pulse" style={{animationDelay: `${i * 0.15}s`}}></div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Works;
