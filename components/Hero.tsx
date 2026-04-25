"use client";

import { Phone, ChevronDown } from "lucide-react";
import FadeUp from "./FadeUp";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_#FFF8EE_0%,_#F5C591_50%,_#C07030_100%)] pt-16">
      {/* Kolam Geometric Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{
        backgroundImage: `radial-gradient(#B85C2A 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
        <FadeUp delay={0.1}>
          <div className="inline-block bg-forest-green px-4 py-1.5 rounded-full mb-8">
            <span className="text-white text-xs md:text-sm font-bold tracking-wide">
              🍃 Est. 30+ Years · Tisca, Ponda, Goa
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.2} as="h1" className="font-display text-4xl md:text-5xl lg:text-[56px] text-rich-brown leading-[1.1] mb-6">
          Homemade Mornings,<br />
          <span className="text-primary-saffron">The South Indian Way</span>
        </FadeUp>

        <FadeUp delay={0.3} as="p" className="font-body text-lg md:text-xl text-deep-terracotta mb-10 max-w-2xl mx-auto px-4 md:px-0">
          Puttu. Appam. Kadala. Chai. — Fresh every morning from 6 AM
        </FadeUp>

        <FadeUp delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full max-w-md sm:max-w-none mx-auto">
          <a
            href="tel:+917875680641"
            aria-label="Call to Order"
            className="w-full sm:w-auto bg-primary-saffron text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl flex items-center justify-center gap-3"
          >
            <Phone size={20} />
            <span>Call to Order · +91 78756 80641</span>
          </a>
          <a
            href="#menu"
            className="w-full sm:w-auto border-2 border-primary-saffron text-primary-saffron bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-saffron hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <span>View Our Menu</span>
            <ChevronDown size={20} />
          </a>
        </FadeUp>

        <FadeUp delay={0.5} className="flex flex-wrap justify-center gap-4 md:gap-12 opacity-80">
          <div className="flex items-center gap-2 bg-white/30 px-3 py-1.5 rounded-full md:bg-transparent md:px-0 md:py-0 md:rounded-none">
            <span className="text-xl md:text-2xl">🏡</span>
            <span className="text-rich-brown font-bold text-[10px] md:text-sm uppercase tracking-wider">Homemade Daily</span>
          </div>
          <div className="flex items-center gap-2 bg-white/30 px-3 py-1.5 rounded-full md:bg-transparent md:px-0 md:py-0 md:rounded-none">
            <span className="text-xl md:text-2xl">🌿</span>
            <span className="text-rich-brown font-bold text-[10px] md:text-sm uppercase tracking-wider">Fresh & Hygienic</span>
          </div>
          <div className="flex items-center gap-2 bg-white/30 px-3 py-1.5 rounded-full md:bg-transparent md:px-0 md:py-0 md:rounded-none">
            <span className="text-xl md:text-2xl">🕕</span>
            <span className="text-rich-brown font-bold text-[10px] md:text-sm uppercase tracking-wider">6 AM – 12 PM</span>
          </div>
        </FadeUp>
      </div>

      {/* Hero Divider */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px] fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.43,147.3,126,211.33,109.11,260.67,96.08,284.14,63.31,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
