"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Experience } from "@/components/Experience";
import { Gallery } from "@/components/Gallery";
import { Membership } from "@/components/Membership";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <main className="relative bg-charcoal min-h-screen">
      <Header />

      {/* Background Parallax Typography */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/4 -left-20 text-[20vw] font-serif text-off-white/[0.02] whitespace-nowrap leading-none"
        >
          APEX FITNESS CLUB EXCELLENCE
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-1/4 -right-20 text-[20vw] font-serif text-off-white/[0.02] whitespace-nowrap leading-none"
        >
          LUXURY WELLNESS BOUTIQUE
        </motion.div>
      </div>

      <div className="relative z-10">
        <Hero />
        <Philosophy />
        <Experience />
        <Gallery />
        <Membership />
        <Footer />
      </div>
    </main>
  );
}
