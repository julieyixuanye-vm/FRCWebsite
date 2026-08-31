import Reveal from '../components/Reveal'
import { sponsorTiers, supportUses } from '../data/sponsors'
import { links, team } from '../data/team'
import queuePhoto from '../assets/photos/queue.jpg'
import styles from './Support.module.css'

export default function Support() {
  return (
    <div className={styles.wrap}>
      <header className={`page ${styles.head}`}>
        <h1 className={styles.h1}>Support</h1>
        <p className="lead">
          A FIRST Robotics season is expensive before anyone touches a tool. Sponsorship is what
          keeps the team competing and keeps every outreach programme free to the families using it.
        </p>
      </header>

      <section className={`page ${styles.usesWrap}`}>
        <ul className={styles.uses}>
          {supportUses.map((u, i) => (
            <li key={u.title} className={styles.use}>
              {/* Revealed inside the cell so the cell keeps its background. */}
              <Reveal delay={i * 60}>
                <span className={styles.useIndex}>{String(i + 1).padStart(2, '0')}</span>
                <h2 className={styles.useTitle}>{u.title}</h2>
                <p className={styles.useBody}>{u.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className={`page ${styles.sponsors}`}>
        <Reveal>
          <p className="eyebrow">Current backing</p>
          <h2 className={styles.h2}>Sponsors</h2>
        </Reveal>

        {sponsorTiers.map((tier) => (
          <Reveal key={tier.id} className={styles.tier}>
            <h3 className={styles.tierLabel}>{tier.label}</h3>
            <ul className={styles.tierList}>
              {tier.sponsors.map((s) => (
                <li key={s.name}>{s.name}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </section>

      <section className={styles.photoBand}>
        <img
          src={queuePhoto}
          alt="Team 649 members waiting in the queue with their robot between matches"
          width="1024"
          height="768"
          loading="lazy"
        />
      </section>

      <section className={`page ${styles.contact}`}>
        <Reveal className={styles.contactGrid}>
          <div>
            <p className="eyebrow">Get involved</p>
            <h2 className={styles.h2}>Three ways in</h2>
          </div>
          <dl className={styles.ways}>
            <div>
              <dt>Sponsor the team</dt>
              <dd>
                Company matching, materials, machine time and cash all go directly into the season.
              </dd>
            </div>
            <div>
              <dt>Mentor</dt>
              <dd>
                Engineers, machinists, programmers and business mentors. A few hours a week during
                build season makes a real difference.
              </dd>
            </div>
            <div>
              <dt>Join as a student</dt>
              <dd>
                Open to {team.school} students. No prior experience needed; most members start with
                none.
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal>
          <a className={styles.button} href={links.email}>
            Contact the team <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </section>
    </div>
  )
}
