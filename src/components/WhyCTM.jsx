import { Icon } from './Icons.jsx'
import { features, stats } from '../data/site.js'
import { useReveal, useCountUp } from '../hooks/useReveal.js'

function Stat({ value, label, suffix }) {
  const ref = useCountUp(value)
  return (
    <div data-reveal className="text-center">
      <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
        <span ref={ref}>0</span>
        {suffix}
      </div>
      <div className="mt-1 text-sm text-white/70">{label}</div>
    </div>
  )
}

export default function WhyCTM() {
  const ref = useReveal()

  return (
    <section ref={ref} className="bg-ctm-cloud py-20 sm:py-24">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr,1.2fr]">
          <div data-reveal>
            <span className="eyebrow">Pourquoi CTM</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-ctm-dark sm:text-4xl">
              Un siècle d’avance sur la route
            </h2>
            <p className="mt-4 max-w-md text-ctm-navy/70">
              Là où les autres revendent vos billets, CTM vous offre l’expérience
              complète : le plus grand réseau du Maroc, opéré en direct, avec le
              confort et la sécurité qui ont fait notre réputation depuis 1919.
            </p>
            <a href="#search" className="btn-primary mt-6">
              Réserver maintenant
              <Icon name="arrow" className="h-5 w-5" />
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                data-reveal
                className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-white transition hover:-translate-y-1 hover:shadow-float"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ctm-red/10 text-ctm-red">
                  <Icon name={f.icon} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ctm-dark">{f.title}</h3>
                <p className="mt-2 text-sm text-ctm-navy/70">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats band */}
      <div className="container-x mt-14">
        <div className="grid grid-cols-2 gap-6 rounded-3xl bg-gradient-to-r from-ctm-dark to-ctm-navy px-6 py-10 shadow-float sm:grid-cols-4">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
