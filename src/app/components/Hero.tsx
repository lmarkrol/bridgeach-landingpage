"use client";
import Cube from '../elements/Cube';
import useSynchronizedTypingAnimation from '../hooks/useSynchronizedTypingAnimation';

interface HeroProps {
  buttonTextColor: string;
  talkToSalesTextColor: string;
  talkToSalesBorderColor: string;
  darkMode: boolean;
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({
  buttonTextColor,
  talkToSalesTextColor,
  talkToSalesBorderColor,
  darkMode,
  scrollToSection,
}: HeroProps) => {
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
      className="aurora-bg relative overflow-hidden bg-linear-to-b from-white to-blue-50 py-20 md:py-32 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Content */}
          <div className="flex-1 text-left">
            <span className="mb-6 inline-block rounded-lg bg-accent-500 px-4 py-1 text-sm font-medium text-white transition duration-300 hover:bg-accent-600">
              Unlock your potential !
            </span>
            <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              {displayedTitle}
              <span className="blinking-cursor"></span>
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              {displayedSubtitle}
              <span className="blinking-cursor"></span>
            </p>
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
      </div>
    </section>
  );
};

export default Hero;
