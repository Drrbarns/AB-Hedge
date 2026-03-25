
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Hammer, Wrench, ShieldCheck, ClipboardCheck, Gauge, TimerReset, CheckCircle2 } from "lucide-react";
import type { Metadata } from 'next';
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: 'Sapalon Ghana Limited',
  description: 'Professional engineering and technical services company specializing in installation and maintenance.',
};

export default function SapalonPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center border-b border-slate-200">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-[center_20%] md:bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-mining.png')" }}
          />
          <div className="absolute inset-0 bg-slate-900/55 md:bg-slate-900/45" />
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center pt-28 pb-16 md:pt-32 md:pb-24">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-amber-500/30 bg-amber-500/10 text-amber-400 tracking-wider uppercase text-[10px] sm:text-xs font-semibold backdrop-blur-sm">
            Engineering Services
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white max-w-5xl mx-auto">
            Technical <span className="text-amber-500">Excellence</span> & Reliability.
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-10">
            Sapalon Ghana Limited is a professional engineering and technical services company specializing in the installation and maintenance of equipment for the oil and gas, mining, construction, and healthcare sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 h-12 text-base font-semibold" asChild>
              <Link href="/contact">Schedule Site Visit</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 h-12 text-base font-semibold bg-transparent" asChild>
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white relative">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Installation & Maintenance Experts</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We deliver reliable, industry-compliant solutions that ensure optimal performance, safety, and longevity of critical equipment across diverse industries in Ghana.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-xl hover:border-amber-200 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Hammer className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Equipment Installation</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Professional installation of complex machinery for mining, construction, and healthcare. We ensure precise calibration from day one.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Site preparation & planning</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Rigging & heavy lifting</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Commissioning & testing</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-xl hover:border-amber-200 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Wrench className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Technical Maintenance</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Ensuring longevity through scheduled servicing and emergency repairs. We minimize downtime for your critical assets.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Preventive maintenance plans</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Diagnostic troubleshooting</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Parts replacement</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-xl hover:border-amber-200 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Safety & Compliance</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Industry-compliant solutions that prioritize HSE standards. We operate within strict regulatory frameworks for oil & gas and mining.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Safety audits</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> ISO certification support</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Operator training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Capabilities */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 mb-5">Core Capabilities</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">Full-Scope Engineering Support</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We support project teams from pre-installation planning through commissioning and long-term maintenance,
              with strict adherence to safety, uptime, and operational quality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-amber-200 hover:shadow-lg transition-all">
              <ClipboardCheck className="w-10 h-10 text-amber-600 mb-5" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Pre-Execution Planning</h3>
              <p className="text-slate-600 leading-relaxed mb-5">
                Structured work scopes, method statements, and site readiness checks that reduce execution risk.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Scope and resource mapping</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Permit and safety alignment</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-amber-200 hover:shadow-lg transition-all">
              <Gauge className="w-10 h-10 text-amber-600 mb-5" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Commissioning Excellence</h3>
              <p className="text-slate-600 leading-relaxed mb-5">
                We test and validate installed systems to ensure stable operation, performance confidence, and handover quality.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Calibration and performance tests</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Structured commissioning reports</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-amber-200 hover:shadow-lg transition-all">
              <TimerReset className="w-10 h-10 text-amber-600 mb-5" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Lifecycle Maintenance</h3>
              <p className="text-slate-600 leading-relaxed mb-5">
                Planned and reactive maintenance services designed to sustain equipment life and minimize unplanned stoppages.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Preventive maintenance cycles</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Rapid troubleshooting support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Workflow */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 mb-5">Execution Model</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">Our Engineering Workflow</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              A practical step-by-step model that keeps engineering execution safe, controlled, and measurable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Site Assessment", text: "Evaluate site conditions, utility readiness, and technical constraints before mobilization." },
              { step: "02", title: "Installation", text: "Execute installation with disciplined supervision and strict compliance with approved procedures." },
              { step: "03", title: "Commissioning", text: "Run verification, performance testing, and handover validation with complete documentation." },
              { step: "04", title: "Maintenance Support", text: "Provide post-installation support plans to sustain uptime and operational stability." },
            ].map((item) => (
              <div key={item.step} className="bg-slate-50 rounded-2xl border border-slate-200 p-7 hover:shadow-lg transition-all">
                <div className="text-amber-600 text-sm font-bold tracking-wider mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">99.9%</div>
              <div className="text-slate-400 font-medium">Uptime Delivered</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">Zero</div>
              <div className="text-slate-400 font-medium">LTI Incidents</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">24/7</div>
              <div className="text-slate-400 font-medium">Rapid Response</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">10+</div>
              <div className="text-slate-400 font-medium">Years Expertise</div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Need technical support on a live project?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Sapalon provides dependable engineering teams for installation, commissioning, and maintenance across
              high-demand sectors where precision and uptime matter most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8" asChild>
                <Link href="/contact">Schedule Site Visit</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-900 hover:bg-slate-100 px-8" asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
