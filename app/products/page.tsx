export default function Products() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-urbanist-extrabold text-green-900 mb-8">Our Products</h1>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1609501676725-7186f4dca16c?q=80&w=720&auto=format&fit=crop"
            alt="Processed Cashew Nuts"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-urbanist-semibold text-green-900">
              Processed Cashew Nuts (Kernels)
            </h2>
            <p className="mt-2 text-gray-700 font-urbanist-normal">
              Premium-grade cashew kernels, carefully processed and ready for consumption. Available in various grades (W180, W240, W320).
            </p>
          </div>
        </article>

        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=720&auto=format&fit=crop"
            alt="Unpeeled Cashew Kernels"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-urbanist-semibold text-green-900">
              Unpeeled Cashew Nut Kernels
            </h2>
            <p className="mt-2 text-gray-700 font-urbanist-normal">
              High-quality kernels with their natural skin intact, offering an authentic touch for businesses that value flexibility in preparation.
            </p>
          </div>
        </article>

        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1594262135132-4318d1f144de?q=80&w=720&auto=format&fit=crop"
            alt="Raw Cashew Nuts"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-urbanist-semibold text-green-900">
              Raw Cashew Nuts (Shelled)
            </h2>
            <p className="mt-2 text-gray-700 font-urbanist-normal">
              Fresh, raw cashew nuts in their shells, sourced directly from Tanzanian farms. Perfect for factories and processors.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
