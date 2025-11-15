interface ContactProps {
  buttonTextColor: string;
  talkToSalesTextColor: string;
  talkToSalesBorderColor: string;
}

const Contact = ({
  buttonTextColor,
  talkToSalesTextColor,
  talkToSalesBorderColor,
}: ContactProps) => {
  return (
    <section
      id="contacts"
      className="aurora-bg bg-linear-to-b from-white to-blue-50 py-20 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-lg dark:bg-gray-900 md:p-12">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Ready to get started?
            </h2>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
              Join thousands of satisfied customers transforming their workflow
              with Bridgeach.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button
                className="transform rounded-lg bg-accent-500 px-8 py-4 font-semibold shadow-lg transition duration-300 hover:scale-110 hover:bg-accent-600"
                style={{ color: buttonTextColor }}
              >
                Start Free Trial
              </button>
              <button
                className="transform rounded-lg border bg-transparent px-8 py-4 font-semibold text-gray-800 shadow-lg transition duration-300 hover:scale-110 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                style={{
                  color: talkToSalesTextColor,
                  borderColor: talkToSalesBorderColor,
                }}
              >
                Contact Sales
              </button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent-100 transition-all hover:scale-110 dark:bg-accent-900/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-accent-600 dark:text-accent-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Contact Support
              </h3>
              <p className="mb-3 text-gray-600 dark:text-gray-300">
                Our team is ready to help you
              </p>
              <a
                href="mailto:support@bridgeach.com"
                className="text-accent-600 hover:underline dark:text-accent-400"
              >
                support@bridgeach.com
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent-100 transition-all hover:scale-110 dark:bg-accent-900/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-accent-600 dark:text-accent-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Our Location
              </h3>
              <p className="mb-3 text-gray-600 dark:text-gray-300">
                Visit us in our office
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                San Francisco, CA
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent-100 transition-all hover:scale-110 dark:bg-accent-900/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-accent-600 dark:text-accent-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Business Hours
              </h3>
              <p className="mb-3 text-gray-600 dark:text-gray-300">
                We&apos;re here to assist you
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Mon-Fri: 9AM - 6PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
