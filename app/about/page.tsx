import React from "react";

const AboutVelaris = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col overflow-x-hidden bg-white text-[var(--text-primary)]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <main className="flex-1">
        <section className="relative h-[50vh] min-h-[300px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAznAJpULoV3J-IF1T4yGRr9hPizkUEhUcx4oVL4sUPiGiGwAKhVQ2evSf1EIhNjBX1t1YyrobJ9yFqmbQ9Qps8lgfv4X2LEdACaphCzNXc-3_rLhnSggLekyx2I1ocZECVXMEobBC5AejWgUJSagQzxNmD7Yo2mtZ9wOIWuIWONVEQACFuLAGpiHZgutqB-Laj05b1H0gE5GpPVu1cy4XQwCx47Cn-zLjgjcMbdvFvpSdu7Ozf-lvrLuO_wEl9hDUsmh_XVyLteHdg")',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="relative flex h-full items-end justify-start p-8 md:p-12 lg:p-16">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              About Velaris
            </h1>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[var(--dark-green)] sm:text-4xl">
                  Our Story
                </h2>
                <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
                  Velaris was founded in 2010 by a group of Tanzanian farmers
                  with a shared vision: to bring the finest quality cashews from
                  our farms to the world. We are committed to sustainable
                  farming practices, ethical sourcing, and empowering local
                  communities. Our journey began with a small cooperative and
                  has grown into a leading cashew producer, known for our
                  exceptional quality and dedication to excellence.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[var(--dark-green)] sm:text-4xl">
                  Our Mission
                </h2>
                <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
                  Our mission is to provide customers with the freshest, most
                  delicious cashews while supporting the livelihoods of
                  Tanzanian farmers. We strive to create a positive impact on
                  our community and the environment through responsible farming
                  and processing practices. We believe in transparency,
                  fairness, and building long-term relationships with our
                  partners and customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--light-green)] py-16 sm:py-24">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-[var(--dark-green)] sm:text-4xl">
              Our Core Values
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <CoreValueCard
                title="Sustainability"
                description="We are dedicated to environmentally friendly farming methods that protect our land and resources for future generations."
                svgPath="M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z"
              />
              <CoreValueCard
                title="Community"
                description="We believe in empowering local farmers and communities through fair wages, training, and support."
                svgPath="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"
              />
              <CoreValueCard
                title="Quality"
                description="We are committed to delivering the highest quality cashews, from our farms to your table."
                svgPath="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"
              />
            </div>
          </div>
        </section>

        <section className="bg-[var(--dark-green)] py-16 text-white sm:py-24">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Our Impact
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
              <ImpactMetric number="500+" description="Farmers Supported" />
              <ImpactMetric number="1,000+" description="Hectares of Land" />
              <ImpactMetric number="20+" description="Community Projects" />
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--dark-green)] sm:text-4xl">
              Join Our Journey
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              Have questions or want to learn more about our commitment to
              quality and community? We'd love to hear from you.
            </p>
            <div className="mt-10">
              <button className="flex min-w-[150px] mx-auto items-center justify-center rounded-full bg-[var(--primary-green)] px-8 py-3 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105">
                <span>Get in Touch</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

interface CoreValueCardProps {
  title: string;
  description: string;
  svgPath: string;
}

const CoreValueCard = ({ title, description, svgPath }: CoreValueCardProps) => (
  <div className="rounded-xl bg-white p-8 text-center shadow-lg transition-transform hover:scale-105">
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary-green)] text-white">
      <svg
        fill="currentColor"
        height="32"
        viewBox="0 0 256 256"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={svgPath}></path>
      </svg>
    </div>
    <h3 className="mt-6 text-xl font-bold text-[var(--dark-green)]">{title}</h3>
    <p className="mt-2 text-base text-[var(--text-secondary)]">{description}</p>
  </div>
);

interface ImpactMetricProps {
  number: string;
  description: string;
}

const ImpactMetric = ({ number, description }: ImpactMetricProps) => (
  <div>
    <p className="text-5xl font-extrabold text-[var(--primary-green)]">
      {number}
    </p>
    <p className="mt-2 text-lg font-medium">{description}</p>
  </div>
);

export default AboutVelaris;
