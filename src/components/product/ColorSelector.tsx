"use client";

import { cn } from "@/lib/utils";
import { type ProductColor } from "@/data/products";

export function ColorSelector({
  colors,
  value,
  onChange,
}: {
  colors: ProductColor[];
  value: string;
  onChange: (id: string) => void;
}) {
  const selected = colors.find((color) => color.id === value);

  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between">
        <p className="text-[11px] uppercase tracking-label text-mute">Färg</p>
        <p className="text-[12px] uppercase tracking-nav text-espresso">{selected?.name}</p>
      </div>
      <div className="flex gap-3" role="listbox" aria-label="Färg">
        {colors.map((color) => (
          <button
            key={color.id}
            type="button"
            role="option"
            aria-selected={value === color.id}
            aria-label={color.name}
            onClick={() => onChange(color.id)}
            className={cn(
              "h-6 w-6 rounded-full border focus-ring",
              value === color.id ? "border-espresso" : "border-line",
            )}
            style={{ backgroundColor: color.hex }}
          />
        ))}
      </div>
    </div>
  );
}
