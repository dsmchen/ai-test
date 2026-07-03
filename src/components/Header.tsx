import { useState, useEffect, useCallback, useRef } from 'react'
import ThemeToggle from './ThemeToggle'

const navItems = ['About', 'Projects', 'Contact']

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const close = useCallback(() => {
    setMenuOpen(false)
    toggleRef.current?.focus()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [menuOpen, close])

  useEffect(() => {
    if (!menuOpen) return
    const handler = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        close()
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [menuOpen, close])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-linkedin-950/90 backdrop-blur-sm border-b border-linkedin-100 dark:border-linkedin-800">
      <nav className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold text-linkedin-900 dark:text-linkedin-50">
          Doris
        </a>

        <div className="flex items-center gap-2">
          {/* Desktop nav */}
          <ul className="hidden md:flex gap-6 text-sm text-linkedin-700 dark:text-linkedin-300">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-linkedin-500 dark:hover:text-linkedin-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          {/* Hamburger button */}
          <button
            ref={toggleRef}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="md:hidden p-2 -mr-2 text-linkedin-700 dark:text-linkedin-300 hover:text-linkedin-900 dark:hover:text-linkedin-50 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden border-t border-linkedin-100 dark:border-linkedin-800 bg-white dark:bg-linkedin-950 px-4 py-4"
        >
          <ul className="flex flex-col gap-4 text-sm text-linkedin-700 dark:text-linkedin-300">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={close}
                  className="block py-2 hover:text-linkedin-500 dark:hover:text-linkedin-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
