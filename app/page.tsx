import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import Commitment from "../components/Commitment";
import CallToAction from "../components/CallToAction";
import Products from "../components/Products";
import fs from "node:fs";
import path from "node:path";

export default function Home() {
  const landingImagesDir = path.join(process.cwd(), "public", "landingimages");
  let images: string[] = [];
  try {
    const files = fs.readdirSync(landingImagesDir);
    images = files
      .filter((f) => /\.(png|jpe?g|webp|avif)$/i.test(f))
      .map((f) => `/landingimages/${f}`);
  } catch {
    images = [];
  }
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <main className="flex-1">
        <Hero images={images} />
        <About />
        <Features />
        <Products />
        <Partners />
        <Testimonials />
        <Commitment />
        <CallToAction />
      </main>
    </div>
  );
}
