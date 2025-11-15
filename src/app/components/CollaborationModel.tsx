import "../css/card-line.css";

const CollaborationModel = () => {
  return (
    <section
      id="collaboration"
      className="aurora-bg bg-linear-to-b from-white to-blue-50 py-20 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Collaboration Model
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Project type that suit your needs
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Dedicated Plan */}
          <div className="card flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <div className="bg uwu" />
            <div className="bg" />
            <div className="content p-8 flex-grow">
              <div className="mb-4 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-accent-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3v4M9 10V7a3 3 0 016 0v3"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white text-center">
                Dedicated Service
              </h3>
              <div className="mb-6">
                <span className="text-gray-600 dark:text-gray-400 block text-center">
                  Single professional fully focused on handling the project’s challenges and objectives.
                </span>
              </div>
              <ul className="mb-8 space-y-3 flex-grow">
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 flex-shrink-0 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Exclusive personal attention on every task
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 flex-shrink-0 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Lower operational cost compared to hiring full-time staff
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 flex-shrink-0 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">No recruitment or HR process required
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 flex-shrink-0 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Suitable for building and improving dynamic digital platforms
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Project Based Plan */}
          <div className="card flex flex-col relative rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <div className="bg uwu" />
            <div className="bg" />
            <div className="content p-8 flex-grow">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                <span className="rounded-full bg-accent-600 px-4 py-1 text-sm font-medium text-white">
                  Popular
                </span>
              </div>
              <div className="flex-grow">
                <div className="mb-4 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-accent-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white text-center">
                  Project Based
                </h3>
                <div className="mb-6">
                  <span className="text-gray-600 dark:text-gray-400 block text-center">
                    Independent specialist delivering a complete digital platform for the company’s needs.
                  </span>
                </div>
                <ul className="mb-8 space-y-3 flex-grow">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 flex-shrink-0 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      Transparent pricing and clear work timelines.
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 flex-shrink-0 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      Execution aligned with business targets.
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 flex-shrink-0 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      One-month quality guarantee included.
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 flex-shrink-0 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      Suitable for developing new digital platforms from scratch.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* On Demand Plan */}
          <div className="card flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <div className="bg uwu" />
            <div className="bg" />
            <div className="content p-8 flex-grow">
              <div className="mb-4 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-accent-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white text-center">
                On Demand
              </h3>
              <div className="mb-6">
                <span className="text-gray-600 dark:text-gray-400 block text-center">
                  Solo expert ready to assist with digital platform issues and requirements.
                </span>
              </div>
              <ul className="mb-8 space-y-3 flex-grow">
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 flex-shrink-0 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    Flexible working style.
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 flex-shrink-0 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    Task-based or ticket-based execution.
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 flex-shrink-0 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    Relatively affordable cost structure.
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 flex-shrink-0 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    Suitable for feature development, fixes, and ongoing maintenance.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationModel;
