
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Globe, ShieldCheck, Wrench, Truck, Target, Eye, Handshake, Award, ArrowRight, Fuel, HardHat, HeartPulse } from "lucide-react";
import type { Metadata } from 'next';
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: 'Group Hedge — About Us',
  description: 'Group Hedge is an international company headquartered in Ghana, providing specialized supply solutions across the oil & gas, mining, and healthcare sectors.',
};

export default function ABHedgePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-[center_20%] md:bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-offshore.png')" }}
          />
          <div className="absolute inset-0 bg-slate-900/55 md:bg-slate-900/45" />
        </div>

        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center pt-28 pb-16 md:pt-32 md:pb-24">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-amber-500/30 bg-amber-500/10 text-amber-400 tracking-wider uppercase text-[10px] sm:text-xs font-semibold backdrop-blur-sm">
            International Supply & Solutions
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white max-w-5xl mx-auto">
            About <span className="text-amber-500">Group Hedge</span>.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            An international company headquartered in Ghana, providing specialized supply solutions across the oil & gas, mining, and healthcare sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 h-12 text-base font-semibold" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 h-12 text-base font-semibold bg-transparent" asChild>
              <Link href="#about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 mb-6">Who We Are</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Specialized Supply Solutions for <span className="text-amber-500">Critical Industries</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Group Hedge is an international company headquartered in Ghana, providing specialized supply solutions across the oil & gas, mining, and healthcare sectors. We focus on the procurement and supply of high-quality equipment and spare parts that meet international standards and support critical operations.
              </p>
              <p>
                Through a strong global network of manufacturers and strategic partners, Group Hedge delivers reliable, efficient, and cost-effective solutions tailored to the specific requirements of each client. Our operations are guided by professionalism, technical competence, and a commitment to excellence in service delivery.
              </p>
              <p>
                We take pride in supporting industrial and institutional development by ensuring timely access to dependable equipment that enhances operational efficiency, safety, and long-term sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-200">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 hover:border-amber-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 mb-8">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Our Vision</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be a leading international supply and solutions provider, recognized for reliability, quality, and excellence in supporting key industries across Africa and beyond.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 hover:border-amber-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 mb-8">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To deliver world-class oil, mining, and hospital equipment and spare parts through trusted global partnerships, while providing efficient service, technical support, and value-driven solutions that meet our clients' operational and strategic needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 mb-6">Industries</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Sectors We Serve</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We provide specialized equipment and spare parts to the industries that power economic growth and save lives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 group text-center">
              <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-8 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                <Fuel className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Oil & Gas</h3>
              <p className="text-slate-600 leading-relaxed">
                Procurement and supply of exploration, extraction, and production equipment — from drilling components to pipeline infrastructure and safety systems.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 group text-center">
              <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-8 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                <HardHat className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Mining</h3>
              <p className="text-slate-600 leading-relaxed">
                High-performance mining machinery, spare parts, and support equipment designed for demanding extraction environments and mineral processing operations.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 group text-center">
              <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-8 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                <HeartPulse className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Healthcare</h3>
              <p className="text-slate-600 leading-relaxed">
                Medical and hospital equipment supply that meets international quality standards — supporting healthcare delivery and institutional development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[120px]" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="bg-amber-500 text-slate-900 hover:bg-amber-600 mb-6">What Drives Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Every engagement is guided by the principles that define who we are and how we deliver.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <Globe className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-lg font-bold text-white mb-3">Global Reach</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A strong network of manufacturers and strategic partners across the globe.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <ShieldCheck className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-lg font-bold text-white mb-3">Quality Assurance</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Equipment and parts that meet international standards for safety and performance.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <Handshake className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-lg font-bold text-white mb-3">Client-Centric</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Solutions tailored to each client's specific operational and strategic requirements.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <Award className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-lg font-bold text-white mb-3">Excellence</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Professionalism and technical competence in every service we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Group Hedge */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 mb-6">Why Group Hedge</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Built on Trust, Driven by <span className="text-amber-500">Results</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Technical Competence</h4>
                    <p className="text-slate-600 leading-relaxed">Deep understanding of the equipment and operational demands across the industries we serve.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Reliable Delivery</h4>
                    <p className="text-slate-600 leading-relaxed">Timely access to dependable equipment that keeps your operations running without interruption.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Global Partnerships</h4>
                    <p className="text-slate-600 leading-relaxed">Trusted relationships with leading manufacturers worldwide ensure quality and competitive pricing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[100px]" />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Partner with Us?</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  Whether you need equipment for oil & gas operations, mining projects, or healthcare facilities — we&apos;re here to deliver solutions that work.
                </p>
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold w-full sm:w-auto" asChild>
                  <Link href="/contact">
                    Request a Quote <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
