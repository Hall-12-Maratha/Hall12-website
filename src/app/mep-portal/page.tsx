import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MepPortalGuidelines } from "@/components/mep-portal-guidelines";

export default function MepPortalPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <MepPortalGuidelines />
      </main>
      <Footer />
    </div>
  );
}
