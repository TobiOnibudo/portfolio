import type { ReactNode } from "react"
import { ArrowUpRight } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

type StackItem = {
  id: number
  reactIcon: ReactNode
}

type ProjectProps = {
  Title: string
  description: string
  stack: StackItem[]
  /** GitHub repository URL */
  link: string
  /** Optional URL of the deployed app (e.g. Vercel or Netlify) */
  liveUrl?: string
}

const footerLinkClass =
  "inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-primary/90 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"

/** Fixed regions per card; circular stack icons sized so the glyph fills the circle without huge empty padding. */
function Project({ Title, description, stack, link, liveUrl }: ProjectProps) {
  return (
    <article className="group flex h-full min-h-0 flex-col">
      <Card
        className={cn(
          "relative flex h-full flex-col gap-0 overflow-hidden py-0 shadow-sm ring-border/80",
          "transition-[box-shadow,transform] duration-200",
          "hover:-translate-y-0.5 hover:shadow-md hover:ring-primary/25"
        )}
      >
        <span
          className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-gradient-to-r from-primary/60 via-primary to-primary/60 transition-transform duration-200 group-hover:scale-x-100"
          aria-hidden
        />
        <CardHeader className="border-b border-border/50 px-5 pb-4 pt-5 sm:px-6 sm:pt-6">
          <CardTitle className="line-clamp-2 min-h-[2.75rem] text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl sm:leading-snug">
            {Title}
          </CardTitle>
          <CardDescription
            title={description}
            className={cn(
              "col-span-full mt-2 h-[6.75rem] pt-0 text-pretty text-sm leading-relaxed text-muted-foreground",
              "line-clamp-4 overflow-hidden"
            )}
          >
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col justify-center px-5 py-4 sm:px-6 sm:py-4">
          <div
            className="flex flex-wrap items-center gap-2.5"
            aria-label="Technology stack"
          >
            {stack.map((item) => (
              <div
                key={item.id}
                className={cn(
                  "inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-border/60 bg-muted/40 text-foreground/90 shadow-sm",
                  "[&>svg]:size-7"
                )}
              >
                {item.reactIcon}
              </div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="mt-auto flex min-h-[3rem] flex-wrap items-center gap-x-5 gap-y-2 border-t border-border/50 bg-transparent px-5 py-3 sm:px-6">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={footerLinkClass}
              aria-label={`${Title}: open live site in a new tab`}
            >
              Live site
              <ArrowUpRight className="size-4" strokeWidth={2} aria-hidden />
            </a>
          ) : null}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={footerLinkClass}
            aria-label={`${Title}: open GitHub repository in a new tab`}
          >
            Repository
            <ArrowUpRight className="size-4" strokeWidth={2} aria-hidden />
          </a>
        </CardFooter>
      </Card>
    </article>
  )
}

export default Project
