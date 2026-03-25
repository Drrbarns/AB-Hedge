import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={cn("flex items-center shrink-0", className)}>
            <Image
                src="/images/hedgegroup-logo.png"
                alt="Hedge Group"
                width={260}
                height={78}
                className="h-14 sm:h-[4.25rem] w-auto object-contain"
                priority
            />
        </Link>
    );
}
