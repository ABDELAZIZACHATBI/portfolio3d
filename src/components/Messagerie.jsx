import { useState } from 'react'
import { Icon } from './Icons.jsx'
import { useReveal } from '../hooks/useReveal.js'

export default function Messagerie() {
  const ref = useReveal()
  const [code, setCode] = useState('')
  const [status, setStatus] = useState(null)

  const track = (e) => {
    e.preventDefault()
    if (!code.trim()) return
    setStatus({
      code: code.trim().toUpperCase(),
      step: 2,
      label: 'En transit — Casablanca → Marrakech',
    })
  }

  const steps = ['Pris en charge', 'En transit', 'En livraison', 'Livré']

  return (
    <section id="messagerie" ref={ref} className="bg-ctm-cloud py-20 sm:py-24">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <div data-reveal>
          <span className="eyebrow">CTM Messagerie</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ctm-dark sm:text-4xl">
            Vos colis voyagent aussi avec nous
          </h2>
          <p className="mt-4 max-w-md text-ctm-navy/70">
            Livraison vers +100 villes au Maroc et à l’international (Espagne, France).
            Suivi en temps réel, assurance et livraison express — un service que les
            comparateurs ne peuvent pas copier.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="pill bg-white">
              <Icon name="box" className="h-3.5 w-3.5 text-ctm-red" /> +100 villes
            </span>
            <span className="pill bg-white">
              <Icon name="shield" className="h-3.5 w-3.5 text-ctm-red" /> Assuré
            </span>
            <span className="pill bg-white">
              <Icon name="pin" className="h-3.5 w-3.5 text-ctm-red" /> International
            </span>
          </div>
        </div>

        <div data-reveal className="rounded-3xl bg-white p-7 shadow-card">
          <h3 className="font-display text-lg font-bold text-ctm-dark">Suivre un colis</h3>
          <form onSubmit={track} className="mt-4 flex gap-2">
            <div className="flex flex-1 items-center gap-2 rounded-full bg-ctm-cloud px-4">
              <Icon name="box" className="h-5 w-5 text-ctm-navy/50" />
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="N° de suivi (ex. CTM12345)"
                className="w-full bg-transparent py-3 text-sm font-semibold outline-none placeholder:text-ctm-navy/40"
              />
            </div>
            <button type="submit" className="btn-primary h-12 px-5 py-0 text-sm">
              Suivre
            </button>
          </form>

          {status && (
            <div className="mt-6">
              <div className="text-sm font-semibold text-ctm-dark">
                Colis {status.code} · {status.label}
              </div>
              <div className="mt-4 flex items-center">
                {steps.map((s, i) => (
                  <div key={s} className="flex flex-1 items-center last:flex-none">
                    <div className="flex flex-col items-center">
                      <span
                        className={`grid h-8 w-8 place-items-center rounded-full text-xs font-bold ${
                          i <= status.step ? 'bg-ctm-red text-white' : 'bg-ctm-cloud text-ctm-navy/50'
                        }`}
                      >
                        {i < status.step ? <Icon name="check" className="h-4 w-4" /> : i + 1}
                      </span>
                      <span className="mt-1 w-16 text-center text-[10px] font-semibold text-ctm-navy/60">
                        {s}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className={`mx-1 h-1 flex-1 rounded-full ${
                          i < status.step ? 'bg-ctm-red' : 'bg-ctm-cloud'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
