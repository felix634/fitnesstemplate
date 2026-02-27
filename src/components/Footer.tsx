"use client";

import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-24 px-6 md:px-24 bg-charcoal border-t border-off-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
                <div className="max-w-sm">
                    <div className="text-2xl font-serif text-accent mb-6">Apex Fitness</div>
                    <p className="text-off-white/50 font-sans text-sm leading-relaxed mb-8">
                        Budapest legexkluzívabb fitnesz közössége. Ahol az innovatív technológia és az emberi teljesítmény csúcsa találkozik.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full border border-off-white/10 flex items-center justify-center text-off-white/60 hover:text-accent hover:border-accent transition-all">
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-off-white/10 flex items-center justify-center text-off-white/60 hover:text-accent hover:border-accent transition-all">
                            <Facebook className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-24">
                    <div>
                        <div className="text-off-white text-sm uppercase tracking-widest mb-6">Kapcsolat</div>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-off-white/60 font-sans text-sm">
                                <MapPin className="w-4 h-4 text-accent" />
                                1051 Budapest, Szent István tér
                            </li>
                            <li className="flex items-center gap-3 text-off-white/60 font-sans text-sm">
                                <Phone className="w-4 h-4 text-accent" />
                                +36 1 234 5678
                            </li>
                            <li className="flex items-center gap-3 text-off-white/60 font-sans text-sm">
                                <Mail className="w-4 h-4 text-accent" />
                                info@apexfitness.hu
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="text-off-white text-sm uppercase tracking-widest mb-6">Nyitvatartás</div>
                        <ul className="space-y-2 text-off-white/60 font-sans text-sm">
                            <li className="flex justify-between gap-8">
                                <span>Hétfő - Péntek</span>
                                <span>06:00 - 22:00</span>
                            </li>
                            <li className="flex justify-between gap-8">
                                <span>Szombat</span>
                                <span>08:00 - 20:00</span>
                            </li>
                            <li className="flex justify-between gap-8">
                                <span>Vasárnap</span>
                                <span>09:00 - 18:00</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-off-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-off-white/30 text-xs font-sans">
                    © 2024 Apex Fitness. Minden jog fenntartva.
                </p>
                <div className="flex gap-6 text-off-white/30 text-xs font-sans">
                    <a href="#" className="hover:text-off-white transition-colors">Adatvédelem</a>
                    <a href="#" className="hover:text-off-white transition-colors">ÁSZF</a>
                </div>
            </div>
        </footer>
    );
}
