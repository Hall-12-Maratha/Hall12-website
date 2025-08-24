
'use client';

import { useState } from 'react';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NewsEventsHero } from "@/components/news-events-hero";
import { UpcomingEvents } from "@/components/upcoming-events";
import { NoticesSection } from "@/components/notices-section";
import { PastEvents } from "@/components/past-events";
import data from '@/content/events.json';

export default function EventsPage() {
  const [category, setCategory] = useState('all');

  const filteredNotices = data.notices.items.filter(notice => {
    return category === 'all' || notice.category.toLowerCase() === category;
  });

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <NewsEventsHero />
        <UpcomingEvents upcomingEvents={data.upcomingEvents} />
        <NoticesSection 
          notices={{...data.notices, items: filteredNotices }}
          category={category}
          setCategory={setCategory}
        />
        <PastEvents pastEvents={data.pastEvents} />
      </main>
      <Footer />
    </div>
  );
}
