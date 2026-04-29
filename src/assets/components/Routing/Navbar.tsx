import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu } from "lucide-react"

import logo from "@/img/Logo-t.png"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
    "hover:bg-muted hover:text-foreground",
    isActive
      ? "bg-muted text-foreground"
      : "text-muted-foreground"
  )

const routes = [
  { to: "/", label: "Home" },
  { to: "/Projects", label: "Portfolio" },
  { to: "/About", label: "About" },
  { to: "/Contact-me", label: "Contact" },
] as const

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/70">
      <nav
        className="container mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 rounded-md outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
        >
          <img
            src={logo}
            alt="Tobi Onibudo home"
            className="h-12 w-auto object-contain sm:h-14"
            width={187}
            height={56}
          />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {routes.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={navLinkClass}
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-11 md:hidden"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(100%,20rem)]"
              id="mobile-nav"
            >
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-1">
                {routes.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) =>
                      cn(
                        "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                        isActive
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                      )
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
