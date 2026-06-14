import { useEffect, useState } from 'react'
import { Icon } from './Icons.jsx'
import { navLinks } from '../data/site.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState('FR')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-card backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-[68px] items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-ctm-red text-white">
            <Icon name="seat" className="h-5 w-5" />
          </span>
          <span
            className={`font-display text-xl font-extrabold tracking-tight ${
              scrolled ? 'text-ctm-dark' : 'text-white'
            }`}
          >
            CTM
          </span>
        </a>

        <ul
          className={`hidden items-center gap-8 text-sm font-semibold md:flex ${
            scrolled ? 'text-ctm-navy' : 'text-white/90'
          }`}
        >
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-ctm-red">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div
            className={`hidden items-center rounded-full border p-0.5 text-xs font-bold md:flex ${
              scrolled ? 'border-ctm-cloud text-ctm-navy' : 'border-white/30 text-white'
            }`}
          >
            {['FR', 'AR', 'EN', 'ES'].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full px-2.5 py-1 transition ${
                  lang === l ? 'bg-ctm-red text-white' : 'hover:text-ctm-red'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a href="#search" className="btn-primary hidden h-10 px-5 py-0 text-sm sm:inline-flex">
            Réserver
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`grid h-10 w-10 place-items-center rounded-full md:hidden ${
              scrolled ? 'text-ctm-dark' : 'text-white'
            }`}
            aria-label="Menu"
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden">
          <ul className="container-x flex flex-col gap-1 bg-white/95 pb-4 text-sm font-semibold text-ctm-navy backdrop-blur">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 hover:bg-ctm-cloud"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a href="#search" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Réserver
            </a>
          </ul>
        </div>
      )}
    </header>
  )
}
