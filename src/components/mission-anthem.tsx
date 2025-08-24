
"use client"

import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, PlayCircle, PauseCircle } from "lucide-react";
import Link from "next/link";
import { FortGate } from "./icons";
import data from "@/content/home.json";

export function MissionAnthem() {
  const { missionAnthem } = data;
  const { mission, anthem } = missionAnthem;

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  return (
    <section className="py-24 relative">
        <FortGate className="absolute inset-0 w-full h-full object-cover text-white/5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            <div className="bg-primary text-primary-foreground text-center py-2 rounded-t-lg">
                <h3 className="text-xl font-bold font-serif">{mission.title}</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              {mission.content}
            </p>
            <Link href={mission.link.href} className="text-primary hover:underline font-semibold inline-flex items-center group">
              {mission.link.text}
            </Link>
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: "250ms" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/8CVIzT6oJg0?si=JbdISKtZhfCGQJRV"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <Card className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-2xl p-2 flex flex-col animate-fade-in-up mt-16" style={{ animationDelay: "350ms" }}>
            <div className="bg-primary text-primary-foreground text-center py-2 rounded-t-lg">
                <h3 className="text-xl font-bold font-serif">{anthem.title}</h3>
            </div>
            <CardContent className="p-6 flex-1 flex flex-col justify-between">
              <div className="space-y-2 text-foreground/80 font-serif italic text-center">
                  {anthem.lyrics.map((line, index) => <p key={index}>{line}</p>)}
              </div>
              <div className="flex justify-between items-center mt-6">
                <Link href={anthem.legacyLink.href} className="text-accent hover:underline font-semibold inline-flex items-center group">
                    {anthem.legacyLink.text}
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80" onClick={handlePlayAudio}>
                    {isPlaying ? (
                        <PauseCircle className="w-8 h-8"/>
                    ) : (
                        <PlayCircle className="w-8 h-8"/>
                    )}
                </Button>
                <audio 
                  ref={audioRef} 
                  src="/audio/anthem.mp3" 
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                />
              </div>
            </CardContent>
          </Card>
      </div>
    </section>
  );
}
