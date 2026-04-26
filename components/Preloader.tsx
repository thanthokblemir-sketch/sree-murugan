"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    setIsLoading(true);
    
    // Lock scrolling while preloader is active
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    }, 2000); // 2 second divine intro

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!hasMounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] bg-warm-cream flex items-center justify-center flex-col"
        >
          {/* Animated Mandala/Lotus */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8 relative"
          >
            {/* Soft Glow */}
            <div className="absolute inset-0 bg-primary-saffron/20 rounded-full blur-[40px] scale-150 animate-pulse"></div>
            
            <svg 
              width="80" 
              height="80" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              className="text-primary-saffron relative z-10"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {/* Outer Petals */}
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M12 22V2M12 22C7.5 22 4 17.5 4 12S7.5 2 12 2M12 22C16.5 22 20 17.5 20 12S16.5 2 12 2" 
                fill="rgba(232, 135, 26, 0.1)"
              />
              {/* Inner Petals */}
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                d="M12 22C9.5 22 7.5 17.5 7.5 12S9.5 2 12 2M12 22C14.5 22 16.5 17.5 16.5 12S14.5 2 12 2" 
                fill="rgba(232, 135, 26, 0.2)"
              />
            </svg>
          </motion.div>

          {/* Text Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="font-display text-2xl md:text-3xl text-rich-brown uppercase tracking-[0.2em] mb-2 font-bold">
              Sree Murugan
            </h1>
            <p className="font-lato text-xs text-deep-terracotta uppercase tracking-widest opacity-80">
              Homemade Since 1994
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
