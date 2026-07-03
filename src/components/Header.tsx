export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-linkedin-100">
      <nav className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold text-linkedin-900">
          Doris
        </a>
        <ul className="flex gap-6 text-sm text-linkedin-700">
          {['About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-linkedin-500 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
