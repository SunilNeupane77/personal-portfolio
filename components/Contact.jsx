import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b24925cc-9852-4e4a-b4cd-6d82155e1b4b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! I'll get back to you soon.");
        event.target.reset();
        setFormState({ name: "", email: "", message: "" });
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-4 md:px-[8%] xl:px-[12%] py-24 scroll-mt-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-950 overflow-hidden relative"
    >
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 w-full h-full opacity-10 z-0 overflow-hidden">
        <div
          className="absolute top-[10%] right-[5%] w-72 h-72 rounded-full bg-blue-400 dark:bg-blue-700 filter blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-[10%] left-[15%] w-64 h-64 rounded-full bg-purple-300 dark:bg-purple-700 filter blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        ></div>
        <div
          className="absolute top-[40%] left-[30%] w-40 h-40 rounded-full bg-pink-300 dark:bg-pink-700 filter blur-2xl animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>
      </div>

      <div className="relative z-10">
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="block text-center mb-2 text-blue-600 dark:text-blue-400 font-medium tracking-wider uppercase text-sm"
        >
          Connect With Me
        </motion.span>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 bg-clip-text text-transparent mb-4"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 dark:text-gray-300"
        >
          Passionate about building innovative software solutions and exploring
          new technologies. Open to collaborations, technical discussions, or
          exciting opportunities in development and engineering. Reach out
          through email, LinkedIn, or GitHub to connect, share ideas, or explore
          possibilities.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {/* Contact info cards */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-2"
        >
          <div className="space-y-5">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="backdrop-blur-md bg-white/70 dark:bg-gray-800/40 p-5 rounded-2xl shadow-lg border border-gray-100/80 dark:border-gray-700/30 flex items-center gap-4"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600 dark:text-blue-400"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Call Me</h3>
                <p className="text-gray-600 dark:text-gray-300">+977 9860137848</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="backdrop-blur-md bg-white/70 dark:bg-gray-800/40 p-5 rounded-2xl shadow-lg border border-gray-100/80 dark:border-gray-700/30 flex items-center gap-4"
            >
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-600 dark:text-purple-400"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Email Me</h3>
                <p className="text-gray-600 dark:text-gray-300">sunilneupane957@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="backdrop-blur-md bg-white/70 dark:bg-gray-800/40 p-5 rounded-2xl shadow-lg border border-gray-100/80 dark:border-gray-700/30 flex items-center gap-4"
            >
              <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-pink-600 dark:text-pink-400"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">Kathmandu, Nepal</p>
              </div>
            </motion.div>
          </div>

          {/* Social media links */}
          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="bg-[#1877F2]/20 hover:bg-[#1877F2]/30 w-10 h-10 flex items-center justify-center rounded-full text-[#1877F2] dark:text-blue-400 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/30 w-10 h-10 flex items-center justify-center rounded-full text-[#1DA1F2] dark:text-blue-400 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.nio.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="bg-[#0A66C2]/20 hover:bg-[#0A66C2]/30 w-10 h-10 flex items-center justify-center rounded-full text-[#0A66C2] dark:text-blue-400 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="bg-gray-200/80 dark:bg-gray-700/50 hover:bg-gray-200 dark:hover:bg-gray-700 w-10 h-10 flex items-center justify-center rounded-full text-gray-700 dark:text-gray-300 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.form
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          onSubmit={onSubmit}
          className="lg:col-span-3 backdrop-blur-md bg-white/80 dark:bg-gray-800/40 rounded-2xl p-8 shadow-xl border border-gray-100/80 dark:border-gray-700/30"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="relative">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2 ml-1"
              >
                Your Name
              </label>
              <input
                className="obin w-full p-3.5 outline-none border border-gray-300 dark:border-gray-700 rounded-xl bg-white/90 dark:bg-gray-800/50 focus:border-blue-500 dark:focus:border-blue-400 transition-colors focus:ring-2 focus:ring-blue-500/20 dark:text-white"
                type="text"
                id="name"
                placeholder="John Doe"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2 ml-1"
              >
                Your Email
              </label>
              <input
                className="w-full p-3.5 outline-none border border-gray-300 dark:border-gray-700 rounded-xl bg-white/90 dark:bg-gray-800/50 focus:border-blue-500 dark:focus:border-blue-400 transition-colors focus:ring-2 focus:ring-blue-500/20 dark:text-white"
                type="email"
                id="email"
                placeholder="john@example.com"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="relative mb-8">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2 ml-1"
            >
              Your Message
            </label>
            <textarea
              className="w-full p-4 outline-none border border-gray-300 dark:border-gray-700 rounded-xl bg-white/90 dark:bg-gray-800/50 focus:border-blue-500 dark:focus:border-blue-400 transition-colors focus:ring-2 focus:ring-blue-500/20 dark:text-white resize-none"
              name="message"
              id="message"
              rows="6"
              placeholder="How can I help you?"
              value={formState.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="py-4 px-8 w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300 font-medium"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </>
            )}
          </motion.button>

          {/* Success/Error message */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`mt-5 py-3 px-4 rounded-lg ${
                result.includes("success") || result.includes("Successfully")
                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800/30"
                  : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800/30"
              }`}
            >
              <p className="flex items-center gap-2 font-medium">
                {result.includes("success") || result.includes("Successfully") ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600 dark:text-green-400"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-600 dark:text-amber-400"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                )}
                {result}
              </p>
            </motion.div>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;