"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Phone, ArrowRight, Menu, Search, Briefcase, Calculator, HardHat, FileText, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/ui/logo"
import { BUSINESS_UNITS } from "@/lib/data"

export function Header() {
    const { scrollY } = useScroll()
    const [isScrolled, setIsScrolled] = React.useState(false)
    const pathname = usePathname()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20)
    })

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Top Bar - Hidden on mobile, collapses on scroll */}
            <motion.div
                className="bg-primary text-primary-foreground py-1.5 text-[11px] font-medium tracking-wide border-b border-primary/10 overflow-hidden hidden sm:block"
                initial={{ height: "auto", opacity: 1 }}
                animate={{ height: isScrolled ? 0 : "auto", opacity: isScrolled ? 0 : 1 }}
                transition={{ duration: 0.3 }}
            >
                <div className="container mx-auto px-4 flex justify-between items-center h-full">
                    <div className="hidden md:flex gap-4 opacity-90">
                        <span>Research</span>
                        <span className="text-primary-foreground/40">•</span>
                        <span>Engineering</span>
                        <span className="text-primary-foreground/40">•</span>
                        <span>Supply Solutions</span>
                    </div>
                    <div className="flex items-center gap-4 ml-auto">
                        <a href="tel:+233555010999" className="flex items-center gap-1 hover:text-white/80 transition-colors">
                            <Phone className="w-3 h-3" />
                            <span>+233 (0) 555-010-999</span>
                        </a>
                        <Link href="/contact" className="hidden sm:inline-block hover:underline">
                            Request a Concept Note
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* Main Nav */}
            <motion.div
                className={cn(
                    "w-full transition-all duration-300 border-b",
                    isScrolled
                        ? "bg-background/95 backdrop-blur-md shadow-sm border-border py-1.5 text-slate-900"
                        : "bg-background border-transparent py-2 sm:py-2.5 text-white"
                )}
            >
                <div className="container mx-auto flex flex-nowrap items-center justify-between gap-2 px-4 lg:gap-3">
                    {/* shrink-0: prevents flex from crushing mega-menu triggers (was hiding Sapalon / Country Wide) */}
                    <div className="flex shrink-0 items-center gap-2 lg:gap-4">
                        <Logo className="shrink-0" />

                        {/* Desktop Nav */}
                        <div className="hidden lg:block">
                            <NavigationMenu className="max-w-none flex-none">
                                <NavigationMenuList className="flex w-max flex-none flex-nowrap items-center gap-0.5 sm:gap-1">
                                {BUSINESS_UNITS.map((unit) => (
                                    <NavigationMenuItem key={unit.id}>
                                        <NavigationMenuTrigger className={cn(
                                            "bg-transparent px-2.5 text-xs font-medium transition-colors xl:px-3 xl:text-sm whitespace-nowrap",
                                            isScrolled
                                                ? "text-slate-900 hover:bg-muted/50 hover:text-slate-900"
                                                : "text-white hover:bg-white/10 hover:text-white"
                                        )}>
                                            {(unit as { navLabel?: string }).navLabel ?? unit.name}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                <li className="row-span-3">
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            className={cn(
                                                                "flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md",
                                                                unit.color && `from-${unit.color.replace('bg-', '')}/10 to-${unit.color.replace('bg-', '')}/30`
                                                            )}
                                                            href={unit.slug}
                                                        >
                                                            <unit.icon className="h-6 w-6 mb-2 text-primary" />
                                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                                {unit.name}
                                                            </div>
                                                            <p className="text-sm leading-tight text-muted-foreground">
                                                                {unit.description}
                                                            </p>
                                                            <div className="mt-4 flex items-center text-xs font-bold text-primary uppercase tracking-wider">
                                                                Learn More <ArrowRight className="ml-1 w-3 h-3" />
                                                            </div>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                                {/* <ListItem href={`${unit.slug}/services`} title="Services">
                                                    Core capabilities and offerings.
                                                </ListItem> */}
                                                {unit.id === 'ab-hedge' && (
                                                    <>
                                                        {/* <ListItem href={`${unit.slug}/reports`} title="Market Reports">
                                                            Access our latest industry analysis.
                                                        </ListItem>
                                                        <ListItem href={`${unit.slug}/methodology`} title="Methodology">
                                                            Our rigorous research process.
                                                        </ListItem> */}
                                                    </>
                                                )}
                                                {unit.id === 'sapalon' && (
                                                    <>
                                                        {/* <ListItem href={`${unit.slug}/plans`} title="Maintenance Plans">
                                                            Bronze, Silver, and Gold tiers.
                                                        </ListItem>
                                                        <ListItem href={`${unit.slug}/request-site-visit`} title="Site Visit">
                                                            Schedule an engineering assessment.
                                                        </ListItem> */}
                                                    </>
                                                )}
                                                {unit.id === 'country-wide' && (
                                                    <>
                                                        {/* <ListItem href={`${unit.slug}/process`} title="Our Process">
                                                            Step-by-step guide to procurement.
                                                        </ListItem>
                                                        <ListItem href={`${unit.slug}/apply`} title="Get Started">
                                                            Request equipment supply.
                                                        </ListItem> */}
                                                    </>
                                                )}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                ))}

                                <NavigationMenuItem>
                                    <Link href="/projects" legacyBehavior passHref>
                                        <NavigationMenuLink className={cn(
                                            navigationMenuTriggerStyle(),
                                            "px-2.5 text-xs xl:px-3 xl:text-sm whitespace-nowrap",
                                            isScrolled
                                                ? "bg-transparent text-slate-900 hover:bg-slate-100 hover:text-slate-900"
                                                : "bg-transparent text-white hover:bg-white/10 hover:text-white"
                                        )}>
                                            Projects
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href="/contact" legacyBehavior passHref>
                                        <NavigationMenuLink className={cn(
                                            navigationMenuTriggerStyle(),
                                            "px-2.5 text-xs xl:px-3 xl:text-sm whitespace-nowrap",
                                            isScrolled
                                                ? "bg-transparent text-slate-900 hover:bg-slate-100 hover:text-slate-900"
                                                : "bg-transparent text-white hover:bg-white/10 hover:text-white"
                                        )}>
                                            Contact
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        </div>
                    </div>

                    <div className="hidden shrink-0 items-center gap-2 lg:flex lg:gap-3">
                        <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className={cn(
                                "hidden xl:flex",
                                isScrolled && "border-slate-300 bg-transparent text-slate-900 hover:bg-slate-100 hover:text-slate-900",
                                !isScrolled && "border-white/30 text-white hover:bg-white/10 hover:text-white"
                            )}
                        >
                            <Link href="/insights">Insights</Link>
                        </Button>
                        <Button size="sm" asChild>
                            <Link href="/contact">Talk to an Expert</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className={cn("lg:hidden", !isScrolled && "text-white hover:bg-white/10 hover:text-white")}
                            >
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[280px] sm:w-[350px] overflow-y-auto">
                            <nav className="flex flex-col gap-6 mt-8">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Business Units</h3>
                                    {BUSINESS_UNITS.map((unit) => (
                                        <Link
                                            key={unit.id}
                                            href={unit.slug}
                                            className="flex items-center justify-between py-3 border-b border-border/50 hover:text-primary transition-colors"
                                        >
                                            <span className="font-medium text-sm">{unit.name}</span>
                                            <ChevronRight className="w-4 h-4 opacity-50" />
                                        </Link>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Quick Links</h3>
                                    <Link href="/about" className="py-3 hover:text-primary text-sm">About Us</Link>
                                    <Link href="/projects" className="py-3 hover:text-primary text-sm">Projects</Link>
                                    <Link href="/industries" className="py-3 hover:text-primary text-sm">Industries</Link>
                                    <Link href="/insights" className="py-3 hover:text-primary text-sm">Insights</Link>
                                    <Link href="/contact" className="py-3 hover:text-primary font-bold text-sm">Contact Us</Link>
                                </div>

                                {/* Mobile contact info */}
                                <div className="border-t border-border/50 pt-4">
                                    <a href="tel:+233555010999" className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-primary">
                                        <Phone className="w-4 h-4" />
                                        +233 (0) 555-010-999
                                    </a>
                                </div>

                                <div className="mt-auto">
                                    <Button className="w-full mb-2" asChild>
                                        <Link href="/contact">Get a Quote</Link>
                                    </Button>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </motion.div>
        </header>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
