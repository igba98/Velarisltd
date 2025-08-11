export default function Features() {
  const features = [
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 13l4 4L19 7"></path>
        </svg>
      ),
      title: "Superior Quality",
      description:
        "Our cashews are sourced from the best farms and undergo rigorous quality checks.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a3.001 3.001 0 015.688 0M12 14a4 4 0 100-8 4 4 0 000 8z"></path>
        </svg>
      ),
      title: "Farmer Empowerment",
      description:
        "We empower local communities by ensuring fair prices and sustainable partnerships.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "Reliable Supply Chain",
      description:
        "Our robust logistics network ensures timely delivery to our clients worldwide.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold uppercase tracking-wider text-[var(--primary-500)]">
            Why Choose Us
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--neutral-900)] sm:text-4xl">
            Exceptional Quality and Service
          </h2>
          <p className="mt-4 text-lg text-[var(--neutral-600)]">
            We are dedicated to providing our clients with the best products and
            a seamless sourcing experience.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-100)] text-[var(--primary-600)]">
                {feature.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[var(--neutral-900)]">
                {feature.title}
              </h3>
              <p className="mt-2 text-base text-[var(--neutral-600)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
