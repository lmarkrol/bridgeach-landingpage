"use client";
import { useState, useEffect } from "react";
import "@/app/globals.css";
import "../css/card-line.css";

const featureData = [
  {
    id: "1",
    title: "Website Development",
    description: "Modern, high-performance websites with responsive layouts, strong branding, secure architecture, and smooth user experiences.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    id: "2",
    title: "Mobile App Development",
    description: "Reliable Android and iOS applications built with clean UI, scalable architecture, and optimized performance for long-term growth.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    ),
  },
  {
    id: "3",
    title: "Graphic/Motion Design",
    description: "Engaging visual and motion content crafted to elevate brand identity, enhance storytelling, and create a memorable digital presence.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    ),
  },
  {
    id: "4",
    title: "Robotic Process Automation",
    description: "Smart automation solutions that replace repetitive tasks, improve workflow accuracy, reduce operational time, and boost productivity.",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </>
    ),
  },
  {
    id: "5",
    title: "Computer Vision",
    description: "Advanced image and video analysis systems that enable detection, recognition, and automation for real-time, data-driven decisions.",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </>
    ),
  },
  {
    id: "6",
    title: "Data Engineering & Analytics",
    description: "Complete data pipelines, dashboards, and analytical models that turn raw information into actionable insights for better decision-making.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    ),
  },
];

const Features = () => {
  const [visibility, setVisibility] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-feature-id");
          if (id) {
            setVisibility((prev) => ({ ...prev, [id]: entry.isIntersecting }));
          }
        });
      },
      { threshold: 0 }
    );

    const elements = document.querySelectorAll("[data-feature-id]");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="features"
      className="aurora-bg bg-linear-to-b from-white to-blue-50 py-20 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Powerful features designed to help your team work smarter, not
            harder.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {featureData.map((feature, index) => (
            <div
              key={feature.id}
              data-feature-id={feature.id}
              className={`card flex flex-col rounded-2xl border border-gray-200 shadow-sm transition-all duration-1000 ease-in-out hover:shadow-lg dark:border-gray-800 ${visibility[feature.id]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 250}ms` }}
            >
              <div className="bg uwu" />
              <div className="bg" />
              <div className="relative z-10 content flex-grow rounded-2xl bg-white p-8 dark:bg-gray-900">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white dark:border dark:border-accent-400 dark:bg-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-accent-600 dark:text-accent-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
