import "@/app/globals.css";
import "../css/card-line.css";

const Features = () => {
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
          {/* Feature 1 */}
          <div className="card rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <div className="bg uwu" />
            <div className="bg" />
            <div className="content p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white dark:border dark:border-accent-400 dark:bg-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-accent-600 dark:text-accent-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Intuitive Workflow
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Simplify complex tasks with our easy-to-use interface and
                intelligent automation that adapts to your team&apos;s needs.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="card rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <div className="bg uwu" />
            <div className="bg" />
            <div className="content p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white dark:border dark:border-accent-400 dark:bg-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-accent-600 dark:text-accent-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Seamless Collaboration
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Work together effortlessly with real-time updates, integrated
                communication tools, and shared workspaces.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="card rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <div className="bg uwu" />
            <div className="bg" />
            <div className="content p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white dark:border dark:border-accent-400 dark:bg-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-accent-600 dark:text-accent-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Data-Driven Insights
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Make informed decisions with powerful analytics, customizable
                dashboards, and predictive insights.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="card rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <div className="bg uwu" />
            <div className="bg" />
            <div className="content p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white dark:border dark:border-accent-400 dark:bg-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-accent-600 dark:text-accent-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Enterprise Security
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Built with advanced security protocols, compliance standards,
                and enterprise-grade protection.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="card rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <div className="bg uwu" />
            <div className="bg" />
            <div className="content p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white dark:border dark:border-accent-400 dark:bg-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-accent-600 dark:text-accent-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Custom Dashboards
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Create personalized dashboards with drag-and-drop widgets
                tailored to your team&apos;s specific needs.
              </p>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="card rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <div className="bg uwu" />
            <div className="bg" />
            <div className="content p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white dark:border dark:border-accent-400 dark:bg-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-accent-600 dark:text-accent-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2zM8 7v2m8-2v2"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Smart Scheduling
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Intelligent scheduling with conflict detection, automated
                notifications, and cross-platform sync.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
