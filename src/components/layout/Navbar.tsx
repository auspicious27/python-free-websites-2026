import { useState, useEffect } from 'react'
import Button from '../ui/Button'

const navLinks = [
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Projects', href: '#projects' },
  { label: 'Outcomes', href: '#outcomes' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg-base/95 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.5)]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 group">
            <img src="/python.svg" alt="Python" className="h-8 w-auto" />
            <span className="text-text-primary font-semibold text-sm hidden sm:block">Python With AWS Cloud™</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-text-secondary text-sm hover:text-white transition-colors duration-200">{link.label}</a>
            ))}
          </div>
          <div className="hidden md:block">
            <Button variant="primary" size="sm" href="#enroll">Enroll Now</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
