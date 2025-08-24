
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Set active link based on path
    const path = window.location.pathname;
    if (path === '/about') setActiveLink('About Us');
    else if (path === '/facilities') setActiveLink('Facilities');
    else if (path === '/events') setActiveLink('News & Events');
    else if (path === '/guest-room' || path === '/meeting-minutes') setActiveLink('Rules & Info');
    else if (path === '/contact') setActiveLink('Contact Us');
    else if (path === '/') setActiveLink('Home');
    else setActiveLink('');

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Facilities", href: "/facilities" },
    { name: "News & Events", href: "/events" },
  ];

  const rulesAndInfoLinks = [
     { name: "Guest Room", href: "/guest-room" },
     { name: "Meeting Minutes", href: "/meeting-minutes" },
     { name: "Hall Constitution", href: "https://www.iitk.ac.in/hall12/pdf/Hall-Constitution.pdf", external: true },
     { name: "Guidelines", href: "https://www.iitk.ac.in/hall12/pdf/GUIDELINES.pdf", external: true },
  ]

  const navItems = (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={() => setActiveLink(link.name)}
          className={cn(
            "transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100",
            activeLink === link.name ? "font-bold text-white after:scale-x-100" : "text-white/80 hover:text-white"
          )}
        >
          {link.name}
        </Link>
      ))}
      <DropdownMenu>
        <DropdownMenuTrigger className={cn(
            "flex items-center gap-1 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 outline-none",
            activeLink === 'Rules & Info' ? "font-bold text-white after:scale-x-100" : "text-white/80 hover:text-white"
          )}>
          Rules & Info <ChevronDown className="w-4 h-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {rulesAndInfoLinks.map(link => (
            <DropdownMenuItem key={link.name} asChild>
              <Link href={link.href} target={link.external ? "_blank" : "_self"} rel={link.external ? "noopener noreferrer" : ""}>{link.name}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
       <Link
          href="/contact"
          onClick={() => setActiveLink("Contact Us")}
          className={cn(
            "transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100",
            activeLink === "Contact Us" ? "font-bold text-white after:scale-x-100" : "text-white/80 hover:text-white"
          )}
        >
          Contact Us
        </Link>
    </>
  );

  return (
    <header id="home" className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-black/90 shadow-lg backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpeg" alt="Hall XII Crest" width={50} height={50} className="rounded-full" data-ai-hint="hostel crest" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-base">
          {navItems}
        </nav>
        <div className="hidden lg:flex items-center">
            <Button asChild variant="outline" className="rounded-full bg-white text-black hover:bg-primary hover:text-white border-none">
              <Link href="https://hall12mep.vercel.app/" target="_blank" rel="noopener noreferrer">HMP Portal</Link>
            </Button>
        </div>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-secondary">
              <nav className="flex flex-col gap-6 pt-16 text-xl items-center">
                {navItems}
                <Button asChild variant="outline" className="rounded-full bg-white text-black hover:bg-primary hover:text-white border-none mt-4">
                    <Link href="https://hall12mep.vercel.app/" target="_blank" rel="noopener noreferrer">HMP Portal</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
