import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ExperienceProps {
  source: string
  title: string
  company: string
  dateRange: string
}

function Experience({ source, title, company, dateRange }: ExperienceProps) {
  return (
    <Card
      size="sm"
      className={cn("border-border/80 shadow-sm transition-shadow hover:shadow-md")}
    >
      <CardContent className="flex gap-4">
        <img
          src={source}
          alt=""
          className="size-14 shrink-0 rounded-lg border border-border object-cover"
          width={56}
          height={56}
        />
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
