
'use client';

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import data from "@/content/facilities.json";
import { useState } from "react";
import { cn } from "@/lib/utils";

const { details: facilityDetails } = data;

export function FacilitiesDetails() {
  const [selectedImages, setSelectedImages] = useState<Record<string, string>>(
    facilityDetails.reduce((acc, facility) => {
      acc[facility.id] = facility.images[0].src;
      return acc;
    }, {} as Record<string, string>)
  );

  const handleImageSelect = (facilityId: string, imageSrc: string) => {
    setSelectedImages(prev => ({ ...prev, [facilityId]: imageSrc }));
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {facilityDetails.map((facility, index) => (
          <Card
            key={facility.id}
            id={facility.id}
            className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-border/20 animate-slide-up-reveal"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className={`grid md:grid-cols-2 items-center gap-8 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
              <div className={`relative h-96 md:h-full ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <Image
                  src={selectedImages[facility.id]}
                  alt={`${facility.name} main image`}
                  fill
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                  data-ai-hint={facility.images[0].aiHint}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-8 space-y-4">
                <div className="bg-primary text-primary-foreground text-center py-2 rounded-t-lg">
                    <h3 className="text-2xl font-bold font-serif">{facility.name}</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed min-h-[6rem]">
                  {facility.description}
                </p>
                
                <div className="flex gap-4 pt-4">
                    {facility.images.slice(0, 3).map((image, idx) => (
                        <div 
                          key={idx} 
                          className={cn(
                            "relative w-1/3 aspect-square rounded-lg overflow-hidden border-2  hover:border-accent transition-all animate-fade-in cursor-pointer",
                            selectedImages[facility.id] === image.src ? 'border-accent' : 'border-accent/50'
                          )}
                          style={{ animationDelay: `${(idx * 150) + 300}ms`}}
                          onClick={() => handleImageSelect(facility.id, image.src)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                objectFit="cover"
                                className="transition-transform duration-300 hover:scale-110"
                                data-ai-hint={image.aiHint}
                            />
                        </div>
                    ))}
                </div>
                 <Button asChild variant="link" className="text-accent hover:underline p-0 h-auto">
                  {facility.href ? (
                    <Link href={facility.href}>{facility.actionText}</Link>
                  ) : (
                    <span>{facility.actionText}</span>
                  )}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
