import ClientOnly from '../components/ClientOnly';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-900 text-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mr-3">
                <span className="text-xl font-urbanist-extrabold">V</span>
              </div>
              <h1 className="text-2xl font-urbanist-bold">Velaris Ltd</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-green-300 font-urbanist-medium transition-colors border-b-2 border-green-300">HOME</a>
              <a href="#services" className="text-white hover:text-green-300 font-urbanist-medium transition-colors">OUR SERVICES</a>
              <a href="#products" className="text-white hover:text-green-300 font-urbanist-medium transition-colors">OUR PRODUCTS</a>
              <a href="#about" className="text-white hover:text-green-300 font-urbanist-medium transition-colors">ABOUT US</a>
            </nav>
            <div className="hidden md:block">
              <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-md font-urbanist-semibold transition-colors">
                GET A FREE QUOTE
              </button>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-white hover:text-green-300">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="h-screen bg-green-800 text-white bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1609501676725-7186f4dca16c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
          <div className="bg-black bg-opacity-60 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-urbanist-extrabold leading-tight">
                  Premium Raw & Processed Cashew Nuts from Tanzania
                </h1>
                <p className="mt-6 text-xl font-urbanist-light max-w-3xl mx-auto leading-relaxed">
                  Sustainably sourced and delivered straight from our partner farms and factories to your business, wherever you are in the world.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                  <button className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-md text-lg font-urbanist-semibold transition-colors">
                    Request a Quote
                  </button>
                  <button className="bg-white text-green-700 px-8 py-3 rounded-md text-lg font-urbanist-semibold hover:bg-gray-200 transition-colors">
                    Our Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-urbanist-bold text-green-900">OUR SERVICES</h2>
              <p className="mt-4 text-lg font-urbanist-normal text-gray-600 max-w-2xl mx-auto">
                We are your trusted partner for high-quality Tanzanian cashews, from sourcing to delivery.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-8 bg-gray-50 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Export" className="w-10 h-10 rounded-full object-cover" />
                </div>
                <h3 className="text-xl font-urbanist-semibold text-green-900">Cashew Nuts Exporter</h3>
                <p className="mt-2 text-gray-700 font-urbanist-normal">
                  We export Tanzania's finest raw and processed cashew nuts to global markets, including Asia, the Middle East, Europe, and the USA.
                </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1609501676725-7186f4dca16c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Sourcing" className="w-10 h-10 rounded-full object-cover" />
                </div>
                <h3 className="text-xl font-urbanist-semibold text-green-900">Cashew Sourcing Agent</h3>
                <p className="mt-2 text-gray-700 font-urbanist-normal">
                  As your sourcing partner, we connect you with top farms and factories for the best cashews at competitive prices.
                </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1594262135132-4318d1f144de?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Supply" className="w-10 h-10 rounded-full object-cover" />
                </div>
                <h3 className="text-xl font-urbanist-semibold text-green-900">Cashew Nuts Supplier</h3>
                <p className="mt-2 text-gray-700 font-urbanist-normal">
                  We provide a reliable and consistent supply of high-quality cashews sourced from our trusted network of farmers and factories.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-urbanist-bold text-green-900">OUR PRODUCTS</h2>
              <p className="mt-4 text-lg font-urbanist-normal text-gray-600 max-w-3xl mx-auto">
                From tree to trade, quality you can taste. Whether you need bulk raw nuts or clean, crunchy kernels, we have the right nut for your business.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://images.unsplash.com/photo-1609501676725-7186f4dca16c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Processed Cashew Nuts" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-urbanist-semibold text-green-900">Processed Cashew Nuts (Kernels)</h3>
                  <p className="mt-2 text-gray-700 font-urbanist-normal">
                    Premium-grade cashew kernels, carefully processed and ready for consumption. Available in various grades (W180, W240, W320).
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Unpeeled Cashew Kernels" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-urbanist-semibold text-green-900">Unpeeled Cashew Nut Kernels</h3>
                  <p className="mt-2 text-gray-700 font-urbanist-normal">
                    High-quality kernels with their natural skin intact, offering an authentic touch for businesses that value flexibility in preparation.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://images.unsplash.com/photo-1594262135132-4318d1f144de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Raw Cashew Nuts" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-urbanist-semibold text-green-900">Raw Cashew Nuts (Shelled)</h3>
                  <p className="mt-2 text-gray-700 font-urbanist-normal">
                    Fresh, raw cashew nuts in their shells, sourced directly from Tanzanian farms. Perfect for factories and processors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-urbanist-bold text-green-900">WHO ARE WE?</h2>
                <h3 className="mt-2 text-2xl font-urbanist-semibold text-green-700">Velaris Ltd</h3>
                <p className="mt-4 text-lg font-urbanist-normal text-gray-600">
                  Welcome to Velaris Ltd, where we turn cashews into smiles! We don't just export nuts; we export the stories of the farmers, families, and factories who come together to deliver the finest cashews to the global market.
                </p>
                <p className="mt-4 text-lg font-urbanist-normal text-gray-600">
                  With over 10 partner factories and a network of thousands of empowered farmers, we are committed to quality, sustainability, and positive social impact.
                </p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1606914469487-62d4e91e4ba8?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Tanzanian farmers working" className="w-full h-96 object-cover rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="py-20 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-urbanist-bold text-green-900">Why Choose Us?</h2>
              <p className="mt-4 text-lg font-urbanist-normal text-gray-600 max-w-3xl mx-auto">
                Cracking great deals starts with choosing the right partner. Here’s why businesses across the globe choose Velaris Ltd.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-urbanist-semibold text-green-900">Access to 10+ Certified Factories</h3>
                <p className="mt-2 text-gray-700 font-urbanist-normal">
                  We work with over 10 certified factories in Tanzania, ensuring a steady, high-quality supply of cashews.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-urbanist-semibold text-green-900">Competitive Pricing</h3>
                <p className="mt-2 text-gray-700 font-urbanist-normal">
                  Our direct factory connections and efficient supply chain allow us to offer competitive prices without compromising on quality.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-urbanist-semibold text-green-900">Global Reach, Seamless Delivery</h3>
                <p className="mt-2 text-gray-700 font-urbanist-normal">
                  We supply to top markets, including Asia, the Middle East, Europe, and the USA, with reliable shipping.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-urbanist-semibold text-green-900">Uncompromised Quality Assurance</h3>
                <p className="mt-2 text-gray-700 font-urbanist-normal">
                  Every batch of our cashews undergoes strict quality control and meets international food safety standards.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-urbanist-semibold text-green-900">Flexible & Customized Solutions</h3>
                <p className="mt-2 text-gray-700 font-urbanist-normal">
                  We offer tailored solutions, including bulk supply and private-label packaging, to meet your unique needs.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-urbanist-semibold text-green-900">Sustainable & Ethical Sourcing</h3>
                <p className="mt-2 text-gray-700 font-urbanist-normal">
                  We are committed to empowering local communities by ensuring fair prices and promoting sustainable farming practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-urbanist-bold text-green-900">What Our Customers Say</h2>
              <p className="mt-4 text-lg font-urbanist-normal text-gray-600 max-w-2xl mx-auto">
                Trusted by global buyers who count on us for our quality, consistency, and reliability.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <p className="text-gray-700 font-urbanist-normal">
                  “What impressed us most was their flexibility. They handled our bulk shipment with great care, and the cashew quality was top-notch. We’ll be placing more orders soon.”
                </p>
                <p className="mt-4 font-urbanist-semibold text-green-900">Fatima A. – Sourcing Director, Dubai</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <p className="text-gray-700 font-urbanist-normal">
                  “I’ve worked with a few suppliers before, but none as consistent as Velaris Ltd. Their communication and the quality of their kernels were excellent.”
                </p>
                <p className="mt-4 font-urbanist-semibold text-green-900">Ahmed M. – Import Manager, Cairo</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <p className="text-gray-700 font-urbanist-normal">
                  “We love that they work with local farmers and prioritize sustainability. The pricing and delivery timelines were exactly as promised. A win-win partnership!”
                </p>
                <p className="mt-4 font-urbanist-semibold text-green-900">Thabo D. – Owner, South Africa</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-green-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-urbanist-bold">Ready to Import Tanzania’s Best Cashew Nuts?</h2>
            <p className="mt-4 text-lg font-urbanist-light max-w-3xl mx-auto">
              Get in touch today! Whether you’re sourcing organic raw cashews, premium kernels, or bulk processed nuts, we have the right supply at the right price, delivered on time, every time.
            </p>
            <div className="mt-8">
              <button className="bg-white text-green-700 px-8 py-3 rounded-md text-lg font-urbanist-semibold hover:bg-gray-200 transition-colors">
                GET A FREE QUOTE
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h4 className="text-2xl font-urbanist-bold mb-4">Velaris Ltd</h4>
            <p className="text-gray-400 mb-6 font-urbanist-normal">Premium Tanzanian cashew nuts you can trust</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white font-urbanist-medium transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white font-urbanist-medium transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white font-urbanist-medium transition-colors">Contact Us</a>
            </div>
            <ClientOnly fallback={
              <p className="mt-8 text-gray-400 text-sm font-urbanist-light">
                © 2025 Velaris Ltd. All rights reserved.
              </p>
            }>
              <p className="mt-8 text-gray-400 text-sm font-urbanist-light">
                © {new Date().getFullYear()} Velaris Ltd. All rights reserved.
              </p>
            </ClientOnly>
          </div>
        </div>
      </footer>
    </div>
  );
}
