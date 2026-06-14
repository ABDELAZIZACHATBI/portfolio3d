import { Icon } from './Icons.jsx'

const items = [
  'Casablanca', 'Marrakech', 'Tanger', 'Fès', 'Rabat', 'Agadir',
  'Essaouira', 'Chefchaouen', 'Ouarzazate', 'Meknès', 'Oujda', 'Dakhla', 'Laâyoune',
]

function Row({ reverse = false }) {
  return (
    <div className={`flex shrink-0 items-center gap-10 px-5 ${reverse ? 'animate-drift [animation-direction:reverse]' : 'animate-drift'}`}>
      {[...items, ...items].map((c, i) => (
        <span key={`${c}-${i}`} className="flex shrink-0 items-center gap-3 font-display text-3xl font-extrabold sm:text-5xl">
          <span>{c}</span>
          <Icon name="star" className="h-5 w-5 text-ctm-red sm:h-7 sm:w-7" />
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <section className="overflow-hidden border-y border-ctm-cloud bg-ctm-dark py-10 text-white">
      <div className="flex">
        <Row />
      </div>
    </section>
  )
}
