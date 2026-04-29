import bioImage from "@/img/bioImage.jpeg"

function About() {
  return (
    <article className="mx-auto max-w-4xl pb-8 pt-8 sm:pt-10">
      <h1 className="text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        About
      </h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:items-start lg:gap-12">
        <div className="mx-auto w-full max-w-xs lg:mx-0">
          <img
            src={bioImage}
            alt="Tobi Onibudo"
            className="aspect-[4/5] w-full rounded-2xl border border-border object-cover shadow-md ring-1 ring-foreground/5"
            width={400}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="min-w-0 space-y-4 rounded-2xl border border-border bg-card/40 p-6 shadow-sm ring-1 ring-foreground/5 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-foreground">
            How I work
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            I&apos;m Tobi Onibudo, a software engineer at CPP Investments (CPPIB) in
            Toronto. I build solutions end to end, from services and data through to
            the UI.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            I studied Computer Science with an Economics minor at Dalhousie, including
            co-ops at Dash Social (creator SaaS) and NorthBay Solutions (fintech). On
            campus I was VP External for the Dalhousie Computer Science Society and a
            ShiftKey Labs ambassador, and I&apos;m part of ColorStack. I like shipping
            work that trims manual steps, clarifies interfaces, and shortens feedback
            loops. I also care about growing with the people around me. Say hello on{" "}
            <a
              className="font-medium text-primary underline-offset-4 hover:underline"
              href="https://www.linkedin.com/in/tobi-onibudo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </article>
  )
}

export default About
