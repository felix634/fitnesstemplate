"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Essential",
        price: "45.000",
        period: "Ft / hó",
        features: ["Klubtagság", "Öltözőhasználat", "Spa részleg access", "Napi 1 óra parkolás"],
        highlight: false,
    },
    {
        name: "Elite",
        price: "85.000",
        period: "Ft / hó",
        features: ["Essential összes", "Havi 4 személyi edzés", "Táplálkozási tanácsadás", "Mosoda szerviz", "VIP váró access"],
        highlight: true,
    },
    {
        name: "Prestige",
        price: "150.000",
        period: "Ft / hó",
        features: ["Elite összes", "Korlátlan személyi edzés", "Személyre szabott spa rituálék", "Saját öltözőszekrény", "Házhoz szállítás"],
        highlight: false,
    },
];

export function Membership() {
    return (
        <section id="tagság" className="py-32 px-6 md:px-24 bg-charcoal relative">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-accent uppercase tracking-widest text-sm mb-4">Tagság</h2>
                    <h3 className="text-4xl md:text-5xl font-serif text-off-white">Válaszd ki az utad</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className={`group p-10 rounded-3xl border transition-all duration-500 cursor-default hover:scale-[1.03] flex flex-col ${plan.highlight
                                    ? "border-accent bg-accent/5 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.05)] hover:shadow-[0_0_50px_rgba(212,175,55,0.15)]"
                                    : "border-off-white/10 bg-off-white/5 hover:border-accent/40 hover:bg-off-white/[0.08]"
                                }`}
                        >
                            <div className="mb-8">
                                <h4 className="text-2xl font-serif text-off-white mb-2 group-hover:text-accent transition-colors duration-500">{plan.name}</h4>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-serif text-accent">{plan.price}</span>
                                    <span className="text-off-white/50 font-sans text-sm">{plan.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-off-white/80 font-sans text-sm group-hover:text-off-white transition-colors">
                                        <Check className="w-4 h-4 text-accent mt-0.5" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`group/btn relative w-full py-4 rounded-2xl font-sans font-medium transition-all duration-500 overflow-hidden ${plan.highlight
                                    ? "bg-accent text-charcoal shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
                                    : "bg-off-white/10 text-off-white border border-off-white/10 hover:border-accent hover:text-accent"
                                }`}>
                                <span className="relative z-10">Jelentkezés</span>
                                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
