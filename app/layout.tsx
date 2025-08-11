import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "../components/ErrorBoundary";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { QuoteModalProvider } from "../components/quote/QuoteModalContext";
import QuoteModal from "../components/quote/QuoteModal";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Velaris - Premium Tanzanian Cashews for the World",
  description:
    "Velaris brings you the finest cashews, ethically sourced and processed to perfection, connecting local farmers to the global market.",
  keywords:
    "Tanzanian cashews, cashew nuts export, raw cashew nuts, processed cashew kernels, Mtwara cashews, sustainable agriculture Tanzania, premium cashews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} font-sans antialiased`}>
        <ErrorBoundary>
          <QuoteModalProvider>
            <Header />
            {children}
            <Footer />
            <QuoteModal />
          </QuoteModalProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
