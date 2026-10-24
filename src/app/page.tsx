import { Hero } from "@/components/home/Hero";
import { FeaturedCollection } from "@/components/home/FeaturedCollection";
import { EditorialStory } from "@/components/home/EditorialStory";
import { EveningEdit } from "@/components/home/EveningEdit";
import { BrandPhilosophy } from "@/components/home/BrandPhilosophy";
import { EditorialGrid } from "@/components/home/EditorialGrid";
import { SignatureProduct } from "@/components/home/SignatureProduct";
import { Press } from "@/components/home/Press";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <EditorialStory />
      <EveningEdit />
      <BrandPhilosophy />
      <EditorialGrid />
      <SignatureProduct />
      <Press />
    </>
  );
}
