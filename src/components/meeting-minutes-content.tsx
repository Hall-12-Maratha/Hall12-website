
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import data from '@/content/meeting-minutes.json';

export function MeetingMinutesContent() {
  const { hero, minutes } = data;

  return (
    <>
      <section className="relative h-[60vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            objectFit="cover"
            className="brightness-[0.5]"
            priority
            data-ai-hint={hero.image.aiHint}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 animate-fade-in-up space-y-4">
          <h1 
            className="font-serif text-6xl md:text-8xl font-bold text-white"
            style={{ textShadow: '0 0 1px #F5C542, 0 0 2px #F5C542, 0 0 3px #F5C542, 0 0 5px #F5C542' }}
          >
            {hero.title}
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-white/80">
            {hero.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Card className="bg-card border-border/20 shadow-lg">
                    <CardContent className="p-0">
                        <ul className="divide-y divide-border/20">
                            {minutes.map((minute, index) => (
                                <li key={index} className="p-6 hover:bg-secondary/30 transition-colors group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{minute.title}</h3>
                                            <p className="text-sm text-foreground/60 mt-1">{minute.date}</p>
                                        </div>
                                        <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shrink-0">
                                            <Link href={minute.link} target="_blank" rel="noopener noreferrer">
                                                <FileText className="mr-2 h-4 w-4" />
                                                View Document
                                            </Link>
                                        </Button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>
    </>
  );
}
