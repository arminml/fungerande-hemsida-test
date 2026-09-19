"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useCart } from "@/components/providers/CartProvider";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const leftNav = [
  { href: "/shop", label: "Shop" },
  { href: "/collections/evening", label: "Collections" },
  { href: "/our-story", label: "Our Story" },
];

export function Header() {
  const pathname = usePathname();
  const { count, setCartOpen, setSearchOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-line/80 bg-ivory/92 backdrop-blur-[8px] transition-[height] duration-300",
        scrolled ? "h-[64px]" : "h-[78px]",
      )}
    >
      <div className="page-pad mx-auto grid h-full max-w-site grid-cols-3 items-center">
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {leftNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={pathname === item.href}
              className="nav-underline text-[11px] uppercase tracking-nav text-espresso focus-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-start focus-ring lg:hidden"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link
          href="/"
          className="justify-self-center font-serif text-[26px] tracking-[0.28em] text-espresso focus-ring sm:text-[28px]"
          aria-label="RAINÉE home"
        >
          RAINÉE
        </Link>

        <div className="flex items-center justify-end gap-1 sm:gap-2">
          <button
            type="button"
            className="hidden items-center gap-2 px-2 py-2 text-[11px] uppercase tracking-nav focus-ring sm:inline-flex"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="h-4 w-4" aria-hidden />
            <span className="hidden lg:inline">Search</span>
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center focus-ring sm:hidden"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="h-4 w-4" />
          </button>
          <Link
            href="/our-story"
            className="hidden h-10 w-10 items-center justify-center focus-ring lg:inline-flex"
            aria-label="Account"
          >
            <User className="h-4 w-4" />
          </Link>
          <button
            type="button"
            className="inline-flex h-10 items-center gap-2 px-1 focus-ring"
            aria-label={`Shopping bag, ${count} items`}
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="text-[11px] tracking-nav">({count})</span>
          </button>
        </div>
      </div>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="left" className="bg-ivory">
          <SheetHeader className="flex flex-row items-center justify-between">
            <SheetTitle>Menu</SheetTitle>
            <SheetClose className="focus-ring" aria-label="Close menu">
              <X className="h-4 w-4" />
            </SheetClose>
          </SheetHeader>
          <nav className="flex flex-col gap-7 px-6 py-10" aria-label="Mobile">
            {[...leftNav, { href: "/shop", label: "The Collection" }].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-serif text-3xl text-espresso"
              >
                {item.label}
              </Link>
            ))}
            <p className="label mt-8">RAINÉE / Paris edit</p>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
