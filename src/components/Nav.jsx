import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import FishMark from './FishMark'
import styles from './Nav.module.css'

const routes = [
  { to: '/legacy', label: 'Legacy' },
  { to: '/outreach', label: 'Outreach' },
  { to: '/support', label: 'Support' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the drawer on navigation. Adjusting during render rather than in an
  // effect avoids a frame where the new page is behind an open drawer.
  const [lastPath, setLastPath] = useState(pathname)
  if (lastPath !== pathname) {
    setLastPath(pathname)
    setOpen(false)
  }

  // Keep the page from scrolling under the open drawer, and close it on Escape.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    // The open drawer needs an opaque bar too, or the hero shows through it.
    <header className={`${styles.header} ${scrolled || open ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand} aria-label="Team 649 MSET Fish, home">
          <FishMark className={styles.mark} title="" />
          <span className={styles.wordmark}>
            <span className={styles.number}>649</span>
            <span className={styles.name}>MSET Fish</span>
          </span>
        </Link>

        <nav className={styles.desktop} aria-label="Primary">
          {routes.map((r) => (
            <NavLink
              key={r.to}
              to={r.to}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            >
              {r.label}
            </NavLink>
          ))}
        </nav>

        <button
          className={styles.toggle}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className={styles.toggleLabel}>{open ? 'Close' : 'Menu'}</span>
          <span className={`${styles.bars} ${open ? styles.barsOpen : ''}`} aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>

      <div id="mobile-nav" className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <nav aria-label="Primary, mobile">
          {[{ to: '/', label: 'Home' }, ...routes].map((r, i) => (
            <NavLink
              key={r.to}
              to={r.to}
              end={r.to === '/'}
              className={({ isActive }) =>
                `${styles.drawerLink} ${isActive ? styles.drawerActive : ''}`
              }
              style={{ transitionDelay: open ? `${60 + i * 45}ms` : '0ms' }}
            >
              <span className={styles.drawerIndex}>0{i + 1}</span>
              {r.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
