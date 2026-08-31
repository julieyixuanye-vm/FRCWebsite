import { useEffect, useRef } from 'react'
import useReducedMotion from '../hooks/useReducedMotion'
import styles from './Caustics.module.css'

/**
 * The light column above the hero: shafts of surface light raking down through
 * water, with suspended particulate drifting across them.
 *
 * Written directly against canvas2d rather than pulled from a particle
 * library. It is about 40 shapes a frame, and a dependency would cost more to
 * ship than the effect itself. The motion is layered sine drift rather than true
 * noise, which is cheaper and, at this speed, indistinguishable.
 *
 * Stops entirely when scrolled out of view or when the user prefers reduced
 * motion, in which case a single static frame is painted instead.
 */

const BEAMS = 7
const MOTES = 90

export default function Caustics({ className = '' }) {
  const canvasRef = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let width = 0
    let height = 0
    let frame = 0
    let running = true
    let raf = null

    // Pointer influence is held as a target and eased towards, so moving the
    // mouse nudges the water rather than snapping it.
    const pointer = { x: 0.5, y: 0.5, cx: 0.5, cy: 0.5 }

    const beams = Array.from({ length: BEAMS }, (_, i) => ({
      x: (i + 0.5) / BEAMS,
      width: 0.04 + Math.random() * 0.11,
      lean: -0.22 + Math.random() * 0.44,
      speed: 0.00008 + Math.random() * 0.00014,
      phase: Math.random() * Math.PI * 2,
      strength: 0.16 + Math.random() * 0.3,
    }))

    const motes = Array.from({ length: MOTES }, () => {
      const depth = Math.random() // 0 = far, 1 = near
      return {
        x: Math.random(),
        y: Math.random(),
        depth,
        r: 0.4 + depth * 2.1,
        drift: 0.00002 + Math.random() * 0.00006,
        rise: 0.000015 + Math.random() * 0.00004,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.08 + depth * 0.4,
      }
    })

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function drawBeams(t) {
      ctx.globalCompositeOperation = 'lighter'
      for (const b of beams) {
        // Each beam breathes on its own period so they never pulse in unison.
        const sway = Math.sin(t * b.speed + b.phase)
        const pulse = 0.55 + 0.45 * Math.sin(t * b.speed * 2.3 + b.phase * 1.7)
        const x = (b.x + sway * 0.05 + (pointer.cx - 0.5) * 0.04 * b.strength) * width
        const w = b.width * width
        const lean = b.lean * width * 0.5

        const grad = ctx.createLinearGradient(x, 0, x + lean, height)
        const a = b.strength * pulse
        grad.addColorStop(0, `rgba(120, 205, 255, ${a * 0.5})`)
        grad.addColorStop(0.45, `rgba(1, 149, 219, ${a * 0.16})`)
        grad.addColorStop(1, 'rgba(1, 149, 219, 0)')

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.moveTo(x - w / 2, 0)
        ctx.lineTo(x + w / 2, 0)
        ctx.lineTo(x + lean + w * 1.9, height)
        ctx.lineTo(x + lean - w * 1.9, height)
        ctx.closePath()
        ctx.fill()
      }
      ctx.globalCompositeOperation = 'source-over'
    }

    function drawMotes(t) {
      for (const m of motes) {
        // Nearer motes track the pointer more strongly, for cheap parallax.
        const px = (pointer.cx - 0.5) * m.depth * 0.05
        const py = (pointer.cy - 0.5) * m.depth * 0.03
        const x = ((m.x + Math.sin(t * m.drift + m.phase) * 0.02 + px + 1) % 1) * width
        const y = ((m.y - t * m.rise + py + 1) % 1) * height
        const twinkle = 0.65 + 0.35 * Math.sin(t * 0.0006 + m.phase * 3)

        ctx.beginPath()
        ctx.arc(x, y, m.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(174, 226, 245, ${m.alpha * twinkle})`
        ctx.fill()
      }
    }

    function render(t) {
      ctx.clearRect(0, 0, width, height)
      pointer.cx += (pointer.x - pointer.cx) * 0.045
      pointer.cy += (pointer.y - pointer.cy) * 0.045
      drawBeams(t)
      drawMotes(t)
    }

    function loop(t) {
      if (!running) return
      frame = t
      render(t)
      raf = requestAnimationFrame(loop)
    }

    function onPointerMove(e) {
      pointer.x = e.clientX / window.innerWidth
      pointer.y = e.clientY / window.innerHeight
    }

    resize()

    if (reduced) {
      // One representative frame, then nothing moves.
      pointer.cx = pointer.cy = 0.5
      render(4200)
    } else {
      raf = requestAnimationFrame(loop)
      window.addEventListener('pointermove', onPointerMove, { passive: true })
    }

    // Don't burn frames on a hero that has been scrolled past.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (reduced) return
        if (entry.isIntersecting && !running) {
          running = true
          raf = requestAnimationFrame(loop)
        } else if (!entry.isIntersecting && running) {
          running = false
          if (raf) cancelAnimationFrame(raf)
        }
      },
      { threshold: 0 },
    )
    io.observe(canvas)

    const onResize = () => {
      resize()
      if (reduced) render(frame || 4200)
    }
    window.addEventListener('resize', onResize)

    return () => {
      running = false
      if (raf) cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onPointerMove)
    }
  }, [reduced])

  return <canvas ref={canvasRef} className={`${styles.canvas} ${className}`} aria-hidden="true" />
}
