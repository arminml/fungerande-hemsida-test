import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Butik",
  description: "RAINÉES kollektion av kuvertväskor för kvällen.",
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return children;
}
