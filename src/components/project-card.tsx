import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates?: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const CardUI = (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border h-full cursor-pointer transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      {/* Media */}
      {video && (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
        />
      )}
      {image && (
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="h-40 w-full object-cover object-top"
        />
      )}

      {/* Content */}
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>

          {dates && (
            <time className="font-sans text-xs text-muted-foreground">
              {dates}
            </time>
          )}

          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>

      {/* Tags */}
      <CardContent className="mt-auto flex flex-col px-2">
        {tags?.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-1 py-0 text-[10px]"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      {/* Footer Links (GitHub / Live etc.) */}
      <CardFooter className="px-2 pb-2">
       {links && links.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {links.map((item, idx) => (
              <Link href={item.href} key={idx} target="_blank">
                <Badge className="flex items-center gap-1 px-2 py-1 text-[10px]">
                  {item.icon}
                  {item.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );

  // Make full card clickable only if href exists
  return href ? (
    <Link href={href} target="_blank" className="block">
      {CardUI}
    </Link>
  ) : (
    CardUI
  );
}