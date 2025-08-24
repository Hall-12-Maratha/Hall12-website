import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FacilitiesHero } from "@/components/facilities-hero";
import { FacilitiesGrid } from "@/components/facilities-grid";
import { FacilitiesDetails } from "@/components/facilities-details";

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <FacilitiesHero />
        <FacilitiesGrid />
        <FacilitiesDetails />
      </main>
      <Footer />
    </div>
  );
}
