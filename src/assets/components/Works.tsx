import { Link } from "react-router-dom"

import ConnectStrip from "@/components/connect-strip"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/** Home marquee: same set and order as `Projects/Projects.tsx`. */
const SNIPPETS = [
  {
    title: "Daydrift",
    description:
      "Plan a day in any city with a personalized itinerary built around your interests and timing.",
    href: "https://github.com/TobiOnibudo/daydrift",
    liveUrl: "https://daydriftweb.up.railway.app/",
  },
  {
    title: "Fiscal Platform",
    description:
      "Explore company financial statements in one place, with clear and organized data from public reports.",
    href: "https://github.com/TobiOnibudo/fiscal-platform",
    liveUrl: "https://fiscal-platform.vercel.app/",
  },
  {
    title: "Vendor Lens",
    description:
      "Vendor management platform with AI contract extraction, renewal tracking, and duplicate tool detection.",
    href: "https://github.com/TobiOnibudo/vendor_lens",
    liveUrl: "https://vendor-lens-here.vercel.app/",
  },
  {
    title: "Aegis Core",
    description:
      "Python SDK and dashboard for AI agent policy enforcement with YAML policies and a full audit trail.",
    href: "https://github.com/AegisStack/aegis-core",
  },
  {
    title: "Vayro",
    description:
      "Marketplace app using generative AI for pricing and selling household items with maps and Firebase auth.",
    href: "https://github.com/TobiOnibudo/vayro",
  },
  {
    title: "Atlantic AI Summit: HealthByte (1st place)",
    description:
      "Hackathon winner (60 hrs). Dual LLM agents iterate on health messaging with a live metrics dashboard.",
    href: "https://github.com/TobiOnibudo/atlantic-ai-conference-hackathon",
    liveUrl: "https://healthbyte-dashboard.vercel.app/",
  },
  {
    title: "Ollama non-sudo installer",
    description:
      "Per-user Ollama install on Windows, Linux, or macOS without admin rights.",
    href: "https://github.com/TobiOnibudo/ollama-non-sudo-installer",
  },
  {
    title: "Daltweets",
    description:
      "Twitter-style campus feed with a Spring Boot API, React UI, and SQL-backed data.",
    href: "https://github.com/TobiOnibudo/Daltweets",
  },
  {
    title: "Threads Clone",
    description:
      "Social app with Clerk auth, threaded posts and replies, and MongoDB-backed feeds.",
    href: "https://github.com/TobiOnibudo/threads",
    liveUrl: "https://threads-eight-theta.vercel.app/",
  },
  {
    title: "CartCloud",
    description:
      "Multi-vendor storefront with checkout flows and basic seller tools.",
    href: "https://github.com/TobiOnibudo/cartcloud",
    liveUrl: "https://cartcloud.netlify.app/",
  },
] as const

const linkClass =
  "text-xs font-medium text-primary underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"

function SnippetCard({
  title,
  description,
  href,
  liveUrl,
  tabIndex,
}: {
  title: string
  description: string
  href: string
  liveUrl?: string
  tabIndex?: number
}) {
  return (
    <article
      tabIndex={tabIndex}
      className={cn(
        "flex h-[9.25rem] min-w-0 w-[min(78vw,17.5rem)] shrink-0 snap-start flex-col gap-1.5 rounded-xl border border-border bg-card p-3 text-left shadow-sm ring-1 ring-foreground/5",
        "transition-colors hover:bg-muted/50 hover:ring-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      )}
    >
      <h3 className="line-clamp-2 min-h-0 w-full shrink-0 break-words font-heading text-sm font-semibold leading-snug text-foreground">
        {title}
      </h3>
      <p className="line-clamp-2 min-h-0 w-full min-w-0 flex-1 break-words text-xs leading-relaxed text-muted-foreground">
        {description}
      </p>
      <div className="mt-auto flex shrink-0 flex-wrap items-center gap-x-2 gap-y-0.5">
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Live →
          </a>
        ) : null}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          GitHub →
        </a>
      </div>
    </article>
  )
}

function WorksMarquee() {
  return (
    <div className="relative w-full">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent"
        aria-hidden
      />
      <div className="works-marquee-viewport py-1">
        <div className="works-marquee-track flex">
          <div
            className="flex shrink-0 gap-4 pr-4"
            role="list"
            aria-label="Projects"
          >
            {SNIPPETS.map((s) => (
              <div key={s.title} role="listitem">
                <SnippetCard {...s} />
              </div>
            ))}
          </div>
          <div className="flex shrink-0 gap-4 pr-4" aria-hidden>
            {SNIPPETS.map((s) => (
              <SnippetCard key={`dup-${s.title}`} {...s} tabIndex={-1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Works({ className }: { className?: string }) {
  return (
    <section
      id="works"
      className={cn(
        "flex min-h-[calc(100dvh-4rem)] snap-start snap-always flex-col justify-center gap-8 scroll-mt-16 border-t border-border py-8 sm:py-10",
        className
      )}
      aria-labelledby="works-heading"
    >
      <div>
        <h2
          id="works-heading"
          className="text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Projects
        </h2>
        <p className="mt-3 max-w-2xl text-pretty text-muted-foreground">
          Quick pass on things I&apos;ve shipped for myself or in hackathon mode.
        </p>
      </div>

      <WorksMarquee />

      <div>
        <Button asChild size="lg">
          <Link to="/Projects">View all projects</Link>
        </Button>
      </div>

      <div
        className="border-t border-border pt-8"
        role="contentinfo"
        aria-label="Site footer"
      >
        <ConnectStrip />
        <p className="mt-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Tobi Onibudo
        </p>
      </div>
    </section>
  )
}

export default Works
