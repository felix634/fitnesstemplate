"use client";

import { motion } from "framer-motion";

const images = [
    {
        url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        cols: "md:col-span-2",
        rows: "md:row-span-2",
    },
    {
        url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        cols: "md:col-span-1",
        rows: "md:row-span-1",
    },
    {
        url: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        cols: "md:col-span-1",
        rows: "md:row-span-1",
    },
    {
        url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        cols: "md:col-span-2",
        rows: "md:row-span-1",
    },
];

export function Gallery() {
    return (
        <section id="galéria" className="py-32 px-6 md:px-24 bg-charcoal text-off-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-accent uppercase tracking-widest text-sm mb-4">A Tér</h2>
                    <h3 className="text-4xl md:text-5xl font-serif">Ahol a fegyelem és a kényelem találkozik</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className={`group relative overflow-hidden rounded-3xl ${img.cols} ${img.rows}`}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-110"
                                style={{ backgroundImage: `url(${img.url})` }}
                            />
                            <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-transparent transition-colors duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
