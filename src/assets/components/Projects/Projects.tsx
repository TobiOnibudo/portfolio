import Project from "@/assets/components/Projects/Project"
import { ChevronDown } from "lucide-react"
import { FaDatabase, FaJava, FaNode, FaReact } from "react-icons/fa"
import { IoLogoCss3, IoLogoFirebase, IoLogoJavascript } from "react-icons/io5"
import {
  SiExpo,
  SiGo,
  SiKotlin,
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si"

function Projects() {
  const java = { id: 1, reactIcon: <FaJava /> }
  const css = { id: 2, reactIcon: <IoLogoCss3 /> }
  const kotlin = { id: 4, reactIcon: <SiKotlin /> }
  const javascript = { id: 5, reactIcon: <IoLogoJavascript /> }
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
            Title="Threads Clone"
            description="Threads-style social app with Clerk authentication, threaded posts and replies, and MongoDB-backed feeds."
            link="https://github.com/TobiOnibudo/threads"
            liveUrl="https://threads-eight-theta.vercel.app/"
            stack={[nextjs, typescript, css, mongodb]}
          />
          <Project
            Title="Vayro"
            description="Moving-sale marketplace: listings, chat, AI price hints, maps, Firebase auth and data."
            link="https://github.com/TobiOnibudo/vayro"
            stack={[typescript, react, expo, firebase, css]}
          />

          <Project
            Title="CartCloud"
            description="A multi-vendor storefront with checkout flows and basic seller tools."
            link="https://github.com/TobiOnibudo/cartcloud"
            liveUrl="https://cartcloud.netlify.app/"
            stack={[typescript, react, css, mongodb, nodejs]}
          />

          <Project
            Title="Atlantic AI Summit: HealthByte (1st place)"
            description="Healthcare hackathon (~60 hr, 1st place): dual LLM agents iterate on health messaging; dashboard visualizes persona metrics and runs."
            link="https://github.com/TobiOnibudo/atlantic-ai-conference-hackathon"
            liveUrl="https://healthbyte-dashboard.vercel.app/"
            stack={[nextjs, typescript, react, css, python]}
          />

          <Project
            Title="Ecommerce WebApp"
            description="A simple retail-style site with products grouped by category and a cart through checkout."
            link="https://github.com/TobiOnibudo/Ecommerce"
            stack={[typescript, react, css, mongodb]}
          />
          <Project
            Title="Personal Library"
            description="An Android app for tracking books you plan to read and books you have finished, using on-device SQL storage."
            link="https://github.com/TobiOnibudo/Book"
            stack={[kotlin, java, sql]}
          />
          <Project
            Title="Blog Website"
            description="Posts and comments with a Node backend and database-backed pages."
            link="https://github.com/TobiOnibudo/BlogWebsite"
            stack={[css, javascript, nodejs, mongodb]}
          />

          <Project
            Title="Ollama non-sudo installer"
            description="Per-user Ollama install on Windows, Linux, or macOS without admin rights; includes PATH and uninstall notes."
            link="https://github.com/TobiOnibudo/ollama-non-sudo-installer"
            stack={[golang]}
          />

          <Project
            Title="Daltweets"
            description="Twitter-style campus feed: Spring Boot API, React UI, and SQL-backed data."
            link="https://github.com/TobiOnibudo/Daltweets"
            stack={[springboot, react, sql]}
          />
        </div>
      </section>
    </div>
  )
}

export default Projects
