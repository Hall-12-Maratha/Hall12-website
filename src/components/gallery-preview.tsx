"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import data from "@/content/home.json";

const { gallery } = data;

export function GalleryPreview() {
  return (
    
        <section id="gallery" className="py-16 md:py-24 bg-black animate-fade-in-up">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-primary rounded-full mb-4">
                 <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground">{gallery.title}</h2>
            </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {gallery.images.map((image, index) => (
            <div key={index} className={cn("group relative overflow-hidden rounded-2xl shadow-lg animate-fade-in-up", image.className)} style={{ animationDelay: `${index * 100}ms`}}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={cn(
                    "object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-110",
                    image.className.includes('rounded-full') ? 'rounded-full p-2 bg-background' : 'rounded-2xl'
                )}
                data-ai-hint={image.aiHint}
              />
              <div className="absolute inset-0 bg-transparent ring-4 ring-transparent group-hover:ring-accent transition-all duration-300 rounded-2xl group-hover:animate-flash-gold"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
