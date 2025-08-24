import data from '@/content/about.json';

export function MissionVisionSection() {
  const { missionVision } = data;
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card p-8 md:p-12 rounded-2xl shadow-2xl animate-fade-in-up">
          <div className="text-center mb-8">
            <div className="relative inline-block py-2">
                <h2 className="relative z-10 font-serif text-3xl md:text-4xl font-bold text-primary-foreground bg-primary px-8 py-2 rounded-full">
                    {missionVision.title}
                </h2>
                <div className="absolute inset-x-0 top-1/2 h-px bg-accent/50"></div>
                <div className="absolute -left-4 top-1/2 w-4 h-px bg-accent"></div>
                <div className="absolute -right-4 top-1/2 w-4 h-px bg-accent"></div>
            </div>
          </div>
          <div className="flex items-start gap-8">
            <div className="w-px bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0 self-stretch mx-4 hidden md:block">
                <div className="h-full w-full relative">
                    <SwordIcon className="w-8 h-auto text-accent absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
                </div>
            </div>
            <p className="text-foreground/85 leading-relaxed text-justify flex-1">
              {missionVision.content}
              <br/><br/>
              <em className="font-serif italic text-accent/90">{missionVision.vision}</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const SwordIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M22.414 1.586a2 2 0 0 0-2.828 0L12 9.172 4.414 1.586a2 2 0 0 0-2.828 2.828L9.172 12l-7.586 7.586a2 2 0 0 0 2.828 2.828L12 14.828l7.586 7.586a2 2 0 0 0 2.828-2.828L14.828 12l7.586-7.586a2 2 0 0 0 0-2.828zM13 13h-2v-2h2v2zM13 5h-2V3h2v2zM13 21h-2v-2h2v2z" />
    </svg>
)
