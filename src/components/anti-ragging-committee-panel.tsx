import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail } from 'lucide-react';
import data from '@/content/contact.json';

export function AntiRaggingCommitteePanel() {
  const { antiRaggingCommittee } = data;
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary text-primary-foreground text-center py-3 mb-12 rounded-lg shadow-lg animate-fade-in-up">
          <h2 className="text-3xl font-bold font-serif">{antiRaggingCommittee.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {antiRaggingCommittee.contacts.map((contact, index) => (
            <Card key={index} className="bg-card border-border/20 shadow-lg group transition-all hover:shadow-accent/20 hover:border-accent/50 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <CardContent className="p-6">
                <p className="font-semibold text-accent text-sm uppercase">{contact.role}</p>
                <h3 className="text-xl font-bold text-white mt-1 mb-3">{contact.name}</h3>
                <div className="space-y-2 text-sm">
                  <a href={`tel:${contact.phone}`} className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>{contact.phone}</span>
                  </a>
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>{contact.email}</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
