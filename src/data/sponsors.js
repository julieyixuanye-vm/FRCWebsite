/**
 * Sponsors.
 *
 * Transcribed from the team's sponsor banner at the 2022 FIRST Championship,
 * cross-checked against the names listed publicly alongside the team. This
 * roster is four seasons old. Confirm it against the current one before the
 * page goes live, since a dropped or missing sponsor is the worst kind of
 * mistake to publish.
 */

//UPDATE THESE SPONSORS ACROSS OFFSEASON AND REGULARLY MAINTAIN

export const SPONSORS_NEED_REVIEW = true

/**
 * Grouped by prominence on the original banner rather than by a dollar figure,
 * which the team has never published.
 */
export const sponsorTiers = [
  {
    id: 'principal',
    label: 'Principal support',
    sponsors: [
      { name: 'a' },
      { name: 'b' },
      { name: 'c' },
      { name: 'd' },
    ],
  },
  {
    id: 'supporting',
    label: 'Supporting',
    sponsors: [
      { name: 'e' },
      { name: 'f' },
      { name: 'g' },
      { name: 'g ' },
      { name: 'h' },
      { name: 'i' },
    ],
  },
  {
    id: 'community',
    label: 'Community',
    sponsors: [
      { name: 'Saratoga High School' },
      { name: 'MSET Families & Friends' },
    ],
  },
]

export const allSponsors = sponsorTiers.flatMap((t) => t.sponsors)

/** What sponsorship actually pays for: concrete line items, not a giving ladder. */
export const supportUses = [
  {
    title: 'Raw stock and fabrication',
    body: 'Aluminum extrusion, plate, gearboxes and the machining time to turn them into a robot.',
  },
  {
    title: 'Competition entry',
    body: 'Regional registration runs to five figures before a single team member travels.',
  },
  {
    title: 'Travel to championship',
    body: 'Getting a full team and a 120lb robot across the country when the season goes well.',
  },
  {
    title: 'Outreach at cost',
    body: 'Every workshop, mentoring session and GoBabyGo build is free to the families involved.',
  },
]
