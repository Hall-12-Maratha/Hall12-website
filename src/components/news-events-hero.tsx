import Image from 'next/image';
import { FortWall } from './icons';
import data from '@/content/events.json';

export function NewsEventsHero() {
  const { hero } = data;
  return (
    <section className="relative h-[60vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          objectFit="cover"
          className="brightness-[0.4]"
          priority
          data-ai-hint={hero.image.aiHint}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        <FortWall className="absolute bottom-[-1px] left-0 w-full h-auto text-black/20 z-10 opacity-10" />
      </div>

      <div className="relative z-10 animate-fade-in-up space-y-4">
        <h1 
          className="font-serif text-5xl md:text-7xl font-bold text-white"
          style={{ textShadow: '0 0 1px #F5C542, 0 0 2px #F5C542, 0 0 3px #F5C542, 0 0 5px #F5C542' }}
        >
          {hero.title}
        </h1>
      </div>
    </section>
  );
}
