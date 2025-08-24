
import Link from "next/link";
import Image from "next/image";
import data from "@/content/facilities.json";

const { grid: facilities } = data;

export function FacilitiesGrid() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Link key={facility.name} href={facility.href}>
              <div className="relative group block rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <Image
                  src={facility.imageUrl}
                  alt={facility.name}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={facility.aiHint}
                />
                <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-end justify-start p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="font-serif text-2xl font-bold text-white transition-transform duration-300 group-hover:-translate-y-2">
                    {facility.name}
                  </h3>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-xl transition-all duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
