import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Butik",
  description: "Upptäck RAINÉE UF:s kollektion av eleganta, vattenavvisande skydd för handväskor.",
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return children;
}
