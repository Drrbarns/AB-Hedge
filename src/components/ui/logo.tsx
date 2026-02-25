import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={cn("flex items-center shrink-0", className)}>
            <Image
                src="/images/hedgegroup-logo.png"
                alt="Hedge Group"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
                priority
            />
        </Link>
    );
}
