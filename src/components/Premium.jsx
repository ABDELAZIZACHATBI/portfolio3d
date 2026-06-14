import { Icon } from './Icons.jsx'
import { useReveal } from '../hooks/useReveal.js'

const perks = [
  { t: 'Sièges en cuir', d: 'Inclinables 140°, espace jambes XXL.' },
  { t: 'Lounge VIP', d: 'Accès aux salons des grandes gares.' },
  { t: 'WiFi & prises', d: 'Connexion haut débit individuelle.' },
  { t: 'Trajets directs', d: 'Moins d’arrêts, plus de temps gagné.' },
]

export default function Premium() {
  const ref = useReveal()

  return (
    <section id="premium" ref={ref} className="relative overflow-hidden bg-gradient-to-b from-[#0B1F3A] via-[#13294B] to-[#0B1F3A] py-24 text-white sm:py-32">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-1/4 h-80 w-80 rounded-full bg-yellow-400/20 blur-[120px]" />
        <div className="absolute right-[10%] bottom-1/4 h-96 w-96 rounded-full bg-ctm-red/30 blur-[140px]" />
      </div>

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div data-reveal>
            <span className="pill bg-yellow-300/15 text-yellow-200 ring-1 ring-yellow-300/30">
              <Icon name="star" className="h-3.5 w-3.5" />
              CTM Premium
            </span>
            <h2 className="mt-4 font-display font-extrabold leading-[0.95]" style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)' }}>
              La route,<br />
              <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent">
                première classe.
              </span>
            </h2>
            <p className="mt-5 max-w-md text-white/70 sm:text-lg">
              L’expérience que les comparateurs ne peuvent pas vous offrir. Plus
              d’espace, plus de calme, plus de services — réservés aux passagers Premium.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {perks.map((p) => (
                <div key={p.t} className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-yellow-300/15 text-yellow-300 ring-1 ring-yellow-300/30">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-display text-base font-bold">{p.t}</div>
                    <div className="text-sm text-white/60">{p.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#search" className="btn-primary mt-9 bg-gradient-to-r from-yellow-300 to-orange-400 text-ctm-dark hover:from-yellow-400 hover:to-orange-500">
              Réserver en Premium
              <Icon name="arrow" className="h-5 w-5" />
            </a>
          </div>

          {/* seat picker mock */}
          <div data-reveal className="relative">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-ctm-navy via-[#2a3d5e] to-ctm-dark p-8 shadow-float ring-1 ring-white/10">
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-yellow-300/20 blur-3xl" />

              <div className="relative flex items-center justify-between text-sm">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/50">Trajet sélectionné</div>
                  <div className="mt-1 font-display text-xl font-extrabold">Casablanca → Agadir</div>
                </div>
                <span className="pill bg-yellow-300/15 text-yellow-200">Premium</span>
              </div>

              {/* seat grid */}
              <div className="relative mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="mb-4 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-white/50">
                  <span className="h-px w-8 bg-white/20" /> Avant du bus <span className="h-px w-8 bg-white/20" />
                </div>
                <div className="grid grid-cols-5 gap-2.5">
                  {Array.from({ length: 20 }).map((_, i) => {
                    const isAisle = i % 5 === 2
                    const isSelected = i === 7
                    const isTaken = [2, 4, 9, 11, 13, 17].includes(i)
                    if (isAisle) return <div key={i} />
                    return (
                      <button
                        key={i}
                        className={`grid h-10 place-items-center rounded-lg text-xs font-bold transition ${
                          isSelected
                            ? 'bg-gradient-to-br from-yellow-300 to-orange-400 text-ctm-dark shadow-lg scale-110'
                            : isTaken
                            ? 'bg-white/5 text-white/20 cursor-not-allowed'
                            : 'bg-white/10 text-white/70 hover:bg-ctm-red hover:text-white'
                        }`}
                        disabled={isTaken}
                      >
                        <Icon name="seat" className="h-4 w-4" />
                      </button>
                    )
                  })}
                </div>
                <div className="mt-5 flex items-center justify-center gap-4 text-[10px] uppercase tracking-widest text-white/50">
                  <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded bg-white/10" /> Libre</span>
                  <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded bg-yellow-300" /> Vous</span>
                  <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded bg-white/5" /> Pris</span>
                </div>
              </div>

              <div className="relative mt-6 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/50">Place 14B</div>
                  <div className="font-display text-xl font-extrabold">Premium · Côté hublot</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-widest text-white/50">Total</div>
                  <div className="font-display text-3xl font-extrabold text-yellow-300">250 DH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
