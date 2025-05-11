"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Works from "@/components/Works";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Home component that renders the main sections of the portfolio website.
 *
 * @component
 * @returns {JSX.Element} The rendered Home component.
 */
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-colors-scheme:dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-blue-500 to-green-500 dark:from-gray-800 dark:to-gray-900"
    >
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <About isDarkMode={isDarkMode} />
        <Services isDarkMode={isDarkMode} />
        <Works isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </motion.div>
      <Footer isDarkMode={isDarkMode} />
    </motion.div>
  );
}
