import Reveal from '../components/Reveal'
import { programs, impact } from '../data/outreach'
import { links } from '../data/team'
import standsPhoto from '../assets/photos/stands.jpg'
import styles from './Outreach.module.css'

export default function Outreach() {
  return (
    <div className={styles.wrap}>
      <header className={`page ${styles.head}`}>
        <h1 className={styles.h1}>Outreach</h1>
        <p className="lead">
          FIRST asks teams to do more than build. These are the programs 649 runs alongside the
          season. Most of them run year-round, and none of them are charged for.
        </p>
      </header>

      <section className={`page ${styles.impactWrap}`}>
        <ul className={styles.impact}>
          {impact.map((m, i) => (
            <li key={m.label}>
              <Reveal delay={i * 70} className={styles.stack}>
                <span className={styles.impactValue}>{m.value}</span>
                <span className={styles.impactLabel}>{m.label}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className={`page ${styles.programsWrap}`}>
        <div className={styles.programs}>
          {programs.map((p, i) => (
            <article key={p.id} className={styles.program}>
              <Reveal className={styles.programInner} delay={(i % 2) * 60}>
                <div className={styles.programHead}>
                  <span className={styles.programIndex}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h2 className={styles.programName}>{p.name}</h2>
                    <p className={styles.programTagline}>{p.tagline}</p>
                  </div>
                </div>
                <p className={styles.programBody}>{p.body}</p>
                {p.metric && (
                  <p className={styles.metric}>
                    <b>{p.metric.value}</b> {p.metric.unit}
                    <span className={styles.metricReach}>{p.metric.reach}</span>
                  </p>
                )}
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.photoBand}>
        <img
          src={standsPhoto}
          alt="Teams packed into the stands at the FIRST Championship"
          width="1024"
          height="768"
          loading="lazy"
        />
      </section>

      <section className={`page ${styles.cta}`}>
        <Reveal>
          <h2 className={styles.h2}>Want 649 at your school or event?</h2>
          <p className={styles.body}>
            The team runs demonstrations, workshops and FLL coaching through the year. If you run a
            classroom, library or community group and want to explore Robotics, our team will come to you. 
          </p>
          <a className={styles.button} href={links.email}>
            Get in touch <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </section>
    </div>
  )
}
