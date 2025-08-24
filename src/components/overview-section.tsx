
import Image from 'next/image';
import { FortWall } from './icons';
import data from '@/content/about.json';

export function OverviewSection() {
  const { overview } = data;
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card p-8 md:p-12 rounded-2xl shadow-2xl relative animate-fade-in-up">
          <FortWall className="absolute right-0 top-0 h-full w-1/2 text-white/5 opacity-50 -translate-y-1/4 scale-150" />
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-4">
              <div className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md mb-4">
                <h2 className="text-2xl font-bold font-serif">{overview.title}</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed text-justify max-w-xl" style={{ lineHeight: 1.5 }}>
                {overview.content}
              </p>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg group">
                <Image 
                    src={overview.image.src}
                    alt={overview.image.alt}
                    fill
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={overview.image.aiHint}
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
