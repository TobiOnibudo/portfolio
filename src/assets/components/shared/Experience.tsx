import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ExperienceProps {
  source: string
  title: string
  company: string
  dateRange: string
  logoFit?: "contain" | "cover-left"
}

function Experience({ source, title, company, dateRange, logoFit = "contain" }: ExperienceProps) {
  return (
    <Card
      size="sm"
      className={cn("border-border/80 shadow-sm transition-shadow hover:shadow-md")}
    >
      <CardContent className="flex gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-white dark:bg-white">
          <img
            src={source}
            alt=""
            className={cn(
              "w-full",
              logoFit === "contain" ? "object-contain" : "h-auto object-contain"
            )}
          />
        </div>
        <div className="min-w-0 flex-1 space-y-0.5">
          <p className="font-medium leading-snug text-foreground">{title}</p>
          <p className="text-sm text-muted-foreground">{company}</p>
          <p className="text-xs text-muted-foreground">{dateRange}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default Experience
