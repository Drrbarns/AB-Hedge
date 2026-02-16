"use client"

import { motion } from "framer-motion";
import { INDUSTRIES } from "@/lib/data";

export function IndustriesGrid() {
    return (
        <section className="py-16 sm:py-24 md:py-32" style={{ background: "linear-gradient(180deg, #f8f6f3 0%, #f0ece6 100%)" }}>
            <div className="container px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-amber-600 font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3">Industries We Serve</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4 text-slate-900">Sectors of Impact</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-10 sm:mb-16 text-sm sm:text-base">
                        Deep expertise across the foundational industries that power economies.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6">
                    {INDUSTRIES.map((industry, i) => (
                        <motion.div
                            key={industry.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.08 }}
                        >
                            <div className="group cursor-pointer bg-white rounded-xl sm:rounded-2xl border border-slate-200/60 p-4 sm:p-8 flex flex-col items-center justify-center hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300">
                                <div className="p-3 sm:p-4 rounded-full bg-slate-50 mb-3 sm:mb-4 group-hover:bg-amber-50 transition-colors">
                                    <industry.icon className="w-6 h-6 sm:w-8 sm:h-8 text-slate-500 group-hover:text-amber-600 transition-colors" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-semibold text-xs sm:text-sm tracking-wide text-slate-700 group-hover:text-amber-700 transition-colors">{industry.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
