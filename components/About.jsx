"use client";
import { assets, infoList, toolsData } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const About = ({ isDarkMode }) => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    const startSemester = 6; // Starting semester
    const weeksPerSemester = 6 * 4; // 6 months = 24 weeks
    const currentWeek = 3; // Starting 6th semester in 3 weeks

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-4 md:px-[8%] xl:px-[12%] py-20 scroll-mt-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950 overflow-hidden relative"
    >
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-full opacity-10 z-0 overflow-hidden">
        <div className="absolute bottom-[20%] left-[5%] w-80 h-80 rounded-full bg-green-300 dark:bg-green-700 filter blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="block text-center mb-2 font-medium text-blue-600 dark:text-blue-400"
        >
          Introduction
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-4xl md:text-5xl font-Ovo font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 bg-clip-text text-transparent mb-14"
        >
          About Me
        </motion.h2>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-16 my-10 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none relative z-10"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 blur-lg opacity-30 transform -rotate-6"></div>
          <Image
            src={assets.sunil_neupane}
            alt="user image"
            className="w-full rounded-3xl border-4 border-white dark:border-gray-800 shadow-xl relative z-20"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-10 glass-card p-6 dark:bg-gray-800/40"
          >
            <p className="font-Ovo text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently pursuing a Bachelor's in Information Management at
              Shankerdev Campus, {status}. Actively learning and gaining
              expertise in full-stack development, both frontend and backend,
              while exploring diverse dimensions of technology to broaden skills
              and innovate. Passionate about problem-solving, building impactful
              solutions, and staying ahead in the ever-evolving tech landscape.
            </p>
          </motion.div>
          <div className="inline-block mb-8 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-800 dark:text-blue-300 font-medium">
            Status: {status}
          </div>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {infoList.map(
              ({ icon, iconDark, title, description, link }, index) => (
                <motion.li
                  whileHover={{ scale: 1.03, translateY: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  key={index}
                  className="glass-card border border-gray-200 dark:border-gray-700 rounded-xl p-6 cursor-pointer hover:shadow-lg dark:hover:shadow-blue-900/20"
                  onClick={() => (window.location.href = link)}
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
                    <Image
                      src={icon}
                      alt={title}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <h3 className="mb-3 font-semibold text-gray-800 dark:text-gray-200">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-gray-400">
                    {description}
                  </p>
                </motion.li>
              )
            )}
          </motion.ul>
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-12 mb-6 text-blue-700 dark:text-blue-400 font-semibold"
          >
            Tools I Use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                key={index}
                className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 aspect-square bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <Image
                  src={tool}
                  alt="tools image"
                  className="w-3/4 h-3/4 object-contain"
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
