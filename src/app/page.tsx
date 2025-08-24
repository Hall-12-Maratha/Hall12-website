import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { MissionAnthem } from "@/components/mission-anthem";
import { EventsSection } from "@/components/events-section";
import { GalleryPreview } from "@/components/gallery-preview";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <div className="relative">
          <HeroSection />
          <div className="relative z-30">
            <MissionAnthem />
          </div>
           <div className="relative z-30 bg-background">
            <EventsSection />
          </div>
        </div>
        <GalleryPreview />
      </main>
      <Footer />
    </div>
  );
}
