import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import data from "@/content/about.json";

const { officeStaff } = data;
const staff = officeStaff.members;

export function OfficeStaff() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center mb-12 animate-fade-in-up">
            <div className="bg-primary text-primary-foreground inline-block px-8 py-3 rounded-md shadow-lg">
                <h2 className="text-3xl font-bold font-serif">{officeStaff.title}</h2>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((person, index) => (
            <Card key={index} className="bg-card text-center rounded-xl shadow-lg group transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:border-primary/50 border border-transparent relative overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="absolute inset-0 bg-card/50 backdrop-blur-sm z-0"></div>
                <Image
                    src="/maratha2.png"
                    alt="Card background"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300 z-0"
                    data-ai-hint="abstract pattern"
                />
              <CardContent className="flex flex-col items-center relative z-10 p-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 ring-2 ring-primary/50 group-hover:ring-accent transition-all">
                    <Image src={person.imageUrl} alt={person.name} width={400} height={400} className="object-cover" data-ai-hint={person.aiHint}/>
                </div>
                <h3 className="text-xl font-bold text-white">{person.name}</h3>
                <p className="text-primary font-semibold">{person.role}</p>
                <a href={`mailto:${person.email}`} className="text-sm text-foreground/70 hover:text-primary transition-colors">{person.email}</a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
