import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MeetingMinutesContent } from "@/components/meeting-minutes-content";

export default function MeetingMinutesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <MeetingMinutesContent />
      </main>
      <Footer />
    </div>
  );
}
