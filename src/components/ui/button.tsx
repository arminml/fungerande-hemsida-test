"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost" | "line";
  className?: string;
  arrow?: boolean;
  onClick?: () => void;
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className,
  arrow,
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group inline-flex items-center gap-3 text-[11px] uppercase tracking-label transition-colors duration-300 focus-ring",
        variant === "solid" &&
          "bg-espresso px-7 py-3.5 text-ivory hover:bg-ink",
        variant === "ghost" && "text-ivory hover:text-champagne",
        variant === "line" && "text-espresso",
        className,
      )}
    >
      <span>{children}</span>
      {arrow ? (
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-[3px]"
          aria-hidden
        />
      ) : null}
    </Link>
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "ghost" | "line";
  arrow?: boolean;
};

export function Button({
  children,
  variant = "solid",
  className,
  arrow,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "group inline-flex items-center justify-center gap-3 text-[11px] uppercase tracking-label transition-colors duration-300 focus-ring disabled:opacity-40",
        variant === "solid" &&
          "bg-espresso px-7 py-3.5 text-ivory hover:bg-ink",
        variant === "ghost" && "border border-line bg-transparent px-7 py-3.5 text-espresso hover:border-espresso",
        variant === "line" && "text-espresso",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {arrow ? (
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-[3px]"
          aria-hidden
        />
      ) : null}
    </button>
  );
}
