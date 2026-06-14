import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const xTo = gsap.quickTo(ring.current, 'x', { duration: 0.35, ease: 'power3.out' })
    const yTo = gsap.quickTo(ring.current, 'y', { duration: 0.35, ease: 'power3.out' })
    const xDot = gsap.quickTo(dot.current, 'x', { duration: 0.08, ease: 'power3.out' })
    const yDot = gsap.quickTo(dot.current, 'y', { duration: 0.08, ease: 'power3.out' })

    const onMove = (e) => {
      xTo(e.clientX); yTo(e.clientY)
      xDot(e.clientX); yDot(e.clientY)
    }
    const onEnter = () => gsap.to(ring.current, { scale: 2.4, backgroundColor: 'rgba(226,0,26,0.15)', borderColor: '#E2001A', duration: 0.3 })
    const onLeave = () => gsap.to(ring.current, { scale: 1, backgroundColor: 'rgba(255,255,255,0)', borderColor: 'rgba(226,0,26,0.6)', duration: 0.3 })

    window.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div ref={ring} className="pointer-events-none fixed left-0 top-0 z-[100] -ml-4 -mt-4 hidden h-8 w-8 rounded-full border-2 border-ctm-red/60 backdrop-invert-[0.05] md:block" />
      <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[101] -ml-1 -mt-1 hidden h-2 w-2 rounded-full bg-ctm-red md:block" />
    </>
  )
}
