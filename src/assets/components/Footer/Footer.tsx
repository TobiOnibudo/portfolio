import { Link, useLocation } from "react-router-dom"

import Pdf from "@/img/Resume.pdf"
import { cn } from "@/lib/utils"

const footerLink =
  "text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"

function Footer() {
  const isHome = useLocation().pathname === "/"

  if (isHome) {
    return null
  }

  return (
    <footer className="mt-auto border-t border-border py-8">
      <div
        className={cn(
          "container mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"
        )}
      >
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Tobi Onibudo
        </p>
        <nav aria-label="Footer links" className="flex flex-wrap gap-x-5 gap-y-2">
          <a
            href="https://www.linkedin.com/in/tobi-onibudo/"
            target="_blank"
            rel="noopener noreferrer"
            className={footerLink}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/TobiOnibudo"
            target="_blank"
            rel="noopener noreferrer"
            className={footerLink}
          >
            GitHub
          </a>
          <a href={Pdf} target="_blank" rel="noopener noreferrer" className={footerLink}>
            Resume
          </a>
          <Link to="/Contact-me" className={footerLink}>
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
