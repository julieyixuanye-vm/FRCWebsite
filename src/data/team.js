/**
 * Team identity and headline figures.
 *
 * Everything here is traceable to a source. Where a figure comes from the
 * official FIRST archive it is hard-coded with a note; where it can be derived
 * from `seasons.js` it is computed, so the page and the archive can never
 * disagree with each other.
 */

import { seasons, totalAwards, seasonCount } from './seasons'

export const team = {
  number: 649,
  name: 'MSET Fish',
  program: 'FIRST Robotics Competition',
  organization: 'Mechanical Science & Engineering Team',
  school: 'Saratoga High School',
  location: 'Saratoga, California',
  rookieYear: 2001,
}

/**
 * The 2026-27 FIRST season is CANOPY. The FRC game inside it is revealed at
 * Kickoff in January 2027, so the site deliberately says "unrevealed" rather
 * than guessing a name.
 */
export const upcoming = {
  season: 'FIRST CANOPY',
  year: 2027,
  kickoff: 'January 2027',
  game: null,
}

export const currentSeason = seasons[0]

/**
 * `championships` is the total the official archive reports. The per-season
 * `worlds` flags in seasons.js cover only the five years confirmed by name
 * (2001, 2015, 2019, 2022, 2025), so the archive shows fewer badges than this
 * count, so the remaining three years still need identifying.
 */
export const stats = [
  { value: seasonCount, label: 'Seasons', note: 'since 2001' },
  { value: totalAwards, label: 'Awards won', note: 'regional and championship' },
  { value: 8, label: 'Championship trips', note: 'FIRST Championship' },
  { value: 54, label: 'Events entered', note: 'official archive' },
]

/**
 * Read from the team's own pit banner at the 2022 FIRST Championship.
 * Worth confirming against a current source before it stays on the site.
 */
export const mission =
  'To foster a generation of leaders and innovators with an emphasis on equal opportunity for all.'

export const links = {
  instagram: 'https://www.instagram.com/mset649/',
  facebook: 'https://www.facebook.com/mset649/',
  x: 'https://x.com/frcteam649',
  blueAlliance: 'https://www.thebluealliance.com/team/649',
  frcEvents: 'https://frc-events.firstinspires.org/team/649',
  mset: 'https://www.saratogamset.org/',
  email: 'mailto:info@saratogamset.org',
}
