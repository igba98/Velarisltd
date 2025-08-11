"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type HeroProps = {
  images: string[];
  intervalMs?: number;
};

export default function Hero({ images, intervalMs = 5000 }: HeroProps) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeImages.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % safeImages.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [safeImages.length, intervalMs]);

  return (
    <section className="relative h-[700px] w-full overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        {safeImages.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
            style={{
              backgroundImage: `url(${src})`,
              opacity: i === index ? 1 : 0,
            }}
            aria-hidden={i !== index}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-start justify-center text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Premium Tanzanian Cashews for the World
            </h1>
            <p className="mt-4 text-lg text-white/90 sm:text-xl">
              Velaris brings you the finest cashews, ethically sourced and
              processed to perfection, connecting local farmers to the global
              market.
            </p>
            <div className="flex gap-4">
            <Link
              href="/about"
              className="mt-8 flex w-fit h-12 items-center justify-center rounded-md bg-[var(--primary-500)] px-8 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[var(--primary-600)]"
            >
              Learn More
            </Link>
            <Link
              href="/about"
              className="mt-8 flex w-fit h-12 items-center justify-center rounded-md border-2 border-[var(--primary-500)] px-8 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[var(--primary-600)]"
            >
              Our Products
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
