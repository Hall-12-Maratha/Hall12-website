"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import data from "@/content/home.json";

const { events } = data;

export function EventsSection() {
  return (
    <section id="news" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="relative text-center mb-12 py-4 overflow-hidden">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-accent/30"></div>
            <h2 className="relative inline-block bg-background px-6 font-serif text-4xl md:text-5xl font-bold text-primary">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">{events.title}</span>
            </h2>
             <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
             <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {events.items.map((event, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 animate-slide-in-left" style={{ animationDelay: `${index * 150}ms`}}>
                <div className="p-2">
                  <Card className="overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 border-border/50 bg-secondary cursor-pointer">
                    <CardContent className="p-0 relative">
                        <Image src={event.imageUrl} alt={event.title} width={600} height={400} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" data-ai-hint={event.aiHint}/>
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                            <h3 className="font-serif text-2xl text-white font-bold">{event.title}</h3>
                            <p className="text-sm text-primary group-hover:underline">Click on Photo to Know more</p>
                        </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="translate-x-1/2 text-white bg-primary/50 hover:bg-primary" />
          <CarouselNext className="-translate-x-1/2 text-white bg-primary/50 hover:bg-primary" />
        </Carousel>

        <div className="text-center mt-16">
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground animate-button-pulse">
            <Link href="/events">{events.buttonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
