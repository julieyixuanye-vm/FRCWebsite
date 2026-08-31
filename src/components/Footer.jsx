import { Link } from 'react-router-dom'
import FishMark from './FishMark'
import { team, links } from '../data/team'
import styles from './Footer.module.css'

const social = [
  { href: links.instagram, label: 'Instagram' },
  { href: links.facebook, label: 'Facebook' },
  { href: links.x, label: 'X' },
]

const archives = [
  { href: links.blueAlliance, label: 'The Blue Alliance' },
  { href: links.frcEvents, label: 'FIRST event archive' },
  { href: links.mset, label: 'Saratoga MSET' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <FishMark className={styles.mark} title="" />
          <p className={styles.org}>
            {team.organization}
            <br />
            {team.school} · {team.location}
          </p>
          <p className={styles.since}>
            FIRST Robotics Competition team {team.number} · rookie year {team.rookieYear}
          </p>
        </div>

        <nav className={styles.col} aria-label="Site">
          <h2 className={styles.colHead}>Site</h2>
          <Link className="link" to="/legacy">
            Legacy
          </Link>
          <Link className="link" to="/outreach">
            Outreach
          </Link>
          <Link className="link" to="/support">
            Support
          </Link>
        </nav>

        <nav className={styles.col} aria-label="Elsewhere">
          <h2 className={styles.colHead}>Elsewhere</h2>
          {social.map((s) => (
            <a key={s.label} className="link" href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </nav>

        <nav className={styles.col} aria-label="Record">
          <h2 className={styles.colHead}>Record</h2>
          {archives.map((a) => (
            <a key={a.label} className="link" href={a.href} target="_blank" rel="noreferrer">
              {a.label}
            </a>
          ))}
        </nav>
      </div>

      <div className={styles.baseline}>
        <p>
          © {new Date().getFullYear()} MSET Fish · Team {team.number}
        </p>
        <p className={styles.colophon}>Set in Saira</p>
      </div>
    </footer>
  )
}
