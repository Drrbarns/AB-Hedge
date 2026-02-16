"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Globe, Activity, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HERO_IMAGES = [
    "/images/hero-offshore.png",
    "/images/hero-mining.png",
    "/images/hero-infrastructure.png"
];

export function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-8 bg-slate-900">
            {/* Background Image Slider */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        {/* Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${HERO_IMAGES[currentIndex]})` }}
                        />
                        {/* Light Overlay (20%) */}
                        <div className="absolute inset-0 bg-slate-900/20" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Subtle gold accent glow (kept from original but reduced opacity) */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[800px] h-[200px] sm:h-[400px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[300px] sm:w-[600px] h-[150px] sm:h-[300px] bg-amber-600/5 rounded-full blur-[60px] sm:blur-[100px]" />
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.05]" style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }} />
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Badge variant="outline" className="mb-4 sm:mb-6 px-3 sm:px-4 py-1 sm:py-1.5 border-amber-500/30 bg-amber-500/10 text-amber-400 tracking-wider uppercase text-[10px] sm:text-xs font-semibold backdrop-blur-sm">
                        Global Industrial Solutions
                    </Badge>
                </motion.div>

                <motion.h1
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl mb-4 sm:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60">
                        Strategic Intelligence.
                    </span>
                    <span className="block text-white/90 mt-1 sm:mt-2">
                        Industrial Excellence.
                    </span>
                    <span className="block text-amber-400 mt-1 sm:mt-2">
                        Sustainable Capital.
                    </span>
                </motion.h1>

                <motion.p
                    className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mb-8 sm:mb-10 leading-relaxed px-2 drop-shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    AB Hedge Group delivers world-class research, engineering solutions, and project financing to empower the heavy industries that drive global growth.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all font-medium bg-amber-500 hover:bg-amber-600 text-slate-900 w-full sm:w-auto" asChild>
                        <Link href="/contact">
                            Talk to an Expert <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base border-white/20 hover:bg-white/10 text-white w-full sm:w-auto backdrop-blur-sm" asChild>
                        <Link href="/services">
                            Explore Our Services
                        </Link>
                    </Button>
                </motion.div>

                {/* Trust Strip */}
                <motion.div
                    className="mt-12 sm:mt-20 pt-8 sm:pt-10 border-t border-white/10 w-full max-w-4xl grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-4 sm:gap-8 md:gap-16 relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 justify-center">
                        <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 flex-shrink-0" /> ISO 9001 Certified
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 justify-center">
                        <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 flex-shrink-0" /> Global Presence
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 justify-center">
                        <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 flex-shrink-0" /> $500M+ Financed
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 justify-center">
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 flex-shrink-0" /> Fortune 500 Partners
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
