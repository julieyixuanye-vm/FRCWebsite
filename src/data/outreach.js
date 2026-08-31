/**
 * Outreach programs.
 *
 * Transcribed from the team's own MSET Outreach banner photographed at the 2022
 * FIRST Championship. The program names and descriptions are legible; the
 * figures in `impact` were read off the same banner at limited resolution and
 * are four seasons old. Both should be confirmed and refreshed before this page
 * is treated as current. See PROGRAMS_NEED_REVIEW below.
 */

export const PROGRAMS_NEED_REVIEW = true

export const programs = [
  {
    id: 'vikalp',
    name: 'Vikalp',
    tagline: 'Education, India',
    body:
      'Produced a library of conversational English and mathematics videos for girls in India, ' +
      'built to be watched on a shared phone with patchy connectivity rather than in a classroom.',
    metric: { value: '49', unit: 'videos', reach: 'reaching roughly 600 girls' },
  },
  {
    id: 'gobabygo',
    name: 'GoBabyGo',
    tagline: 'Accessibility',
    body:
      'Modified ride-on toy cars for children with limited mobility, rewiring the controls to ' +
      'large accessible buttons and rebuilding seating and harnesses for each child individually.',
    metric: { value: '19', unit: 'cars rebuilt', reach: 'one child at a time' },
  },
  {
    id: 'shadika',
    name: 'Shadika',
    tagline: 'Workshops',
    body:
      'Practical engineering sessions run with students who would not otherwise get near a shop, ' +
      'built around the idea that confidence comes from finishing something you can hold.',
  },
  {
    id: 'billion-lights',
    name: 'Billion Lights',
    tagline: 'Solar lighting',
    body:
      'Assembling and distributing solar lighting to households without reliable electricity, so ' +
      'that studying after dark stops being a luxury.',
  },
  {
    id: 'fll',
    name: 'FLL mentorship',
    tagline: 'Mentoring',
    body:
      'Sustained mentoring of FIRST LEGO League teams across the district, coaching build, ' +
      'programming and judging, and hosting scrimmages ahead of qualifiers.',
    metric: { value: '11', unit: 'teams mentored', reach: '500+ hours' },
  },
  {
    id: 'workshops',
    name: 'Summer workshops',
    tagline: 'Free summer program',
    body:
      'Free multi-week summer programs introducing CAD, fabrication and controls to students ' +
      'with no prior robotics experience, run entirely by team members.',
    metric: { value: '2', unit: 'six-week programs', reach: 'run virtually' },
  },
]

/** Headline outreach figures. Same caveat as above: verify before relying on these. */
export const impact = [
  { value: '1,000+', label: 'Hours of outreach' },
  { value: '11', label: 'FLL teams mentored' },
  { value: '600', label: 'Students reached by Vikalp' },
  { value: '19', label: 'GoBabyGo cars rebuilt' },
]
