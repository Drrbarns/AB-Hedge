
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import type { Metadata } from 'next';
import { Badge } from "@/components/ui/badge";
import { INDUSTRIES } from "@/lib/data";

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Sectors we serve with specialized research, engineering, and financing.',
};

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-40"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0f1f3d 30%, #0d1a30 60%, #0a1425 100%)"
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-amber-500/30 bg-amber-500/10 text-amber-400 tracking-wider uppercase text-[10px] sm:text-xs font-semibold backdrop-blur-sm">
            Expertise
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white">
            Sectors of <span className="text-amber-500">Impact</span>.
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We provide deep specialization across the foundational industries that drive economic growth in emerging markets.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 -mt-20 relative z-20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry, i) => (
              <div key={industry.name} className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-amber-100/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                  <industry.icon className="w-32 h-32 text-slate-900" />
                </div>

                <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-amber-50 group-hover:border-amber-100 transition-colors">
                  <industry.icon className="w-7 h-7 text-slate-500 group-hover:text-amber-600 transition-colors" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">{industry.name}</h3>

                <p className="text-slate-600 mb-8 leading-relaxed relative z-10">
                  Partnering with global leaders in {industry.name.toLowerCase()} to deliver sustainable solutions and capital efficiency.
                </p>

                <div className="flex items-center text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  View Solutions <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Cross-Sector Intelligence</h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Our unique advantage lies in the synergy between our business units. Insights from mining inform our infrastructure financing, while engineering data drives our research strategies.
            </p>
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900" asChild>
              <Link href="/insights">Read Our Research</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
              <TrendingUp className="w-8 h-8 text-amber-500 mb-3" />
              <h4 className="font-bold mb-1">Market Analysis</h4>
              <p className="text-xs text-slate-400">Real-time data for strategic decisions.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm translate-y-8">
              <TrendingUp className="w-8 h-8 text-amber-500 mb-3" />
              <h4 className="font-bold mb-1">Risk Mitigation</h4>
              <p className="text-xs text-slate-400">Comprehensive compliance frameworks.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
