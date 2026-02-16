"use client"

import { motion } from "framer-motion";
import { ShieldCheck, Scale, HardHat, FileCheck } from "lucide-react";

const PILLARS = [
    {
        icon: ShieldCheck,
        title: "Rigorous Governance",
        description: "Multi-jurisdictional compliance framework adhering to international financial and operational standards."
    },
    {
        icon: Scale,
        title: "Ethical Financing",
        description: "Transparency and integrity in every transaction, fully compliant with global AML/KYC regulations."
    },
    {
        icon: HardHat,
        title: "Safety First Culture",
        description: "Zero-compromise HSE protocols across all engineering and mining operations."
    },
    {
        icon: FileCheck,
        title: "Standards & Excellence",
        description: "ISO 9001 certified processes driving quality assurance in research and deployment."
    }
];

export function Trust() {
    return (
        <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #0f1f3d 0%, #0a1628 50%, #111827 100%)"
            }}
        >
            {/* Subtle dot pattern */}
            <div className="absolute inset-0 opacity-[0.06]" style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "24px 24px"
            }} />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center mb-10 sm:mb-16">
                    <p className="text-amber-400 font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3">Why Trust Us</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4">Uncompromising Standards</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
                        At AB Hedge Group, trust is our most valuable asset. We operate with absolute integrity, safety, and precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {PILLARS.map((pillar, i) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 inline-block group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-300">
                                <pillar.icon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 group-hover:text-slate-900" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">{pillar.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
