import Link from "next/link";
export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-md">
        <div className="custom-bg blur-sm absolute top-0 left-0 w-full h-full"></div>
        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                Welcome to Next Store
              </p>

              {/* Title */}
              <div className="mt-5 max-w-2xl">
                <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                  Premium Products for Everyone
                </h1>
              </div>
              {/* End Title */}

              <div className="mt-5 max-w-3xl">
                <p className="text-lg text-gray-600 dark:text-neutral-400">
                  Discover our curated collection of high-quality products at
                  unbeatable prices. Shop with confidence with our 30-day
                  money-back guarantee.
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-8 gap-3 flex justify-center">
                <Link
                  href="/store"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Shop Now
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
                <Link
                  href="/store#featured"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-200 hover:border-gray-800 hover:bg-gray-800 focus:outline-none focus:bg-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  Featured Products
                </Link>
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </main>
  );
}
