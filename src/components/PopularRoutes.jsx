import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Icon } from './Icons.jsx'
import { popularRoutes } from '../data/site.js'

gsap.registerPlugin(ScrollTrigger)

const gradients = [
  'from-rose-500 via-red-600 to-orange-500',
  'from-sky-500 via-blue-600 to-indigo-600',
  'from-amber-400 via-orange-500 to-red-600',
  'from-emerald-400 via-teal-500 to-cyan-600',
  'from-violet-500 via-purple-600 to-fuchsia-500',
  'from-cyan-400 via-sky-500 to-blue-600',
]

export default function PopularRoutes() {
  const sec = useRef(null)
  const track = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const t = track.current
      if (!t) return
      const total = t.scrollWidth - window.innerWidth + 80
      gsap.to(t, {
        x: -total,
        ease: 'none',
        scrollTrigger: {
          trigger: sec.current,
          start: 'top top',
          end: () => `+=${total}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
    }, sec)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sec} className="relative bg-white">
      <div className="container-x pt-24 pb-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Lignes populaires</span>
            <h2 className="mt-3 font-display font-extrabold text-ctm-dark" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 0.95 }}>
              78 villes.<br />
              <span className="text-ctm-red">Une seule compagnie.</span>
            </h2>
          </div>
          <div className="hidden text-right text-sm text-ctm-navy/60 sm:block">
            ← Faites défiler horizontalement
          </div>
        </div>
      </div>

      <div className="overflow-hidden pb-24">
        <div ref={track} className="flex gap-6 pl-5 will-change-transform sm:pl-8">
          {popularRoutes.map((r, i) => (
            <article
              key={`${r.from}-${r.to}`}
              className="group relative h-[440px] w-[320px] shrink-0 overflow-hidden rounded-[2rem] shadow-card sm:w-[380px]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]}`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
              {/* big number */}
              <div className="absolute right-6 top-4 font-display text-[7rem] font-extrabold leading-none text-white/15">
                0{i + 1}
              </div>
              <div className="absolute inset-0 flex flex-col justify-between p-7 text-white">
                <div className="flex items-center gap-2">
                  <span className="pill bg-white/20 text-white backdrop-blur">
                    <Icon name="seat" className="h-3.5 w-3.5" /> {r.duration}
                  </span>
                  <span className="pill bg-white/20 text-white backdrop-blur">Premium dispo.</span>
                </div>
                <div>
                  <div className="font-display text-3xl font-extrabold leading-tight">
                    {r.from}
                  </div>
                  <div className="my-2 flex items-center gap-3">
                    <span className="h-px flex-1 bg-white/50" />
                    <Icon name="arrow" className="h-5 w-5" />
                    <span className="h-px flex-1 bg-white/50" />
                  </div>
                  <div className="font-display text-3xl font-extrabold leading-tight">
                    {r.to}
                  </div>
                  <div className="mt-6 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-white/70">à partir de</span>
                      <div className="font-display text-4xl font-extrabold">
                        {r.price}<span className="text-base font-bold"> DH</span>
                      </div>
                    </div>
                    <button className="grid h-12 w-12 place-items-center rounded-full bg-white text-ctm-dark transition group-hover:scale-110 group-hover:bg-yellow-300">
                      <Icon name="arrow" className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
          {/* tail CTA */}
          <article className="grid h-[440px] w-[320px] shrink-0 place-items-center rounded-[2rem] border-2 border-dashed border-ctm-cloud bg-white p-8 text-center sm:w-[380px]">
            <div>
              <span className="grid h-16 w-16 place-items-center rounded-full bg-ctm-red/10 text-ctm-red">
                <Icon name="search" className="h-7 w-7" />
              </span>
              <h3 className="mt-4 font-display text-2xl font-extrabold text-ctm-dark">
                Et 600 autres lignes
              </h3>
              <p className="mt-2 text-sm text-ctm-navy/60">Trouvez la vôtre en quelques secondes.</p>
              <a href="#search" className="btn-primary mt-5">Rechercher</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
