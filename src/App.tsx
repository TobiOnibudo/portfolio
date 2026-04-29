import Pages from "@/assets/components/Routing/Pages"
import Navbar from "@/assets/components/Routing/Navbar"
import Footer from "@/assets/components/Footer/Footer"
import { cn } from "@/lib/utils"

function App() {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col bg-background",
        "before:pointer-events-none before:fixed before:inset-0 before:-z-10",
        "before:bg-[radial-gradient(ellipse_120%_70%_at_50%_-25%,oklch(0.55_0.18_264/0.12),transparent_55%)]",
        "dark:before:bg-[radial-gradient(ellipse_120%_70%_at_50%_-25%,oklch(0.45_0.15_264/0.2),transparent_55%)]"
      )}
    >
      <a
        href="#main-content"
        className="fixed top-0 left-4 z-[200] -translate-y-full rounded-b-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-md transition-transform focus:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Skip to content
      </a>
      <Navbar />
      <main
        id="main-content"
        className="container mx-auto w-full max-w-6xl flex-1 px-4 pb-8 pt-0 sm:px-6 lg:px-8"
      >
        <Pages />
      </main>
      <Footer />
    </div>
  )
}

export default App
