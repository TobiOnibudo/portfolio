import { Link } from "react-router-dom"
import { FileText } from "lucide-react"
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai"

import Pdf from "@/img/Resume.pdf"
import { cn } from "@/lib/utils"

const linkClass =
  "group inline-flex items-center gap-2 rounded-sm text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"

type ConnectStripProps = {
  className?: string
}

function ConnectStrip({ className }: ConnectStripProps) {
  return (
    <div className={cn("w-full", className)}>
      <nav aria-label="Social and contact links">
        <ul className="flex flex-wrap items-center gap-x-1 gap-y-2 text-sm">
          <li>
            <a
              href="https://www.linkedin.com/in/tobi-onibudo/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
              aria-label="LinkedIn profile"
            >
              <AiFillLinkedin
                className="size-4 shrink-0 opacity-80 group-hover:opacity-100"
                aria-hidden
              />
              <span>LinkedIn</span>
            </a>
          </li>
          <li className="px-2 text-muted-foreground/40 select-none" aria-hidden>
            ·
          </li>
          <li>
            <a
              href="https://github.com/TobiOnibudo"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
              aria-label="GitHub profile"
            >
              <AiFillGithub
                className="size-4 shrink-0 opacity-80 group-hover:opacity-100"
                aria-hidden
              />
              <span>GitHub</span>
            </a>
          </li>
          <li className="px-2 text-muted-foreground/40 select-none" aria-hidden>
            ·
          </li>
          <li>
            <a
              href={Pdf}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
              aria-label="Download resume as PDF"
            >
              <FileText
                className="size-4 shrink-0 opacity-80 group-hover:opacity-100"
                strokeWidth={2}
                aria-hidden
              />
              <span>Resume</span>
            </a>
          </li>
          <li className="px-2 text-muted-foreground/40 select-none" aria-hidden>
            ·
          </li>
          <li>
            <Link to="/Contact-me" className={linkClass} aria-label="Contact page">
              <AiFillMail
                className="size-4 shrink-0 opacity-80 group-hover:opacity-100"
                aria-hidden
              />
              <span>Email</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default ConnectStrip
