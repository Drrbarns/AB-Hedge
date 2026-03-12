import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={cn("flex items-center shrink-0", className)}>
            <Image
                src="/images/hedgegroup-logo.png"
                alt="Hedge Group"
                width={280}
                height={84}
                className="h-16 sm:h-20 w-auto object-contain"
                priority
            />
        </Link>
    );
}
