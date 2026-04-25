"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
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
  const Component = (motion as any)[as] || motion.div;

  return (
    <Component
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
