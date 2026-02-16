
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeading } from "lucide-react";

export default function RiskPagecompliancePage() {
  return (
    <div className="container py-24 px-4 md:px-6">
      <h1 className="text-4xl font-bold tracking-tight mb-6 capitalize">risk compliance</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
        This page represents the country-wide/risk-compliance section. Content is currently being drafted by our expert team.
      </p>
      <div className="flex gap-4">
        <Button variant="outline" asChild>
          <Link href="/">Return Home</Link>
        </Button>
        <Button asChild>
           <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
