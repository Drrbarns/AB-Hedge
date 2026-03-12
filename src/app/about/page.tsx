
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Search, HardHat, Coins, Quote } from "lucide-react";
import type { Metadata } from 'next';
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: 'About Us',
  description: 'AB Group Hedge: Unifying Research, Engineering, and Supply Solutions under the visionary leadership of Mr Abu Hassan Mahama.',
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
            Our Story
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white max-w-4xl mx-auto">
            About <span className="text-amber-500">AB Group Hedge</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A visionary enterprise built on the pillars of Research, Engineering, and Supply Solutions — driving industrial progress across Africa and beyond.
          </p>
        </div>
      </section>

      {/* Founder & CEO Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Side */}
            <div className="order-2 lg:order-1">
              <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 mb-6">Leadership</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Meet the <span className="text-amber-500">Visionary</span> Behind the Group
              </h2>
              <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
                <p>
                  AB Group Hedge was founded by <strong className="text-slate-900">Mr Abu Hassan Mahama</strong>, a distinguished business leader and entrepreneur with deep roots in Ghana&apos;s industrial landscape. Driven by an unwavering commitment to excellence and a bold vision for Africa&apos;s economic transformation, he established AB Group Hedge to bridge the gap between world-class industrial solutions and the continent&apos;s growing demand for reliable supply, engineering, and research services.
                </p>
                <p>
                  Under his leadership, the group has grown from a single-focused enterprise into a diversified conglomerate operating across the oil &amp; gas, mining, healthcare, and infrastructure sectors. Mr Mahama&apos;s hands-on approach and strategic foresight have been instrumental in forging partnerships with leading global manufacturers, ensuring that every project undertaken by AB Group Hedge meets the highest international standards.
                </p>
                <p>
                  His philosophy is simple yet powerful: <em className="text-slate-800 font-medium">invest in people, deliver with integrity, and build solutions that outlast the projects themselves.</em> This guiding principle has earned the trust of clients, partners, and institutions across three continents.
                </p>
              </div>

              <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <Quote className="w-8 h-8 text-amber-500/40 mb-3" />
                <p className="text-slate-700 italic text-base leading-relaxed">
                  &ldquo;We don&apos;t just supply equipment — we build the foundations for industries that uplift communities and drive nations forward.&rdquo;
                </p>
                <p className="text-amber-600 font-semibold text-sm mt-3">— Mr Abu Hassan Mahama, CEO &amp; Founder</p>
              </div>
            </div>

            {/* Image Side */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 via-amber-500/5 to-transparent rounded-3xl blur-xl" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl max-w-sm mx-auto lg:max-w-md w-full aspect-[4/5] bg-slate-100">
                  <Image
                    src="/images/ceo-founder.png"
                    alt="Mr Abu Hassan Mahama — CEO & Founder of AB Group Hedge"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 sm:left-4 lg:-left-4 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-xl z-10">
                  <p className="font-bold text-lg">Mr Abu Hassan Mahama</p>
                  <p className="text-amber-500 text-sm font-medium">CEO &amp; Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Group */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 relative">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 mb-6">Who We Are</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">A Unified Ecosystem</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Modern industrial projects require more than just one skillset. They demand a convergence of market intelligence, technical execution, and reliable supply chains.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                AB Group Hedge was built to bridge these gaps. By integrating our specialized units, we provide a seamless &ldquo;Concept to Commissioning&rdquo; partnership for our clients in oil, gas, mining, and healthcare.
              </p>
              <div className="flex gap-4">
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-amber-600 font-bold border border-slate-200">1</div>
                  <span className="font-semibold text-slate-900">Research</span>
                </div>
                <div className="w-px h-12 bg-slate-300 self-center hidden sm:block" />
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-amber-600 font-bold border border-slate-200">2</div>
                  <span className="font-semibold text-slate-900">Build</span>
                </div>
                <div className="w-px h-12 bg-slate-300 self-center hidden sm:block" />
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-amber-600 font-bold border border-slate-200">3</div>
                  <span className="font-semibold text-slate-900">Supply</span>
                </div>
              </div>
            </div>

            {/* Staggered Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 translate-y-8 shadow-lg">
                <Search className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">AB Hedge</h3>
                <p className="text-sm text-slate-500">Technical insights &amp; market optimization strategies.</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl text-white">
                <HardHat className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="font-bold text-white mb-2">Sapalon Ghana</h3>
                <p className="text-sm text-slate-400">Engineering reliability &amp; safety compliance.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg col-span-2 md:col-span-1 md:translate-x-8">
                <Coins className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Country Wide</h3>
                <p className="text-sm text-slate-500">Equipment supply &amp; industrial procurement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
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
              <p className="text-slate-400 text-sm">Delivered &amp; managed globally</p>
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

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Join Our Network</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-lg">
            Whether you need market data, technical support, or equipment procurement, our specialized units are ready to deploy.
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
