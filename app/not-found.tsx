"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Utensils, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-cream px-4 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        <div className="relative mb-8 flex justify-center">
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-32 h-32 bg-primary-saffron/10 rounded-full flex items-center justify-center text-primary-saffron"
          >
            <Utensils size={64} strokeWidth={1} />
          </motion.div>
          <div className="absolute -top-4 -right-4 bg-deep-terracotta text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
            404
          </div>
        </div>

        <h1 className="font-display text-4xl md:text-5xl text-rich-brown mb-4">
          Spices misplaced?
        </h1>
        <p className="font-body text-rich-brown/70 mb-8 leading-relaxed">
          It seems you've wandered away from the breakfast table. This page doesn't exist, but our Puttu and Appam are very real and waiting for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary-saffron text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg active:scale-95"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <Link 
            href="/#menu"
            className="inline-flex items-center justify-center gap-2 border-2 border-muted-gold text-rich-brown px-8 py-4 rounded-full font-bold hover:bg-muted-gold hover:text-white transition-all active:scale-95"
          >
            See Our Menu
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-muted-gold/20 italic text-sm text-rich-brown/40">
          "The best way to find yourself is to lose yourself in the service of breakfast."
        </div>
      </motion.div>
    </div>
  );
}
