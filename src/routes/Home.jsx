import { Link } from 'react-router-dom'
import Caustics from '../components/Caustics'
import FishMark from '../components/FishMark'
import Reveal from '../components/Reveal'
import { team, stats, mission, upcoming, links } from '../data/team'
import { seasons } from '../data/seasons'
import { programs, impact } from '../data/outreach'
import { allSponsors } from '../data/sponsors'
import robotPhoto from '../assets/photos/robot-rapid-react.jpg'
import teamPhoto from '../assets/photos/team-worlds.jpg'
import pitPhoto from '../assets/photos/pit-banners.jpg'
import styles from './Home.module.css'

/** The three most recent seasons that actually competed, for the legacy teaser. */
const recent = seasons.filter((s) => s.competed !== false).slice(0, 3)

export default function Home() {
  return (
    <>
      {/* ---------- hero ---------- */}
      <section className={styles.hero}>
        <Caustics />
        <div className={styles.heroInner}>
          <p className={`eyebrow ${styles.heroEyebrow}`}>
            {team.program} · {team.location}
          </p>

          <div className={styles.lockup}>
            <span className={styles.mega} aria-hidden="true">
              649
            </span>
            <FishMark className={styles.heroFish} title="" />
          </div>

          <h1 className={styles.title}>
            <span className={styles.titleSr}>Team 649, </span>MSET Fish
          </h1>

          <p className={`lead ${styles.heroLead}`}>
            Saratoga High School has entered a robot in the FIRST Robotics Competition every season
            since 2001. Six weeks to design and build it, and one shot at the field.
          </p>

          <div className={styles.heroActions}>
            <Link to="/legacy" className={styles.cta}>
              Twenty-six seasons
              <span aria-hidden="true">→</span>
            </Link>
            <Link to="/support" className={styles.ctaGhost}>
              Support the team
            </Link>
          </div>
        </div>

      </section>

      {/* ---------- headline figures ---------- */}
      <section className={styles.tickerBand} aria-hidden="true">
        <div className={styles.ticker}>
          {stats.map((s) => (
            <span key={s.label} className={styles.tickerItem}>
              <b>{s.value}</b> {s.label}
            </span>
          ))}
        </div>
      </section>

      {/* ---------- mission ---------- */}
      <section className={`page ${styles.section}`}>
        <Reveal className={styles.missionGrid}>
          <p className="eyebrow">Mission</p>
          <div>
            <blockquote className={styles.mission}>{mission}</blockquote>
            <p className={styles.missionBody}>
              649 is student-run. Students lead the subteams, own the design decisions and answer
              for them in front of judges; mentors advise rather than build. The robot is the part
              people see, but the point is what it takes to get one onto the field: a hard
              deadline, a fixed budget, and forty people who have to agree.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ---------- record ---------- */}
      <section className={`page ${styles.section}`}>
        <Reveal>
          <p className="eyebrow">Record</p>
        </Reveal>
        <ul className={styles.stats}>
          {stats.map((s, i) => (
            <li key={s.label} className={styles.stat}>
              <Reveal delay={i * 70} className={styles.stack}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
                <span className={styles.statNote}>{s.note}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- the robot ---------- */}
      <section className={`page ${styles.section}`}>
        <div className={styles.robotGrid}>
          <Reveal className={styles.robotMedia}>
            <img
              src={robotPhoto}
              alt="Team 649's Rapid React robot in the pit, lit by its own LED strips"
              width="733"
              height="732"
              loading="lazy"
            />
            <span className={styles.mediaCaption}>Rapid React · 2022</span>
          </Reveal>

          <Reveal className={styles.robotText} delay={90}>
            <p className="eyebrow">Next season</p>
            <h2 className={styles.h2}>
              {upcoming.season}
              <span className={styles.h2Dim}>, {upcoming.year}</span>
            </h2>
            <p className={styles.body}>
              The game is revealed at Kickoff in {upcoming.kickoff}. From that morning the team has
              six weeks to go from an empty table to a competition-legal robot: design, fabricate,
              wire, program and drive it well enough to trust in a match.
            </p>
            <dl className={styles.spec}>
              <div>
                <dt>Most recent season</dt>
                <dd>
                  {seasons[0].game} · {seasons[0].year}
                </dd>
              </div>
              <div>
                <dt>Build window</dt>
                <dd>Six weeks</dd>
              </div>
              <div>
                <dt>Kickoff</dt>
                <dd>{upcoming.kickoff}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ---------- legacy teaser ---------- */}
      <section className={`page ${styles.section}`}>
        <Reveal className={styles.sectionHead}>
          <div>
            <p className="eyebrow">Legacy</p>
            <h2 className={styles.h2}>Every season since 2001</h2>
          </div>
          <Link to="/legacy" className={styles.moreLink}>
            Full archive <span aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <ul className={styles.recent}>
          {recent.map((s, i) => (
            // Revealed inside the cell: this grid still draws rules through its
            // own background, which a faded cell would take with it.
            <li key={s.year} className={styles.recentItem}>
              <Reveal delay={i * 80} className={styles.stack}>
                <span className={styles.recentYear}>{s.year}</span>
                <span className={styles.recentGame}>{s.game}</span>
                <ul className={styles.recentAwards}>
                  {(s.awards ?? []).map((a) => (
                    <li key={a.name}>{a.name}</li>
                  ))}
                  {!s.awards?.length && <li className={styles.noAward}>Competed</li>}
                </ul>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- outreach teaser ---------- */}
      <section className={styles.outreachBand}>
        <div className="page">
          <div className={styles.outreachGrid}>
            <Reveal className={styles.outreachText}>
              <p className="eyebrow">Outreach</p>
              <h2 className={styles.h2}>Six programs, run year-round</h2>
              <p className={styles.body}>
                Rebuilt ride-on cars for children who cannot use a standard one. Math and English
                videos for girls who learn from a shared phone. Solar lamps where the grid does not
                reach. FLL teams coached through their first competition.
              </p>
              <Link to="/outreach" className={styles.moreLink}>
                All programs <span aria-hidden="true">→</span>
              </Link>
            </Reveal>

            <Reveal className={styles.impactList} delay={90}>
              <ul>
                {impact.map((m) => (
                  <li key={m.label}>
                    <span className={styles.impactValue}>{m.value}</span>
                    <span className={styles.impactLabel}>{m.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className={styles.programStrip}>
            {programs.map((p) => (
              <span key={p.id} className={styles.programChip}>
                {p.name}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------- photo band ---------- */}
      <section className={styles.photoBand}>
        <Reveal className={styles.photoWide}>
          <img
            src={teamPhoto}
            alt="Team 649 gathered at the FIRST Championship sign"
            width="1800"
            height="1200"
            loading="lazy"
          />
        </Reveal>
        <div className={`page ${styles.photoCaption}`}>
          <p className="eyebrow">FIRST Championship</p>
          <p>
            Eight trips to the world championship across twenty-six seasons, the most recent in
            2025.
          </p>
        </div>
      </section>

      {/* ---------- sponsors ---------- */}
      <section className={`page ${styles.section}`}>
        <Reveal className={styles.sectionHead}>
          <div>
            <h2 className={styles.h2}>Sponsors</h2>
          </div>
          <Link to="/support" className={styles.moreLink}>
            Support the team <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
        <Reveal as="ul" className={styles.sponsorWall}>
          {allSponsors.map((s) => (
            <li key={s.name}>{s.name}</li>
          ))}
        </Reveal>
      </section>

      {/* ---------- join ---------- */}
      <section className={`page ${styles.section}`}>
        <Reveal className={styles.join}>
          <img
            src={pitPhoto}
            alt="The team's pit at the FIRST Championship, hung with award banners"
            className={styles.joinBg}
            width="1024"
            height="768"
            loading="lazy"
          />
          <div className={styles.joinInner}>
            <p className="eyebrow">Join</p>
            <h2 className={styles.h2}>No experience required</h2>
            <p className={styles.body}>
              Every member started not knowing how to do this. If you are a Saratoga High student,
              or a parent, alum or engineer who wants to mentor, get in touch.
            </p>
            <a className={styles.cta} href={links.email}>
              Get in touch <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>
      </section>
    </>
  )
}
