export default function Commitment() {
  const commitments = [
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
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ),
      title: "Direct Sourcing",
      description:
        "We work directly with local farmers in Tanzania to source the freshest, highest-quality cashews.",
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
      title: "Quality Assurance",
      description:
        "Our rigorous quality control processes ensure that every batch of cashews meets international standards.",
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
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6a2 2 0 100-4 2 2 0 000 4zm0 12a2 2 0 100 4 2 2 0 000-4z"></path>
        </svg>
      ),
      title: "Ethical Practices",
      description:
        "We are dedicated to fair trade, ensuring farmers receive fair compensation for their hard work.",
    },
  ];

  return (
    <section className="bg-[var(--primary-50)] py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--primary-900)] sm:text-4xl">
            Our Commitment to Quality and Sustainability
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--primary-800)]">
            We are committed to sustainable practices that benefit our farmers,
            the environment, and our customers. Our direct sourcing model
            ensures fair prices for farmers and full traceability for our
            clients.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {commitments.map((commitment, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-500)] text-white">
                {commitment.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[var(--primary-900)]">
                {commitment.title}
              </h3>
              <p className="mt-2 text-base text-[var(--primary-700)]">
                {commitment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
