"use client"

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BUSINESS_UNITS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export function BusinessUnits() {
    return (
        <section className="py-16 sm:py-24 md:py-32 bg-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-4">
                    <div className="max-w-xl">
                        <Badge className="mb-3 sm:mb-4 bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100">Our Ecosystem</Badge>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
                            Three Pillars of <span className="text-amber-600 italic">Excellence</span>
                        </h2>
                        <p className="mt-3 sm:mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                            A unified approach to industrial growth, combining deep research, technical execution, and reliable equipment supply.
                        </p>
                    </div>
                    <Link href="/about" className="group flex items-center font-medium text-slate-700 hover:text-amber-600 transition-colors text-sm sm:text-base">
                        Learn about our ecosystem <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {BUSINESS_UNITS.map((unit, index) => (
                        <motion.div key={unit.id} variants={item} className="h-full">
                            <div className="h-full group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden flex flex-col">
                                <div className={`h-1.5 w-full ${index === 0 ? 'bg-slate-900' : index === 1 ? 'bg-amber-500' : 'bg-emerald-600'}`} />
                                <div className="p-6 sm:p-8 flex-grow">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
                                        <unit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-slate-700 group-hover:text-amber-600 transition-colors" />
                                    </div>
                                    <Link href={unit.slug} className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors">
                                        {unit.name}
                                    </Link>
                                    <p className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">{unit.link.replace('Unit', '')}</p>
                                    <p className="text-slate-600 leading-relaxed mt-3 sm:mt-4 mb-4 sm:mb-6 text-sm sm:text-base">
                                        {unit.fullDescription}
                                    </p>
                                    <ul className="space-y-2">
                                        {unit.features.slice(0, 3).map((feature, i) => (
                                            <li key={i} className="flex items-center text-sm text-slate-700">
                                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-3 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="border-t border-slate-100 p-4 sm:p-6 bg-slate-50/50">
                                    <Link href={unit.slug} className="text-sm font-semibold flex items-center w-full justify-between text-slate-700 group-hover:text-amber-600 transition-colors">
                                        Explore {unit.name.split(' ')[0]} <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
