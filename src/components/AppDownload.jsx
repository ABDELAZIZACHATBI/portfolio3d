import { Icon } from './Icons.jsx'
import { useReveal } from '../hooks/useReveal.js'

export default function AppDownload() {
  const ref = useReveal()

  return (
    <section ref={ref} className="container-x pb-20 sm:pb-24">
      <div
        data-reveal
        className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-ctm-red to-[#a8000f] px-8 py-12 text-white shadow-float sm:px-12"
      >
        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-16 left-1/3 h-56 w-56 rounded-full bg-black/10 blur-2xl" />

        <div className="relative grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
              Réservez en direct. Payez moins.
            </h2>
            <p className="mt-3 max-w-md text-white/85">
              Téléchargez l’app CTM : tarifs exclusifs, billet sur mobile, choix du
              siège et notifications de départ. Sans intermédiaire, sans commission.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="flex items-center gap-3 rounded-2xl bg-black/85 px-5 py-3 transition hover:bg-black">
                <Icon name="apple" className="h-7 w-7" />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] uppercase opacity-70">Télécharger sur</span>
                  <span className="block text-sm font-bold">App Store</span>
                </span>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-2xl bg-black/85 px-5 py-3 transition hover:bg-black">
                <Icon name="play" className="h-6 w-6" />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] uppercase opacity-70">Disponible sur</span>
                  <span className="block text-sm font-bold">Google Play</span>
                </span>
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-44 rounded-[2rem] border-4 border-white/30 bg-white p-3 shadow-float">
              <div className="rounded-2xl bg-ctm-cloud p-3">
                <div className="flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-ctm-red text-white">
                    <Icon name="seat" className="h-4 w-4" />
                  </span>
                  <span className="font-display text-sm font-extrabold text-ctm-dark">CTM</span>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="h-8 rounded-lg bg-white" />
                  <div className="h-8 rounded-lg bg-white" />
                  <div className="h-9 rounded-lg bg-ctm-red" />
                </div>
                <div className="mt-3 grid grid-cols-4 gap-1.5">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-6 rounded ${i === 3 ? 'bg-ctm-red' : 'bg-white'}`}
                    />
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
