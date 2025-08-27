"use client";
import { assets, infoList, toolsData } from "@/assets/assets";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Code2, GraduationCap, MapPin, Calendar, Award, Zap } from "lucide-react";

const About = ({ isDarkMode }) => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    const startSemester = 6;
    const weeksPerSemester = 6 * 4;
    const currentWeek = 3;

    const calculateStatus = () => {
      const totalWeeks = (8 - startSemester) * weeksPerSemester;
      const remainingWeeks = totalWeeks - currentWeek;

      if (remainingWeeks <= 0) {
        setStatus("Graduated");
      } else {
        setStatus(`Currently in Semester ${startSemester}`);
      }
    };

    calculateStatus();
  }, []);

  // Enhanced animation variants
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

  const itemVariants = {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      id="about"
      className="relative w-full px-4 md:px-[8%] xl:px-[12%] py-24 scroll-mt-20 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 dark:from-gray-900 dark:via-blue-950/30 dark:to-indigo-950/50 overflow-hidden"
    >
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.08] z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-[10%] right-[15%] w-96 h-96 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-600 dark:to-pink-600 filter blur-3xl"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-[20%] left-[5%] w-80 h-80 rounded-full bg-gradient-to-r from-green-400 to-blue-400 dark:from-green-600 dark:to-blue-600 filter blur-3xl"
        />
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-[40%] left-[30%] w-64 h-64 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 dark:from-yellow-600 dark:to-orange-600 filter blur-2xl"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.span 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 font-medium text-sm mb-4"
          >
            <Code2 className="w-4 h-4" />
            About Me
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-6"
          >
            Crafting Digital
            <br />
            <span className="text-gray-800 dark:text-gray-200">Experiences</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate full-stack developer with a keen eye for design and a love for clean, efficient code. 
            I transform ideas into engaging digital experiences that users love.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column - Profile & Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Profile Card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Sunil Neupane
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                    Full-Stack Developer
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span>Kathmandu, Nepal</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <GraduationCap className="w-4 h-4 text-green-500" />
                      <span>{status}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4 text-purple-500" />
                      <span>Available for Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {infoList.map((info, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 dark:border-gray-700/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      {info.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {info.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills & Tools */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Skills Section */}
            <motion.div 
              variants={cardVariants}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50 dark:border-gray-700/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Skills & Expertise
                </h3>
              </div>
              
              <div className="space-y-6">
                {toolsData.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="space-y-3"
                  >
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wider">
                      {category.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, toolIndex) => (
                        <motion.span
                          key={toolIndex}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-800 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 hover:shadow-md transition-all duration-200 cursor-default"
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-xl font-bold mb-3">Let's Work Together</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full font-medium transition-all duration-300"
              >
                <span>Get In Touch</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
