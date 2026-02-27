"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section id="rólunk" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal">
            {/* Cinematic Background */}
            <div
                className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 brightness-[0.4] hover:brightness-[0.7] transition-all duration-[1500ms] ease-in-out"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-transparent to-charcoal" />

            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-6"
                >
                    <span className="text-accent tracking-[0.3em] text-sm uppercase font-sans">
                        Apex Fitness Budapest
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-serif text-off-white mb-8 tracking-tight"
                >
                    Alakítsd önmagad <span className="italic text-accent/80">újra</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <button className="px-10 py-4 bg-accent text-charcoal rounded-3xl font-sans font-medium hover:scale-105 transition-transform duration-300">
                        Csatlakozz a körhöz
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-off-white/30 text-xs uppercase tracking-widest font-sans">Fedezd fel</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-accent/50 to-transparent" />
            </motion.div>
        </section>
    );
}
