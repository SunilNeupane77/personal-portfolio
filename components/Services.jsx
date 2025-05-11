import { assets, serviceData } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";

const Services = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="services"
        className="w-full px-[12%] py-10 scroll-mt-20 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 overflow-hidden"
      >
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-gray-300"
        >
          What I Offer
        </motion.h4>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-5xl font-Ovo text-gray-800 dark:text-gray-100"
        >
          My Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-400"
        >
          Offering professional software development solutions tailored to meet
          diverse needs. Services include web and mobile application
          development, backend engineering, database design, API integrations,
          and performance optimization. Delivering scalable, secure, and
          innovative solutions with a focus on quality, user experience, and
          client satisfaction. Let's turn ideas into reality.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10"
        >
          {serviceData.map(({ icon, title, description, link }, index) => {
            return (
              <motion.div
                onClick={() => (window.location.href = link)}
                whileHover={{ scale: 1.05 }}
                key={index}
                className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-lg cursor-pointer hover:bg-gray-200 hover:translate-y-1 duration-500 dark:hover:bg-gray-700 dark:hover:shadow-white"
              >
                <Image src={icon} alt="image icon" className="w-10 mx-auto" />
                <h3 className="text-lg my-4 text-gray-700 dark:text-white text-center">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 leading-5 dark:text-white/80 text-center">
                  {description}
                </p>
                <a
                  href={link}
                  className="flex items-center justify-center gap-2 text-sm mt-5 text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500"
                >
                  Read More{" "}
                  <Image
                    src={assets.right_arrow}
                    alt="image right arrow"
                    className="w-4"
                  />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
