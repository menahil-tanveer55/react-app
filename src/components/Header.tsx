import { useState } from 'react'

interface HeaderProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-violet-900 text-white sticky top-0 z-10">
      <section className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <a href="#">🚀 Rocket.io</a>
        </h1>
        <div className="flex flex-row gap-4 items-center">
          <button
            className="text-3xl md:hidden focus:outline-none cursor-pointer"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            &#9776;
          </button>

          <div className="hidden md:flex">
            <nav className="space-x-8 text-xl" aria-label="main">
              <a href="#" className="hover:opacity-90">Home</a>
              <a href="#rockets" className="hover:opacity-90">Our Apps</a>
              <a href="#testimonials" className="hover:opacity-90">Testimonials</a>
              <a href="#contact" className="hover:opacity-90">Contact Us</a>
            </nav>
          </div>

          <div className="flex items-center cursor-pointer" onClick={toggleDarkMode} aria-label="Toggle dark mode">
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
              </svg>
            )}
          </div>
        </div>
      </section>

      {/* Mobile menu */}
      {menuOpen && (
        <section className="absolute top-0 bg-black w-full text-3xl flex flex-col justify-center origin-top animate-open-menu">
          <button
            className="text-8xl self-end px-6 cursor-pointer"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <nav className="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
            <a href="#rockets" className="w-full text-center py-6 hover:opacity-90" onClick={() => setMenuOpen(false)}>Our Apps</a>
            <a href="#testimonials" className="w-full text-center py-6 hover:opacity-90" onClick={() => setMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="w-full text-center py-6 hover:opacity-90" onClick={() => setMenuOpen(false)}>Contact Us</a>
          </nav>
        </section>
      )}
    </header>
  )
}
