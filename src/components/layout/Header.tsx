import Link from "next/link";
import { mainNav } from "@/data/navigation";
import { HeaderActions, HeaderNavLink, HeaderShell, MobileNav } from "@/components/layout/HeaderClient";

export function Header() {
  return (
    <HeaderShell>
      <div className="page-pad mx-auto grid h-full max-w-site grid-cols-3 items-center">
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Huvudmeny">
          {mainNav.map((item) => (
            <HeaderNavLink key={item.href} href={item.href}>
              {item.label}
            </HeaderNavLink>
          ))}
        </nav>

        <MobileNav items={mainNav} />

        <Link
          href="/"
          className="justify-self-center font-serif text-[26px] tracking-[0.28em] text-espresso focus-ring sm:text-[28px]"
          aria-label="RAINÉE startsida"
        >
          RAINÉE
        </Link>

        <HeaderActions />
      </div>
    </HeaderShell>
  );
}
