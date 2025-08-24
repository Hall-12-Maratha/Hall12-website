import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import data from "@/content/about.json";
import { Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";

const { hec } = data;
const hecMembers = hec.members;

export function HallExecutiveCommittee() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center mb-12 animate-fade-in-up">
            <div className="bg-primary text-primary-foreground inline-block px-8 py-3 rounded-md shadow-lg">
                <h2 className="text-3xl font-bold font-serif">{hec.title}</h2>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hecMembers.map((person, index) => (
            <Card key={index} className="bg-card text-center rounded-xl shadow-lg group transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:border-primary/50 border border-transparent relative overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
               <div className="absolute inset-0 bg-card/50 backdrop-blur-sm z-0"></div>
                <Image
                    src="/maratha2.png"
                    alt="Card background"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300 z-0"
                    data-ai-hint="abstract pattern"
                />
               <ShieldIcon className="absolute -top-4 -left-4 w-20 h-20 text-accent/10 group-hover:text-accent/20 transition-colors" />
              <CardContent className="flex flex-col items-center relative z-10 p-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 ring-2 ring-primary/50 group-hover:ring-accent transition-all group-hover:animate-glow-gold">
                    <Image src={person.imageUrl} alt={person.name} width={400} height={400} className="object-cover" data-ai-hint={person.aiHint} />
                </div>
                <h3 className="text-xl font-bold text-white">{person.name}</h3>
                <p className="text-primary font-semibold">{person.role}</p>
                 <div className="mt-4 space-y-2 text-sm">
                  <a href={`tel:${person.phone}`} className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors justify-center">
                    <Phone className="w-4 h-4" />
                    <span>{person.phone}</span>
                  </a>
                  <a href={`mailto:${person.email}`} className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors justify-center">
                    <Mail className="w-4 h-4" />
                    <span>{person.email}</span>
                  </a>
                  <Link href={person.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors justify-center">
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const ShieldIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2L2 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-10-3z" />
    </svg>
)
