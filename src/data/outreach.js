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
    id: 'CASA',
    name: 'California Association of STEM Advocacy',
    tagline: 'Advocacy',
    body:
      'placeholder, ' +
      'placeholder.',
    metric: { value: '38', unit: 'teams mentored', reach: '500+ hours' },
  },
  {
    id: 'publicdemos',
    name: 'Public Demos',
    tagline: 'something',
    body: 
      'something' + 'something',
    metric: {value: '10+', unit: 'demos', reach: 'to local areas'},
  }
]

/** Headline outreach figures. Same caveat as above: verify before relying on these. */
export const impact = [
  { value: '1,000+', label: 'Hours of outreach' },
  { value: '11', label: 'FLL teams mentored' },
  { value: '600+', label: 'Students reached by Vikalp' },
  { value: '19', label: 'GoBabyGo cars rebuilt' },
]
