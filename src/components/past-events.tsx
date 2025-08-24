
'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

interface PastEvent {
    title: string;
    date: string;
    description: string;
    imageUrl: string;
    aiHint: string;
    linkText: string;
}

interface PastEventsData {
    title: string;
    items: PastEvent[];
}

interface PastEventsProps {
    pastEvents: PastEventsData;
}

const INITIAL_VISIBLE_EVENTS = 3;

export function PastEvents({ pastEvents }: PastEventsProps) {
    const { title, items } = pastEvents;
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_EVENTS);

    const showMoreEvents = () => {
        setVisibleCount(items.length);
    };

    if (items.length === 0) {
        return (
             <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="bg-red-800 text-white text-center py-3 mb-12 rounded-lg shadow-lg animate-fade-in-up">
                        <h2 className="text-3xl font-bold font-serif">{title}</h2>
                    </div>
                    <div className="text-center text-muted-foreground py-8">
                        <p>No past events match your search.</p>
                    </div>
                </div>
            </section>
        );
    }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-800 text-white text-center py-3 mb-12 rounded-lg shadow-lg animate-fade-in-up">
          <h2 className="text-3xl font-bold font-serif">{title}</h2>
        </div>

        <Card className="bg-card border-border/20 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
          <CardContent className="p-0">
            <ul className="divide-y divide-border/20">
              {items.slice(0, visibleCount).map((event, index) => (
                <li key={index} className="p-6 hover:bg-secondary/30 transition-colors group">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                    <div className="md:col-span-3 animate-slide-in-left" style={{ animationDelay: `${index * 150}ms`}}>
                      <p className="text-sm text-foreground/60 mb-1">{event.date}</p>
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-foreground/80 mb-4">{event.description}</p>
                      <Link href="#" className="text-primary hover:underline font-semibold">
                        {event.linkText}
                      </Link>
                    </div>
                    <div className="relative w-full aspect-video md:aspect-square rounded-lg overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 150}ms`}}>
                      <Image src={event.imageUrl} alt={event.title} layout="fill" objectFit="cover" data-ai-hint={event.aiHint} className="group-hover:scale-105 transition-transform duration-300"/>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        {visibleCount < items.length && (
            <div className="text-center mt-8 animate-fade-in-up">
                <Button variant="outline" onClick={showMoreEvents} className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    See All Events <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
            </div>
        )}
      </div>
    </section>
  );
}
