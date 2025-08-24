import { Building, Users, ShieldAlert } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import data from '@/content/contact.json';

const icons = {
  Building,
  Users,
  ShieldAlert
}

export function ContactCardsSection() {
  const { contactCards } = data;
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactCards.map((card, index) => {
            const Icon = icons[card.icon as keyof typeof icons];
            return (
              <Card key={index} className="bg-card border-border/20 shadow-xl text-center flex flex-col p-6 rounded-2xl animate-fade-in-up transition-all hover:-translate-y-2 hover:shadow-primary/20" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader className="items-center p-0 mb-4">
                  <div className="p-4 bg-primary/10 rounded-full ring-2 ring-accent mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl font-serif text-white">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between p-0">
                  <div className="space-y-3">
                    {card.details.map((detail, i) => (
                      <div key={i}>
                        <p className="font-semibold text-white/80">{detail.label}</p>
                        {detail.href ? (
                          <a href={detail.href} target="_blank" rel="noopener noreferrer" className={`text-sm ${detail.className} transition-colors`}>{detail.value}</a>
                        ) : (
                           <p className={`text-sm ${detail.className || 'text-white/60'}`}>{detail.value}</p>
                        )}
                      </div>
                    ))}
                  </div><a href="/about">
                  {card.cta && (
                    <Button variant="outline" className="mt-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      {card.cta}
                    </Button>
                  )}</a>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
