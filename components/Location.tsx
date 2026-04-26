import { MapPin, Clock, Phone, Globe, CreditCard } from "lucide-react";
import FadeUp from "./FadeUp";

export default function Location() {
  return (
    <section id="location" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          <FadeUp delay={0.1} className="flex flex-col">
            <span className="font-lato font-bold text-xs uppercase tracking-[0.2em] text-muted-gold mb-4 block">
              FIND US
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-rich-brown mb-8 md:mb-10 leading-tight">
              Right on the Main Road —<br className="hidden lg:block" />You Can't Miss Us
            </h2>

            {/* Postcard Style Address */}
            <div className="bg-warm-cream/50 p-6 md:p-8 rounded-xl border-2 border-muted-gold/20 shadow-sm relative overflow-hidden mb-8 flex-grow">
              <div className="absolute top-4 right-4 opacity-10">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M3 10h18" />
                  <path d="M10 4v16" />
                </svg>
              </div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary-saffron shrink-0" size={20} />
                  <span className="font-body text-rich-brown font-bold tracking-wide">
                    C37J+6QR, Tisk Usgao, Tisca, Darbandora, Goa 403406
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-primary-saffron shrink-0" size={20} />
                  <span className="font-body text-rich-brown font-bold">
                    Open: 6:00 AM – 12:00 PM, Every Day
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-primary-saffron shrink-0" size={20} />
                  <a href="tel:+917875680641" className="font-body text-rich-brown font-bold hover:text-primary-saffron transition-colors underline decoration-dotted decoration-muted-gold">
                    +91 78756 80641
                  </a>
                </div>
                <div className="space-y-3 pt-4 border-t border-muted-gold/20">
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-lato uppercase tracking-[0.1em] text-muted-gold font-bold">Languages:</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-body text-rich-brown/90">
                      💬 <strong>Mr. Pushkaran:</strong> Konkani, Marathi, Malayalam, Hindi, Tamil
                    </p>
                    <p className="text-sm font-body text-rich-brown/90">
                      💬 <strong>Mrs. Pushkaran:</strong> English
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-forest-green p-6 rounded-xl text-white shadow-lg mb-6">
              <p className="font-body text-sm leading-relaxed mb-4">
                Travelling to North Goa, Panaji, or the Ponda temples? We're right on the main Belagavi-Goa highway (NH4A). Stop in for a fresh breakfast and hot tea before you hit the road — we're a key stop on the Dudhsagar and Bondla Sanctuary route.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="bg-rich-brown text-warm-cream px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  🚙 Ample Parking Space
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="bg-rich-brown text-warm-cream px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CreditCard size={10} />
                  Cash Preferred
                </div>
                <div className="bg-white/20 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CreditCard size={10} />
                  UPI Accepted
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="flex flex-col h-full min-h-[400px]">
            <div className="h-full rounded-2xl overflow-hidden border-2 border-muted-gold shadow-xl">
              <iframe
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=C37J%2B6QR,%20Tisk%20Usgao,%20Tisca,%20Darbandora,%20Goa%20403406+(Sree%20Murugan%20Hotel)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sree Murugan Hotel Location"
              ></iframe>
            </div>
            <a
              href="https://maps.app.goo.gl/9XdQyx5gHGezLLFH9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full bg-primary-saffron text-white py-4 rounded-full font-bold text-center hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Globe size={18} />
              Get Directions
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
