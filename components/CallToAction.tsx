export default function CallToAction() {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--neutral-900)] sm:text-4xl">
          Interested in Partnering With Us?
        </h2>
        <p className="mt-4 text-lg text-[var(--neutral-600)]">
          Contact us today to learn more about our products and how we can meet
          your cashew sourcing needs.
        </p>
        <div className="mt-8 flex justify-center">
          <button className="flex h-12 items-center justify-center rounded-md bg-[var(--primary-500)] px-8 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[var(--primary-600)]">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
