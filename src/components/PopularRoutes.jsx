import { Icon } from './Icons.jsx'
import { popularRoutes } from '../data/site.js'
import { useReveal } from '../hooks/useReveal.js'

// Deterministic gradient per card so it looks designed without image assets.
const gradients = [
  'from-rose-400 to-red-600',
  'from-sky-400 to-blue-600',
  'from-amber-400 to-orange-600',
  'from-emerald-400 to-teal-600',
  'from-indigo-400 to-violet-600',
  'from-cyan-400 to-sky-600',
]

export default function PopularRoutes() {
  const ref = useReveal()

  return (
    <section ref={ref} className="container-x py-20 sm:py-24">
      <div className="flex flex-col items-center text-center" data-reveal>
        <span className="eyebrow">Lignes populaires</span>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-ctm-dark sm:text-4xl">
          Les trajets préférés des voyageurs
        </h2>
        <p className="mt-3 max-w-xl text-ctm-navy/70">
          Des départs fréquents, des prix clairs. Choisissez votre ligne et réservez en
          quelques secondes.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {popularRoutes.map((r, i) => (
          <article
            key={`${r.from}-${r.to}`}
            data-reveal
            className="group overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-ctm-cloud transition hover:-translate-y-1.5 hover:shadow-float"
          >
            <div
              className={`relative h-40 bg-gradient-to-br ${gradients[i % gradients.length]}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
              <span className="pill absolute left-4 top-4 bg-white/90">
                <Icon name="seat" className="h-3.5 w-3.5 text-ctm-red" />
                {r.duration}
              </span>
              <span className="absolute bottom-4 right-4 text-white/90">
                <Icon name="arrow" className="h-8 w-8 transition group-hover:translate-x-1" />
              </span>
            </div>

            <div className="p-5">
              <div className="flex items-center gap-2 font-display text-lg font-bold text-ctm-dark">
                {r.from}
                <Icon name="arrow" className="h-4 w-4 text-ctm-red" />
                {r.to}
              </div>
              <div className="mt-3 flex items-end justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase text-ctm-navy/50">
                    à partir de
                  </span>
                  <div className="font-display text-2xl font-extrabold text-ctm-red">
                    {r.price} <span className="text-base font-bold">DH</span>
                  </div>
                </div>
                <button className="btn-primary h-10 px-5 py-0 text-sm">Réserver</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
