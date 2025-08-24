

'use client';

import { useState } from 'react';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BedDouble, CircleDollarSign, ClipboardList, Calendar as CalendarIcon, User, Mail, Phone } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';

export default function GuestRoomPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center my-12 animate-fade-in-up">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary">Guest Rooms</h1>
            <p className="text-lg text-muted-foreground mt-4">Comfortable and convenient accommodation for your guests.</p>
        </div>

        <Card className="mb-12 animate-fade-in-up" style={{animationDelay: '150ms'}}>
          <CardHeader>
            <CardTitle className="text-3xl font-serif text-accent flex items-center gap-4"><BedDouble/>Guest Room Details</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8 text-lg">
            <div>
              <p><strong>Type of room:</strong> Double</p>
              <p><strong>Number of rooms:</strong> 4</p>
              <p className="mt-4 text-sm text-muted-foreground"><strong>Note:</strong> No extra inventory will be supplied.</p>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <CircleDollarSign className="text-accent w-6 h-6"/>
                <p><strong>Single Bed:</strong> ₹150/- per day</p>
              </div>
               <div className="flex items-center gap-4 mt-2">
                <CircleDollarSign className="text-accent w-6 h-6"/>
                <p><strong>Double Bed:</strong> ₹250/- per day</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-12 animate-fade-in-up" style={{animationDelay: '300ms'}}>
            <CardHeader>
                <CardTitle className="text-3xl font-serif text-accent flex items-center gap-4"><ClipboardList/>Booking Procedure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mt-1">1</div>
                    <p>See the guest room availability in the calendar provided below.</p>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mt-1">2</div>
                     <div>
                        <p>Request for the guest room using the form given below.</p>
                        <Button asChild variant="link" className="p-0 h-auto text-accent">
                          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdWGSO2rWn3kNaBf6mmXOogA6ApwOks8jw1WbZgfT6rjNlEKw/viewform" target="_blank" rel="noopener noreferrer">Guest Room Booking Form</a>
                        </Button>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mt-1">3</div>
                    <p>After filling the form, you will receive a confirmation email that your request has been recorded. If the room is available, you will receive a second confirmation email.</p>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mt-1">4</div>
                    <div>
                        <p>After confirmation, you have to make the payment using the link provided below and submit the printed receipt at the hall office.</p>
                        <Button asChild variant="link" className="p-0 h-auto text-accent">
                          <a href="https://www.onlinesbi.sbi/sbicollect/" target="_blank" rel="noopener noreferrer">Make Payment</a>
                        </Button>
                        <p className="text-sm text-muted-foreground mt-1">Steps: In SBI i-Collect, select Hall 12, enter the total amount in 'Other Dues', and write 'Guest Room Booking' in the remarks section.</p>
                    </div>
                </div>
            </CardContent>
        </Card>

      </main>
      <Footer />
    </div>
  );
}
