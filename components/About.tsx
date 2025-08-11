import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="text-center lg:text-left">
            <p className="text-base font-semibold uppercase tracking-wider text-[var(--primary-500)]">
              Who We Are
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--neutral-900)] sm:text-4xl">
              Your Trusted Partner in Cashew Sourcing
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--neutral-600)]">
              Velaris is a premier cashew nut sourcing company based in
              Tanzania. We are dedicated to delivering high-quality, ethically
              sourced cashews to the global market. Our mission is to bridge the
              gap between local Tanzanian farmers and international buyers,
              ensuring fair trade practices and promoting sustainable
              agriculture. We pride ourselves on our commitment to quality,
              reliability, and customer satisfaction.
            </p>
            <div className="mt-8 flex justify-center gap-4 lg:justify-start">
              <div className="text-center">
                <p className="text-4xl font-bold text-[var(--primary-500)]">
                  100+
                </p>
                <p className="text-sm font-medium text-[var(--neutral-600)]">
                  Farmers
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[var(--primary-500)]">
                  2000+
                </p>
                <p className="text-sm font-medium text-[var(--neutral-600)]">
                  Metric Tons
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[var(--primary-500)]">
                  10+
                </p>
                <p className="text-sm font-medium text-[var(--neutral-600)]">
                  Countries
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              alt="Cashew processing"
              className="rounded-lg object-cover shadow-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg050XAdrM63h6dijrrAWyQgW9EOEib5b9hqEajBjEQjkit6YTaDftKttJWo11S9gnlCxR3QNJXfV5olnp05qExu9T5BlQK7QbT2cjM0Wg3rhWCrg7mLhKgtz5zErH6Osq25v7P0Z2OVKDvUr4ayvlXRcU5y4bMOy-L0HxJ9ngNczWnGHZoMlFozIuLEoMgUA9gihKMYHvIXoLhVx1cCFKockz7dfw-BkeZNEyOhY7imN3tKs0mTIugCvRV8FTiXsxWZdiboba08ZM"
              width={400}
              height={300}
            />
            <Image
              alt="Cashew farmers"
              className="mt-8 rounded-lg object-cover shadow-lg"
              src="/landingimages/cashew-cashew-cashew-anacardium-occidentale-is-type-plant-from-anacardiaceae-family.jpg"
              width={400}
              height={300}
            />
           
          </div>
        </div>
      </div>
    </section>
  );
}
