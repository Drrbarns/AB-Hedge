import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={cn("flex items-center gap-2 font-bold text-xl tracking-tight", className)}>
            <div className="bg-primary text-primary-foreground h-8 w-8 rounded-sm flex items-center justify-center font-serif text-lg">
                A
            </div>
            <span className="text-foreground">AB Hedge<span className="text-primary">.</span></span>
        </Link>
    );
}
