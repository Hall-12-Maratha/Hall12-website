import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, User, Shield, Utensils, ClipboardList, Wrench, MessageSquare, Megaphone, Tv } from "lucide-react";

export function MepPortalGuidelines() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary">HMP Portal Guidelines</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Your comprehensive guide to using the Hall Management Portal for managing your mess preferences and extras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group animate-slide-in-left">
                 <Image 
                    src="/Facilities/MEP1.jpg" 
                    alt="HMP Portal dashboard" 
                    fill
                    objectFit="cover"
                    data-ai-hint="dashboard user interface"
                    className="transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <h2 className="font-serif text-4xl font-bold text-accent">What is the HMP Portal?</h2>
                <p className="text-foreground/80 leading-relaxed">
                    The Hall Management Portal is a centralized digital platform designed to digitize and streamline all the day-to-day operations that happen in a university residential hall, replacing traditional paper-based or fragmented digital systems. It handles everything from mess operations and student services to facility management and administrative tasks.
                </p>
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                    <Link href="https://hall12mep.vercel.app/" target="_blank" rel="noopener noreferrer">Access HMP Portal</Link>
                </Button>
            </div>
        </div>

        <Card className="bg-card/80 backdrop-blur-sm shadow-2xl animate-fade-in-up mb-16" style={{ animationDelay: "400ms" }}>
            <CardHeader>
                <CardTitle className="text-3xl font-serif text-white text-center">What can you use it for?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 p-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-primary flex items-center gap-2"><User/>For Students</h3>
                        <p className="text-foreground/80">A one-stop portal to access all hall services. Submit and track complaints, book and manage equipment rentals, and stay informed with announcements and updates.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-primary flex items-center gap-2"><Shield/>For Administrators</h3>
                        <p className="text-foreground/80">A centralized dashboard to manage all hall operations, from user management and complaint oversight to broadcasting announcements to specific groups.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-primary flex items-center gap-2"><Utensils/>For Mess Operations</h3>
                        <p className="text-foreground/80">Automate food service management and billing. Plan weekly menus, manage extra items, and generate bills efficiently for all residents.</p>
                    </div>
                </div>
            </CardContent>
        </Card>

        <div className="animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <h2 className="text-4xl font-serif font-bold text-center text-accent mb-12">A Student's Guide to the HMP</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-secondary/50 p-6 rounded-xl">
                  <CardHeader className="p-0 mb-4 flex-row items-center gap-4">
                      <Utensils className="w-8 h-8 text-primary"/>
                      <CardTitle className="text-2xl text-white">Mess Management</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-2 text-foreground/80">
                      <p><strong className="text-white/90">View Bills:</strong> Access and review your monthly mess bills and extra item charges.</p>
                      <p><strong className="text-white/90">Order Extras:</strong> Browse and order from a list of available extra food items.</p>
                      <p><strong className="text-white/90">Menu Access:</strong> Check the weekly mess menu anytime, anywhere.</p>
                  </CardContent>
              </Card>
              <Card className="bg-secondary/50 p-6 rounded-xl">
                  <CardHeader className="p-0 mb-4 flex-row items-center gap-4">
                      <Wrench className="w-8 h-8 text-primary"/>
                      <CardTitle className="text-2xl text-white">Complaints & Issues</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-2 text-foreground/80">
                      <p><strong className="text-white/90">Submit Complaints:</strong> Easily file complaints related to mess, maintenance, or other issues.</p>
                      <p><strong className="text-white/90">Track Status:</strong> Monitor the status of your submitted complaints from "Pending" to "Resolved".</p>
                      <p><strong className="text-white/90">Provide Feedback:</strong> Give feedback on the resolution to ensure quality service.</p>
                  </CardContent>
              </Card>
              <Card className="bg-secondary/50 p-6 rounded-xl">
                  <CardHeader className="p-0 mb-4 flex-row items-center gap-4">
                      <ClipboardList className="w-8 h-8 text-primary"/>
                      <CardTitle className="text-2xl text-white">Facility Rentals</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-2 text-foreground/80">
                      <p><strong className="text-white/90">Book Equipment:</strong> Rent sports equipment, electronics, or other items available in the hall.</p>
                      <p><strong className="text-white/90">Check Availability:</strong> See what items are currently available for rent.</p>
                      <p><strong className="text-white/90">Manage Bookings:</strong> Keep track of your current rentals and return dates.</p>
                  </CardContent>
              </Card>
               <Card className="bg-secondary/50 p-6 rounded-xl">
                  <CardHeader className="p-0 mb-4 flex-row items-center gap-4">
                      <Megaphone className="w-8 h-8 text-primary"/>
                      <CardTitle className="text-2xl text-white">Stay Informed</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-2 text-foreground/80">
                      <p><strong className="text-white/90">Announcements:</strong> Receive important announcements from the hall administration and HEC.</p>
                      <p><strong className="text-white/90">Events:</strong> Stay updated on upcoming hall events, workshops, and competitions.</p>
                  </CardContent>
              </Card>
                <Card className="bg-secondary/50 p-6 rounded-xl">
                  <CardHeader className="p-0 mb-4 flex-row items-center gap-4">
                      <User className="w-8 h-8 text-primary"/>
                      <CardTitle className="text-2xl text-white">Profile Management</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-2 text-foreground/80">
                      <p><strong className="text-white/90">Your Details:</strong> Keep your personal information and contact details up to date.</p>
                      <p><strong className="text-white/90">Credentials:</strong> Manage your login credentials securely.</p>
                  </CardContent>
              </Card>
          </div>
        </div>

      </div>
    </section>
  );
}
