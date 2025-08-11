import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Velaris Cashew",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl space-y-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-start">
          <div className="space-y-8">
            <div className="text-left">
              <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                Contact Us
              </h1>
              <p className="mt-4 text-lg text-[var(--text-secondary)]">
                We're here to help and answer any questions you might have. We
                look forward to hearing from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6 text-[var(--primary-700)]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    Our Address
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    123 Cashew Road, Dar es Salaam, Tanzania
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6 text-[var(--primary-700)]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    Email Us
                  </h3>
                  <a
                    className="text-[var(--primary-700)] hover:opacity-80"
                    href="mailto:info@velariscashew.co.tz"
                  >
                    info@velariscashew.co.tz
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[var(--primary-700)]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.213-.992-.55-1.33l-2.163-2.163a1.125 1.125 0 00-1.59 0l-1.126 1.126a11.25 11.25 0 01-5.042-5.042l1.126-1.126a1.125 1.125 0 000-1.59L5.582 3.84a1.125 1.125 0 00-1.33-.55H2.872a2.25 2.25 0 00-2.25 2.25v.375z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    Call Us
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    +255 123 456 789
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:p-10">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  autoComplete="name"
                  className="w-full rounded-md border-[var(--neutral-300)] bg-white px-4 py-3 text-base text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:border-[var(--primary-600)] focus:ring-[var(--primary-600)]"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  autoComplete="email"
                  className="w-full rounded-md border-[var(--neutral-300)] bg-white px-4 py-3 text-base text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:border-[var(--primary-600)] focus:ring-[var(--primary-600)]"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="w-full rounded-md border-[var(--neutral-300)] bg-white px-4 py-3 text-base text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:border-[var(--primary-600)] focus:ring-[var(--primary-600)]"
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full rounded-md border-[var(--neutral-300)] bg-white px-4 py-3 text-base text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:border-[var(--primary-600)] focus:ring-[var(--primary-600)]"
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  rows={5}
                />
              </div>
              <div>
                <button
                  className="flex w-full justify-center rounded-md border border-transparent bg-[var(--primary-500)] py-3 px-4 text-base font-semibold text-white shadow-sm hover:bg-[var(--primary-600)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-offset-2 focus:ring-offset-white transition-colors"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
