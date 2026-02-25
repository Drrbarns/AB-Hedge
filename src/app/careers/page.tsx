
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Users, Zap, Award, Globe, Briefcase } from "lucide-react";
import type { Metadata } from 'next';
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join AB Hedge Group and shape the future of global industry.',
};

const OPENINGS = [
  {
    return: "Senior Process Engineer",
    department: "Sapalon Ghana - Engineering",
    type: "Full-time",
    location: "Takoradi, Ghana",
    summary: "Lead technical optimization projects for major mining clients, overseeing installation and commissioning."
  },
  {
    title: "Supply Chain Analyst",
    department: "Country Wide - Procurement",
    type: "Full-time",
    location: "Accra, Ghana",
    summary: "Manage procurement pipelines and supplier relationships for infrastructure projects across West Africa."
  },
  {
    title: "Market Research Lead",
    department: "AB Hedge - Research",
    type: "Full-time",
    location: "Remote / Hybrid",
    summary: "Drive our market intelligence unit, producing high-level reports on commodity trends."
  },
  {
    title: "HSE Compliance Manager",
    department: "Sapalon Ghana - Safety",
    type: "Full-time",
    location: "Kumasi, Ghana",
    summary: "Ensure zero-compromise safety standards across all operational sites."
  }
];

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-40 border-b border-slate-200"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0f1f3d 30%, #0d1a30 60%, #0a1425 100%)"
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-[100px]" />
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-amber-500/30 bg-amber-500/10 text-amber-400 tracking-wider uppercase text-[10px] sm:text-xs font-semibold backdrop-blur-sm">
            Join the Team
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white max-w-4xl mx-auto">
            Build the <span className="text-amber-500">Future</span> of Industry.
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            We are always looking for exceptional talent to drive our mission of engineering excellence and sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 h-12 text-base font-semibold" asChild>
              <Link href="#openings">View Open Positions</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 h-12 text-base font-semibold bg-transparent" asChild>
              <Link href="/about">Our Culture</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-white relative">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why AB Hedge?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We offer more than just a job. We offer the chance to solve critical challenges that impact economies and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 text-amber-500 shadow-sm">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Impact at Scale</h3>
              <p className="text-slate-600 leading-relaxed">
                Work on projects valued at hundreds of millions, affecting essential infrastructure and energy sectors.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 text-amber-500 shadow-sm">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Excellence Rewarded</h3>
              <p className="text-slate-600 leading-relaxed">
                Competitive compensation, performance bonuses, and continuous professional development opportunities.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 text-amber-500 shadow-sm">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Global Exposure</h3>
              <p className="text-slate-600 leading-relaxed">
                Collaborate with international experts and gain experience across diverse markets and jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Current Openings</h2>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {OPENINGS.map((job, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 hover:border-amber-200 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-normal">{job.department}</Badge>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-normal">{job.location}</Badge>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-normal">{job.type}</Badge>
                  </div>
                  <p className="text-slate-600 text-sm max-w-xl">
                    {job.summary}
                  </p>
                </div>
                <Button className="shrink-0 bg-slate-900 text-white hover:bg-slate-800" asChild>
                  <Link href="/contact">Apply Now</Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 mb-4">Don't see your role? We are always hiring.</p>
            <Button variant="outline" className="text-slate-900 border-slate-300" asChild>
              <Link href="/contact">Send General Application</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
