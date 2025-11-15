import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import consultationLottie from '../../../public/assets/lottie/1consultation.json';
import visitDemoLottie from '../../../public/assets/lottie/2visitdemo.json';
import priceLottie from '../../../public/assets/lottie/3price.json';
import pocLottie from '../../../public/assets/lottie/4poc.json';
import implementationLottie from '../../../public/assets/lottie/5implementation.json';

interface HowToWorkProps {
  darkMode: boolean;
}

const HowToWork: React.FC<HowToWorkProps> = ({ darkMode }) => {
  const [visibility, setVisibility] = useState<Record<string, boolean>>({});
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [animatedColor, setAnimatedColor] = useState<string>('#3b82f6');

  // Color sequences from Header.tsx
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

    if (hoveredSection) {
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
  }, [hoveredSection, darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-step');
          if (id) {
            // Update visibility based on whether element is intersecting
            setVisibility(prev => ({
              ...prev,
              [id]: entry.isIntersecting
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-step]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="how-to-work"
      className="aurora-bg bg-linear-to-b from-white to-blue-50 py-20 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 max-w-6xl">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            How to Work ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            5 easy steps to digitalize your business with us
          </p>
        </div>

        <div
          data-step="1"
          className={`grid grid-cols-1 gap-4 md:grid-cols-2 gap-y-8 md:gap-8 transition-all duration-1500 ease-in-out mx-auto max-w-6xl ${visibility['1'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
          onMouseEnter={() => setHoveredSection('1')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          {/* Picture on the left side - animate from left */}
          <div className={`flex justify-center order-1 md:order-1 transition-all duration-1500 ease-in-out delay-150 ${visibility['1'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <Lottie
              animationData={consultationLottie}
              loop={true}
              className="w-full max-w-full h-auto object-center"
            />
          </div>

          {/* Column with 3 parts on the right side - animate from right */}
          <div className={`space-y-3 h-full flex flex-col justify-center py-4 md:py-8 order-2 md:order-2 transition-all duration-1500 ease-in-out delay-150 ${visibility['1'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            {/* First title */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                #1
              </h3>
            </div>

            {/* Second title */}
            <div>
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{
                  color: hoveredSection === '1' ? animatedColor : (darkMode ? '#33FFBE' : '#004FCC')
                }}
              >
                Schedule a Consultation
              </h3>
            </div>

            {/* Description */}
            <div>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Identify the factors impacting your business productivity and find tailored solutions. By understanding these challenges, you can implement effective strategies, such as optimizing workflows or investing in technology, to enhance efficiency and profitability.
              </p>
            </div>
          </div>
        </div>

        <div
          data-step="2"
          className={`grid grid-cols-1 gap-4 md:grid-cols-2 gap-y-8 md:gap-8 transition-all duration-1500 ease-in-out mx-auto max-w-6xl ${visibility['2'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
          onMouseEnter={() => setHoveredSection('2')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          {/* Column with 3 parts on the right side - animate from right */}
          <div className={`space-y-3 h-full flex flex-col justify-center py-4 md:py-8 order-2 md:order-1 transition-all duration-1500 ease-in-out delay-150 ${visibility['2'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            {/* First title */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                #2
              </h3>
            </div>

            {/* Second title */}
            <div>
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{
                  color: hoveredSection === '2' ? animatedColor : (darkMode ? '#33FFBE' : '#004FCC')
                }}
              >
                Visit & Demo
              </h3>
            </div>

            {/* Description */}
            <div>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Immerse your bussiness in live demonstrations, interact with experts, and explore cutting-edge solutions designed to elevate your business productivity. Gain valuable insights, discover new technologies, and find tailored strategies to enhance your operations and achieve sustainable growth.
              </p>
            </div>
          </div>

          {/* Picture on the left side - animate from left */}
          <div className={`flex justify-center order-1 md:order-2 transition-all duration-1500 ease-in-out delay-150 ${visibility['2'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <Lottie
              animationData={visitDemoLottie}
              loop={true}
              className="w-full max-w-full h-auto object-center"
            />
          </div>
        </div>

        <div
          data-step="3"
          className={`grid grid-cols-1 gap-4 md:grid-cols-2 gap-y-8 md:gap-8 transition-all duration-1500 ease-in-out mx-auto max-w-6xl ${visibility['3'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
          onMouseEnter={() => setHoveredSection('3')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          {/* Picture on the left side - animate from left */}
          <div className={`flex justify-center order-1 md:order-1 transition-all duration-1500 ease-in-out delay-150 ${visibility['3'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <Lottie
              animationData={priceLottie}
              loop={true}
              className="w-full max-w-full h-auto object-center"
            />
          </div>

          {/* Column with 3 parts on the right side - animate from right */}
          <div className={`space-y-3 h-full flex flex-col justify-center py-4 md:py-8 order-2 md:order-2 transition-all duration-1500 ease-in-out delay-150 ${visibility['3'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            {/* First title */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                #3
              </h3>
            </div>

            {/* Second title */}
            <div>
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{
                  color: hoveredSection === '3' ? animatedColor : (darkMode ? '#33FFBE' : '#004FCC')
                }}
              >
                Price & Proposal
              </h3>
            </div>

            {/* Description */}
            <div>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Request a detailed price quotation tailored to your needs. Our experienced team provides accurate and transparent pricing information for your products or services. Receive a customized quote swiftly, ensuring you have the necessary information to make informed decisions and plan your budget effectively. Streamline your purchasing process with our comprehensive price quotations.
              </p>
            </div>
          </div>
        </div>

        <div
          data-step="4"
          className={`grid grid-cols-1 gap-4 md:grid-cols-2 gap-y-8 md:gap-8 transition-all duration-1500 ease-in-out mx-auto max-w-6xl ${visibility['4'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
          onMouseEnter={() => setHoveredSection('4')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          {/* Column with 3 parts on the right side - animate from right */}
          <div className={`space-y-3 h-full flex flex-col justify-center py-4 md:py-8 order-2 md:order-1 transition-all duration-1500 ease-in-out delay-150 ${visibility['4'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            {/* First title */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                #4
              </h3>
            </div>

            {/* Second title */}
            <div>
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{
                  color: hoveredSection === '4' ? animatedColor : (darkMode ? '#33FFBE' : '#004FCC')
                }}
              >
                Proof of Concept
              </h3>
            </div>

            {/* Description */}
            <div>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Embark on your journey of innovation with our Development and Trial Services. We offer expert guidance and hands-on support, enabling you to refine ideas, create prototypes, and conduct rigorous trials. Our experienced team ensures your concepts transform into successful outcomes, driving growth and excellence for your business.
              </p>
            </div>
          </div>

          {/* Picture on the left side - animate from left */}
          <div className={`flex justify-center order-1 md:order-2 transition-all duration-1500 ease-in-out delay-150 ${visibility['4'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <Lottie
              animationData={pocLottie}
              loop={true}
              className="w-full max-w-full h-auto object-center"
            />
          </div>
        </div>

        <div
          data-step="5"
          className={`grid grid-cols-1 gap-4 md:grid-cols-2 gap-y-8 md:gap-8 transition-all duration-1500 ease-in-out mx-auto max-w-6xl ${visibility['5'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
          onMouseEnter={() => setHoveredSection('5')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          {/* Picture on the left side - animate from left */}
          <div className={`flex justify-center order-1 md:order-1 transition-all duration-1500 ease-in-out delay-150 ${visibility['5'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <Lottie
              animationData={implementationLottie}
              loop={true}
              className="w-full max-w-full h-auto object-center"
            />
          </div>

          {/* Column with 3 parts on the right side - animate from right */}
          <div className={`space-y-3 h-full flex flex-col justify-center py-4 md:py-8 order-2 md:order-2 transition-all duration-1500 ease-in-out delay-150 ${visibility['5'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            {/* First title */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                #5
              </h3>
            </div>

            {/* Second title */}
            <div>
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{
                  color: hoveredSection === '5' ? animatedColor : (darkMode ? '#33FFBE' : '#004FCC')
                }}
              >
                Implementation
              </h3>
            </div>

            {/* Description */}
            <div>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Experience seamless transformation with Real Implementation services. Our dedicated experts bring your vision to life, integrating advanced solutions tailored to your business needs. From strategy planning to execution, we ensure a smooth transition, optimizing processes, and delivering tangible results. Elevate your operations with our proven expertise and achieve sustainable success in the real industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToWork;