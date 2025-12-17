import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Technologies from './components/Technologies.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Hero />
        <About />
        <Services />
        <Technologies />
    </>
  )
}

export default App
