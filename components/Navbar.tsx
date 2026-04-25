"use client";

import { cn } from "@/src/lib/utils";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "sticky top-0 z-50 w-full h-[64px] bg-white border-b-2 border-muted-gold transition-shadow duration-300",
      isScrolled && "shadow-lg shadow-deep-terracotta/10"
    )}>
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-display text-[22px] text-primary-saffron leading-none font-bold">
            Sree Murugan
          </span>
          <span className="font-body text-[10px] text-rich-brown/70 mt-1 uppercase tracking-wider">
            Hotel & Restaurant · Tisca, Goa
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-forest-green px-4 py-1.5 rounded-full">
            <span className="text-white text-xs font-bold uppercase tracking-tight">
              Open 6AM–12PM
            </span>
          </div>
          <a
            href="tel:+917875680641"
            aria-label="Call Us"
            className="flex items-center gap-2 bg-primary-saffron text-white px-5 py-2 rounded-full font-bold hover:scale-105 transition-transform shadow-md"
          >
            <Phone size={16} />
            <span className="text-sm">Call Us</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
