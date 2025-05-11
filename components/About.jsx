"use client";
import { assets, infoList, toolsData } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const About = (isDarkMode) => {
  const About = (isDarkMode) => {
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
        className="w-full px-[12%] py-10 scroll-mt-20 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 overflow-hidden"
      >
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-gray-300"
        >
          Introduction
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl font-Ovo text-gray-800 dark:text-gray-100"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-64 sm:w-80 rounded-3xl max-w-none shadow-lg dark:shadow-gray-700"
          >
            <Image
              src={assets.sunil_neupane}
              alt="user image"
              className="w-full rounded-3xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, dalay: 0.8 }}
            className="flex-1"
          >
            <p className="mb-10 max-w-2xl font-Ovo text-gray-700 dark:text-gray-300">
              Currently pursuing a Bachelor’s in Information Management at
              Shankerdev Campus, {status}. Actively learning and gaining
              expertise in full-stack development, both frontend and backend,
              while exploring diverse dimensions of technology to broaden skills
              and innovate. Passionate about problem-solving, building impactful
              solutions, and staying ahead in the ever-evolving tech landscape.
            </p>
            <p className="mb-6 text-lg font-semibold text-gray-800 dark:text-gray-300">
              Status: {status}
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {infoList.map(
                ({ icon, iconDark, title, description, link }, index) => (
                  <motion.li
                    whileHover={{ scale: 1.05 }}
                    key={index}
                    className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gray-200 hover:-translate-y-1 duration-500 hover:shadow-lg dark:border-gray-600 dark:hover:shadow-gray-700 dark:hover:bg-gray-700"
                    onClick={() => (window.location.href = link)}
                  >
                    <Image
                      src={icon}
                      alt={title}
                      className="w-7 h-7 mt-3 object-contain"
                    />
                    <h3 className="my-4 font-semibold text-gray-700 dark:text-gray-300">
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
              transition={{ delay: 1.3, duration: 0.5 }}
              className="my-6 text-gray-800 font-Ovo dark:text-gray-300"
            >
              Tools I Use
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 sm:gap-5"
            >
              {toolsData.map((tool, index) => (
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  key={index}
                  className="flex items-center justify-center w-16 h-16 sm:w-15 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500 hover:shadow-lg dark:border-gray-600 dark:hover:shadow-gray-700"
                >
                  <Image
                    src={tool}
                    alt="tools image"
                    className="w-full h-full object-contain"
                  />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };
};

export default About;
