import { Routes, Route } from "react-router-dom"

import About from "@/assets/components/About/About"
import Contact from "@/assets/components/Contact/Contact"
import Home from "@/assets/components/Home/Home"
import Projects from "@/assets/components/Projects/Projects"

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact-me" element={<Contact />} />
    </Routes>
  )
}

export default Main