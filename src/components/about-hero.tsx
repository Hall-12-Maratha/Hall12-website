import Image from 'next/image';
import data from '@/content/about.json';

export function AboutHero() {
  const { hero } = data;
  return (
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
        <div
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent"
          style={{ maskImage: 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120"><path d="M0 0V120H1440V0L720 100L0 0Z" fill="black"/></svg>\')', maskRepeat: 'no-repeat', maskSize: 'cover' }}
        ></div>
        <div
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
          style={{ maskImage: 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120"><path d="M0 120V0H1440V120L720 20L0 120Z" fill="black"/></svg>\')', maskRepeat: 'no-repeat', maskSize: 'cover' }}
        ></div>
      </div>

      <div className="relative z-10 animate-fade-in-up">
        <h1 
          className="font-serif text-6xl md:text-8xl font-bold text-white"
          style={{ textShadow: '0 0 1px #D4AF37, 0 0 2px #D4AF37, 0 0 3px #D4AF37, 0 0 5px #D4AF37' }}
        >
          {hero.title}
        </h1>
      </div>
    </section>
  );
}
