import { useEffect } from "react"
import { Link } from "react-router-dom"

import CPPIB from "@/img/CPPIB.jpg"
import Cobweb from "@/img/cobweb.jpeg"
import DalCSS from "@/img/dal-css-logo.png"
import DashHudson from "@/img/dashhudson-logo.png"
import NBS from "@/img/NBS_logo.jpg"
import ShiftKey from "@/img/ShiftkeyLabs-Logo.png"
import { Button } from "@/components/ui/button"
import Experience from "@/assets/components/shared/Experience"
import Works from "@/assets/components/Works"

function Home() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-snap-pages")
    return () => document.documentElement.classList.remove("scroll-snap-pages")
  }, [])

  return (
    <div>
      <section
        aria-labelledby="hero-heading"
        className="flex min-h-[calc(100dvh-4rem)] snap-start snap-always flex-col justify-center scroll-mt-16 py-8 sm:py-10"
      >
        <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Hello
          </p>
          <h1
            id="hero-heading"
            className="text-balance font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[2.75rem] lg:leading-[1.1]"
          >
            I&apos;m{" "}
            <span className="text-primary">Tobi</span>
            <br />
            Software Engineer
          </h1>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            I ship end-to-end product experiences, from data
            pipelines to the interfaces people use daily with a focus on great UI/UX.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/About">About</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/Projects">Portfolio</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card/50 p-6 shadow-sm ring-1 ring-foreground/5 backdrop-blur-sm lg:p-8">
          <p className="text-sm font-medium text-muted-foreground">At a glance</p>
          <ul className="mt-4 space-y-3 text-sm text-foreground">
            <li className="flex gap-2">
              <span className="text-primary" aria-hidden>
                ·
              </span>
              SWE @ CPP Investments — building products from 0 to 1
            </li>
            <li className="flex gap-2">
              <span className="text-primary" aria-hidden>
                ·
              </span>
              Computer Science with Economics minor, Dalhousie (co-op)
            </li>
            <li className="flex gap-2">
              <span className="text-primary" aria-hidden>
                ·
              </span>
              Full-stack and data work across fintech, SaaS, and creator tooling
            </li>
          </ul>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="experience-heading"
        className="flex min-h-[calc(100dvh-4rem)] snap-start snap-always flex-col justify-center gap-8 scroll-mt-16 py-8 sm:py-10"
      >
        <div>
          <h2
            id="experience-heading"
            className="text-balance font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            Experience
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Where I&apos;ve owned problems end-to-end and learned from operators,
            users, and peers.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Experience
            source={CPPIB}
            title="Software Engineer"
            company="CPP Investments"
            dateRange="Oct 2025 – present"
          />
          <Experience
            source={CPPIB}
            title="Senior Intern Engineer"
            company="CPP Investments"
            dateRange="Sep 2024 – Dec 2024"
          />
          <Experience
            source={DalCSS}
            title="Vice President External"
            company="Dalhousie Computer Science Society"
            dateRange="May 2024 – May 2025"
          />
          <Experience
            source={Cobweb}
            title="Vice President Outreach"
            company="COBWEB (Halifax Chapter)"
            dateRange="Mar 2024 – Mar 2025"
          />
          <Experience
            source={DashHudson}
            title="Full Stack Software Engineer Intern"
            company="Dash Social"
            dateRange="Jan 2024 – Apr 2024"
          />
          <Experience
            source={ShiftKey}
            title="Student Ambassador"
            company="ShiftKey Labs"
            dateRange="Aug 2023 – present"
          />
          <Experience
            source={NBS}
            title="Junior Software Engineer"
            company="NorthBay Solutions"
            dateRange="May 2023 – Aug 2023"
          />
        </div>
      </section>

      <Works />
    </div>
  )
}

export default Home
