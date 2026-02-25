import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { BUSINESS_UNITS, NAV_LINKS, SITE_CONFIG } from "@/lib/data";

export function Footer() {
    return (
        <footer className="pt-12 sm:pt-16 pb-6 sm:pb-8" style={{ background: "linear-gradient(180deg, #0a1628 0%, #070f1e 100%)" }}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
                        <Logo className="mb-2 sm:mb-4" />
                        <p className="text-slate-400 leading-relaxed text-sm max-w-sm">
                            An elite alliance of specialized business units delivering research, engineering excellence, and strategic supply solutions for global industries.
                        </p>
                        <div className="flex gap-4 mt-2">
                            <a href={SITE_CONFIG.socials.linkedin} className="text-slate-500 hover:text-amber-400 transition-colors p-2 -m-2">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href={SITE_CONFIG.socials.twitter} className="text-slate-500 hover:text-amber-400 transition-colors p-2 -m-2">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Units Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-white tracking-tight">Business Units</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            {BUSINESS_UNITS.map((unit) => (
                                <li key={unit.id}>
                                    <Link href={unit.slug} className="hover:text-amber-400 transition-colors flex items-center gap-2">
                                        <ArrowRight className="w-3 h-3 opacity-50 flex-shrink-0" /> {unit.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-white tracking-tight">Company</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-amber-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li><Link href="/careers" className="hover:text-amber-400 transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Help Center</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-white tracking-tight">Contact Us</h3>
                        <div className="space-y-3 text-sm text-slate-400">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 mt-1 text-amber-500 flex-shrink-0" />
                                <span>{SITE_CONFIG.address}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-amber-400 transition-colors">{SITE_CONFIG.phone}</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-amber-400 transition-colors break-all">{SITE_CONFIG.email}</a>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h4 className="text-xs font-semibold uppercase tracking-wider mb-2 text-slate-300">Subscribe to Insights</h4>
                            <div className="flex gap-2">
                                <input placeholder="Email address" className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50" />
                                <button className="shrink-0 bg-amber-500 hover:bg-amber-600 text-slate-900 rounded-md px-3 py-2 transition-colors">
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 my-6 sm:my-8" />

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8">
                        <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
                        <Link href="/cookies" className="hover:text-slate-300 transition-colors">Cookie Settings</Link>
                    </div>
                    <p className="text-center sm:text-right">© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
