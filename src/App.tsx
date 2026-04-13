import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import OurApps from './components/OurApps'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('darkMode')
    if (stored !== null) return stored === 'true'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', String(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white sm:scroll-smooth">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="max-w-6xl mx-auto">
        <Hero />
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <OurApps />
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <Testimonials />
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
