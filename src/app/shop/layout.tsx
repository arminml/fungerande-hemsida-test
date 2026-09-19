import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description: "The RAINÉE collection of evening clutches.",
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return children;
}
