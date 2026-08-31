import { useEffect, useRef, useState } from 'react'
import styles from './Reveal.module.css'

/**
 * Reveals children once, when they first cross into view.
 *
 * Deliberately understated: a short rise and fade, staggered by `delay`.
 * Anything more theatrical starts to feel like a template, and it fights the
 * caustics already moving behind it.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)

  // Decided during the first render rather than in an effect: anyone who has
  // asked for less motion, or whose browser cannot observe intersections,
  // should get the content already visible instead of a frame of it hidden.
  const [shown, setShown] = useState(
    () =>
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window),
  )

  useEffect(() => {
    const el = ref.current
    if (!el || shown) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [shown])

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${shown ? styles.shown : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
