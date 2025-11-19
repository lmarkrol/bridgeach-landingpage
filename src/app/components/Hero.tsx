"use client";
import Cube from '../elements/Cube';
import useSynchronizedTypingAnimation from '../hooks/useSynchronizedTypingAnimation';
import { useState, useEffect } from 'react';

interface HeroProps {
  buttonTextColor: string;
  talkToSalesTextColor: string;
  talkToSalesBorderColor: string;
  darkMode: boolean;
  scrollToSection: (sectionId: string) => void;
}

const lightRGBColors = [
  '#004FCC', // deep blue
  '#3A00CC', // deep violet
  '#CC0066', // strong magenta
  '#CC0000', // deep red
  '#CC7A00', // warm amber
  '#00CC88', // teal green
];

const darkRGBColors = [
  '#3A84FF', // bright blue
  '#874DFF', // vivid violet
  '#FF4DA0', // bright magenta
  '#FF4D4D', // bright red
  '#FFB84D', // bright amber
  '#33FFBE', // bright aqua green
];

const titles = [
  "Everything you need to succeed",
  "Intuitive Workflow",
  "Seamless Collaboration",
  "Data-Driven Insights",
  "Enterprise Security",
  "Custom Dashboards",
  "Smart Scheduling",
];

const subtitles = [
  "Powerful features designed to help your team work smarter, not harder.",
  "Simplify complex tasks with our easy-to-use interface and intelligent automation that adapts to your team's needs.",
  "Work together effortlessly with real-time updates, integrated communication tools, and shared workspaces.",
  "Make informed decisions with powerful analytics, customizable dashboards, and predictive insights.",
  "Built with advanced security protocols, compliance standards, and enterprise-grade protection.",
  "Create personalized dashboards with drag-and-drop widgets tailored to your team's specific needs.",
  "Intelligent scheduling with conflict detection, automated notifications, and cross-platform sync.",
];

const longestTitle = titles.reduce((a, b) => a.length > b.length ? a : b, "");
const longestSubtitle = subtitles.reduce((a, b) => a.length > b.length ? a : b, "");

const Hero = ({
  buttonTextColor,
  talkToSalesTextColor,
  talkToSalesBorderColor,
  darkMode,
  scrollToSection,
}: HeroProps) => {
  const [animatedColor, setAnimatedColor] = useState<string>('#3b82f6');

  useEffect(() => {
    let animationFrameId: number;
    const cycleDuration = 3000; // 3 seconds for full cycle
    const colors = darkMode ? darkRGBColors : lightRGBColors;
    let startTime: number | null = null;

    // Helper function to interpolate between two colors
    const interpolateColor = (color1: string, color2: string, factor: number): string => {
      // Convert hex to RGB
      const hexToRgb = (hex: string) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return [r, g, b];
      };

      const [r1, g1, b1] = hexToRgb(color1);
      const [r2, g2, b2] = hexToRgb(color2);

      const r = Math.round(r1 + factor * (r2 - r1));
      const g = Math.round(g1 + factor * (g2 - g1));
      const b = Math.round(b1 + factor * (b2 - b1));

      return `rgb(${r}, ${g}, ${b})`;
    };

    const animateColor = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % cycleDuration) / cycleDuration; // 0 to 1

      const colorCount = colors.length;
      const totalSegments = colorCount;
      const segmentProgress = progress * totalSegments;
      const currentColorIndex = Math.floor(segmentProgress) % colorCount;
      const nextColorIndex = (currentColorIndex + 1) % colorCount;
      const interpolationFactor = segmentProgress - Math.floor(segmentProgress); // 0 to 1

      const currentColor = colors[currentColorIndex];
      const nextColor = colors[nextColorIndex];
      const interpolatedColor = interpolateColor(currentColor, nextColor, interpolationFactor);

      setAnimatedColor(interpolatedColor);
      animationFrameId = requestAnimationFrame(animateColor);
    };

    animationFrameId = requestAnimationFrame(animateColor);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);



  const { displayedTitle, displayedSubtitle } = useSynchronizedTypingAnimation({
    titles,
    subtitles,
    typingSpeed: 30,
    deletingSpeed: 15,
    pauseDuration: 2000,
  });

  return (
    <section
      id="hero"
      className="aurora-bg relative bg-linear-to-b from-white to-blue-50 py-24 md:py-48 dark:from-gray-900 dark:to-gray-800 w-full overflow-x-hidden"
    >
      {/* Mobile layout: content, cube, then buttons */}
      <div className="md:hidden w-full overflow-x-hidden">
        {/* Content on mobile with matching header padding */}
        <div className="mb-8 pt-8 px-4 sm:px-6 text-center">
          <span
            className="mb-6 inline-block rounded-lg px-4 py-1 text-sm font-medium text-white transition duration-300"
            style={{ backgroundColor: animatedColor }}
          >
            Unlock your potential
          </span>
          <div className="relative mb-6">
            <h1 className="text-4xl leading-tight font-bold text-transparent select-none" aria-hidden="true">
              {longestTitle}
            </h1>
            <h1 className="absolute top-0 left-0 w-full text-4xl leading-tight font-bold text-gray-900 dark:text-white">
              {displayedTitle}
              <span className="blinking-cursor"></span>
            </h1>
          </div>
          <div className="relative">
            <p className="text-lg leading-relaxed text-transparent select-none" aria-hidden="true">
              {longestSubtitle}
            </p>
            <p className="absolute top-0 left-0 w-full text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              {displayedSubtitle}
              <span className="blinking-cursor"></span>
            </p>
          </div>
        </div>

        {/* Cube with constrained width on mobile */}
        <div className="my-0 w-full flex justify-center items-center overflow-hidden">
          <div className="scale-[0.5] origin-center">
            <Cube darkMode={darkMode} />
          </div>
        </div>

        {/* Buttons below cube on mobile with matching header padding */}
        <div className="flex flex-col gap-4 px-4 sm:px-6 mt-8">
          <button
            onClick={() => scrollToSection("features")}
            className="transform rounded-lg bg-accent-500 px-8 py-4 font-semibold shadow-lg transition duration-300 hover:scale-105 hover:-translate-y-0.5 hover:bg-accent-600 w-full"
            style={{ color: buttonTextColor }}
          >
            Start Free Trial
          </button>
          <button
            onClick={() => scrollToSection("contacts")}
            className="transform rounded-lg border bg-transparent px-8 py-4 font-semibold text-gray-800 shadow-lg transition duration-300 hover:scale-105 hover:-translate-y-0.5 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 w-full"
            style={{
              color: talkToSalesTextColor,
              borderColor: talkToSalesBorderColor,
            }}
          >
            Contact Sales
          </button>
        </div>
      </div>

      {/* Desktop layout: side by side */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:px-16 hidden md:flex flex-row items-center gap-12">
        {/* Left side - Content */}
        <div className="flex-1 text-left">
          <span
            className="mb-6 inline-block rounded-lg px-4 py-1 text-sm font-medium text-white transition duration-300"
            style={{ backgroundColor: animatedColor }}
          >
            Unlock your potential
          </span>
          <div className="relative mb-6">
            <h1 className="text-4xl leading-tight font-bold text-transparent select-none md:text-5xl lg:text-6xl" aria-hidden="true">
              {longestTitle}
            </h1>
            <h1 className="absolute top-0 left-0 w-full text-4xl leading-tight font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              {displayedTitle}
              <span className="blinking-cursor"></span>
            </h1>
          </div>
          <div className="relative mb-6">
            <p className="text-lg leading-relaxed text-transparent select-none" aria-hidden="true">
              {longestSubtitle}
            </p>
            <p className="absolute top-0 left-0 w-full text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              {displayedSubtitle}
              <span className="blinking-cursor"></span>
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => scrollToSection("features")}
              className="transform rounded-lg bg-accent-500 px-8 py-4 font-semibold shadow-lg transition duration-300 hover:scale-110 hover:-translate-y-0.5 hover:bg-accent-600"
              style={{ color: buttonTextColor }}
            >
              Start Free Trial
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="transform rounded-lg border bg-transparent px-8 py-4 font-semibold text-gray-800 shadow-lg transition duration-300 hover:scale-110 hover:-translate-y-0.5 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              style={{
                color: talkToSalesTextColor,
                borderColor: talkToSalesBorderColor,
              }}
            >
              Contact Sales
            </button>
          </div>
        </div>

        {/* Right side - Cube */}
        <div className="flex-1 flex justify-center">
          <Cube darkMode={darkMode} />
        </div>
      </div>
    </section>
  );
};

export default Hero;