import { useEffect, useState } from 'react'
import profile from '../data/portfolio.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  const links = ['About', 'Skills', 'Projects', 'Contact']

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#home" className="navbar__brand">
        {profile.name.split(' ')[0]}
        <span className="navbar__brand-dot">.</span>
      </a>

      <nav className="navbar__links">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="navbar__toggle"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`sidebar__backdrop ${open ? 'sidebar__backdrop--open' : ''}`}
        onClick={close}
      />
      <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
        <nav className="sidebar__links">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={close}>
              {link}
            </a>
          ))}
        </nav>
      </aside>
    </header>
  )
}