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
        className="w-full px-[12%] py-10 scroll-mt-20"
      >
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center mb-2 text-lg font-Ovo"
        >
          What I Offer
        </motion.h4>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-5xl font-Ovo"
        >
          My Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
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
          className="grid grid-cols-auto gap-6 my-10"
        >
          {serviceData.map(({ icon, title, description, link }, index) => {
            return (
              <motion.div
                onClick={() => (window.location.href = link)}
                whileHover={{ scale: 1.05 }}
                key={index}
                className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
              >
                <Image src={icon} alt="image icon" className="w-10" />
                <h3 className="text-lg my-4 text-gray-700 dark:text-white ">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                  {description}
                </p>
                <a href={link} className="flex items-center gap-2 text-sm mt-5">
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
