# FRC 649 MSET Fish

Website for FIRST Robotics Competition team 649, the MSET Fish, at Saratoga High
School. Scoped to 649 only; the FTC teams are not covered here.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173/FRCWebsite/
npm run build    # production build into dist/
npm run preview  # serve the built output
npm run lint
```

Node 22 or newer.

## Editing content

All copy and figures live in `src/data/`. Components read from it and never
hard-code a fact, so a season or a sponsor can be changed in one place:

| File | Holds |
| --- | --- |
| `seasons.js` | Every season 2001 to present: game, awards, events, championship trips |
| `team.js` | Team identity, headline figures, next-season dates, social links |
| `outreach.js` | Outreach programmes and impact figures |
| `sponsors.js` | Sponsor roster, grouped by tier, and what sponsorship funds |

Season totals on the site (awards won, seasons, filter counts) are **derived**
from `seasons.js` rather than typed separately, so the archive and the summary
figures cannot drift apart. Add a season to the array and every count updates.

### Two things need checking before this is public

`outreach.js` and `sponsors.js` both export a `*_NEED_REVIEW` flag, because the
programme descriptions, impact numbers and sponsor list were transcribed from the
team's own banners photographed at the 2022 championship. They are four seasons
old and were read at limited resolution. Confirm them against a current source,
especially the sponsor roster, where a dropped or missing name matters.

The season record itself is from the official FIRST event archive and is sound,
with two known gaps noted in comments: the archive counts 34 awards where this
lists 32, and reports eight championship trips where only five are identified by
year.

## Structure

```
src/
  components/   Nav, Footer, DepthGauge, Caustics, Reveal, FishMark
  routes/       Home, Legacy, Outreach, Support, NotFound
  data/         all site content
  styles/       design tokens
  assets/       logo-derived art and photography
```

Plain CSS with custom properties and CSS Modules, no utility framework. Tokens
are in `src/styles/tokens.css`; the three brand colours there are sampled from
the fish artwork so the logo never sits slightly off from the palette.

`FishMark.jsx` is the team logo traced to vector paths, with fills bound to CSS
custom properties so it can be recoloured per context.

## Motion

The hero canvas (`Caustics.jsx`) and the scroll reveals both respect
`prefers-reduced-motion` and fall back to a static frame. The canvas also stops
animating when scrolled out of view. Check both when changing them.

## Deployment

Pushes to `main` build and publish to GitHub Pages via
`.github/workflows/deploy.yml`. The Vite `base` is `/FRCWebsite/`; for a custom
domain, build with `BASE_PATH=/`.

The build copies `index.html` to `404.html` so client-side routes survive a hard
refresh on Pages.
