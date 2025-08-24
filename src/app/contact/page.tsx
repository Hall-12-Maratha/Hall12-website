
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactHero } from "@/components/contact-hero";
import { ContactCardsSection } from "@/components/contact-cards-section";
import { AntiRaggingCommitteePanel } from "@/components/anti-ragging-committee-panel";
import { MapDirectionsSection } from "@/components/map-directions-section";
import { RulesConductSection } from "@/components/rules-conduct-section";
import { FaqSection } from "@/components/faq-section";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <ContactHero />
        <ContactCardsSection />
        <AntiRaggingCommitteePanel />
        <MapDirectionsSection />
        <FaqSection />
        <RulesConductSection />
      </main>
      <Footer />
    </div>
  );
}
