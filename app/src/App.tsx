import './App.css'
import Pages from "./assets/components/Routing/Pages"
import Navbar from "./assets/components/Routing/Navbar"
import Footer from "./assets/components/Footer"
import Particle from './assets/components/particles'

function App() {

  
  return (
    <div>
      <Particle />
      <Navbar />
      <Pages />
      <Footer />
    </div>
  )
}

export default App
