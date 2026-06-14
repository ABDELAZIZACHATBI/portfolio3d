import { Icon } from './Icons.jsx'
import { useReveal } from '../hooks/useReveal.js'

const perks = [
  'Sièges larges en cuir, inclinables 140°',
  'Trajets directs, moins d’arrêts',
  'Accès salon VIP dans les grandes gares',
  'Collation, WiFi haut débit & prises individuelles',
]

export default function Premium() {
  const ref = useReveal()

  return (
    <section id="premium" ref={ref} className="container-x py-20 sm:py-24">
      <div className="overflow-hidden rounded-[2rem] bg-ctm-dark text-white shadow-float">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="p-8 sm:p-12" data-reveal>
            <span className="pill bg-yellow-300/20 text-yellow-200">
              <Icon name="star" className="h-3.5 w-3.5" />
              CTM Premium
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              Voyagez en première classe sur la route
            </h2>
            <p className="mt-4 max-w-md text-white/70">
              L’expérience que les comparateurs ne peuvent pas vous offrir. Plus
              d’espace, plus de calme, plus de services — réservés aux passagers Premium.
            </p>

            <ul className="mt-6 space-y-3">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-white/90">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ctm-red">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <a href="#search" className="btn-primary mt-8">
              Réserver en Premium
              <Icon name="arrow" className="h-5 w-5" />
            </a>
          </div>

          <div className="relative h-full min-h-[280px] p-8" data-reveal>
            <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-ctm-navy via-ctm-sky/40 to-ctm-red/40">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
              <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/10 p-5 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-white/60">
                      Casablanca → Agadir
                    </div>
                    <div className="font-display text-2xl font-extrabold">Premium</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs uppercase tracking-wide text-white/60">à partir de</div>
                    <div className="font-display text-2xl font-extrabold text-yellow-300">
                      250 DH
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  {['1A', '1B', '2A', '2B'].map((s, i) => (
                    <span
                      key={s}
                      className={`grid h-9 flex-1 place-items-center rounded-lg text-xs font-bold ${
                        i === 1 ? 'bg-ctm-red text-white' : 'bg-white/15 text-white/70'
                      }`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
