
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building2, Truck, Activity, Landmark, LineChart, Coins } from "lucide-react";
import type { Metadata } from 'next';
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: 'Country Wide',
  description: 'Project financing solutions for Healthcare, Oil & Gas, Mining, and Infrastructure.',
};

export default function CountryWidePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[85vh] md:min-h-[70vh] flex items-center border-b border-slate-200">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-[center_20%] md:bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-infrastructure.png')" }}
          />
          <div className="absolute inset-0 bg-slate-900/55 md:bg-slate-900/35" />
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center pt-28 pb-16 md:pt-32 md:pb-24">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-amber-500/30 bg-amber-500/10 text-amber-400 tracking-wider uppercase text-[10px] sm:text-xs font-semibold backdrop-blur-sm">
            Financial Institution
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white max-w-5xl mx-auto">
            Sustainable Funding for <span className="text-amber-500">Infrastructure</span>.
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-10">
            Country Wide is a financial institution dedicated to providing project financing solutions for the healthcare, oil and gas, mining, and road construction sectors. We structure sustainable funding that supports operational growth and long-term economic impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 h-12 text-base font-semibold border border-transparent shadow-lg shadow-amber-900/20" asChild>
              <Link href="/country-wide/apply">Apply for Financing</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 h-12 text-base font-semibold bg-transparent" asChild>
              <Link href="#solutions">Investment Sectors</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-24 bg-white relative">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Solution 1 */}
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all">
                <Landmark className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Project Financing</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Dedicated capital structuring for large-scale developments. We focus on sustainable funding models that align with long-term economic goals in critical industries.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-white hover:bg-slate-100">Debt Structuring</Badge>
                <Badge variant="secondary" className="bg-white hover:bg-slate-100">Equity Participation</Badge>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all">
                <LineChart className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Operational Growth</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Working capital and equipment leasing facilities designed to accelerate expansion. Unlock potential in emerging markets without draining cash reserves.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-white hover:bg-slate-100">Equipment Leasing</Badge>
                <Badge variant="secondary" className="bg-white hover:bg-slate-100">Trade Finance</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Grid Mini */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Sectors We Fund</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-all">
              <Activity className="w-10 h-10 text-amber-500 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900">Healthcare</h3>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-all">
              <Building2 className="w-10 h-10 text-amber-500 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900">Oil & Gas</h3>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-all">
              <Coins className="w-10 h-10 text-amber-500 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900">Mining</h3>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-all">
              <Truck className="w-10 h-10 text-amber-500 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900">Road Construction</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
