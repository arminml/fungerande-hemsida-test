import { Cormorant_Garamond, Manrope } from "next/font/google";
import type { Metadata } from "next";
import { CartProvider } from "@/components/providers/CartProvider";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/commerce/CartDrawer";
import { SearchOverlay } from "@/components/commerce/SearchOverlay";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RAINÉE — Kuvertväskor för kvällen",
    template: "%s — RAINÉE",
  },
  description:
    "Tidlösa kuvertväskor skapade för kvällar, firanden och allt däremellan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-ivory font-sans text-espresso antialiased">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <SearchOverlay />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
