import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn(
        "relative size-11 shrink-0 rounded-xl md:size-9",
        "border border-border/60 bg-card/50 shadow-sm",
        "hover:bg-muted/80"
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }}
    >
      {mounted ? (
        isDark ? (
          <Moon className="size-4" aria-hidden />
        ) : (
          <Sun className="size-4" aria-hidden />
        )
      ) : (
        <Sun className="size-4 opacity-60" aria-hidden />
      )}
    </Button>
  )
}
