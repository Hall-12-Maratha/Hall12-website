
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";

interface Event {
    title: string;
    imageUrl: string;
    aiHint: string;
    date?: string;
    time?: string;
    venue?: string;
    description?: string;
}

interface UpcomingEventsData {
    title: string;
    highlightEvent: Event | null;
    secondaryEvent: Event | null;
    otherEvents: Event[];
    seeAllLink: string;
}

interface UpcomingEventsProps {
    upcomingEvents: UpcomingEventsData;
}


export function UpcomingEvents({ upcomingEvents }: UpcomingEventsProps) {
  const { highlightEvent, secondaryEvent, otherEvents, title, seeAllLink } = upcomingEvents;

  const hasEvents = highlightEvent || secondaryEvent || otherEvents.length > 0;

  if (!hasEvents) {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl font-serif text-muted-foreground">No upcoming events match your search.</h2>
            </div>
        </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary text-primary-foreground text-center py-3 mb-12 rounded-lg shadow-lg animate-fade-in-up">
          <h2 className="text-3xl font-bold font-serif">{title}</h2>
        </div>
        
        {otherEvents.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {otherEvents.map((event, index) => (
                    <Card key={index} className="overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 border-border/50 bg-secondary cursor-pointer animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                        <CardContent className="p-0 relative">
                            <Image src={event.imageUrl} alt={event.title} width={600} height={400} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" data-ai-hint={event.aiHint}/>
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors"></div>
                            <div className="absolute bottom-0 left-0 p-4">
                                <h3 className="font-serif text-xl text-white font-bold">{event.title}</h3>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {highlightEvent && (
                <div className="lg:col-span-2 relative rounded-xl overflow-hidden group shadow-2xl transition-all duration-300 hover:shadow-primary/30 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    <Image src={highlightEvent.imageUrl} alt={highlightEvent.title} layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-105" data-ai-hint={highlightEvent.aiHint} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white">
                        <h3 className="font-serif text-4xl font-bold">{highlightEvent.title}</h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-accent my-2">
                            <span>{highlightEvent.date}</span>
                            <span>{highlightEvent.time}</span>
                            <span>{highlightEvent.venue}</span>
                        </div>
                        <p className="max-w-2xl text-white/80">{highlightEvent.description}</p>
                    </div>
                </div>
            )}

            {secondaryEvent && (
                 <div className="relative rounded-xl overflow-hidden group shadow-2xl transition-all duration-300 hover:shadow-accent/30 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <Image src={secondaryEvent.imageUrl} alt={secondaryEvent.title} layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-105" data-ai-hint={secondaryEvent.aiHint} />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                        <h3 className="font-serif text-3xl text-white font-bold text-center">{secondaryEvent.title}</h3>
                    </div>
                </div>
            )}
        </div>

        <div className="text-center mt-16 animate-fade-in-up">
          <Link href="#" className="text-accent hover:underline font-semibold text-lg">
            {seeAllLink}
          </Link>
        </div>
      </div>
    </section>
  );
}
