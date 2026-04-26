import { cn } from "@/src/lib/utils";
import FadeUp from "./FadeUp";

const MENU_ITEMS = [
  { emoji: "🥥", name: "Puttu & Kadala Curry", desc: "Steamed rice cylinders with spiced black chickpea curry" },
  { emoji: "🫓", name: "Appam & Egg Curry", desc: "Soft lacy rice hoppers with fragrant egg curry" },
  { emoji: "🌾", name: "Idiyappam", desc: "Delicate string hoppers, served with coconut milk or curry" },
  { emoji: "🫔", name: "Porotta", desc: "Flaky, layered Kerala flatbread — crisp outside, soft inside" },
  { emoji: "🍚", name: "Idly & Sambar", desc: "Fluffy steamed rice cakes with lentil sambar and chutneys" },
  { emoji: "🍞", name: "Pav", desc: "Soft bread rolls, a Goan morning favourite" },
  { emoji: "☕", name: "Chai & Coffee", desc: "Strong, sweet South Indian chai and filter coffee" },
  { emoji: "🥤", name: "Soda & Cold Drinks", desc: "Chilled soft drinks and soda to refresh" },
];

export default function Menu() {
  return (
    <section id="menu" className="py-16 md:py-24 bg-soft-peach relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #B85C2A, #B85C2A 1px, transparent 1px, transparent 10px)'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <FadeUp delay={0.1} className="text-center mb-12 md:mb-16">
          <span className="font-lato font-bold text-xs uppercase tracking-[0.2em] text-muted-gold mb-4 block">
            WHAT WE SERVE
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-rich-brown mb-4">
            Every Dish, Made Fresh This Morning
          </h2>
          <p className="font-body text-deep-terracotta opacity-80 max-w-2xl mx-auto italic">
            Our menu changes slightly by day based on what's freshest. Come early for the full spread.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MENU_ITEMS.map((item, index) => (
            <FadeUp key={index} delay={0.15 + index * 0.05}>
              <div 
                className="h-full bg-white p-6 rounded-[12px] shadow-[0_4px_20px_rgba(184,92,42,0.12)] border border-muted-gold/10 hover:translate-y-[-4px] transition-all duration-300 group"
              >
                <div 
                  role="img"
                  aria-label={item.name}
                  className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform",
                    index % 2 === 0 ? "bg-primary-saffron/10" : "bg-deep-terracotta/10"
                  )}
                >
                  {item.emoji}
                </div>
                <h3 className="font-display font-bold text-xl text-rich-brown mb-2">
                  {item.name}
                </h3>
                <p className="font-body text-sm text-rich-brown/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.6} className="mt-12 md:mt-16 bg-deep-terracotta py-6 px-4 rounded-xl text-center shadow-lg mx-auto max-w-4xl">
          <p className="text-warm-cream font-body text-sm md:text-base tracking-wide flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 font-bold">
            <span className="flex items-center gap-2">✨ Fresh Daily</span>
            <span className="hidden md:inline opacity-30">|</span>
            <span className="text-center">No preservatives. No reheating. Just honest, homemade food.</span>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
