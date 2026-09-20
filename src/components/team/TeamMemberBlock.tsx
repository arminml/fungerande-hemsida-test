import Image from "next/image";
import { type TeamMember } from "@/data/team";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function TeamMemberBlock({
  member,
  imageOnRight = false,
}: {
  member: TeamMember;
  imageOnRight?: boolean;
}) {
  return (
    <article className="grid items-center gap-8 border-t border-line py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
      <Reveal
        className={cn(
          "relative aspect-[3/4] overflow-hidden bg-stone lg:col-span-6",
          imageOnRight && "lg:order-2 lg:col-start-7",
        )}
      >
        <Image
          src={member.image}
          alt={member.imageAlt}
          fill
          quality={90}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
        />
      </Reveal>
      <Reveal
        delay={0.08}
        className={cn("lg:col-span-5", imageOnRight ? "lg:order-1 lg:col-start-1" : "lg:col-start-8")}
      >
        <p className="text-[11px] uppercase tracking-label text-gold">{member.editorialLabel}</p>
        <h2 className="mt-4 font-serif text-4xl font-normal leading-[0.95] md:text-5xl">
          {member.displayName}
          <br />
          <span className="italic">{member.lastName}</span>
        </h2>
        <p className="mt-4 text-[11px] uppercase tracking-label text-espresso">{member.role}</p>
        <p className="mt-6 max-w-[38rem] text-[15px] leading-[1.8] text-mute">{member.bio}</p>
      </Reveal>
    </article>
  );
}
