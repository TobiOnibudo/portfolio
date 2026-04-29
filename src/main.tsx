import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

import App from "./App.tsx"
import "./index.css"
import ScrollToTop from "./ScrollToTop.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter basename="/portfolio">
        <ScrollToTop />
        <App />
        <Toaster position="top-center" richColors closeButton />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
