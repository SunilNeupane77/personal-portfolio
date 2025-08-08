"use client";
import { useEffect, useState } from 'react';

/**
 * Custom hook for managing dark mode state
 * @returns {Object} Object containing isDarkMode state and toggle function
 */
const useDarkMode = () => {
  // Initialize with system preference or stored preference
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Load preference from localStorage or system on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    setIsDarkMode(
      storedTheme === 'dark' || 
      (!storedTheme && prefersDark)
    );
  }, []);

  // Update DOM and localStorage when dark mode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  // Toggle function
  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
