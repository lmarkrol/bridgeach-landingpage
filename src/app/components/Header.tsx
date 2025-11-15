"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
  scrollToSection: (sectionId: string) => void;
}

// Color sequence for the RGB fade effect

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

const Header = ({ darkMode, toggleTheme, scrollToSection }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [animatedColor, setAnimatedColor] = useState<string>('#3b82f6');
  const colorIndexRef = useRef(0);

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

    if (hoveredNav) {
      startTime = null; // Reset start time
      animationFrameId = requestAnimationFrame(animateColor);
    } else {
      setAnimatedColor(darkMode ? '#33FFBE' : '#004FCC'); // Reset to theme-appropriate color when not hovered
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [hoveredNav, darkMode]); // Include darkMode in dependency array to restart animation when theme changes

  return (
    <>
      <header
        className="sticky top-0 z-50 container mx-auto flex items-center justify-between border-b border-gray-200/30 bg-white/80 px-4 sm:px-6 lg:px-8 xl:px-16 py-6 backdrop-blur-sm dark:border-gray-800/50 dark:bg-gray-900/80 shadow-lg"
        style={{ zIndex: 1000 }}
      >
        <div className="flex items-center space-x-2">
          <button
            onClick={() => scrollToSection("hero")}
            className="outline-none focus:outline-none focus:ring-0"
            aria-label="Go to homepage"
          >
            <Image
              src={
                darkMode ? "/assets/logo-dark.png" : "/assets/logo-light.png"
              }
              alt="Bridgeach Logo"
              width="200"
              height="50"
              className="object-contain"
            />
          </button>
        </div>
        <div className="hidden space-x-8 md:flex">
          <button
            onClick={() => scrollToSection("features")}
            onMouseEnter={() => setHoveredNav("features")}
            onMouseLeave={() => setHoveredNav(null)}
            style={{ color: hoveredNav === "features" ? animatedColor : undefined, fontWeight: hoveredNav === "features" ? 'bold' : 'normal' }}
            className={`min-w-[120px] ${hoveredNav !== "features" ? "text-gray-600 dark:text-gray-300 font-medium" : ""}`}
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("collaboration")}
            onMouseEnter={() => setHoveredNav("collaboration")}
            onMouseLeave={() => setHoveredNav(null)}
            style={{ color: hoveredNav === "collaboration" ? animatedColor : undefined, fontWeight: hoveredNav === "collaboration" ? 'bold' : 'normal' }}
            className={`min-w-[120px] ${hoveredNav !== "collaboration" ? "text-gray-600 dark:text-gray-300 font-medium" : ""}`}
          >
            Collaboration
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            onMouseEnter={() => setHoveredNav("testimonials")}
            onMouseLeave={() => setHoveredNav(null)}
            style={{ color: hoveredNav === "testimonials" ? animatedColor : undefined, fontWeight: hoveredNav === "testimonials" ? 'bold' : 'normal' }}
            className={`min-w-[120px] ${hoveredNav !== "testimonials" ? "text-gray-600 dark:text-gray-300 font-medium" : ""}`}
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("contacts")}
            onMouseEnter={() => setHoveredNav("contacts")}
            onMouseLeave={() => setHoveredNav(null)}
            style={{ color: hoveredNav === "contacts" ? animatedColor : undefined, fontWeight: hoveredNav === "contacts" ? 'bold' : 'normal' }}
            className={`min-w-[120px] ${hoveredNav !== "contacts" ? "text-gray-600 dark:text-gray-300 font-medium" : ""}`}
          >
            Contacts
          </button>
          <button
            onClick={() => scrollToSection("footer")}
            onMouseEnter={() => setHoveredNav("footer")}
            onMouseLeave={() => setHoveredNav(null)}
            style={{ color: hoveredNav === "footer" ? animatedColor : undefined, fontWeight: hoveredNav === "footer" ? 'bold' : 'normal' }}
            className={`min-w-[120px] ${hoveredNav !== "footer" ? "text-gray-600 dark:text-gray-300 font-medium" : ""}`}
          >
            Resources
          </button>
        </div>
        <div className="hidden items-center space-x-4 md:flex">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg bg-gray-200 p-2 text-gray-700 transition hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="flex items-center space-x-4 md:hidden">
          {/* Theme Toggle for Mobile (left of menu button) */}
          <button
            className="text-gray-600 hover:text-accent-600 dark:text-gray-300 dark:hover:text-accent-400"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
          {/* Mobile menu button (right of theme toggle) */}
          <button
            className="text-gray-600 hover:text-accent-600 dark:text-gray-300 dark:hover:text-accent-400"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed top-[89px] left-0 right-0 z-40 bg-white/70 px-4 sm:px-6 lg:px-8 xl:px-16 py-6 shadow-lg md:hidden dark:bg-gray-900/70 border-b border-gray-200/30 dark:border-gray-800/50"
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <div className="flex flex-col space-y-4 items-center">
            <button
              onClick={() => {
                scrollToSection("features");
                setMobileMenuOpen(false);
              }}
              onMouseEnter={() => setHoveredNav("features")}
              onMouseLeave={() => setHoveredNav(null)}
              style={{ color: hoveredNav === "features" ? animatedColor : undefined, fontWeight: hoveredNav === "features" ? 'bold' : 'normal' }}
              className={`py-2 w-full text-center min-w-[100px] ${hoveredNav !== "features" ? "text-gray-600 dark:text-gray-300 font-medium" : ""}`}
            >
              Features
            </button>
            <button
              onClick={() => {
                scrollToSection("collaboration");
                setMobileMenuOpen(false);
              }}
              onMouseEnter={() => setHoveredNav("collaboration")}
              onMouseLeave={() => setHoveredNav(null)}
              style={{ color: hoveredNav === "collaboration" ? animatedColor : undefined, fontWeight: hoveredNav === "collaboration" ? 'bold' : 'normal' }}
              className={`py-2 w-full text-center min-w-[100px] ${hoveredNav !== "collaboration" ? "text-gray-600 dark:text-gray-300 font-medium" : ""}`}
            >
              Collaboration
            </button>
            <button
              onClick={() => {
                scrollToSection("testimonials");
                setMobileMenuOpen(false);
              }}
              onMouseEnter={() => setHoveredNav("testimonials")}
              onMouseLeave={() => setHoveredNav(null)}
              style={{ color: hoveredNav === "testimonials" ? animatedColor : undefined, fontWeight: hoveredNav === "testimonials" ? 'bold' : 'normal' }}
              className={`py-2 w-full text-center min-w-[100px] ${hoveredNav !== "testimonials" ? "text-gray-600 dark:text-gray-300 font-medium" : ""}`}
            >
              Testimonials
            </button>
            <button
              onClick={() => {
                scrollToSection("contacts");
                setMobileMenuOpen(false);
              }}
              onMouseEnter={() => setHoveredNav("contacts")}
              onMouseLeave={() => setHoveredNav(null)}
              style={{ color: hoveredNav === "contacts" ? animatedColor : undefined, fontWeight: hoveredNav === "contacts" ? 'bold' : 'normal' }}
              className={`py-2 w-full text-center min-w-[100px] ${hoveredNav !== "contacts" ? "text-gray-600 dark:text-gray-300 font-medium" : ""}`}
            >
              Contacts
            </button>
            <button
              onClick={() => {
                scrollToSection("footer");
                setMobileMenuOpen(false);
              }}
              onMouseEnter={() => setHoveredNav("footer")}
              onMouseLeave={() => setHoveredNav(null)}
              style={{ color: hoveredNav === "footer" ? animatedColor : undefined, fontWeight: hoveredNav === "footer" ? 'bold' : 'normal' }}
              className={`py-2 w-full text-center min-w-[100px] ${hoveredNav !== "footer" ? "text-gray-600 dark:text-gray-300 font-medium" : ""}`}
            >
              Resources
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;