import { assets, workData } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";

const Works = ({ isDarkMode }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="work"
        className="w-full px-[12%] py-10 scroll-mt-20"
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
              className="aspect-square bg-cover bg-center rounded-lg relative cursor-pointer group shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-white w-10/12 rounded-md absolute bottom-2 left-1/2 transform -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-4">
                <div>
                  <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
                <div
                  className="border rounded-full px-1 py-1 border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-blue-500 dark:group-hover:bg-green-500 transition-all duration-300"
                >
                  <Image
                    src={assets.send_icon}
                    alt="send icon"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-blue-500 hover:text-white dark:text-white dark:border-white dark:hover:bg-green-500 dark:hover:text-black transition-all duration-300"
            href="#"
          >
            Show More
            <Image
              src={
                isDarkMode
                  ? assets.right_arrow_bold_dark
                  : assets.right_arrow_bold
              }
              alt="right arrow bold"
              className="w-4"
            />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Works;
