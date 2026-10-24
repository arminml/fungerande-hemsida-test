"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, User, X } from "lucide-react";
import { useCart } from "@/components/providers/CartProvider";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function HeaderShell({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-line/80 bg-ivory/92 backdrop-blur-[8px] transition-[height] duration-300",
        scrolled ? "h-[64px]" : "h-[78px]",
      )}
    >
      {children}
    </header>
  );
}

export function HeaderNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      data-active={pathname === href ? "true" : "false"}
      className="nav-underline shrink-0 text-[11px] uppercase tracking-nav text-espresso focus-ring"
    >
      {children}
    </Link>
  );
}

export function MobileNav({
  items,
}: {
  items: readonly { href: string; label: string }[];
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-start focus-ring lg:hidden"
        aria-label="Öppna meny"
        onClick={() => setMenuOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </button>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="left" className="bg-ivory">
          <SheetHeader className="flex flex-row items-center justify-between">
            <SheetTitle>Meny</SheetTitle>
            <SheetClose className="focus-ring" aria-label="Stäng meny">
              <X className="h-4 w-4" />
            </SheetClose>
          </SheetHeader>
          <nav className="flex flex-col gap-7 px-6 py-10" aria-label="Mobilmeny">
            {[...items, { href: "/shop", label: "Kollektionen" }].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-serif text-3xl text-espresso"
              >
                {item.label}
              </Link>
            ))}
            <p className="label mt-8">RAINÉE / Göteborg edit</p>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}

export function HeaderActions() {
  const { setSearchOpen } = useCart();

  return (
    <div className="flex items-center justify-end gap-1 sm:gap-2">
      <button
        type="button"
        className="hidden items-center gap-2 px-2 py-2 text-[11px] uppercase tracking-nav focus-ring sm:inline-flex"
        onClick={() => setSearchOpen(true)}
      >
        <Search className="h-4 w-4" aria-hidden />
        <span className="hidden lg:inline">Sök</span>
      </button>
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center focus-ring sm:hidden"
        aria-label="Sök"
        onClick={() => setSearchOpen(true)}
      >
        <Search className="h-4 w-4" />
      </button>
      <Link
        href="/our-story"
        className="hidden h-10 w-10 items-center justify-center focus-ring lg:inline-flex"
        aria-label="Konto"
      >
        <User className="h-4 w-4" />
      </Link>
    </div>
  );
}
