import { Suspense, lazy, useEffect, useRef } from 'react'
import gsap from 'gsap'
import SearchBar from './SearchBar.jsx'
import { Icon } from './Icons.jsx'

// 3D canvas is lazy + Suspense-wrapped so the page renders instantly on slow devices.
const BusModel = lazy(() => import('./BusModel.jsx'))

export default function Hero() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('[data-hero="eyebrow"]', { y: 20, opacity: 0, duration: 0.6 })
        .from('[data-hero="title"] .line', { y: 40, opacity: 0, stagger: 0.12, duration: 0.8 }, '-=0.2')
        .from('[data-hero="text"]', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('[data-hero="search"]', { y: 30, opacity: 0, duration: 0.7 }, '-=0.3')
        .from('[data-hero="bus"]', { opacity: 0, scale: 0.92, duration: 1, ease: 'power2.out' }, '-=0.9')
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="top"
      ref={root}
      className="relative overflow-hidden bg-gradient-to-b from-ctm-dark via-ctm-navy to-ctm-sky pt-28 pb-40 text-white"
    >
      {/* Soft clouds */}
      <Clouds />

      <div className="container-x relative z-10 grid items-center gap-8 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span data-hero="eyebrow" className="pill bg-white/15 text-white">
            <Icon name="star" className="h-3.5 w-3.5 text-yellow-300" />
            La compagnie de bus n°1 au Maroc — depuis 1919
          </span>

          <h1
            data-hero="title"
            className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl xl:text-6xl"
          >
            <span className="line block">Votre voyage</span>
            <span className="line block">commence avec</span>
            <span className="line block text-yellow-300">CTM.</span>
          </h1>

          <p data-hero="text" className="mx-auto mt-5 max-w-md text-base text-white/80 lg:mx-0">
            +78 villes, plus de 600 lignes et un siècle de confiance. Réservez en
            direct, choisissez votre siège et voyagez sereinement.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start" data-hero="text">
            <a href="#search" className="btn-primary">
              Réserver un billet
              <Icon name="arrow" className="h-5 w-5" />
            </a>
            <a href="#premium" className="btn-ghost">
              <Icon name="play" className="h-4 w-4" />
              Découvrir Premium
            </a>
          </div>
        </div>

        {/* 3D bus */}
        <div data-hero="bus" className="relative h-[300px] sm:h-[380px] lg:h-[460px]">
          <Suspense fallback={<BusFallback />}>
            <BusModel />
          </Suspense>
        </div>
      </div>

      {/* Floating search bar */}
      <div id="search" className="container-x relative z-20 -mb-32 mt-6" data-hero="search">
        <SearchBar />
      </div>

      {/* bottom cloud wave */}
      <svg
        className="absolute bottom-0 left-0 w-full text-white"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,64 C240,120 480,20 720,48 C960,76 1200,128 1440,72 L1440,120 L0,120 Z"
        />
      </svg>
    </section>
  )
}

function BusFallback() {
  return (
    <div className="grid h-full place-items-center">
      <div className="animate-floaty text-white/70">
        <Icon name="seat" className="h-16 w-16" />
      </div>
    </div>
  )
}

function Clouds() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute left-[8%] top-[18%] h-24 w-48 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute right-[12%] top-[28%] h-28 w-56 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute left-[40%] top-[8%] h-20 w-40 rounded-full bg-white/5 blur-2xl" />
    </div>
  )
}
