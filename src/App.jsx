import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Technologies from './components/Technologies.jsx'
import Portfolio from './components/Portfolio.jsx'
import Contacts from './components/Contacts.jsx'
import FadeIn from "./components/FadeIn.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />

        <FadeIn>
            <Hero />
        </FadeIn>

        <FadeIn>
            <About />
        </FadeIn>

        <FadeIn>
            <Services />
        </FadeIn>

        <FadeIn>
            <Technologies />
        </FadeIn>

        <FadeIn>
            <Portfolio />
        </FadeIn>

        <FadeIn>
            <Contacts />
        </FadeIn>
    </>
  )
}

export default App
