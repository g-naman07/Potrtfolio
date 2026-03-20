import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
interface Props {
    title: string;
    issuer: string;
    date: string;
    description: string;
    logo?: string;
    link?: string;
}

export function CertificationRow({
    title,
    issuer,
    date,
    description,
    logo,
    link,
}: Props) {
    const Content = (
        <div className="flex items-center justify-between px-6 py-5 hover:bg-muted/40 transition-all duration-300">

            {/* LEFT */}
            <div className="flex items-start gap-4">

                {/* LOGO */}
                {logo && (
                    <div className="w-12 h-12 rounded-md border bg-white flex items-center justify-center overflow-hidden">
                        <Image
    src={logo}
    alt={issuer}
    width={40}
    height={40}
    className={cn(
      "object-contain",
      issuer === "British Council" ? "scale-125" : "scale-100"
    )}
                        />
                    </div>
                )}

                {/* TEXT */}
                <div className="space-y-1">
                    <h3 className="font-semibold text-base md:text-lg">{title}</h3>
                    <p className="text-sm text-muted-foreground">{issuer}</p>
                    <p className="text-sm text-muted-foreground">{description}</p>
                </div>
            </div>

            {/* RIGHT */}
            <div className="text-sm text-muted-foreground hidden sm:block">
                {date}
            </div>
        </div>
    );

    return link ? (
        <Link href={link} target="_blank" className="block group">
            {Content}
        </Link>
    ) : (
        Content
    );
}