import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Reveals direct children (or [data-reveal] items) on scroll into view.
export function useReveal({ selector = '[data-reveal]', y = 30, stagger = 0.1 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      const items = el.querySelectorAll(selector)
      if (!items.length) return
      gsap.from(items, {
        y,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger,
        scrollTrigger: {
          trigger: el,
          start: 'top 78%',
        },
      })
    }, el)
    return () => ctx.revert()
  }, [selector, y, stagger])

  return ref
}

// Animated count-up driven by ScrollTrigger.
export function useCountUp(target, { duration = 1.6 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obj = { val: 0 }
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: target,
        duration,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
        onUpdate: () => {
          el.textContent = Math.round(obj.val).toLocaleString('fr-FR')
        },
      })
    }, el)
    return () => ctx.revert()
  }, [target, duration])

  return ref
}
