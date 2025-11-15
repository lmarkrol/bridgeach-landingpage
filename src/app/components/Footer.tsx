import { useState, useEffect } from "react";
import Image from "next/image";
import useScreenSize from "../../hooks/useScreenSize";

interface FooterProps {
  darkMode: boolean;
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

const Footer = ({ darkMode }: FooterProps) => {
  const isMobile = useScreenSize();

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
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

    if (hoveredLink) {
      startTime = null; // Reset start time
      animationFrameId = requestAnimationFrame(animateColor);
    } else {
      const defaultColor = darkMode ? '#33FFBE' : '#004FCC';
      setTimeout(() => {
        if (animatedColor !== defaultColor) {
          setAnimatedColor(defaultColor);
        }
      }, 0);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hoveredLink, darkMode]); // Include darkMode in dependency array to restart animation when theme changes

  return (
    <footer id="footer" className="aurora-bg">
      <div className="border-t border-gray-200 bg-white py-16 dark:border-gray-800 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
            <div className={`lg:col-span-4 ${isMobile ? "text-center" : ""}`}>
              <div
                className={`mb-6 flex items-center ${isMobile ? "justify-center" : ""}`}
              >
                <Image
                  src={
                    darkMode
                      ? "/assets/logo-dark.png"
                      : "/assets/logo-light.png"
                  }
                  alt="Bridgeach Logo"
                  width="200"
                  height="50"
                  className="object-contain"
                />
              </div>
              <p
                className={`mb-12 max-w-md text-gray-600 dark:text-gray-300 ${isMobile ? "mx-auto" : ""}`}
              >
                Bridging the gap between teams and results with intuitive tools
                designed for modern collaboration.
              </p>
              <div className="flex justify-center md:justify-start space-x-6">
                <a
                  href="#"
                  onMouseEnter={() => setHoveredLink("linkedin")}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{ color: hoveredLink === "linkedin" ? animatedColor : undefined, fontWeight: hoveredLink === "linkedin" ? 'bold' : 'normal' }}
                  className={`h-6 w-6 flex items-center justify-center ${hoveredLink !== "linkedin" ? "text-gray-600 dark:text-gray-300" : ""}`}
                  aria-label="LinkedIn"
                >
                  <svg className={`h-6 w-6 ${hoveredLink === "linkedin" ? "scale-150 transition-transform duration-300" : ""}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.045c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.27 2.37 4.27 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065c0-1.136.92-2.063 2.063-2.063 1.137 0 2.065.927 2.065 2.063 0 1.137-.928 2.065-2.065 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454c.98 0 1.775-.773 1.775-1.729V1.729C24 .774 23.225 0 22.225 0z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  onMouseEnter={() => setHoveredLink("twitter")}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{ color: hoveredLink === "twitter" ? animatedColor : undefined, fontWeight: hoveredLink === "twitter" ? 'bold' : 'normal' }}
                  className={`h-6 w-6 flex items-center justify-center ${hoveredLink !== "twitter" ? "text-gray-600 dark:text-gray-300" : ""}`}
                  aria-label="X (Twitter)"
                >
                  <svg className={`h-6 w-6 ${hoveredLink === "twitter" ? "scale-150 transition-transform duration-300" : ""}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  onMouseEnter={() => setHoveredLink("github")}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{ color: hoveredLink === "github" ? animatedColor : undefined, fontWeight: hoveredLink === "github" ? 'bold' : 'normal' }}
                  className={`h-6 w-6 flex items-center justify-center ${hoveredLink !== "github" ? "text-gray-600 dark:text-gray-300" : ""}`}
                  aria-label="GitHub"
                >
                  <svg className={`h-6 w-6 ${hoveredLink === "github" ? "scale-150 transition-transform duration-300" : ""}`} fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.000 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div
              className={`lg:col-span-8 lg:flex lg:justify-end lg:gap-24 ${isMobile ? "flex flex-col items-center gap-12" : ""}`}
            >
              <div
                className={`md:order-1 lg:order-2 min-w-[150px] ${isMobile ? "text-center" : "lg:text-left"}`}
              >
                <h3 className="mb-6 font-semibold text-gray-900 dark:text-white text-center sm:text-left">
                  Product
                </h3>
                <ul className={`space-y-4 ${isMobile ? "text-center" : ""}`}>
                  <li>
                    <a
                      href="#"
                      onMouseEnter={() => setHoveredLink("product-features")}
                      onMouseLeave={() => setHoveredLink(null)}
                      style={{ color: hoveredLink === "product-features" ? animatedColor : undefined, fontWeight: hoveredLink === "product-features" ? 'bold' : 'normal' }}
                      className={`min-w-[120px] ${hoveredLink !== "product-features" ? "text-gray-600 dark:text-gray-300 font-medium" : ""} ${isMobile ? "text-center" : ""}`}
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onMouseEnter={() => setHoveredLink("product-testimonials")}
                      onMouseLeave={() => setHoveredLink(null)}
                      style={{ color: hoveredLink === "product-testimonials" ? animatedColor : undefined, fontWeight: hoveredLink === "product-testimonials" ? 'bold' : 'normal' }}
                      className={`min-w-[120px] ${hoveredLink !== "product-testimonials" ? "text-gray-600 dark:text-gray-300 font-medium" : ""} ${isMobile ? "text-center" : ""}`}
                    >
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onMouseEnter={() => setHoveredLink("product-contacts")}
                      onMouseLeave={() => setHoveredLink(null)}
                      style={{ color: hoveredLink === "product-contacts" ? animatedColor : undefined, fontWeight: hoveredLink === "product-contacts" ? 'bold' : 'normal' }}
                      className={`min-w-[120px] ${hoveredLink !== "product-contacts" ? "text-gray-600 dark:text-gray-300 font-medium" : ""} ${isMobile ? "text-center" : ""}`}
                    >
                      Contacts
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onMouseEnter={() => setHoveredLink("product-changelog")}
                      onMouseLeave={() => setHoveredLink(null)}
                      style={{ color: hoveredLink === "product-changelog" ? animatedColor : undefined, fontWeight: hoveredLink === "product-changelog" ? 'bold' : 'normal' }}
                      className={`min-w-[120px] ${hoveredLink !== "product-changelog" ? "text-gray-600 dark:text-gray-300 font-medium" : ""} ${isMobile ? "text-center" : ""}`}
                    >
                      Changelog
                    </a>
                  </li>
                </ul>
              </div>

              <div
                className={`md:order-2 lg:order-3 min-w-[150px] ${isMobile ? "text-center" : "lg:text-left"}`}
              >
                <h3 className="mb-6 font-semibold text-gray-900 dark:text-white text-center sm:text-left">
                  Resources
                </h3>
                <ul className={`space-y-4 ${isMobile ? "text-center" : ""}`}>
                  <li>
                    <a
                      href="#"
                      onMouseEnter={() => setHoveredLink("resources-blog")}
                      onMouseLeave={() => setHoveredLink(null)}
                      style={{ color: hoveredLink === "resources-blog" ? animatedColor : undefined, fontWeight: hoveredLink === "resources-blog" ? 'bold' : 'normal' }}
                      className={`min-w-[120px] ${hoveredLink !== "resources-blog" ? "text-gray-600 dark:text-gray-300 font-medium" : ""} ${isMobile ? "text-center" : ""}`}
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onMouseEnter={() => setHoveredLink("resources-documentation")}
                      onMouseLeave={() => setHoveredLink(null)}
                      style={{ color: hoveredLink === "resources-documentation" ? animatedColor : undefined, fontWeight: hoveredLink === "resources-documentation" ? 'bold' : 'normal' }}
                      className={`min-w-[120px] ${hoveredLink !== "resources-documentation" ? "text-gray-600 dark:text-gray-300 font-medium" : ""} ${isMobile ? "text-center" : ""}`}
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onMouseEnter={() => setHoveredLink("resources-guides")}
                      onMouseLeave={() => setHoveredLink(null)}
                      style={{ color: hoveredLink === "resources-guides" ? animatedColor : undefined, fontWeight: hoveredLink === "resources-guides" ? 'bold' : 'normal' }}
                      className={`min-w-[120px] ${hoveredLink !== "resources-guides" ? "text-gray-600 dark:text-gray-300 font-medium" : ""} ${isMobile ? "text-center" : ""}`}
                    >
                      Guides
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onMouseEnter={() => setHoveredLink("resources-support")}
                      onMouseLeave={() => setHoveredLink(null)}
                      style={{ color: hoveredLink === "resources-support" ? animatedColor : undefined, fontWeight: hoveredLink === "resources-support" ? 'bold' : 'normal' }}
                      className={`min-w-[120px] ${hoveredLink !== "resources-support" ? "text-gray-600 dark:text-gray-300 font-medium" : ""} ${isMobile ? "text-center" : ""}`}
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              <div
                className={`md:order-last lg:order-4 min-w-[150px] ${isMobile ? "text-center" : "lg:text-left"}`}
              >
                <h3 className="mb-6 font-semibold text-gray-900 dark:text-white text-center sm:text-left">
                  Company
                </h3>
                <ul className={`space-y-4 ${isMobile ? "text-center" : ""}`}>
                  <li>
                    <a
                      href="#"
                      onMouseEnter={() => setHoveredLink("company-about")}
                      onMouseLeave={() => setHoveredLink(null)}
                      style={{ color: hoveredLink === "company-about" ? animatedColor : undefined, fontWeight: hoveredLink === "company-about" ? 'bold' : 'normal' }}
                      className={`min-w-[120px] ${hoveredLink !== "company-about" ? "text-gray-600 dark:text-gray-300 font-medium" : ""} ${isMobile ? "text-center" : ""}`}
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onMouseEnter={() => setHoveredLink("company-careers")}
                      onMouseLeave={() => setHoveredLink(null)}
                      style={{ color: hoveredLink === "company-careers" ? animatedColor : undefined, fontWeight: hoveredLink === "company-careers" ? 'bold' : 'normal' }}
                      className={`min-w-[120px] ${hoveredLink !== "company-careers" ? "text-gray-600 dark:text-gray-300 font-medium" : ""} ${isMobile ? "text-center" : ""}`}
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onMouseEnter={() => setHoveredLink("company-contact")}
                      onMouseLeave={() => setHoveredLink(null)}
                      style={{ color: hoveredLink === "company-contact" ? animatedColor : undefined, fontWeight: hoveredLink === "company-contact" ? 'bold' : 'normal' }}
                      className={`min-w-[120px] ${hoveredLink !== "company-contact" ? "text-gray-600 dark:text-gray-300 font-medium" : ""} ${isMobile ? "text-center" : ""}`}
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onMouseEnter={() => setHoveredLink("company-partners")}
                      onMouseLeave={() => setHoveredLink(null)}
                      style={{ color: hoveredLink === "company-partners" ? animatedColor : undefined, fontWeight: hoveredLink === "company-partners" ? 'bold' : 'normal' }}
                      className={`min-w-[120px] ${hoveredLink !== "company-partners" ? "text-gray-600 dark:text-gray-300 font-medium" : ""} ${isMobile ? "text-center" : ""}`}
                    >
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {isMobile ? (
            <div className="mt-16 flex flex-col items-center justify-between border-t border-gray-200 pt-10 md:flex-row dark:border-gray-800">
              <div className="mt-4 flex flex-col items-center space-x-0 space-y-2 md:mt-0 md:flex-row md:space-x-8 md:space-y-0 min-w-[150px]">
                <a
                  href="#"
                  onMouseEnter={() => setHoveredLink("footer-privacy-mobile")}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{ color: hoveredLink === "footer-privacy-mobile" ? animatedColor : undefined, fontWeight: hoveredLink === "footer-privacy-mobile" ? 'bold' : 'normal' }}
                  className={`min-w-[120px] ${hoveredLink !== "footer-privacy-mobile" ? "text-gray-600 dark:text-gray-300 font-medium" : ""} text-center`}
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  onMouseEnter={() => setHoveredLink("footer-terms-mobile")}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{ color: hoveredLink === "footer-terms-mobile" ? animatedColor : undefined, fontWeight: hoveredLink === "footer-terms-mobile" ? 'bold' : 'normal' }}
                  className={`min-w-[120px] ${hoveredLink !== "footer-terms-mobile" ? "text-gray-600 dark:text-gray-300 font-medium" : ""} text-center`}
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  onMouseEnter={() => setHoveredLink("footer-cookies-mobile")}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{ color: hoveredLink === "footer-cookies-mobile" ? animatedColor : undefined, fontWeight: hoveredLink === "footer-cookies-mobile" ? 'bold' : 'normal' }}
                  className={`min-w-[120px] ${hoveredLink !== "footer-cookies-mobile" ? "text-gray-600 dark:text-gray-300 font-medium" : ""} text-center`}
                >
                  Cookies
                </a>
              </div>
              <div className="h-8 md:h-0"></div> {/* Gap for mobile */}
              <p className="text-gray-600 dark:text-gray-400">
                &copy; 2025 Bridgeach. All rights reserved.
              </p>
              <div className="h-8 md:h-0"></div> {/* Gap for mobile */}
            </div>
          ) : (
            <div className="mt-16 flex flex-col items-center justify-between border-t border-gray-200 pt-10 md:flex-row dark:border-gray-800">
              <p className="text-gray-600 dark:text-gray-400">
                &copy; 2025 Bridgeach. All rights reserved.
              </p>
              <div className="mt-4 flex flex-col items-center space-x-0 space-y-2 md:mt-0 md:flex-row md:space-x-8 md:space-y-0 min-w-[150px]">
                <a
                  href="#"
                  onMouseEnter={() => setHoveredLink("footer-privacy")}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{ color: hoveredLink === "footer-privacy" ? animatedColor : undefined, fontWeight: hoveredLink === "footer-privacy" ? 'bold' : 'normal' }}
                  className={`min-w-[120px] ${hoveredLink !== "footer-privacy" ? "text-gray-600 dark:text-gray-300 font-medium" : ""} text-center`}
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  onMouseEnter={() => setHoveredLink("footer-terms")}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{ color: hoveredLink === "footer-terms" ? animatedColor : undefined, fontWeight: hoveredLink === "footer-terms" ? 'bold' : 'normal' }}
                  className={`min-w-[120px] ${hoveredLink !== "footer-terms" ? "text-gray-600 dark:text-gray-300 font-medium" : ""} text-center`}
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  onMouseEnter={() => setHoveredLink("footer-cookies")}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{ color: hoveredLink === "footer-cookies" ? animatedColor : undefined, fontWeight: hoveredLink === "footer-cookies" ? 'bold' : 'normal' }}
                  className={`min-w-[120px] ${hoveredLink !== "footer-cookies" ? "text-gray-600 dark:text-gray-300 font-medium" : ""} text-center`}
                >
                  Cookies
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;