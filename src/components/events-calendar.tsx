import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import data from '@/content/events.json';

export function EventsCalendar() {
  const { calendar } = data;
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black text-white text-center py-3 mb-4 rounded-t-lg border-b-2 border-primary">
          <h2 className="text-3xl font-bold font-serif">{calendar.title}</h2>
        </div>
        <Card className="bg-card border-border/20 shadow-lg">
          <CardContent className="p-2 md:p-6 flex justify-center">
            <Calendar
                className="w-full max-w-2xl"
                classNames={{
                    day_selected: "bg-primary text-primary-foreground hover:bg-primary/90",
                    day_today: "bg-accent text-accent-foreground",
                }}
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
