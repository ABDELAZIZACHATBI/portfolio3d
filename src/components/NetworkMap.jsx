import { Icon } from './Icons.jsx'
import { cities } from '../data/site.js'
import { useReveal } from '../hooks/useReveal.js'

// Approximate, stylised positions (%) on a Morocco-shaped panel — illustrative only.
const dots = [
  { name: 'Tanger', x: 38, y: 8 },
  { name: 'Tétouan', x: 45, y: 11 },
  { name: 'Rabat', x: 33, y: 26 },
  { name: 'Casablanca', x: 28, y: 32 },
  { name: 'Fès', x: 50, y: 24 },
  { name: 'Meknès', x: 45, y: 26 },
  { name: 'Oujda', x: 70, y: 20 },
  { name: 'Marrakech', x: 33, y: 46 },
  { name: 'Essaouira', x: 22, y: 48 },
  { name: 'Agadir', x: 24, y: 60 },
  { name: 'Ouarzazate', x: 42, y: 56 },
  { name: 'Laâyoune', x: 14, y: 80 },
  { name: 'Dakhla', x: 8, y: 95 },
]

export default function NetworkMap() {
  const ref = useReveal()

  return (
    <section id="network" ref={ref} className="container-x py-20 sm:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr,1.1fr]">
        <div data-reveal>
          <span className="eyebrow">Notre réseau</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ctm-dark sm:text-4xl">
            Tout le Maroc, d’un bout à l’autre
          </h2>
          <p className="mt-4 max-w-md text-ctm-navy/70">
            Du nord de Tanger jusqu’à Dakhla, plus de 78 villes connectées par un
            réseau opéré en direct, avec des correspondances internationales vers
            l’Europe.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {cities.slice(0, 12).map((c) => (
              <span key={c} className="pill">
                <Icon name="pin" className="h-3.5 w-3.5 text-ctm-red" />
                {c}
              </span>
            ))}
            <span className="pill bg-ctm-red/10 text-ctm-red">+66 autres</span>
          </div>
        </div>

        <div data-reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-gradient-to-b from-ctm-cloud to-white shadow-card ring-1 ring-ctm-cloud">
            <div className="absolute inset-0 [background-image:linear-gradient(rgba(19,41,75,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(19,41,75,0.05)_1px,transparent_1px)] [background-size:28px_28px]" />
            {/* connection lines */}
            <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
              {dots.slice(1).map((d, i) => (
                <line
                  key={d.name}
                  x1={`${dots[i].x}%`}
                  y1={`${dots[i].y}%`}
                  x2={`${d.x}%`}
                  y2={`${d.y}%`}
                  stroke="#E2001A"
                  strokeOpacity="0.25"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              ))}
            </svg>
            {dots.map((d) => (
              <div
                key={d.name}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${d.x}%`, top: `${d.y}%` }}
              >
                <span className="block h-3 w-3 rounded-full bg-ctm-red ring-4 ring-ctm-red/20 transition group-hover:scale-150" />
                <span className="absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap rounded-full bg-ctm-dark px-2 py-0.5 text-[10px] font-semibold text-white opacity-0 transition group-hover:opacity-100">
                  {d.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
