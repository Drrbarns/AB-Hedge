
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight, Search, TrendingUp, BarChart3, Database } from "lucide-react";
import type { Metadata } from 'next';
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: 'AB Hedge',
  description: 'Specialized Research & Solutions for the Oil, Gas, and Mining sectors.',
};

export default function ABHedgePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center border-b border-slate-200">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-[center_20%] md:bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-offshore.png')" }}
          />
          <div className="absolute inset-0 bg-slate-900/55 md:bg-slate-900/35" />
        </div>

        {/* Decorative Grid (optional, keeping subtle) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center pt-28 pb-16 md:pt-32 md:pb-24">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-amber-500/30 bg-amber-500/10 text-amber-400 tracking-wider uppercase text-[10px] sm:text-xs font-semibold backdrop-blur-sm">
            Research & Solutions
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white max-w-5xl mx-auto">
            Advanced Intelligence for <span className="text-amber-500">Extractives</span>.
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-10">
            AB Hedge is a specialized firm focused on research and solutions in the oil and gas sector and mining equipment industry. We conduct in-depth technical and market research to support the development, optimization, and deployment of advanced technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 h-12 text-base font-semibold" asChild>
              <Link href="/contact">Request Market Analysis</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 h-12 text-base font-semibold bg-transparent" asChild>
              <Link href="#capabilities">Our Capabilities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="capabilities" className="py-24 bg-white relative">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Analytical Insights & Optimization</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Through our analytical insights, AB Hedge aims to help stakeholders understand industry trends, equipment performance, and emerging opportunities in oil, gas, and mineral resource markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6 group">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                <Search className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Technical Research</h3>
                <p className="text-slate-600 leading-relaxed">
                  In-depth analysis of machinery used in exploration, extraction, and production. We evaluate performance metrics to support the deployment of next-gen equipment.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Market Trends</h3>
                <p className="text-slate-600 leading-relaxed">
                  Identifying emerging opportunities in global energy and mineral markets. We provide the foresight needed to capitalize on sector shifts.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                <Database className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Technology Optimization</h3>
                <p className="text-slate-600 leading-relaxed">
                  Supporting the development and optimization of advanced technologies. We bridge the gap between innovation and operational reality.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                <BarChart3 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Performance Analytics</h3>
                <p className="text-slate-600 leading-relaxed">
                  Data-driven assessment of extraction processes. We help stakeholders maximize output and extend asset lifecycles through precise intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insight / Report (Premium Style) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container px-4 md:px-6">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-amber-500 text-slate-900 mb-6 hover:bg-amber-600">Featured Report</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Future of Deep Sea Exploration: 2026 Outlook</h2>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  Our latest comprehensive study on the technological barriers and market potential of deep-water reserves in the Gulf of Guinea.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                    <Link href="/insights">Read Full Report</Link>
                  </Button>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                <h3 className="text-white font-bold mb-6 text-lg">Report Highlights</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-amber-500 text-sm font-bold uppercase tracking-wider mb-2">Technology</div>
                    <p className="text-slate-300">Assessment of autonomous underwater vehicles (AUVs) in pre-salt exploration.</p>
                  </div>
                  <div>
                    <div className="text-amber-500 text-sm font-bold uppercase tracking-wider mb-2">Market</div>
                    <p className="text-slate-300">ROI analysis of recent offshore blocks auctioned in West Africa.</p>
                  </div>
                  <div>
                    <div className="text-amber-500 text-sm font-bold uppercase tracking-wider mb-2">Risk</div>
                    <p className="text-slate-300">Regulatory framework changes impacting foreign direct investment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
