import { workData } from "@/assets/assets";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, Star, Calendar, Code, ArrowUpRight, Play, Eye } from "lucide-react";

const Works = ({ isDarkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.6,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      id="work"
      className="relative w-full px-4 md:px-[8%] xl:px-[12%] py-24 scroll-mt-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/20 overflow-hidden"
    >
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        
        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div variants={headerVariants} className="text-center mb-20">
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg mb-6"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Featured Work</span>
            <div className="w-8 h-[1px] bg-gradient-to-r from-blue-500 to-transparent"></div>
          </motion.div>
          
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            My Projects
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting digital experiences with precision, creativity, and cutting-edge technology
          </motion.p>
        </motion.div>

        {/* Projects Timeline Container */}
        <div className="relative">
          {/* Connecting Lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ minHeight: '100%' }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0.6" />
                <stop offset="50%" stopColor="rgb(139 92 246)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="rgb(236 72 153)" stopOpacity="0.6" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Connection Lines between projects */}
            {workData.map((_, index) => {
              if (index === workData.length - 1) return null;
              
              const startY = 150 + (index * 400);
              const endY = 150 + ((index + 1) * 400);
              const isEven = index % 2 === 0;
              const nextIsEven = (index + 1) % 2 === 0;
              
              const startX = isEven ? '25%' : '75%';
              const endX = nextIsEven ? '25%' : '75%';
              const controlX = isEven ? '60%' : '40%';
              
              return (
                <motion.path
                  key={`line-${index}`}
                  d={`M ${startX} ${startY} Q ${controlX} ${(startY + endY) / 2} ${endX} ${endY}`}
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  fill="none"
                  filter="url(#glow)"
                  variants={lineVariants}
                  className="drop-shadow-lg"
                />
              );
            })}
            
            {/* Connection dots */}
            {workData.map((_, index) => {
              const y = 150 + (index * 400);
              const x = index % 2 === 0 ? '25%' : '75%';
              
              return (
                <motion.circle
                  key={`dot-${index}`}
                  cx={x}
                  cy={y}
                  r="8"
                  fill="url(#lineGradient)"
                  variants={cardVariants}
                  className="drop-shadow-lg"
                />
              );
            })}
          </svg>

          {/* Projects */}
          <div className="relative z-10 space-y-24">
            {workData.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`group relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                {/* Project Card */}
                <div className={`relative w-full max-w-2xl p-8 lg:p-10 rounded-3xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-2xl border border-white/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-700 ${
                  index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'
                }`}>
                  
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10"></div>
                  
                  {/* Connection Point */}
                  <div className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg ${
                    index % 2 === 0 ? '-left-3' : '-right-3'
                  }`}>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 0.3, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                  </div>

                  {/* Project Content */}
                  <div className="space-y-6">
                    {/* Project Header */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg"
                          whileHover={{ rotate: 180, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Code className="w-7 h-7 text-white" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              Live Project
                            </span>
                          </div>
                        </div>

                        {/* Project Number */}
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {project.points.map((point, pointIndex) => (
                          <motion.div
                            key={pointIndex}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: pointIndex * 0.1, duration: 0.5 }}
                            className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/50 dark:bg-gray-700/30 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors duration-300"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 dark:text-gray-300">{point}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    {project.technologies && (
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                          Built With
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200/50 dark:border-blue-800/50 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 hover:shadow-md transition-all duration-300"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 pt-4">
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="group/btn flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-600/40 transition-all duration-300"
                      >
                        <Play className="w-5 h-5" />
                        <span>View Live</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      </motion.a>
                      
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-medium transition-all duration-300"
                        >
                          <Github className="w-5 h-5" />
                          <span>Code</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          variants={headerVariants}
          className="mt-24 text-center"
        >
          <motion.div 
            whileHover={{ y: -5, scale: 1.02 }}
            className="inline-block p-8 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl text-white shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-3">Ready to Start Your Project?</h3>
            <p className="text-blue-100 mb-6 max-w-md">
              Let's collaborate and bring your ideas to life with modern technology and creative solutions.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-2xl font-semibold transition-all duration-300"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Works;
