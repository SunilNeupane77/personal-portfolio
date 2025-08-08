"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Works from "@/components/Works";
import { motion } from "framer-motion";
import useDarkMode from "./hooks/useDarkMode";


export default function Home() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col justify-between"
    >
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={toggleDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        className="flex-1"
      >
        <About isDarkMode={isDarkMode} />
        <Works isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </motion.div>
      <Footer />
    </motion.div>
  );
}
