
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight, BookOpen, TrendingUp, FileText, Calendar, Clock } from "lucide-react";
import type { Metadata } from 'next';
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Latest market reports, industry analysis, and technical papers from AB Hedge Group.',
};

const INSIGHTS = [
  {
    title: "The Future of Sustainable Mining in West Africa: 2026 Outlook",
    category: "Market Report",
    date: "Feb 12, 2026",
    readTime: "15 min read",
    summary: "An in-depth analysis of regulatory shifts and technology adoption trends driving the next wave of investment in the region's extractive sector.",
    image: "/images/insight-mining.png"
  },
  {
    title: "Infrastructure Financing Models for Emerging Markets",
    category: "White Paper",
    date: "Jan 28, 2026",
    readTime: "25 min read",
    summary: "Breaking down the success of PPPs in roadway and healthcare development. A guide for investors and government entities.",
    image: "/images/insight-finance.png"
  },
  {
    title: "Engineering Excellence in Offshore Oil & Gas Operations",
    category: "Technical Paper",
    date: "Jan 15, 2026",
    readTime: "12 min read",
    summary: "Case studies on maximizing asset lifespan through advanced predictive maintenance and corrosion control strategies.",
    image: "/images/insight-engineering.png"
  },
  {
    title: "Lithium & Battery Metals: The New Gold Rush",
    category: "Market Report",
    date: "Dec 10, 2025",
    readTime: "18 min read",
    summary: "Supply chain vulnerabilities and opportunities for West African producers in the global EV revolution.",
    image: "/images/insight-lithium.png"
  },
  {
    title: "Renewable Energy Integration in Heavy Industry",
    category: "Technical Paper",
    date: "Nov 22, 2025",
    readTime: "10 min read",
    summary: "Hybrid power solutions for remote mine sites: Cost benefit analysis and implementation roadmap.",
    image: "/images/insight-energy.png"
  },
  {
    title: "The Digital Mine: AI & Automation",
    category: "Industry Analysis",
    date: "Oct 05, 2025",
    readTime: "20 min read",
    summary: "How autonomous haulage systems are redefining operational efficiency benchmarks across the continent.",
    image: "/images/insight-ai.png"
  }
];

export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-40 border-b border-slate-200"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0f1f3d 30%, #0d1a30 60%, #0a1425 100%)"
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-amber-500/30 bg-amber-500/10 text-amber-400 tracking-wider uppercase text-[10px] sm:text-xs font-semibold backdrop-blur-sm">
            Knowledge Hub
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white max-w-4xl mx-auto">
            Market <span className="text-amber-500">Intelligence</span> & Analysis.
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with our expert research on industry trends, technical innovations, and financial strategies.
          </p>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="py-12 -mt-16 sm:-mt-24 relative z-20 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 grid md:grid-cols-2">
            <div className="bg-slate-900 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent pointer-events-none" />
              <Badge className="bg-amber-500 text-slate-900 mb-6 self-start">Trending Now</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">Global Commodity Price Forecast: Q2 2026</h2>
              <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                Our analysts predict a significant shift in base metal valuations driven by supply constraints in major producing nations.
              </p>
              <div className="flex items-center gap-6 text-sm text-slate-500 mb-8">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Feb 14, 2026</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 8 min read</span>
              </div>
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 self-start" asChild>
                <Link href="/insights/commodity-forecast-q2">Read Full Report</Link>
              </Button>
            </div>
            <div className="bg-slate-100 relative min-h-[300px] md:min-h-auto flex items-center justify-center">
              <img
                src="/images/insight-finance.png"
                alt="Global Commodity Price Forecast"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Latest Articles</h2>
            <Button variant="outline" className="hidden sm:flex">View Archive</Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INSIGHTS.map((insight, i) => (
              <Link key={i} href={`/insights/${insight.title.toLowerCase().replace(/ /g, '-')}`} className="group block h-full">
                <article className="flex flex-col h-full bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-300 overflow-hidden">
                  <div className="h-56 bg-slate-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />
                    <div className="absolute bottom-4 left-4 z-20">
                      <Badge variant="secondary" className="bg-white/90 text-slate-900 backdrop-blur-sm shadow-sm">{insight.category}</Badge>
                    </div>
                    {/* Article Image */}
                    <div className="absolute inset-0">
                      <img
                        src={insight.image}
                        alt={insight.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      <span>{insight.date}</span>
                      <span>•</span>
                      <span>{insight.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {insight.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {insight.summary}
                    </p>
                    <div className="mt-auto flex items-center text-sm font-bold text-amber-600 group-hover:translate-x-1 transition-transform">
                      Read More <ArrowUpRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center sm:hidden">
            <Button variant="outline" className="w-full">View Archive</Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Intel</h2>
          <p className="text-slate-400 mb-8 text-lg">
            Get the latest market analysis and technical reports delivered directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-all"
            />
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
