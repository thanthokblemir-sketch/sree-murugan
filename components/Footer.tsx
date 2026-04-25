import { Phone, Clock, MapPin, Heart } from "lucide-react";
import FadeUp from "./FadeUp";

export default function Footer() {
  return (
    <footer className="bg-rich-brown text-warm-cream pt-16 md:pt-20 pb-8 md:pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mb-12 md:mb-16">
          {/* Brand Info */}
          <FadeUp delay={0.1}>
            <h2 className="font-display text-3xl text-primary-saffron mb-4">Sree Murugan</h2>
            <p className="font-lato text-sm opacity-60 mb-6 uppercase tracking-[0.2em]">Serving Tisca since 1994.</p>
            <p className="font-body text-warm-cream/80 leading-relaxed mb-8">
              A family-run breakfast spot where every meal is prepared with heart. We bring the authentic flavors of Kerala and South India to Goa's morning travellers.
            </p>
          </FadeUp>

          {/* Quick Links */}
          <FadeUp delay={0.2} className="md:pl-8">
            <h3 className="font-display text-xl text-muted-gold mb-6 md:mb-8">Quick Links</h3>
            <ul className="space-y-4 font-lato">
              <li>
                <a href="#story" className="text-warm-cream/70 hover:text-primary-saffron transition-colors uppercase tracking-widest text-xs font-bold">Our Story</a>
              </li>
              <li>
                <a href="#menu" className="text-warm-cream/70 hover:text-primary-saffron transition-colors uppercase tracking-widest text-xs font-bold">Fresh Menu</a>
              </li>
              <li>
                <a href="#location" className="text-warm-cream/70 hover:text-primary-saffron transition-colors uppercase tracking-widest text-xs font-bold">Find Location</a>
              </li>
              <li>
                <a href="tel:+917875680641" className="text-warm-cream/70 hover:text-primary-saffron transition-colors uppercase tracking-widest text-xs font-bold">Call Us Direct</a>
              </li>
            </ul>
          </FadeUp>

          {/* Contact Details */}
          <FadeUp delay={0.3}>
            <h3 className="font-display text-xl text-muted-gold mb-6 md:mb-8">Get In Touch</h3>
            <div className="space-y-6">
              <a href="tel:+917875680641" className="group flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary-saffron transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block font-body text-lg font-bold group-hover:text-primary-saffron transition-colors">+91 78756 80641</span>
                  <span className="text-xs opacity-50 uppercase tracking-widest">Calls only</span>
                </div>
              </a>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Clock size={18} />
                </div>
                <div>
                  <span className="block font-body text-sm">6:00 AM – 12:00 PM</span>
                  <span className="text-xs opacity-50 uppercase tracking-widest italic">Every Single Day</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block font-body text-sm text-balance">Main Road, Tisca, Ponda, South Goa</span>
                  <span className="text-xs opacity-50 uppercase tracking-widest">NH4A Corridor</span>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.4} className="pt-8 md:pt-10 border-t border-white/5 text-center">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-muted-gold/30 to-transparent mb-8 md:mb-10"></div>
          <p className="font-lato text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-40 flex items-center justify-center gap-2">
            © 2025 Sree Murugan Hotel & Restaurant. <br className="md:hidden" />Handcrafted with <Heart size={10} className="text-primary-saffron fill-current inline-block" />
          </p>
        </FadeUp>
      </div>
    </footer>
  );
}
