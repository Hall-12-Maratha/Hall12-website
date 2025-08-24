import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AboutHero } from "@/components/about-hero";
import { OverviewSection } from "@/components/overview-section";
import { MissionVisionSection } from "@/components/mission-vision-section";
import { OfficeStaff } from "@/components/office-staff";
import { HallExecutiveCommittee } from "@/components/hall-executive-committee";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <OverviewSection />
        <MissionVisionSection />
        <OfficeStaff />
        <HallExecutiveCommittee />
      </main>
      <Footer />
    </div>
  );
}
