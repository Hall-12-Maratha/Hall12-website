import Image from 'next/image';
import data from '@/content/contact.json';

export function ContactHero() {
  const { hero } = data;
  return (
    <section className="relative h-[60vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          objectFit="cover"
          className="brightness-[0.1]"
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
  );
}
