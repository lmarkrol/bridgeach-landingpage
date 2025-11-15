"use client";

interface HeroProps {
  buttonTextColor: string;
  talkToSalesTextColor: string;
  talkToSalesBorderColor: string;
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({
  buttonTextColor,
  talkToSalesTextColor,
  talkToSalesBorderColor,
  scrollToSection,
}: HeroProps) => {
  return (
    <section
      id="hero"
      className="aurora-bg relative overflow-hidden bg-linear-to-b from-white to-blue-50 py-20 md:py-32 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <span className="mb-6 inline-block rounded-lg bg-accent-500 px-4 py-1 text-sm font-medium text-white transition duration-300 hover:bg-accent-600">
          Unlock your potential
        </span>
        <h1 className="mb-6 text-5xl leading-tight font-bold text-gray-900 md:text-6xl lg:text-7xl dark:text-white">
          Bridge the Gap to{" "}
          <span className="text-accent-600 dark:text-accent-400">Success</span>
        </h1>
        <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
          Streamline workflows, enhance collaboration, and achieve more with our
          intuitive SaaS platform designed for modern teams.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
    </section>
  );
};

export default Hero;
