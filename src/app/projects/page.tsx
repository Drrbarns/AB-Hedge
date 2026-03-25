
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight, Filter } from "lucide-react";
import type { Metadata } from 'next';
import { Badge } from "@/components/ui/badge";
import { CASE_STUDIES } from "@/lib/data";

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore our latest projects across all sectors.',
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-40"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0f1f3d 30%, #0d1a30 60%, #0a1425 100%)"
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-amber-500/30 bg-amber-500/10 text-amber-400 tracking-wider uppercase text-[10px] sm:text-xs font-semibold backdrop-blur-sm">
            Our Portfolio
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white">
            A Legacy of <span className="text-amber-500">Innovation</span>.
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From deep-water exploration to sustainable infrastructure, our projects define the cutting edge of industrial capability.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 -mt-20 relative z-20">
        <div className="container px-4 md:px-6">
          {/* Filters (Placeholder for now) */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white p-1.5 rounded-full shadow-lg border border-slate-100 items-center overflow-x-auto max-w-full">
              <Button variant="ghost" size="sm" className="rounded-full bg-slate-900 text-white hover:bg-slate-800 px-6">All</Button>
              <Button variant="ghost" size="sm" className="rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 px-6">Oil & Gas</Button>
              <Button variant="ghost" size="sm" className="rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 px-6">Mining</Button>
              <Button variant="ghost" size="sm" className="rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 px-6">Infrastructure</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study, i) => (
              <div key={study.slug} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-amber-100/50 transition-all duration-300 border border-slate-100 flex flex-col h-full">
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 transition-colors uppercase tracking-wider text-[10px]">{study.category}</Badge>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-amber-400 transition-colors">{study.title}</h3>
                    <div className="flex items-center text-slate-300 text-xs font-medium uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mr-2" />
                      {study.unit}
                    </div>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm flex-grow">
                    {study.summary}
                  </p>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors flex items-center cursor-default">
                      View Case Study <ArrowUpRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Have a challenging project?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Our engineers and analysts thrive on complexity. Let's discuss how we can bring your vision to life.
          </p>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8" asChild>
            <Link href="/contact">Request a Proposal</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
