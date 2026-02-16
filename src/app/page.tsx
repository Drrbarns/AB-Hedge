import { Hero } from "@/components/home/Hero";
import { BusinessUnits } from "@/components/home/BusinessUnits";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Trust } from "@/components/home/Trust";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <BusinessUnits />
      <IndustriesGrid />
      <CaseStudies />

      {/* Insights Preview — Light warm section */}
      <section className="py-16 sm:py-24 md:py-32" style={{ background: "linear-gradient(180deg, #f8f6f3 0%, #f0ece6 100%)" }}>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-3">
            <div>
              <p className="text-amber-600 font-semibold text-xs sm:text-sm tracking-wider uppercase mb-1 sm:mb-2">Knowledge & Research</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Latest Insights</h2>
            </div>
            <Button variant="ghost" asChild className="text-slate-700 hover:text-amber-600 -ml-4 sm:ml-0">
              <Link href="/insights">View All <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "The Future of Sustainable Mining in West Africa: 2026 Outlook", tag: "Market Report", image: "/images/insight-mining.png" },
              { title: "Infrastructure Financing Models for Emerging Markets", tag: "White Paper", image: "/images/insight-finance.png" },
              { title: "Engineering Excellence in Offshore Oil & Gas Operations", tag: "Industry Analysis", image: "/images/insight-engineering.png" }
            ].map((insight, i) => (
              <div key={i} className="group cursor-pointer bg-white rounded-xl sm:rounded-2xl border border-slate-200/60 overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500" />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="text-[10px] sm:text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">{insight.tag}</div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 text-slate-900 group-hover:text-amber-600 transition-colors leading-tight">
                    {insight.title}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-2">
                    An in-depth analysis of regulatory shifts and technology adoption trends driving the next wave of investment.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Trust />

      {/* Final CTA — Gold/Amber accent section */}
      <section className="py-20 sm:py-32 text-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #92400e 0%, #b45309 30%, #d97706 60%, #b45309 100%)"
        }}
      >
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }} />
        <div className="container px-4 md:px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 max-w-4xl mx-auto text-white">
            Ready to transform your operations?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-amber-100/80 max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
            Connect with our specialized teams to discuss your specific challenges in research, engineering, or financing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Button size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold bg-white text-amber-800 hover:bg-amber-50 shadow-lg w-full sm:w-auto" asChild>
              <Link href="/contact">Start a Conversation</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg bg-transparent border-white/30 hover:bg-white/10 text-white font-semibold w-full sm:w-auto" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
