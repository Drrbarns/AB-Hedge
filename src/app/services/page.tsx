import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
    Car,
    Wrench,
    Wallet,
    HandCoins,
    ShieldCheck,
    Calendar,
    PhoneCall,
    CheckCircle2,
    ArrowRight,
    Users,
    PackageCheck,
    FileSignature,
    Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Services — Vehicle Repair Hire Purchase",
    description:
        "Group Hedge helps workers keep their vehicles on the road through hire purchase of car spare parts and repair financing — pay back in small, affordable monthly instalments.",
};

const PAIN_POINTS = [
    {
        icon: Car,
        title: "Defect Vehicles",
        description:
            "A breakdown can stop your daily hustle, your school runs, your business deliveries — and waiting weeks for repairs is not an option.",
    },
    {
        icon: Wallet,
        title: "No Instant Funds",
        description:
            "Spare parts and labour costs often hit all at once. Most workers simply don’t have the full amount sitting ready when they need it.",
    },
];

const PROGRAM_PILLARS = [
    {
        icon: HandCoins,
        title: "Repair Financing",
        description:
            "We loan you the funds needed to fix your vehicle so you can get back on the road today, not weeks from now.",
    },
    {
        icon: PackageCheck,
        title: "Spare Parts Supply",
        description:
            "Through our trusted dealers, we purchase quality spare parts on your behalf — verified stock, ready to fit.",
    },
    {
        icon: Wrench,
        title: "Trusted Fitting Shop",
        description:
            "A well-organised workshop, open to clients, with skilled technicians and the right equipment to do the job right the first time.",
    },
    {
        icon: Calendar,
        title: "Flexible Monthly Plan",
        description:
            "Pay back in small, affordable monthly instalments with a modest interest — built around your salary, not against it.",
    },
];

const HOW_IT_WORKS = [
    {
        step: "01",
        title: "Tell Us What’s Wrong",
        description:
            "Bring your vehicle in or share the issue with our team. We diagnose the problem and give you an honest, written quote.",
    },
    {
        step: "02",
        title: "Get Approved",
        description:
            "We assess your application quickly. Workers in stable employment qualify for a flexible hire purchase plan.",
    },
    {
        step: "03",
        title: "We Buy The Parts",
        description:
            "Once approved, Group Hedge purchases the spare parts directly from our trusted dealers — no upfront stress for you.",
    },
    {
        step: "04",
        title: "Repairs Carried Out",
        description:
            "Our well-organised fitting shop installs the parts using skilled technicians and the right equipment.",
    },
    {
        step: "05",
        title: "Pay Small Small",
        description:
            "Drive away the same day. Repay in fixed monthly instalments with a small interest, comfortably spread over time.",
    },
];

const ELIGIBILITY = [
    "Be in active, verifiable employment (public or private sector)",
    "Provide valid national ID and proof of vehicle ownership",
    "Agree to a fixed monthly repayment via salary deduction or standing order",
    "Have your vehicle assessed and quoted by our fitting shop",
];

const FAQS = [
    {
        q: "Who is this service for?",
        a: "Workers who depend on their vehicles for daily life or business — drivers, civil servants, teachers, traders, ride-hail operators and SME owners. If a sudden breakdown threatens your income or routine, this is built for you.",
    },
    {
        q: "How much can I borrow?",
        a: "It depends on the cost of the repair, the parts required and your repayment capacity. After diagnosing your vehicle and reviewing your application, our team agrees a comfortable amount with you up front.",
    },
    {
        q: "What is the interest rate?",
        a: "We charge a small, transparent interest on the financed amount — no hidden fees. Your repayment schedule is agreed in writing before any work begins.",
    },
    {
        q: "Can I choose where my car is repaired?",
        a: "All approved repairs are carried out at our well-organised fitting shop so we can guarantee quality, warranty the work, and protect both you and us during the repayment period.",
    },
    {
        q: "What happens if I want to settle early?",
        a: "You can settle the outstanding balance at any time without penalty. Just speak to our finance desk and we’ll calculate the early settlement amount.",
    },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="relative overflow-hidden border-b border-slate-200">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(135deg, #0a1628 0%, #0f1f3d 30%, #0d1a30 60%, #0a1425 100%)",
                    }}
                />
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[120px]" />
                    <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{
                            backgroundImage:
                                "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",
                            backgroundSize: "30px 30px",
                        }}
                    />
                </div>

                <div className="container relative z-10 px-4 md:px-6 pt-32 pb-20 md:pt-40 md:pb-28">
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                        <div className="lg:col-span-7 text-center lg:text-left">
                            <Badge
                                variant="outline"
                                className="mb-6 px-4 py-1.5 border-amber-500/30 bg-amber-500/10 text-amber-400 tracking-wider uppercase text-[10px] sm:text-xs font-semibold backdrop-blur-sm"
                            >
                                Services • Vehicle Hire Purchase
                            </Badge>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
                                Hire Purchase of <span className="text-amber-400">Car Spare Parts</span>.
                            </h1>

                            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-4">
                                At the best deals guaranteed.
                            </p>
                            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                We help hard-working people keep their vehicles on the road. Group Hedge funds your
                                repair, supplies the spare parts, and lets you pay back in small monthly instalments
                                with a small interest — so a breakdown never has to break your finances.
                            </p>

                            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                                <Button
                                    size="lg"
                                    className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 h-12 text-base font-semibold"
                                    asChild
                                >
                                    <Link href="#apply">
                                        Apply Today <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white/25 text-white hover:bg-white/10 px-8 h-12 text-base font-semibold bg-transparent"
                                    asChild
                                >
                                    <Link href="#how-it-works">How It Works</Link>
                                </Button>
                            </div>

                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-left">
                                {[
                                    { icon: ShieldCheck, label: "Transparent terms" },
                                    { icon: Sparkles, label: "Stock available, ready to fit" },
                                    { icon: Users, label: "Built for working people" },
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm px-4 py-3"
                                    >
                                        <item.icon className="w-5 h-5 text-amber-400 flex-shrink-0" />
                                        <span className="text-sm text-white/85">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto">
                                <div className="absolute -inset-4 bg-amber-500/15 rounded-3xl blur-2xl" />
                                <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-white">
                                    <Image
                                        src="/images/services-vehicle-hire-purchase.png"
                                        alt="Hire Purchase of Car Spare Parts campaign poster"
                                        width={720}
                                        height={1024}
                                        className="w-full h-auto object-contain"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why this service exists */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-14">
                        <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 mb-5">
                            Why We Built This
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                            A vehicle problem shouldn’t become a <span className="text-amber-500">cash-flow problem</span>.
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            For most workers, the car isn’t a luxury — it’s how the family eats, how the children get
                            to school, and how the business runs. When something breaks, the bill rarely arrives at a
                            convenient time.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
                        {PAIN_POINTS.map((point) => (
                            <div
                                key={point.title}
                                className="bg-slate-50 rounded-3xl border border-slate-100 p-8 md:p-10 hover:border-amber-200 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-amber-600 mb-6">
                                    <point.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{point.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Program pillars */}
            <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-200">
                <div className="container px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-14">
                        <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 mb-5">
                            How Group Hedge Helps
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                            One programme. Four pillars. Real relief.
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            We bring financing, parts, skilled labour and a fair repayment plan together — so you can
                            fix the problem today and pay over time, comfortably.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PROGRAM_PILLARS.map((pillar) => (
                            <div
                                key={pillar.title}
                                className="bg-white rounded-2xl border border-slate-100 p-7 hover:border-amber-200 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 mb-5">
                                    <pillar.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{pillar.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section id="how-it-works" className="py-20 md:py-28 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-14">
                        <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 mb-5">
                            How It Works
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                            From breakdown to back-on-the-road, in 5 simple steps.
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            A clear, predictable journey designed around how working people actually live and earn.
                        </p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        <div className="hidden lg:block absolute left-0 right-0 top-9 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                            {HOW_IT_WORKS.map((item) => (
                                <div
                                    key={item.step}
                                    className="relative bg-slate-50 rounded-2xl border border-slate-100 p-6 hover:border-amber-200 hover:shadow-md transition-all"
                                >
                                    <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-900 font-bold text-sm flex items-center justify-center mb-4 shadow-sm">
                                        {item.step}
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2 leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Eligibility / Repayment side-by-side */}
            <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-200">
                <div className="container px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 max-w-6xl mx-auto">
                        <div className="bg-white rounded-3xl border border-slate-100 p-8 md:p-10 shadow-sm">
                            <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 mb-5">
                                Eligibility
                            </Badge>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
                                Who can apply?
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-7">
                                The programme is designed for everyday workers with a steady income. To keep things
                                fair and sustainable, applicants should:
                            </p>
                            <ul className="space-y-3">
                                {ELIGIBILITY.map((item) => (
                                    <li key={item} className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden bg-slate-900 text-white">
                            <div className="absolute -top-20 -right-16 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl" />
                            <div className="relative">
                                <Badge className="bg-amber-500 text-slate-900 hover:bg-amber-600 mb-5">
                                    Repayment
                                </Badge>
                                <h3 className="text-2xl md:text-3xl font-bold mb-5 leading-tight">
                                    Pay <span className="text-amber-400">small small</span>, every month.
                                </h3>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Once your repair is done, your total cost — parts, labour and a small interest —
                                    is split into fixed monthly instalments. No surprises, no hidden charges.
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                                        <p className="text-xs uppercase tracking-wider text-amber-300 mb-1">
                                            Tenure
                                        </p>
                                        <p className="text-lg font-bold">Flexible</p>
                                        <p className="text-xs text-slate-400">Agreed up front</p>
                                    </div>
                                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                                        <p className="text-xs uppercase tracking-wider text-amber-300 mb-1">
                                            Interest
                                        </p>
                                        <p className="text-lg font-bold">Modest &amp; fixed</p>
                                        <p className="text-xs text-slate-400">Disclosed in writing</p>
                                    </div>
                                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                                        <p className="text-xs uppercase tracking-wider text-amber-300 mb-1">
                                            Payments
                                        </p>
                                        <p className="text-lg font-bold">Monthly</p>
                                        <p className="text-xs text-slate-400">Salary-friendly</p>
                                    </div>
                                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                                        <p className="text-xs uppercase tracking-wider text-amber-300 mb-1">
                                            Early Settlement
                                        </p>
                                        <p className="text-lg font-bold">Allowed</p>
                                        <p className="text-xs text-slate-400">No penalty</p>
                                    </div>
                                </div>

                                <p className="text-sm text-slate-400">
                                    Final terms are confirmed after assessment. We always put the agreement in writing
                                    before any repair begins.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-14">
                        <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 mb-5">
                            Frequently Asked Questions
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                            Clear answers to common questions
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Anything we haven’t covered? Reach out — our team is happy to walk you through the process.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {FAQS.map((faq) => (
                            <details
                                key={faq.q}
                                className="group rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-amber-200 transition-all duration-300 overflow-hidden"
                            >
                                <summary className="cursor-pointer list-none flex items-start justify-between gap-4 p-5 sm:p-6">
                                    <span className="font-semibold text-slate-900 text-base sm:text-lg leading-snug">
                                        {faq.q}
                                    </span>
                                    <span className="mt-1 text-amber-600 transition-transform duration-300 group-open:rotate-45 text-2xl leading-none">
                                        +
                                    </span>
                                </summary>
                                <div className="px-5 sm:px-6 pb-6 text-slate-600 leading-relaxed">{faq.a}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Apply / CTA */}
            <section
                id="apply"
                className="py-24 md:py-32 relative overflow-hidden"
                style={{
                    background:
                        "linear-gradient(135deg, #92400e 0%, #b45309 30%, #d97706 60%, #b45309 100%)",
                }}
            >
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                    }}
                />
                <div className="container relative z-10 px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <Badge className="bg-white/15 text-white hover:bg-white/20 mb-6 backdrop-blur-sm border border-white/20">
                            Ready to fix your vehicle?
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Don’t wait for payday. Get back on the road today.
                        </h2>
                        <p className="text-amber-50/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                            Speak to our team about the Vehicle Repair Hire Purchase programme. We’ll quote you
                            honestly, agree a comfortable repayment plan, and get the repairs going.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10">
                            <Button
                                size="lg"
                                className="bg-white text-amber-800 hover:bg-amber-50 h-12 px-8 text-base font-semibold shadow-lg"
                                asChild
                            >
                                <Link href="/contact">
                                    <FileSignature className="mr-2 w-4 h-4" /> Start Your Application
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/40 text-white hover:bg-white/10 bg-transparent h-12 px-8 text-base font-semibold"
                                asChild
                            >
                                <a href="tel:+233244232566">
                                    <PhoneCall className="mr-2 w-4 h-4" /> Call +233 (0) 244 232 566
                                </a>
                            </Button>
                        </div>

                        <p className="text-amber-100/80 text-sm">
                            Or email us at{" "}
                            <a
                                className="underline underline-offset-4 hover:text-white"
                                href="mailto:ceo@hedgegroup.com"
                            >
                                ceo@hedgegroup.com
                            </a>{" "}
                            — we usually respond within one business day.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
