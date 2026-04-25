import { Phone, Quote } from "lucide-react";
import FadeUp from "./FadeUp";

export default function AdvanceOrders() {
  return (
    <section className="py-16 md:py-24 bg-deep-terracotta relative overflow-hidden text-center banner-section">
      {/* Decorative SVG Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#FFF8EE 1.5px, transparent 1.5px)',
        backgroundSize: '32px 32px'
      }}></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <FadeUp delay={0.1}>
          <Quote className="mx-auto mb-6 md:mb-8 text-muted-gold opacity-30" size={64} fill="currentColor" />
          
          <h2 className="font-display text-3xl md:text-5xl text-warm-cream mb-6 md:mb-8 leading-tight">
            Heading our way?
          </h2>
        </FadeUp>
        
        <FadeUp delay={0.2} className="space-y-4 md:space-y-6 mb-10 md:mb-12 max-w-2xl mx-auto">
          <p className="font-body text-base md:text-lg text-warm-cream leading-relaxed font-light">
            If you have a specific South Indian favorite in mind—or if you're traveling with a big group and want to make things easier—feel free to give us a call before you arrive.
          </p>
          <p className="font-body text-base md:text-lg text-warm-cream leading-relaxed font-light">
            We can't always promise it (it depends on how busy the kitchen is and what's in stock), but if you let us know what you're after and when you'll be here, we'll do our absolute best to have it ready and waiting for you.
          </p>
          <p className="font-body text-base md:text-lg text-warm-cream leading-relaxed font-light italic">
            Give us a shout and we'll see what we can do!
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <a
            href="tel:+917875680641"
            aria-label="Call to Book in Advance"
            className="inline-flex items-center gap-3 bg-warm-cream text-deep-terracotta px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg md:text-xl hover:bg-white transition-all shadow-2xl hover:scale-105 active:scale-95"
          >
            <Phone size={24} />
            <span>Call to Book in Advance</span>
          </a>
          
          <div className="mt-8">
            <p className="font-lato text-xs md:text-sm text-warm-cream/70 uppercase tracking-[0.2em] font-bold">
              Calls only · No WhatsApp · Cash or UPI on arrival
            </p>
          </div>
        </FadeUp>
      </div>

      {/* Decorative Wave Transitions */}
      <div className="absolute top-0 left-0 w-full rotate-180 leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[40px] fill-white opacity-10">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.43,147.3,126,211.33,109.11,260.67,96.08,284.14,63.31,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
