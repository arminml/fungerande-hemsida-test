"use client";

import { Toaster as Sonner } from "sonner";

export function Toaster() {
  return (
    <Sonner
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast:
            "bg-ivory text-espresso border border-line rounded-sm shadow-none font-sans text-sm",
          title: "font-sans text-espresso",
          description: "text-mute",
        },
      }}
    />
  );
}
