import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "../components/ErrorBoundary";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Velaris Company Ltd - Premium Tanzanian Cashew Exports",
  description: "Tanzanian-owned agro export company delivering high-quality cashew nuts to local and global markets. Direct sourcing from Mtwara farmers with sustainable practices.",
  keywords: "Tanzanian cashews, cashew nuts export, raw cashew nuts, processed cashew kernels, Mtwara cashews, sustainable agriculture Tanzania",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} font-sans antialiased bg-white text-gray-900`}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
