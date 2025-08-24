
'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';
import { FortWall } from './icons';

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/marathas_hall_12/?hl=en" },
    { icon: Facebook, href: "https://www.facebook.com/hall12iitkanpur" },
  ];

  return (
    <footer id="contact" className="bg-black text-white/70 py-16 relative overflow-hidden">
        <FortWall className="absolute bottom-0 left-0 w-full h-auto text-white/5 z-0 opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                <div className="lg:col-span-2 space-y-4">
                    <h3 className="font-serif text-2xl text-white font-bold">HALL 12 IIT KANPUR</h3>
                    <p>
                        Hall of Residence XII stands as a testament to modern architecture and vibrant student life at IIT Kanpur. We foster a community of innovation, collaboration, and excellence, providing a nurturing environment for the leaders of tomorrow. Our walls echo with academic discourse, cultural festivities, and the unbreakable bonds of camaraderie.
                    </p>
                </div>
                <div>
                    <h4 className="font-serif text-lg font-semibold text-accent mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><Link href="/" className="hover:text-primary transition-colors relative after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Home</Link></li>
                        <li><Link href="/about" className="hover:text-primary transition-colors relative after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">About Us</Link></li>
                        <li><Link href="/facilities" className="hover:text-primary transition-colors relative after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Facilities</Link></li>
                        <li><Link href="/events" className="hover:text-primary transition-colors relative after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">News</Link></li>
                        <li><Link href="/guest-room" className="hover:text-primary transition-colors relative after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Guest Room</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors relative after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Contact Us</Link></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-serif text-lg font-semibold text-accent mb-4">IITK Links</h4>
                    <ul className="space-y-2">
                        <li><Link href="https://iitk.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors relative after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">IITK Homepage</Link></li>
                        <li><Link href="https://students.iitk.ac.in/ss/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors relative after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Students' Senate</Link></li>
                        <li><Link href="https://www.iitk.ac.in/counsel/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors relative after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Institute Counseling Service</Link></li>
                        <li><Link href="https://itsgyanendra.github.io/website/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors relative after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Students' Gymkhana</Link></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-serif text-lg font-semibold text-accent mb-4">Contact Us</h4>
                    <address className="not-italic space-y-2 text-sm">
                        <p>Hall of Residence XII</p>
                        <p>IIT Kanpur, Kalyanpur</p>
                        <p>Kanpur, Uttar Pradesh 208016</p>
                        <p>Email: hall12@iitk.ac.in</p>
                    </address>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                        <Link key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors transform hover:-translate-y-1">
                            <social.icon className="w-6 h-6" />
                        </Link>
                    ))}
                </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-center text-sm text-white/50">
                <p>&copy; {new Date().getFullYear()} Made By Hall 12 WebMaster HEC 2025. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  );
}
