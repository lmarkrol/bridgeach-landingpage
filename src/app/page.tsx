"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CollaborationModel from "./components/CollaborationModel";
import HowToWork from "./components/HowToWork";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState<boolean>(false); // Default to light mode on server and client initially

  // Function to scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const targetPosition = element.offsetTop - 80; // 80px offset for navbar height
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; // 800ms for smooth scrolling
      let start: number | null = null;

      // Easing function for smooth animation
      const easeInOutQuad = (
        t: number,
        b: number,
        c: number,
        d: number,
      ): number => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      // Animation function
      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutQuad(
          timeElapsed,
          startPosition,
          distance,
          duration,
        );
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
  };

  // Function to toggle theme
  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    const mode = newDarkMode ? "dark" : "light";
    localStorage.setItem("theme", mode);
    // applyTheme(mode); // applyTheme will be called by the useEffect below
  };

  const applyTheme = (mode: string) => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Effect to read initial theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialDarkMode = savedTheme ? savedTheme === "dark" : prefersDark;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDarkMode(initialDarkMode);
    applyTheme(initialDarkMode ? "dark" : "light");
  }, []); // Empty dependency array means it runs once after initial render

  // Effect to apply theme whenever darkMode changes (after initial mount or toggle)
  useEffect(() => {
    applyTheme(darkMode ? "dark" : "light");
  }, [darkMode]);

  // Derived state for button colors
  const buttonTextColor = "#FFFFFF"; // Always white for primary button
  const talkToSalesTextColor = darkMode ? "#FFFFFF" : "#000000";
  const talkToSalesBorderColor = darkMode ? "#FFFFFF" : "#000000";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 dark:text-gray-100">
      <Header
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        scrollToSection={scrollToSection}
      />

      <Hero
        buttonTextColor={buttonTextColor}
        talkToSalesTextColor={talkToSalesTextColor}
        talkToSalesBorderColor={talkToSalesBorderColor}
        darkMode={darkMode}
        scrollToSection={scrollToSection}
      />

      <Features />

      <CollaborationModel />

      <HowToWork darkMode={darkMode} />

      <Testimonials />

      <Contact
        buttonTextColor={buttonTextColor}
        talkToSalesTextColor={talkToSalesTextColor}
        talkToSalesBorderColor={talkToSalesBorderColor}
      />

      <Footer darkMode={darkMode} />
    </div>
  );
}
