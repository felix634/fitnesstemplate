"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-24 py-6 ${scrolled ? "bg-charcoal/80 backdrop-blur-md py-4 border-b border-off-white/5" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
                        <path d="M20 5L35 30H5L20 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 12L28 25H12L20 12Z" fill="currentColor" />
                    </svg>
                    <span className="text-2xl font-serif text-off-white tracking-tight">Apex Fitness</span>
                </div>

                <nav className="hidden md:flex items-center gap-12 text-sm uppercase tracking-widest font-sans text-off-white/70">
                    {["Rólunk", "Filozófia", "Galéria", "Tagság", "Kapcsolat"].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-accent transition-colors duration-300">
                            {item}
                        </a>
                    ))}
                </nav>

                <button className="px-6 py-2 border border-accent text-accent rounded-full text-sm uppercase tracking-widest hover:bg-accent hover:text-charcoal transition-all duration-300">
                    Klubtagság
                </button>
            </div>
            {/* Scroll Progress Line */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left"
                style={{ scaleX }}
            />
        </motion.header>
    );
}
