"use client";
import Link from "next/link";
import Image from "next/image";
import { useQuoteModal } from "./quote/QuoteModalContext";
import { usePathname } from "next/navigation";

export default function Header() {
  const { open } = useQuoteModal();
  const pathname = usePathname();
  const base = "text-sm font-medium transition-colors";
  const inactive = "text-[var(--neutral-600)] hover:text-[var(--primary-500)]";
  const active =
    "text-[var(--primary-700)] border-b-2 border-[var(--primary-500)] pb-1";
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-[var(--neutral-950)]"
        >
          <Image
            alt="Velaris Logo"
            className="h-12 w-auto"
            src="/logo-vel.png"
            width={52}
            height={52}
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={`${base} ${pathname === "/" ? active : inactive}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
            className={`${base} ${pathname === "/about" ? active : inactive}`}
          >
            About Us
          </Link>
          <Link
            href="/products"
            aria-current={pathname === "/products" ? "page" : undefined}
            className={`${base} ${
              pathname === "/products" ? active : inactive
            }`}
          >
            Products
          </Link>
          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            className={`${base} ${pathname === "/contact" ? active : inactive}`}
          >
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={open}
            className="flex h-10 items-center justify-center rounded-md bg-[var(--primary-500)] px-6 text-sm font-bold text-white shadow-md transition-all hover:bg-[var(--primary-600)] hover:shadow-lg"
          >
            <span>Get a Quote</span>
          </button>
        </div>
      </div>
    </header>
  );
}
