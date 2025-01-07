/**
 * Contact component renders a contact form section with a background image.
 * It includes fields for name, email, and message, and a submit button.
 *
 * @component
 * @example
 * return (
 *   <Contact />
 * )
 */
import { assets } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "b24925cc-9852-4e4a-b4cd-6d82155e1b4b");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div>
      <motion.div
           initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:1}}
        id="contact"
        className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
      >
        <motion.h4
            initial={{y:-20,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{delay:0.3,duration:0.5}}

        className="text-center mb-2 text-lg font-Ovo">Connect With Me</motion.h4>
        <motion.h2
            initial={{y:-20,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{delay:0.5,duration:0.5}} 
        className="text-center text-5xl font-Ovo">Get In Touch </motion.h2>
        <motion.p
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:0.7,duration:0.5}}
         className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
       
Passionate about building innovative software solutions and exploring new technologies. Open to collaborations, technical discussions, or exciting opportunities in development and engineering. Reach out through email, LinkedIn, or GitHub to connect, share ideas, or explore possibilities. Dedicated to creating impactful projects and contributing to the ever-evolving world of technology.
        </motion.p>
        <motion.form
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:1.1,duration:0.6}} 
         onSubmit={onSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
            <motion.input
                initial={{y:-50,opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{delay:0.5,duration:0.5}}
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
              type="text"
              placeholder="Enter Your Name"
              name="name"
              required
            />
            <motion.input
             initial={{y:50,opacity:0}}
             whileInView={{y:0,opacity:1}}
             transition={{delay:1.2,duration:0.6}}
            
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
              type="email"
              placeholder="Enter Your Email"
              name="email"
              required
            />
          </div>
          <motion.textarea
           initial={{y:100,opacity:0}}
           whileInView={{y:0,opacity:1}}
           transition={{delay:1.3,duration:0.6}}
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/30 "
            name="message"
            id=""
            rows="6"
            placeholder="Enter Your Message"
            required
          ></motion.textarea>
          <motion.button
          whileHover={{scale:1.05}}
          transition={{duration:0.3}}
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
            type="submit"
          >
            Submit
            <Image src={assets.right_arrow_white} alt="white right arrow" className="w-4" />
         
          </motion.button>
          <p className="mt-4">{result}</p>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
