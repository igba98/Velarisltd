export default function Services() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-urbanist-extrabold text-green-900 mb-8">Our Services</h1>
      <section className="space-y-12">
        <article>
          <h2 className="text-2xl font-urbanist-bold text-green-800 mb-4">Cashew Nuts Exporter</h2>
          <p className="text-gray-700 font-urbanist-normal mb-4">
            We export Tanzania's finest raw and processed cashew nuts to global markets including Asia, the Middle East, Europe, and the USA.
          </p>
          <img
            src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1280&auto=format&fit=crop"
            alt="Cashew Nuts Export"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </article>

        <article>
          <h2 className="text-2xl font-urbanist-bold text-green-800 mb-4">Cashew Sourcing Agent</h2>
          <p className="text-gray-700 font-urbanist-normal mb-4">
            As your sourcing partner, we connect you with top farms and factories for the best cashews at competitive prices.
          </p>
          <img
            src="https://images.unsplash.com/photo-1609501676725-7186f4dca16c?q=80&w=1280&auto=format&fit=crop"
            alt="Cashew Sourcing"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </article>

        <article>
          <h2 className="text-2xl font-urbanist-bold text-green-800 mb-4">Cashew Nuts Supplier</h2>
          <p className="text-gray-700 font-urbanist-normal mb-4">
            We provide a reliable and consistent supply of high-quality cashews sourced from our trusted network of farmers and factories.
          </p>
          <img
            src="https://images.unsplash.com/photo-1594262135132-4318d1f144de?q=80&w=1280&auto=format&fit=crop"
            alt="Cashew Nuts Supply"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </article>
      </section>
    </main>
  );
}

