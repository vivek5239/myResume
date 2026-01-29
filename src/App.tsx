import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Appreciations } from './components/Appreciations'
import { Footer } from './components/Footer'

type Theme = 'blue' | 'purple' | 'teal'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [theme, setTheme] = useState<Theme>('teal')

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    
    // Remove all theme classes
    root.classList.remove('theme-blue', 'theme-purple', 'theme-teal')
    root.classList.add(`theme-${theme}`)
  }, [darkMode, theme])

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Appreciations />
      </main>
      <Footer theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
