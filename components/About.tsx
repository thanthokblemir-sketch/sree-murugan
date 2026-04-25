import SectionDivider from "./SectionDivider";
import FadeUp from "./FadeUp";

export default function About() {
  return (
    <section id="story" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeUp delay={0.1}>
            <span className="font-lato font-bold text-xs uppercase tracking-[0.2em] text-muted-gold mb-4 block">
              OUR STORY
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-rich-brown mb-8 leading-tight">
              A Family Kitchen,<br className="hidden md:block" />Thirty Years Running
            </h2>
            
            <div className="space-y-6 text-rich-brown/90 font-body leading-relaxed max-w-xl">
              <p>
                Sree Murugan Hotel & Restaurant has been a landmark on the main road in Tisca, Ponda for over 30 years. What started as a humble morning kitchen has grown into a beloved stop for locals, daily commuters, and travellers passing through Goa.
              </p>
              <p>
                Every dish is cooked fresh each morning by our family — the same hands, the same recipes, the same care. No shortcuts. No frozen food. Just real, homemade South Indian cooking the way it has always been done.
              </p>
              <p>
                Mr. Pushkaran runs the kitchen and speaks Konkani, Marathi, Malayalam, Hindi, and Tamil. His wife handles English-speaking guests. Everyone is welcome at our table.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <span className="font-noto text-3xl text-muted-gold/80">ആതിഥ്യം</span>
              <span className="font-lato italic text-muted-gold text-sm">(Hospitality)</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="relative mt-8 lg:mt-0">
            {/* Decorative Card */}
            <div className="bg-deep-terracotta p-6 md:p-8 rounded-[24px] shadow-2xl relative z-10 overflow-hidden border-4 border-muted-gold/20">
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#FFF8EE_1px,transparent_1px)] bg-[size:16px_16px]"></div>
              
              <div className="grid grid-cols-2 gap-4 md:gap-8 relative z-10">
                <div className="text-center p-3 md:p-4 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
                  <div className="font-display text-3xl md:text-4xl text-primary-saffron mb-1 md:mb-2">30+</div>
                  <div className="font-body text-[9px] md:text-[10px] text-warm-cream uppercase tracking-widest font-bold">Years Serving</div>
                </div>
                <div className="text-center p-3 md:p-4 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
                  <div className="font-display text-3xl md:text-4xl text-primary-saffron mb-1 md:mb-2">6 AM</div>
                  <div className="font-body text-[9px] md:text-[10px] text-warm-cream uppercase tracking-widest font-bold">We Open</div>
                </div>
                <div className="text-center p-3 md:p-4 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
                  <div className="font-display text-3xl md:text-4xl text-primary-saffron mb-1 md:mb-2">10+</div>
                  <div className="font-body text-[9px] md:text-[10px] text-warm-cream uppercase tracking-widest font-bold">Menu Items</div>
                </div>
                <div className="text-center p-3 md:p-4 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
                  <div className="font-display text-3xl md:text-4xl text-primary-saffron mb-1 md:mb-2">5</div>
                  <div className="font-body text-[9px] md:text-[10px] text-warm-cream uppercase tracking-widest font-bold">Languages</div>
                </div>
              </div>
              
              <div className="mt-6 md:mt-8 text-center border-t border-white/10 pt-4 md:pt-6">
                <p className="font-body text-xs italic text-warm-cream opacity-70">
                  "The taste of Kerala in the heart of Ponda"
                </p>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-full h-full border-2 border-muted-gold rounded-[24px] -z-10"></div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
