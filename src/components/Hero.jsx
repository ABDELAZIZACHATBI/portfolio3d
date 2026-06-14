import { Suspense, lazy, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SearchBar from './SearchBar.jsx'
import { Icon } from './Icons.jsx'

gsap.registerPlugin(ScrollTrigger)

const BusModel = lazy(() => import('./BusModel.jsx'))

// Split a string into spans-per-char for stagger reveal.
function SplitWord({ text, className = '' }) {
  return (
    <span className={`inline-block overflow-hidden align-bottom ${className}`}>
      {text.split('').map((c, i) => (
        <span
          key={i}
          data-char
          className="inline-block translate-y-[110%] will-change-transform"
        >
          {c === ' ' ? ' ' : c}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const root = useRef(null)
  const scrollY = useRef(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // intro
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
      tl.from('[data-hero="eyebrow"]', { y: 20, opacity: 0, duration: 0.8 }, 0)
        .to('[data-char]', { y: 0, duration: 1.2, stagger: 0.025, ease: 'expo.out' }, 0.2)
        .from('[data-hero="text"]', { y: 24, opacity: 0, duration: 0.9 }, '-=0.6')
        .from('[data-hero="cta"]', { y: 24, opacity: 0, duration: 0.7, stagger: 0.1 }, '-=0.6')
        .from('[data-hero="search"]', { y: 40, opacity: 0, duration: 1 }, '-=0.7')
        .from('[data-hero="stat"]', { y: 20, opacity: 0, duration: 0.6, stagger: 0.08 }, '-=0.6')

      // scroll progress drives bus + background parallax
      ScrollTrigger.create({
        trigger: root.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          scrollY.current = self.progress
        },
      })

      gsap.to('[data-hero="bg-layer-1"]', {
        yPercent: -15,
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to('[data-hero="bg-layer-2"]', {
        yPercent: -30,
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to('[data-hero="title"]', {
        yPercent: -8,
        scale: 0.96,
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="top"
      ref={root}
      className="relative min-h-[100svh] overflow-hidden bg-gradient-to-b from-[#0B1F3A] via-[#3A2C5E] to-[#F2A65A] pt-24 text-white"
    >
      {/* ambient layers */}
      <div data-hero="bg-layer-1" className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-[10%] top-[18%] h-72 w-72 rounded-full bg-[#FFB347] blur-[120px]" />
        <div className="absolute right-[8%] top-[35%] h-96 w-96 rounded-full bg-[#E2001A]/40 blur-[140px]" />
        <div className="absolute left-1/2 bottom-[20%] h-64 w-64 -translate-x-1/2 rounded-full bg-[#7DB9E8]/30 blur-[120px]" />
      </div>

      {/* dot grid */}
      <div data-hero="bg-layer-2" className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="container-x relative z-10 grid items-center gap-6 pt-6 lg:grid-cols-[1.1fr,1fr]">
        <div className="text-center lg:text-left">
          <span data-hero="eyebrow" className="pill bg-white/10 text-white backdrop-blur ring-1 ring-white/20">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-300" />
            </span>
            La compagnie de bus n°1 au Maroc — depuis 1919
          </span>

          <h1
            data-hero="title"
            className="mt-6 font-display font-extrabold leading-[0.92] tracking-tight"
            style={{ fontSize: 'clamp(2.6rem, 7.5vw, 6.5rem)' }}
          >
            <SplitWord text="Votre" className="mr-3" />
            <SplitWord text="voyage." />
            <br />
            <SplitWord text="Notre" className="mr-3" />
            <span className="relative inline-block">
              <SplitWord text="route." className="bg-gradient-to-r from-yellow-300 via-orange-300 to-ctm-red bg-clip-text text-transparent" />
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 8 Q 50 0 100 6 T 198 4" stroke="#FFD27A" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p data-hero="text" className="mx-auto mt-6 max-w-md text-base text-white/80 sm:text-lg lg:mx-0">
            Un siècle d’expérience. Plus de 78 villes. 600 lignes opérées en direct.
            Bienvenue dans la nouvelle ère du voyage marocain.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a data-hero="cta" href="#search" className="btn-primary group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Réserver maintenant
                <Icon name="arrow" className="h-5 w-5 transition group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-yellow-300 to-orange-400 transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a data-hero="cta" href="#premium" className="btn-ghost">
              <Icon name="play" className="h-4 w-4" />
              Découvrir Premium
            </a>
          </div>

          {/* mini stats inline */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 lg:justify-start">
            {[
              { n: '1919', l: 'depuis' },
              { n: '78+', l: 'villes' },
              { n: '600+', l: 'lignes' },
              { n: '4.7★', l: 'satisfaction' },
            ].map((s) => (
              <div key={s.l} data-hero="stat" className="text-left">
                <div className="font-display text-2xl font-extrabold sm:text-3xl">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-white/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D bus */}
        <div className="relative h-[360px] sm:h-[460px] lg:h-[560px]">
          <Suspense fallback={null}>
            <BusModel scrollY={scrollY} />
          </Suspense>

          {/* floating mini cards */}
          <div className="pointer-events-none absolute left-2 top-8 hidden animate-floaty rounded-2xl bg-white/90 px-4 py-3 text-ctm-dark shadow-float backdrop-blur sm:block">
            <div className="flex items-center gap-2">
              <Icon name="wifi" className="h-5 w-5 text-ctm-red" />
              <div>
                <div className="text-[10px] uppercase tracking-wider text-ctm-navy/60">À bord</div>
                <div className="text-sm font-bold">WiFi + USB</div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute right-2 bottom-12 hidden rounded-2xl bg-white/90 px-4 py-3 text-ctm-dark shadow-float backdrop-blur sm:block" style={{ animation: 'floaty 7s ease-in-out infinite 1s' }}>
            <div className="flex items-center gap-2">
              <Icon name="seat" className="h-5 w-5 text-ctm-red" />
              <div>
                <div className="text-[10px] uppercase tracking-wider text-ctm-navy/60">Place 14B</div>
                <div className="text-sm font-bold">Réservée</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating search bar */}
      <div id="search" className="container-x relative z-20 pt-10" data-hero="search">
        <SearchBar />
      </div>

      {/* scroll indicator */}
      <div className="container-x relative z-10 mt-12 flex items-center justify-between pb-10 text-xs uppercase tracking-[0.3em] text-white/60">
        <span>↓ Scroll</span>
        <span className="hidden sm:block">Casablanca · Rabat · Marrakech · Fès · Tanger · Agadir</span>
      </div>
    </section>
  )
}
