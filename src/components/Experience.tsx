"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const items = [
    {
        id: 1,
        title: "Egyénre Szabott",
        subtitle: "A Te tempód, a mi szakértőnk.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 2,
        title: "Modern Technológia",
        subtitle: "Adatvezérelt fejlődés minden nap.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 3,
        title: "Wellness & Spa",
        subtitle: "A regeneráció ugyanolyan fontos.",
        image: "https://images.unsplash.com/photo-1591343395582-99bf4de994c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 4,
        title: "Privát Edzés",
        subtitle: "Személyre szabott teljesítmény optimalizálás.",
        image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 5,
        title: "Közösség",
        subtitle: "Hasonló célok, inspiráló kör.",
        image: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 6,
        title: "Társadalmi Élet",
        subtitle: "Exkluzív lounge és networking.",
        image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
];

export function Experience() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Calculated travel for 6 cards (500px width + 48px gap)
    // to align the last card with the right edge perfectly at scroll bottom.
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-58%"]);

    return (
        <section ref={targetRef} className="relative h-[600vh] bg-charcoal">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                {/* Visual anchor for text readability - Increased density */}
                <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-charcoal/95 via-charcoal/60 to-transparent z-[90] pointer-events-none backdrop-blur-[2px]" />

                <div className="absolute top-24 left-10 md:left-24 z-[100] pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-accent uppercase tracking-widest text-sm mb-4">Az Élmény</h2>
                        <h3 className="text-6xl md:text-9xl font-serif text-off-white drop-shadow-[0_10px_50px_rgba(0,0,0,0.8)] leading-tight">
                            Apex <br className="md:hidden" /> Életstílus
                        </h3>
                    </motion.div>
                </div>

                <motion.div style={{ x }} className="flex gap-12 px-10 md:px-24 relative z-10">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="group relative h-[450px] w-[350px] md:h-[600px] md:w-[500px] flex-shrink-0 overflow-hidden rounded-3xl border border-off-white/5"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
                            <div className="absolute inset-0 p-12 flex flex-col justify-end">
                                <h4 className="text-4xl font-serif text-off-white mb-2">{item.title}</h4>
                                <p className="text-off-white/60 font-sans text-lg">{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
