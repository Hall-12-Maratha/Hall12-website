import Image from 'next/image';
import { FortWall } from './icons';
import data from '@/content/home.json';

export function HeroSection() {
  const { hero } = data;
  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div className="fixed inset-0 h-screen z-0">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          objectFit="cover"
          className="brightness-[0.6] animate-zoom-in"
          priority
          data-ai-hint={hero.image.aiHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>
      
      <FortWall className="absolute bottom-[-1px] left-0 w-full h-auto text-black/20 z-10 opacity-10 animate-parallax-fort" />
      <FortWall className="absolute top-0 left-0 w-full h-auto text-white/5 z-0 opacity-5 -scale-x-100" />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full">
        <div className="relative w-[55vh] h-[55vh] animate-fade-in-up">
            <Image
                src="/maratha4.png"
                alt="Maratha Emblem"
                fill
                objectFit="contain"
                data-ai-hint="emblem illustration"
            />
        </div>
      </div>
    </section>
  );
}
