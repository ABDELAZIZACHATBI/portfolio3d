import { Icon } from './Icons.jsx'

const columns = [
  {
    title: 'Voyager',
    links: ['Rechercher un trajet', 'Lignes populaires', 'CTM Premium', 'Horaires', 'Tarifs'],
  },
  {
    title: 'Services',
    links: ['Messagerie & colis', 'International', 'Location de bus', 'Programme fidélité'],
  },
  {
    title: 'Aide',
    links: ['Centre d’aide', 'Conditions de transport', 'Remboursements', 'Nous contacter'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ctm-dark text-white">
      <div className="container-x grid gap-10 py-14 lg:grid-cols-[1.4fr,2fr,1.2fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-ctm-red">
              <Icon name="seat" className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-extrabold">CTM</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Compagnie de Transports au Maroc — depuis 1919. Le plus grand réseau de
            bus du Royaume, opéré en direct.
          </p>
          <div className="mt-5 flex gap-2">
            {['FR', 'AR', 'EN', 'ES'].map((l) => (
              <button
                key={l}
                className="rounded-full border border-white/15 px-3 py-1 text-xs font-bold text-white/70 transition hover:border-ctm-red hover:text-white"
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white/80">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-white/60">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white/80">
            Restez informé
          </h4>
          <p className="mt-4 text-sm text-white/60">
            Promotions, nouvelles lignes et horaires directement dans votre boîte mail.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Votre email"
              className="w-full rounded-full bg-white/10 px-4 py-2.5 text-sm outline-none ring-1 ring-white/15 placeholder:text-white/40 focus:ring-ctm-red"
            />
            <button className="btn-primary h-11 px-5 py-0 text-sm">
              <Icon name="arrow" className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} CTM — Compagnie de Transports au Maroc. Maquette de démonstration.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Confidentialité</a>
            <a href="#" className="hover:text-white">Conditions</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
