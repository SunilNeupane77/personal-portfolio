import { serviceData } from "@/assets/assets";
import { motion } from "framer-motion";
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
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl px-8 py-10 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 dark:shadow-gray-900/30 relative overflow-hidden group"
              >
                {/* Modern hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-green-500/10 dark:to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                {/* Service icon with modern styling */}
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors duration-300">
                  <Image src={icon} alt="image icon" className="w-8 h-8 object-contain" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white text-center">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 leading-6 dark:text-gray-300 text-center mb-6">
                  {description}
                </p>
                <a
                  href={link}
                  className="flex items-center justify-center gap-2 text-sm font-medium mt-5 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
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
