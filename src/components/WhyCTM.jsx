import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Icon } from './Icons.jsx'
import { features, stats } from '../data/site.js'
import { useReveal, useCountUp } from '../hooks/useReveal.js'

gsap.registerPlugin(ScrollTrigger)

function Stat({ value, label, suffix }) {
  const ref = useCountUp(value)
  return (
    <div className="text-center">
      <div className="font-display text-4xl font-extrabold text-white sm:text-6xl">
        <span ref={ref}>0</span>
        <span className="text-ctm-red">{suffix}</span>
      </div>
      <div className="mt-2 text-xs uppercase tracking-widest text-white/60">{label}</div>
    </div>
  )
}

export default function WhyCTM() {
  const ref = useReveal()
  const tilts = useRef([])

  useEffect(() => {
    const cleanups = []
    tilts.current.forEach((card) => {
      if (!card) return
      const onMove = (e) => {
        const r = card.getBoundingClientRect()
        const rx = ((e.clientY - r.top) / r.height - 0.5) * -10
        const ry = ((e.clientX - r.left) / r.width - 0.5) * 10
        gsap.to(card, { rotationX: rx, rotationY: ry, transformPerspective: 800, duration: 0.4, ease: 'power3.out' })
      }
      const onLeave = () => gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.6, ease: 'power3.out' })
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
      cleanups.push(() => {
        card.removeEventListener('mousemove', onMove)
        card.removeEventListener('mouseleave', onLeave)
      })
    })
    return () => cleanups.forEach((fn) => fn())
  }, [])

  return (
    <section ref={ref} className="bg-ctm-cloud py-24 sm:py-32">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr,1.3fr]">
          <div data-reveal>
            <span className="eyebrow">Pourquoi CTM</span>
            <h2 className="mt-3 font-display font-extrabold leading-[0.95] text-ctm-dark" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
              Un siècle <br />
              <span className="text-ctm-red">d’avance</span> <br />
              sur la route.
            </h2>
            <p className="mt-5 max-w-md text-ctm-navy/70">
              Là où les autres revendent vos billets, CTM vous offre l’expérience
              complète — opérée en direct, sans intermédiaire, avec le confort
              et la sécurité qui ont fait notre réputation depuis 1919.
            </p>
            <a href="#search" className="btn-primary mt-7">
              Réserver maintenant
              <Icon name="arrow" className="h-5 w-5" />
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((f, i) => (
              <div
                key={f.title}
                ref={(el) => (tilts.current[i] = el)}
                data-reveal
                className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-card transition-shadow hover:shadow-float"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <span className="absolute -right-6 -top-6 font-display text-[6rem] font-extrabold leading-none text-ctm-cloud">
                  0{i + 1}
                </span>
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-ctm-red to-orange-500 text-white shadow-lg">
                  <Icon name={f.icon} />
                </span>
                <h3 className="relative mt-5 font-display text-xl font-extrabold text-ctm-dark">{f.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ctm-navy/70">{f.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* huge stats band */}
        <div className="mt-20 overflow-hidden rounded-[2rem] bg-gradient-to-br from-ctm-dark via-ctm-navy to-[#3A2C5E] p-10 shadow-float sm:p-14">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {stats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
