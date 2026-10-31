import Project from "@/assets/components/Projects/Project"
import { ChevronDown } from "lucide-react"
import { FaDatabase, FaNode, FaReact } from "react-icons/fa"
import { IoLogoCss3, IoLogoFirebase } from "react-icons/io5"
import {
  SiExpo,
  SiGo,
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiSpringboot,
  SiSupabase,
  SiTypescript,
} from "react-icons/si"

function Projects() {
  const css = { id: 2, reactIcon: <IoLogoCss3 /> }
  const react = { id: 6, reactIcon: <FaReact /> }
  const firebase = { id: 7, reactIcon: <IoLogoFirebase /> }
  const sql = { id: 8, reactIcon: <FaDatabase /> }
  const typescript = { id: 9, reactIcon: <SiTypescript /> }
  const nodejs = { id: 10, reactIcon: <FaNode /> }
  const mongodb = { id: 11, reactIcon: <SiMongodb /> }
  const nextjs = { id: 13, reactIcon: <SiNextdotjs /> }
  const golang = { id: 14, reactIcon: <SiGo /> }
  const python = { id: 15, reactIcon: <SiPython /> }
  const expo = { id: 16, reactIcon: <SiExpo /> }
  const springboot = { id: 17, reactIcon: <SiSpringboot /> }
  const supabase = { id: 18, reactIcon: <SiSupabase /> }

  return (
    <div>
      {/* Full-viewport intro (snap-like feel) — no global scroll-snap so the footer stays reachable */}
      <section
        aria-labelledby="projects-heading"
        className="flex min-h-[calc(100dvh-4rem)] flex-col justify-center scroll-mt-16 py-8 sm:py-10"
      >
        <header className="max-w-2xl">
          <h1
            id="projects-heading"
            className="text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Projects
          </h1>
          <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Stuff I&apos;ve shipped on the side: hackathon sprints, mobile experiments, and
            full-stack apps I actually wanted to use. Each card opens the repo; if I left
            it running somewhere public, there&apos;s a live site link too so you can poke
            around without cloning anything.
          </p>
          <a
            href="#projects-grid"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-primary/90 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          >
            See my projects
            <ChevronDown className="size-4 opacity-90" aria-hidden strokeWidth={2} />
          </a>
        </header>
      </section>

      <section
        id="projects-grid"
        aria-label="Project cards"
        className="scroll-mt-[calc(4rem+0.5rem)] pb-24 pt-4 sm:scroll-mt-20 sm:pb-28 sm:pt-8"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          <Project
            Title="Daydrift"
            description="Plan a day in any city with a personalized itinerary built around your interests, timing, and how you want to get around."
            link="https://github.com/TobiOnibudo/daydrift"
            liveUrl="https://daydriftweb.up.railway.app/"
            stack={[typescript, react, nodejs, sql]}
          />
          <Project
            Title="Fiscal Platform"
            description="Explore company financial statements in one place, with clear and organized data sourced from public reports."
            link="https://github.com/TobiOnibudo/fiscal-platform"
            liveUrl="https://fiscal-platform.vercel.app/"
            stack={[nextjs, typescript, python, sql]}
          />
          <Project
            Title="Vendor Lens"
            description="Vendor management platform with AI contract extraction, renewal tracking, and duplicate tool detection."
            link="https://github.com/TobiOnibudo/vendor_lens"
            liveUrl="https://vendor-lens-here.vercel.app/"
            stack={[nextjs, typescript, supabase, python]}
          />
          <Project
            Title="Aegis Core"
            description="Python SDK and dashboard for AI agent policy enforcement with YAML policies and a full audit trail."
            link="https://github.com/AegisStack/aegis-core"
            stack={[python, nextjs, typescript]}
          />
          <Project
            Title="Vayro"
            description="Marketplace app using generative AI for pricing and selling household items with maps and Firebase auth."
            link="https://github.com/TobiOnibudo/vayro"
            stack={[typescript, react, expo, firebase]}
          />
          <Project
            Title="Atlantic AI Summit: HealthByte (1st place)"
            description="Hackathon winner (60 hrs). Dual LLM agents iterate on health messaging with a live metrics dashboard."
            link="https://github.com/TobiOnibudo/atlantic-ai-conference-hackathon"
            liveUrl="https://healthbyte-dashboard.vercel.app/"
            stack={[nextjs, typescript, react, css, python]}
          />
          <Project
            Title="Ollama non-sudo installer"
            description="Per-user Ollama install on Windows, Linux, or macOS without admin rights."
            link="https://github.com/TobiOnibudo/ollama-non-sudo-installer"
            stack={[golang]}
          />
          <Project
            Title="Daltweets"
            description="Twitter-style campus feed with a Spring Boot API, React UI, and SQL-backed data."
            link="https://github.com/TobiOnibudo/Daltweets"
            stack={[springboot, react, sql]}
          />
          <Project
            Title="Threads Clone"
            description="Social app with Clerk auth, threaded posts and replies, and MongoDB-backed feeds."
            link="https://github.com/TobiOnibudo/threads"
            liveUrl="https://threads-eight-theta.vercel.app/"
            stack={[nextjs, typescript, css, mongodb]}
          />
          <Project
            Title="CartCloud"
            description="Multi-vendor storefront with checkout flows and basic seller tools."
            link="https://github.com/TobiOnibudo/cartcloud"
            liveUrl="https://cartcloud.netlify.app/"
            stack={[typescript, react, css, mongodb, nodejs]}
          />
        </div>
      </section>
    </div>
  )
}

export default Projects
