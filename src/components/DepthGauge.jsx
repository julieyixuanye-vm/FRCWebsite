import { useEffect, useRef, useState } from 'react'
import styles from './DepthGauge.module.css'

/**
 * A hairline rail down the left margin that reads descending depth as you
 * scroll the page.
 *
 * It exists to give the deep-sea framing something to do: it doubles as a
 * progress indicator, so the ornament is also the wayfinding. Hidden below
 * 60rem, where there is no margin to spare.
 */

const MAX_DEPTH = 3800 // metres at the foot of the page

export default function DepthGauge() {
  const [progress, setProgress] = useState(0)
  const raf = useRef(null)

  useEffect(() => {
    function measure() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const p = scrollable > 0 ? window.scrollY / scrollable : 0
      setProgress(Math.min(Math.max(p, 0), 1))
      raf.current = null
    }

    // Coalesce scroll events onto one frame. The readout only needs to be
    // right once per paint.
    function onScroll() {
      if (raf.current == null) raf.current = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf.current != null) cancelAnimationFrame(raf.current)
    }
  }, [])

  const depth = Math.round(progress * MAX_DEPTH)

  return (
    <div className={styles.gauge} aria-hidden="true">
      <div className={styles.rail}>
        <div className={styles.fill} style={{ transform: `scaleY(${progress})` }} />
        {Array.from({ length: 9 }, (_, i) => (
          <span key={i} className={styles.tick} style={{ top: `${(i / 8) * 100}%` }} />
        ))}
        <div className={styles.marker} style={{ top: `${progress * 100}%` }} />
      </div>
      <div className={styles.readout}>
        <span className={styles.depth}>{String(depth).padStart(4, '0')}</span>
        <span className={styles.unit}>m</span>
      </div>
    </div>
  )
}
