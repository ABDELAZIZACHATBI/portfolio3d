import { useState } from 'react'
import { Icon } from './Icons.jsx'
import { cities } from '../data/site.js'

function Field({ icon, label, children }) {
  return (
    <div className="flex flex-1 items-center gap-3 px-4 py-3">
      <span className="text-ctm-red">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <label className="flex w-full flex-col text-left">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-ctm-navy/60">
          {label}
        </span>
        {children}
      </label>
    </div>
  )
}

const inputCls =
  'w-full bg-transparent text-sm font-semibold text-ctm-dark outline-none placeholder:text-ctm-navy/40'

export default function SearchBar() {
  const [from, setFrom] = useState('Casablanca')
  const [to, setTo] = useState('Marrakech')

  const swap = () => {
    setFrom(to)
    setTo(from)
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mx-auto flex w-full max-w-4xl flex-col gap-2 rounded-3xl bg-white/95 p-2 shadow-float backdrop-blur md:flex-row md:items-stretch md:rounded-full"
    >
      <div className="relative flex flex-1 flex-col md:flex-row md:items-center">
        <Field icon="pin" label="Départ">
          <input
            list="cities"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className={inputCls}
            placeholder="Ville de départ"
          />
        </Field>

        <button
          type="button"
          onClick={swap}
          aria-label="Inverser les villes"
          className="mx-auto -my-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ctm-cloud bg-white text-ctm-navy shadow-sm transition hover:rotate-180 hover:text-ctm-red md:my-0"
        >
          <Icon name="swap" className="h-4 w-4" />
        </button>

        <Field icon="pin" label="Arrivée">
          <input
            list="cities"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className={inputCls}
            placeholder="Ville d’arrivée"
          />
        </Field>

        <div className="hidden w-px self-stretch bg-ctm-cloud md:block" />

        <Field icon="calendar" label="Date">
          <input type="date" className={inputCls} defaultValue="2026-06-20" />
        </Field>

        <div className="hidden w-px self-stretch bg-ctm-cloud md:block" />

        <Field icon="users" label="Voyageurs">
          <select className={`${inputCls} cursor-pointer`} defaultValue="1">
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n} {n > 1 ? 'voyageurs' : 'voyageur'}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <button type="submit" className="btn-primary shrink-0 md:px-8">
        <Icon name="search" className="h-5 w-5" />
        Rechercher
      </button>

      <datalist id="cities">
        {cities.map((c) => (
          <option key={c} value={c} />
        ))}
      </datalist>
    </form>
  )
}
