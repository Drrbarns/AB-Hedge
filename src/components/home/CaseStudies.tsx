"use client"

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function CaseStudies() {
    return (
        <section className="py-16 sm:py-24 md:py-32 bg-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-16 gap-4">
                    <div>
                        <Badge className="mb-3 bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200">Projects</Badge>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
                            Global Impact & <span className="text-amber-600 italic">Success Stories</span>
                        </h2>
                    </div>
                    <span className="hidden sm:flex items-center text-sm font-semibold tracking-wide border-b-2 border-amber-500 text-slate-900 pb-1 whitespace-nowrap cursor-default">
                        View All Projects <ArrowUpRight className="ml-2 w-4 h-4" />
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {CASE_STUDIES.slice(0, 3).map((study, i) => (
                        <motion.div
                            key={study.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                        >
                            <div className="overflow-hidden group hover:shadow-xl transition-all duration-500 rounded-2xl bg-white border border-slate-200 h-full flex flex-col">
                                <div className="relative h-40 sm:h-56 overflow-hidden">
                                    <div className="absolute inset-0">
                                        <img
                                            src={study.image}
                                            alt={study.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex gap-2 flex-wrap">
                                        <Badge className="bg-white text-slate-800 hover:bg-white border-none shadow-sm text-[10px] sm:text-xs">{study.category}</Badge>
                                        <Badge className="bg-white/20 backdrop-blur-sm text-white border-none text-[10px] sm:text-xs">{study.unit}</Badge>
                                    </div>
                                </div>
                                <div className="mt-4 sm:mt-6 relative z-10 px-4 sm:px-6">
                                    <h3 className="text-lg sm:text-xl font-bold leading-tight text-slate-900 group-hover:text-amber-600 transition-colors">
                                        {study.title}
                                    </h3>
                                </div>
                                <div className="px-4 sm:px-6 py-3 sm:py-4 flex-grow">
                                    <p className="text-slate-500 line-clamp-3 text-sm leading-relaxed">
                                        {study.summary}
                                    </p>
                                </div>
                                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 mt-auto">
                                    <span className="flex items-center text-sm font-semibold text-amber-600 group-hover:translate-x-1 transition-transform cursor-default">
                                        Read Case Study <ArrowUpRight className="ml-2 w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 sm:mt-12 text-center sm:hidden">
                    <Button variant="outline" className="w-full" type="button">
                        View All Projects
                    </Button>
                </div>
            </div>
        </section>
    );
}
