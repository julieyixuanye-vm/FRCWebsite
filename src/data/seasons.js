/**
 * Season-by-season record for FRC 649.
 *
 * Sourced from the official FIRST event archive
 * (frc-events.firstinspires.org/team/649). Award names use the FIRST naming in
 * effect that year. The Chairman's Award was renamed the FIRST Impact Award in
 * 2023, and both appear here under the name the team actually received.
 *
 * `worlds` marks a trip to the FIRST Championship.
 * A season with no `awards` still competed unless `competed: false`.
 */

export const seasons = [
  {
    year: 2026,
    game: 'REBUILT',
    events: 3,
    awards: [{ name: 'District Engineering Inspiration Award', event: 'SpaceX District Event' }],
  },
  {
    year: 2025,
    game: 'REEFSCAPE',
    events: 4,
    worlds: true,
    awards: [
      { name: 'Regional Winner', event: 'Regional', note: 'Won two regionals this season' },
      { name: 'Engineering Inspiration Award', event: 'Regional' },
      { name: 'Creativity Award', event: 'Regional' },
    ],
  },
  {
    year: 2024,
    game: 'CRESCENDO',
    events: 4,
    awards: [
      { name: 'Regional FIRST Impact Award', event: 'Regional' },
      { name: 'Team Sustainability Award', event: 'Regional' },
    ],
  },
  {
    year: 2023,
    game: 'CHARGED UP',
    events: 3,
    awards: [
      { name: 'Championship Division Finalist', event: 'FIRST Championship' },
      { name: 'Engineering Inspiration Award', event: 'Regional' },
      { name: "Dean's List Finalist", event: 'Regional' },
    ],
  },
  {
    year: 2022,
    game: 'RAPID REACT',
    events: 3,
    worlds: true,
    awards: [
      { name: "Chairman's Award", event: 'San Francisco Regional' },
      { name: 'Industrial Design Award', event: 'Regional' },
      { name: "Dean's List Finalist", event: 'Regional' },
    ],
  },
  {
    year: 2021,
    game: 'INFINITE RECHARGE at Home',
    events: 5,
    awards: [
      { name: 'Excellence in Engineering Award', event: 'Remote Event' },
      { name: 'Skills Competition Finalist', event: 'Remote Event' },
      { name: "Dean's List Finalist", event: 'Remote Event' },
    ],
  },
  {
    year: 2020,
    game: 'INFINITE RECHARGE',
    events: 0,
    competed: false,
    note: 'Season cancelled worldwide partway through by COVID-19.',
  },
  {
    year: 2019,
    game: 'DESTINATION: DEEP SPACE',
    robot: 'Sea Devil',
    events: 3,
    worlds: true,
    awards: [
      { name: 'Regional Finalist', event: 'San Francisco Regional' },
      { name: 'Woodie Flowers Finalist Award', event: 'Regional' },
      { name: 'Quality Award', event: 'Regional' },
    ],
  },
  {
    year: 2018,
    game: 'POWER UP',
    events: 3,
    awards: [{ name: 'Innovation in Control Award', event: 'Regional' }],
  },
  {
    year: 2017,
    game: 'STEAMWORKS',
    events: 2,
    awards: [
      { name: 'Woodie Flowers Finalist Award', event: 'Sacramento Regional' },
      { name: 'Entrepreneurship Award', event: 'Regional' },
    ],
  },
  {
    year: 2016,
    game: 'STRONGHOLD',
    events: 2,
    awards: [
      { name: 'Excellence in Engineering Award', event: 'Regional' },
      { name: 'Imagery Award', event: 'Regional' },
    ],
  },
  {
    year: 2015,
    game: 'RECYCLE RUSH',
    events: 3,
    worlds: true,
    awards: [
      { name: 'Regional Finalist', event: 'Regional' },
      { name: 'Innovation in Control Award', event: 'Regional' },
    ],
  },
  {
    year: 2014,
    game: 'AERIAL ASSIST',
    events: 2,
    awards: [{ name: "Dean's List Finalist", event: 'Regional' }],
  },
  {
    year: 2013,
    game: 'ULTIMATE ASCENT',
    events: 2,
    awards: [{ name: 'Imagery Award', event: 'Regional' }],
  },
  { year: 2012, game: 'REBOUND RUMBLE', events: 2, awards: [] },
  { year: 2011, game: 'LOGO MOTION', events: 2, awards: [] },
  {
    year: 2010,
    game: 'BREAKAWAY',
    events: 2,
    awards: [{ name: 'Regional Winner', event: 'Silicon Valley Regional' }],
  },
  { year: 2009, game: 'LUNACY', events: 2, awards: [] },
  { year: 2008, game: 'FIRST OVERDRIVE', events: 2, awards: [] },
  {
    year: 2007,
    game: "RACK 'N ROLL",
    events: 1,
    awards: [{ name: 'Sportsmanship Award', event: 'Regional' }],
  },
  {
    year: 2006,
    game: 'AIM HIGH',
    events: 2,
    awards: [{ name: 'Motorola Quality Award', event: 'Regional' }],
  },
  { year: 2005, game: 'TRIPLE PLAY', events: 0, competed: false },
  { year: 2004, game: 'FIRST FRENZY', events: 2, awards: [] },
  {
    year: 2003,
    game: 'STACK ATTACK',
    events: 1,
    awards: [{ name: 'Motorola Quality Award', event: 'Regional' }],
  },
  { year: 2002, game: 'ZONE ZEAL', events: 0, competed: false },
  {
    year: 2001,
    game: 'DIABOLICAL DYNAMICS',
    robot: 'Progress',
    events: 1,
    rookie: true,
    worlds: true,
    awards: [{ name: 'Regional Finalist', event: 'Silicon Valley Regional' }],
  },
]

/** Awards worth surfacing as filters on the archive page, most prestigious first. */
export const awardFilters = [
  { id: 'all', label: 'All seasons', match: () => true },
  {
    id: 'blue',
    label: 'Blue banners',
    match: (a) => /Winner|Chairman|Impact|Engineering Inspiration/i.test(a.name),
  },
  { id: 'finals', label: 'Finals runs', match: (a) => /Finalist/i.test(a.name) },
  {
    id: 'technical',
    label: 'Technical awards',
    match: (a) => /Innovation|Excellence|Quality|Industrial|Control|Creativity/i.test(a.name),
  },
]

export const totalAwards = seasons.reduce((n, s) => n + (s.awards?.length ?? 0), 0)

/**
 * Seasons registered, 2001 through the present. This is the figure the official
 * archive reports as "seasons competed". Three of these (2002, 2005 and the
 * cancelled 2020) never reached a field, which `enteredSeasons` excludes.
 */
export const seasonCount = seasons.length
export const enteredSeasons = seasons.filter((s) => s.competed !== false).length
export const worldsAppearances = seasons.filter((s) => s.worlds).length
