
import { motion } from "framer-motion";
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
      body: formData,
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="contact"
        className="w-full px-4 md:px-[8%] xl:px-[12%] py-20 scroll-mt-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-950 overflow-hidden relative"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 z-0 overflow-hidden">
          <div className="absolute top-[10%] right-[5%] w-72 h-72 rounded-full bg-blue-400 dark:bg-blue-700 filter blur-3xl"></div>
          <div className="absolute bottom-[10%] left-[15%] w-64 h-64 rounded-full bg-purple-300 dark:bg-purple-700 filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          <motion.span
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="block text-center mb-2 text-blue-600 dark:text-blue-400 font-medium"
          >
            Connect With Me
          </motion.span>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center text-4xl md:text-5xl font-Ovo font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 bg-clip-text text-transparent mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-300"
          >
            Passionate about building innovative software solutions and exploring
            new technologies. Open to collaborations, technical discussions, or
            exciting opportunities in development and engineering. Reach out
            through email, LinkedIn, or GitHub to connect, share ideas, or explore
            possibilities. Dedicated to creating impactful projects and
            contributing to the ever-evolving world of technology.
          </motion.p>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          onSubmit={onSubmit}
          className="max-w-2xl mx-auto glass-card dark:bg-gray-800/40"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="relative">
              <label htmlFor="name" className="text-sm text-gray-600 dark:text-gray-400 block mb-2 ml-1">Your Name</label>
              <motion.input
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="w-full p-3.5 outline-none border border-gray-300 dark:border-gray-700 rounded-xl bg-white/80 dark:bg-gray-800/50 focus:border-blue-500 dark:focus:border-blue-400 transition-colors focus:ring-2 focus:ring-blue-500/20 dark:text-white"
                type="text"
                id="name"
                placeholder="John Doe"
                name="name"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="email" className="text-sm text-gray-600 dark:text-gray-400 block mb-2 ml-1">Your Email</label>
              <motion.input
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="w-full p-3.5 outline-none border border-gray-300 dark:border-gray-700 rounded-xl bg-white/80 dark:bg-gray-800/50 focus:border-blue-500 dark:focus:border-blue-400 transition-colors focus:ring-2 focus:ring-blue-500/20 dark:text-white"
                type="email"
                id="email"
                placeholder="john@example.com"
                name="email"
                required
              />
            </div>
          </div>
          <div className="relative mb-8">
            <label htmlFor="message" className="text-sm text-gray-600 dark:text-gray-400 block mb-2 ml-1">Your Message</label>
            <motion.textarea
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="w-full p-4 outline-none border border-gray-300 dark:border-gray-700 rounded-xl bg-white/80 dark:bg-gray-800/50 focus:border-blue-500 dark:focus:border-blue-400 transition-colors focus:ring-2 focus:ring-blue-500/20 dark:text-white resize-none"
              name="message"
              id="message"
              rows="6"
              placeholder="How can I help you?"
              required
            ></motion.textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="py-3.5 px-8 w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-600/30 transition-all duration-300 font-medium"
            type="submit"
          >
            Send Message
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </motion.button>
          <p className={`mt-4 text-center ${result ? 'py-2 px-4 rounded-lg bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : ''}`}>
            {result}
          </p>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
