import { useEffect, useState } from 'react'
import { whatsappLink } from '../config.js'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#services')

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    const updateActiveLink = () => {
      const header = document.querySelector('.site-header')
      const marker = (header?.getBoundingClientRect().bottom ?? 0) + window.innerHeight * 0.3
      let currentLink = '#services'

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) {
          currentLink = `#${section.id}`
        }
      }

      setActiveLink(currentLink)
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true })
    window.addEventListener('resize', updateActiveLink)
    updateActiveLink()

    return () => {
      window.removeEventListener('scroll', updateActiveLink)
      window.removeEventListener('resize', updateActiveLink)
    }
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <a href="#top" className="brand" onClick={close}>
          <span className="brand__name">MADE YOU LOOK</span>
          <p className="brand__script">by Samiksha</p>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="menu-toggle__bar" aria-hidden="true" />
          <span className="menu-toggle__bar" aria-hidden="true" />
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      <nav id="site-nav" className={`nav${open ? ' nav--open' : ''}`} aria-label="Main">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`nav__link${activeLink === link.href ? ' nav__link--active' : ''}`}
            aria-current={activeLink === link.href ? 'location' : undefined}
            onClick={close}
          >
            {link.label}
          </a>
        ))}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--whatsapp btn--small nav__cta"
          onClick={close}
        >
          WhatsApp
        </a>
      </nav>
    </header>
  )
}
