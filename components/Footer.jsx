import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/sunilneupane",
      color: "hover:text-gray-300"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/sunilneupane",
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/sunilneupane",
      color: "hover:text-sky-400"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#work" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative mt-20 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            scale: { duration: 12, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-500 to-cyan-500 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 80, repeat: Infinity, ease: "linear" },
            scale: { duration: 15, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-r from-purple-700 to-pink-700 blur-[100px]"
        />
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            rotate: { duration: 45, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-20 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-[80px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand & Description */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <motion.h3 
                whileHover={{ scale: 1.05 }}
                className="font-extrabold text-3xl tracking-widest bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg uppercase cursor-default"
              >
                Sunil Neupane
              </motion.h3>
              <p className="text-gray-300 max-w-md leading-relaxed">
                Building modern web experiences with clean code and thoughtful user experiences. 
                Passionate about creating digital solutions that make a difference.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <span>+977 9860137848</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-green-400" />
                </div>
                <span>sunilneupane957@gmail.com</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-purple-400" />
                </div>
                <span>Kathmandu, Nepal</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-xl font-bold text-white">Connect</h4>
            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5, scale: 1.05 }}
                    className={`flex items-center gap-3 text-gray-300 ${social.color} transition-all duration-300`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-300">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span>{social.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to Top</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
