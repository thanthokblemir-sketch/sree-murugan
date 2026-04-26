"use client";

import { motion } from "motion/react";
import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/src/lib/utils";

export default function FadeUp({ 
  children, 
  delay = 0, 
  className,
  as = "div"
}: { 
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: string;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const Component = (motion as any)[as] || motion.div;

  // SEO Optimization: If not mounted (SSR), don't apply initial hidden state
  // This ensures Google crawlers see the content even without JS
  const initialStyles = isMounted ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 };

  return (
    <Component
      initial={initialStyles}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
