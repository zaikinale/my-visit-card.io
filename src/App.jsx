import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Technologies from './components/Technologies.jsx'
import Portfolio from './components/Portfolio.jsx'
import Contacts from './components/Contacts.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Hero />
        <About />
        <Services />
        <Technologies />
        <Portfolio />
        <Contacts />
    </>
  )
}

export default App
