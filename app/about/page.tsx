export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-urbanist-extrabold text-green-900 mb-8">About Us</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-urbanist-bold text-green-800 mb-4">Who We Are</h2>
          <p className="text-gray-700 font-urbanist-normal mb-4">
            Velaris Ltd is a leading exporter and supplier of premium Tanzanian cashew nuts. We are committed to quality, sustainability, and empowering local farming communities.
          </p>
          <p className="text-gray-700 font-urbanist-normal">
            With over 10 partner factories and a network of thousands of empowered farmers, Velaris Ltd has built a reputation for excellence in sourcing, processing, and delivering the finest cashew products to the global market.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1606914469487-62d4e91e4ba8?q=80&w=720&auto=format&fit=crop"
            alt="Tanzanian farmers working"
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>
      </section>
    </main>
  );
}
