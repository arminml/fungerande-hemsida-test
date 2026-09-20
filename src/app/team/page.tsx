import Image from "next/image";
import { teamIntroImage, teamMembers } from "@/data/team";
import { TeamMemberBlock } from "@/components/team/TeamMemberBlock";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "Vårt team",
  description: "Personerna bakom RAINÉE UF — ungdomarna från Kitas Gymnasium i Göteborg.",
};

export default function TeamPage() {
  return (
    <>
      <section className="page-pad mx-auto max-w-site pb-8 pt-16 md:pt-20">
        <Reveal>
          <p className="label">RAINÉE UF / Göteborg</p>
          <h1 className="mt-4 font-serif text-[clamp(2.6rem,6vw,5.4rem)] font-normal leading-[0.95]">
            Vårt <em className="italic">team</em>
          </h1>
          <p className="mt-8 max-w-[38rem] text-[15px] leading-[1.8] text-mute">
            Vi är sex ungdomar från Kitas Gymnasium i Göteborg som tillsammans driver RAINÉE UF. Men
            vilka är egentligen personerna bakom RAINÉE? Här kommer en kort presentation av oss.
          </p>
        </Reveal>
      </section>

      <section className="page-pad mx-auto max-w-site pb-8">
        <Reveal className="relative aspect-[16/9] overflow-hidden bg-stone md:aspect-[21/9]">
          <Image
            src={teamIntroImage.src}
            alt={teamIntroImage.alt}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>
      </section>

      <section className="page-pad mx-auto max-w-site">
        {teamMembers.map((member, index) => (
          <TeamMemberBlock key={member.slug} member={member} imageOnRight={index % 2 === 1} />
        ))}
      </section>

      <section className="page-pad mx-auto max-w-site py-24 md:py-32">
        <Reveal>
          <div className="gold-rule" />
          <p className="mt-8 font-serif text-3xl text-espresso md:text-4xl">
            Personerna bakom RAINÉE UF.
          </p>
        </Reveal>
      </section>
    </>
  );
}
