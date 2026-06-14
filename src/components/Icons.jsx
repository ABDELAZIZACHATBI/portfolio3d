// Lightweight inline SVG icon set (stroke-based, currentColor).
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const Icon = ({ name, className = 'w-6 h-6' }) => {
  const paths = {
    heritage: <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" {...base} />,
    network: (
      <g {...base}>
        <circle cx="6" cy="6" r="2.4" />
        <circle cx="18" cy="6" r="2.4" />
        <circle cx="12" cy="18" r="2.4" />
        <path d="M7.7 7.7l8.6 8.6M16.3 7.7l-8.6 8.6" />
      </g>
    ),
    wifi: (
      <g {...base}>
        <path d="M4 9c4.5-4 11.5-4 16 0" />
        <path d="M7 12.5c2.7-2.3 7.3-2.3 10 0" />
        <path d="M10 16c1.2-1 2.8-1 4 0" />
        <circle cx="12" cy="19" r="0.6" fill="currentColor" />
      </g>
    ),
    shield: <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3z" {...base} />,
    pin: (
      <g {...base}>
        <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.4" />
      </g>
    ),
    arrow: <path d="M5 12h14M13 6l6 6-6 6" {...base} />,
    swap: <path d="M7 8h12M7 8l3-3M7 8l3 3M17 16H5M17 16l-3-3M17 16l-3 3" {...base} />,
    calendar: (
      <g {...base}>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M4 9h16M8 3v4M16 3v4" />
      </g>
    ),
    users: (
      <g {...base}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <path d="M16 4.5a3 3 0 010 7M21 20c0-2.5-1.3-4.7-3.3-5.5" />
      </g>
    ),
    box: (
      <g {...base}>
        <path d="M3 8l9-4 9 4-9 4-9-4z" />
        <path d="M3 8v8l9 4 9-4V8M12 12v8" />
      </g>
    ),
    search: (
      <g {...base}>
        <circle cx="11" cy="11" r="6" />
        <path d="M20 20l-4-4" />
      </g>
    ),
    star: <path d="M12 3l2.6 5.6L21 9.5l-4.5 4.3L17.7 21 12 17.6 6.3 21l1.2-7.2L3 9.5l6.4-.9L12 3z" {...base} />,
    seat: (
      <g {...base}>
        <path d="M7 4v9h9M7 13l-1 7M16 13l1 7M7 13H5a2 2 0 01-2-2V6" />
      </g>
    ),
    check: <path d="M5 12l4 4 10-10" {...base} />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" {...base} />,
    close: <path d="M6 6l12 12M18 6L6 18" {...base} />,
    apple: (
      <path
        d="M16 13c0 2.5 2 3.3 2 3.4-.1.3-.6 1.7-1.7 3-.9 1.1-1.8 2.2-3.2 2.2-1.3 0-1.8-.8-3.3-.8s-2.1.8-3.3.8c-1.4 0-2.4-1.2-3.3-2.3C1.4 19 .8 15.2 2.5 12.6c.9-1.3 2.3-2.1 3.8-2.1 1.4 0 2.3.8 3.3.8s1.7-.8 3.3-.8c1.1 0 2.4.4 3.3 1.4-2.9 1.7-2.5 5.3.8 6.1M13 6.5C13.7 5.6 14.2 4.4 14 3c-1.2.1-2.6.8-3.4 1.8-.7.8-1.3 2-.1 3.3 1.3.1 2.7-.7 3.5-1.6z"
        fill="currentColor"
      />
    ),
    play: <path d="M5 3l16 9-16 9V3z" fill="currentColor" />,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {paths[name] || null}
    </svg>
  )
}

export default Icon
