"use client";

import Image from "next/image";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-3">
      {images.map((src, index) => (
        <div
          key={`${src}-${index}`}
          className={`relative overflow-hidden bg-stone ${index === 0 ? "col-span-2 aspect-[4/5]" : "aspect-[4/5]"}`}
        >
          <Image
            src={src}
            alt={`${name} view ${index + 1}`}
            fill
            sizes={index === 0 ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 1024px) 50vw, 30vw"}
            className="object-cover"
            priority={index === 0}
          />
          <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-label text-ivory/90">
            {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
        </div>
      ))}
    </div>
  );
}
