import { useMemo, useState } from 'react'
import Reveal from '../components/Reveal'
import { seasons, awardFilters, totalAwards, enteredSeasons } from '../data/seasons'
import { links } from '../data/team'
import styles from './Legacy.module.css'

/** Largest award haul in a single season, used to scale the tally bars. */
const peak = Math.max(...seasons.map((s) => s.awards?.length ?? 0))

export default function Legacy() {
  const [filter, setFilter] = useState('all')

  const shown = useMemo(() => {
    const active = awardFilters.find((f) => f.id === filter)
    if (!active || filter === 'all') return seasons
    return seasons.filter((s) => (s.awards ?? []).some(active.match))
  }, [filter])

  return (
    <div className={styles.wrap}>
      <header className={`page ${styles.head}`}>
        <p className="eyebrow">Legacy</p>
        <h1 className={styles.h1}>Twenty-six seasons</h1>
        <p className="lead">
          Every year 649 has entered a robot, and what came of it. Compiled from the official FIRST
          event archive: {totalAwards} awards across {enteredSeasons} seasons on the field.
        </p>

        <div className={styles.filters} role="group" aria-label="Filter seasons by award">
          {awardFilters.map((f) => (
            <button
              key={f.id}
              className={`${styles.filter} ${filter === f.id ? styles.filterOn : ''}`}
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
            >
              {f.label}
            </button>
          ))}
        </div>
        <p className={styles.count} aria-live="polite">
          {shown.length} {shown.length === 1 ? 'season' : 'seasons'}
        </p>
      </header>

      <ol className={`page ${styles.list}`}>
        {shown.map((s, i) => {
          const awards = s.awards ?? []
          return (
            <Reveal as="li" key={s.year} delay={Math.min(i, 6) * 45} className={styles.row}>
              <div className={styles.year}>
                <span className={styles.yearNum}>{s.year}</span>
                {s.rookie && <span className={styles.tag}>Rookie</span>}
                {s.worlds && <span className={`${styles.tag} ${styles.tagWorlds}`}>Worlds</span>}
              </div>

              <div className={styles.main}>
                <h2 className={styles.game}>
                  {s.game}
                  {s.robot && <span className={styles.robot}>“{s.robot}”</span>}
                </h2>

                {s.competed === false ? (
                  <p className={styles.note}>{s.note ?? 'Registered; did not compete.'}</p>
                ) : awards.length ? (
                  <ul className={styles.awards}>
                    {awards.map((a) => (
                      <li key={a.name + a.event}>
                        <span className={styles.awardName}>{a.name}</span>
                        <span className={styles.awardEvent}>{a.event}</span>
                        {a.note && <span className={styles.awardNote}>{a.note}</span>}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.note}>
                    Competed at {s.events} {s.events === 1 ? 'event' : 'events'}; no awards.
                  </p>
                )}
              </div>

              {/* A small tally bar makes the strong years legible at a glance
                  while scanning, without needing to read every row. */}
              <div className={styles.tally} aria-hidden="true">
                {Array.from({ length: peak }, (_, n) => (
                  <span key={n} className={n < awards.length ? styles.pipOn : styles.pip} />
                ))}
              </div>
            </Reveal>
          )
        })}
      </ol>

      <p className={`page ${styles.source}`}>
        Source:{' '}
        <a className="link" href={links.frcEvents} target="_blank" rel="noreferrer">
          FIRST event archive
        </a>{' '}
        and{' '}
        <a className="link" href={links.blueAlliance} target="_blank" rel="noreferrer">
          The Blue Alliance
        </a>
        .
      </p>
    </div>
  )
}
