import { Building2, Pickaxe, Activity, Truck, Zap, Globe, HardHat, Pill, Coins, Search, Briefcase } from "lucide-react";

export const SITE_CONFIG = {
    name: "AB Hedge Group",
    description: "Premier platform for Engineering, Research, and Supply Solutions.",
    phone: "+233 (0) 555-010-999",
    email: "info@abhedgegroup.com",
    address: "Digital Center, Accra, Ghana",
    socials: {
        linkedin: "https://linkedin.com/company/abhedge",
        twitter: "https://twitter.com/abhedge",
    },
};

export const BUSINESS_UNITS = [
    {
        id: "ab-hedge",
        name: "AB Hedge",
        slug: "/ab-hedge",
        color: "bg-chart-1", // Navy
        description: "Specialized Research & Solutions for Oil, Gas & Mining.",
        fullDescription: "A specialized firm conducting in-depth technical and market research to support the development, optimization, and deployment of advanced technologies in exploration, extraction, and production.",
        icon: Search,
        features: ["Technical Research", "Market Analytics", "Technology Deployment", "Operational Optimization"],
        link: "Research Unit",
    },
    {
        id: "sapalon",
        name: "Sapalon Ghana Limited",
        /** Shorter label for the main nav so all items stay visible on laptop widths */
        navLabel: "Sapalon",
        slug: "/sapalon",
        color: "bg-chart-2", // Goldish
        description: "Engineering Technical Services: Installation & Maintenance.",
        fullDescription: "Professional engineering company delivering reliable, industry-compliant solutions for equipment installation and maintenance across oil & gas, mining, and healthcare sectors.",
        icon: HardHat,
        features: ["Equipment Installation", "Technical Maintenance", "Safety Compliance", "Operational Efficiency"],
        link: "Engineering Unit",
    },
    {
        id: "country-wide",
        name: "Country Wide",
        slug: "/country-wide",
        color: "bg-chart-3", // Navy/Dark
        description: "Equipment Supply & Procurement for Industrial Growth.",
        fullDescription: "Specialized supply company providing high-quality equipment and spare parts for healthcare, mining, and infrastructure, focusing on reliable procurement and long-term operational support.",
        icon: Coins,
        features: ["Equipment Procurement", "Spare Parts Supply", "Operational Support", "Logistics Solutions"],
        link: "Supply Unit",
    },
];

export const INDUSTRIES = [
    { name: "Oil & Gas", icon: Building2 },
    { name: "Mining", icon: Pickaxe },
    { name: "Construction", icon: HardHat },
    { name: "Healthcare", icon: Activity },
    { name: "Road Infrastructure", icon: Truck },
    { name: "Energy", icon: Zap },
];

export const CASE_STUDIES = [
    {
        title: "Offshore Platform Audit & Optimization",
        category: "Oil & Gas",
        unit: "AB Hedge",
        slug: "offshore-platform-optimization",
        summary: "Comprehensive technical audit leading to 15% efficiency gain in extraction processes.",
        image: "/images/case-study-offshore.png", // placeholder
    },
    {
        title: "Mining Fleet Maintenance Overhaul",
        category: "Mining",
        unit: "Sapalon Ghana",
        slug: "mining-fleet-maintenance",
        summary: "Implemented predictive maintenance schedule reducing downtime by 40% for a major gold mine.",
        image: "/images/case-study-mining.png",
    },
    {
        title: "Regional Hospital Equipment Supply",
        category: "Healthcare",
        unit: "Country Wide",
        slug: "regional-hospital-equipment",
        summary: "Full medical equipment procurement and delivery for expansion of regional healthcare facilities.",
        image: "/images/case-study-hospital.png",
    },
    {
        title: "Solar Power Plant Commissioning",
        category: "Energy",
        unit: "Sapalon Ghana",
        slug: "solar-plant-commissioning",
        summary: "End-to-end installation and safety certification for a 20MW solar farm.",
        image: "/images/case-study-solar.png",
    },
    {
        title: "Heavy Equipment Supply Program",
        category: "Construction",
        unit: "Country Wide",
        slug: "heavy-equipment-supply",
        summary: "Procurement and deployment of 50+ excavators and machinery for a major road construction project.",
        image: "/images/case-study-equipment.png",
    },
    {
        title: "Market Entry Strategy: Lithium",
        category: "Mining",
        unit: "AB Hedge",
        slug: "lithium-market-entry",
        summary: "Strategic roadmap for new entrant in the West African lithium sector.",
        image: "/images/case-study-lithium.png",
    },
];

export const NAV_LINKS = [
    { name: "About", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Projects", href: "/projects" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
];
