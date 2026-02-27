"use client";

import { motion } from "framer-motion";
import { Dumbbell, Sparkles, ShieldCheck } from "lucide-react";

const pillars = [
    {
        title: "Személyi edzés",
        desc: "Személyre szabott programok, amelyek a te céljaidhoz és testedhez alkalmazkodnak.",
        icon: Dumbbell,
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        large: true,
    },
    {
        title: "Regeneráció",
        desc: "Holisztikus wellness szolgáltatások a teljes testi és lelki felfrissülésért.",
        icon: Sparkles,
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        large: false,
    },
    {
        title: "Prémium környezet",
        desc: "Exkluzív tér, ahol minden részlet a kényelmet és a hatékonyságot szolgálja.",
        icon: ShieldCheck,
        image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        large: false,
    },
];

export function Philosophy() {
    return (
        <section id="filozófia" className="py-32 px-6 md:px-24 bg-charcoal text-off-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-accent uppercase tracking-widest text-sm mb-4">A Filozófiánk</h2>
                        <h3 className="text-4xl md:text-6xl font-serif leading-tight">
                            Több, mint egy edzőterem. <br />
                            <span className="text-off-white/50">Egy életstílus választás.</span>
                        </h3>
                    </div>
                    <div className="text-off-white/60 font-sans max-w-xs text-right">
                        Hiszünk abban, hogy a fejlődés alapja a tudomány és a luxus harmonikus találkozása.
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            className={`group relative overflow-hidden rounded-3xl ${pillar.large ? "md:row-span-2 h-[600px] md:h-auto" : "h-[400px]"}`}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out group-hover:scale-110 grayscale group-hover:grayscale-0 brightness-[0.4] group-hover:brightness-[0.8]"
                                style={{ backgroundImage: `url(${pillar.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />

                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                                <pillar.icon className="w-10 h-10 text-accent mb-6 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500" />
                                <h4 className="text-3xl font-serif mb-4 group-hover:text-accent transition-colors duration-500">{pillar.title}</h4>
                                <p className="text-off-white/70 font-sans max-w-sm">{pillar.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
