export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden dark:bg-gray-800">
        <div className="max-w-[85rem] mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              Our Story
            </h1>
            <p className="mt-3 text-gray-600 dark:text-neutral-400">
              How we became your favorite shopping destination
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl md:leading-tight dark:text-white">
              Founded in 2023 with a simple vision
            </h2>
            <p className="mt-3 text-gray-600 dark:text-neutral-400">
              To provide high-quality products with exceptional customer service
              at prices everyone can afford.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-10">
            <div className="flex">
              <svg
                className="flex-shrink-0 mt-1 size-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base font-semibold text-gray-800 sm:text-lg dark:text-neutral-200">
                  Quality Products
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  We carefully curate every item in our store to ensure they
                  meet our high standards.
                </p>
              </div>
            </div>

            <div className="flex">
              <svg
                className="flex-shrink-0 mt-1 size-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base font-semibold text-gray-800 sm:text-lg dark:text-neutral-200">
                  Fast Shipping
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Most orders ship within 24 hours and arrive at your doorstep
                  in 2-3 business days.
                </p>
              </div>
            </div>

            <div className="flex">
              <svg
                className="flex-shrink-0 mt-1 size-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base font-semibold text-gray-800 sm:text-lg dark:text-neutral-200">
                  Customer Satisfaction
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Our 30-day return policy ensures you're completely happy with
                  your purchase.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
              Meet Our Team
            </h2>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              The passionate people behind Next Store
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Sarah Williams",
                role: "Head of Operations",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Michael Chen",
                role: "Marketing Director",
                image: "https://randomuser.me/api/portraits/men/75.jpg",
              },
              {
                name: "Emily Davis",
                role: "Customer Support",
                image: "https://randomuser.me/api/portraits/women/68.jpg",
              },
            ].map((person, index) => (
              <div key={index} className="text-center">
                <img
                  className="rounded-full size-20 lg:size-24 mx-auto"
                  src={person.image}
                  alt={`${person.name} headshot`}
                />
                <div className="mt-3">
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">
                    {person.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
