export default function ContactPage() {
  return (
    <main className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden dark:bg-gray-800">
        <div className="max-w-[85rem] mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              Contact Us
            </h1>
            <p className="mt-3 text-gray-600 dark:text-neutral-400">
              We'd love to hear from you! Reach out anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl lg:max-w-5xl mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
                Get in touch
              </h2>
              <p className="text-gray-600 dark:text-neutral-400">
                Have questions about our products or need support? Fill out the
                form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-4">
                <div className="flex gap-x-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                    <svg
                      className="flex-shrink-0 size-5 text-gray-600 dark:text-neutral-400"
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
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 dark:text-gray-200">
                      Call us
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                    <svg
                      className="flex-shrink-0 size-5 text-gray-600 dark:text-neutral-400"
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
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 dark:text-gray-200">
                      Email us
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                      support@nextstore.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                    <svg
                      className="flex-shrink-0 size-5 text-gray-600 dark:text-neutral-400"
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
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 dark:text-gray-200">
                      Visit us
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                      123 Commerce St, San Francisco, CA 94108
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {/* Map Section */}
              <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.575279754003!2d-122.41941592402591!3d37.77492997188368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1711234567890!5m2!1sen!2s"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
