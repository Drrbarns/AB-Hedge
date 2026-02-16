
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight, Target, Users, Globe, Award, Search, HardHat, Coins } from "lucide-react";
import type { Metadata } from 'next';
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: 'About Us',
  description: 'AB Hedge Group: Unifying Research, Engineering, and Finance.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-40"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0f1f3d 30%, #0d1a30 60%, #0a1425 100%)"
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }} />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-amber-500/30 bg-amber-500/10 text-amber-400 tracking-wider uppercase text-[10px] sm:text-xs font-semibold backdrop-blur-sm">
            Our Purpose
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white max-w-4xl mx-auto">
            Architecting the <span className="text-amber-500">Future</span> of Industry.
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            AB Hedge Group unifies three powerful disciplines—Research, Engineering, and Finance—to solve the most complex challenges in the global extractive and infrastructure sectors.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white relative">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">A Unified Ecosystem</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Modern industrial projects require more than just one skillset. They demand a convergence of market intelligence, technical execution, and sustainable capital.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We founded AB Hedge Group to bridge these gaps. By integrating our specialized units, we provide a seamless "Concept to Commissioning" partnership for our clients in oil, gas, mining, and healthcare.
              </p>
              <div className="flex gap-4">
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-amber-600 font-bold">1</div>
                  <span className="font-semibold text-slate-900">Research</span>
                </div>
                <div className="w-px h-12 bg-slate-200 self-center hidden sm:block" />
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-amber-600 font-bold">2</div>
                  <span className="font-semibold text-slate-900">Build</span>
                </div>
                <div className="w-px h-12 bg-slate-200 self-center hidden sm:block" />
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-amber-600 font-bold">3</div>
                  <span className="font-semibold text-slate-900">Fund</span>
                </div>
              </div>
            </div>

            {/* Staggered Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 translate-y-8 shadow-lg">
                <Search className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">AB Hedge</h3>
                <p className="text-sm text-slate-500">Technical insights & market optimization strategies.</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl text-white">
                <HardHat className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="font-bold text-white mb-2">Sapalon Ghana</h3>
                <p className="text-sm text-slate-400">Engineering reliability & safety compliance.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg col-span-2 md:col-span-1 md:translate-x-8">
                <Coins className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Country Wide</h3>
                <p className="text-sm text-slate-500">Project finance & infrastructure funding.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Clean */}
      <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="container px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-amber-500 font-semibold mb-2">Years Experience</div>
              <p className="text-slate-400 text-sm">Combined leadership expertise</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">$500M+</div>
              <div className="text-amber-500 font-semibold mb-2">Project Value</div>
              <p className="text-slate-400 text-sm">Financed & managed globally</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">3</div>
              <div className="text-amber-500 font-semibold mb-2">Continents</div>
              <p className="text-slate-400 text-sm">Active operational footprint</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-amber-500 font-semibold mb-2">Client Retention</div>
              <p className="text-slate-400 text-sm">Trusted long-term partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Footer */}
      <section className="py-24 bg-white text-center">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Join Our Network</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-lg">
            Whether you need market data, technical support, or capital structuring, our specialized units are ready to deploy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="px-8 h-12" asChild>
              <Link href="/careers">Careers</Link>
            </Button>
            <Button className="bg-amber-500 text-slate-900 hover:bg-amber-600 px-8 h-12 font-bold" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
