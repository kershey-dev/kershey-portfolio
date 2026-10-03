# The Builder's Post — portfolio blueprint

> Superseded by [The Build Journal — current content and UX plan](portfolio-v2.md). The six-section navigation below is retained only as design history.

**Decision status:** Final design and navigation direction. Publishable factual project details, portrait, and external links remain contingent on verification. This document supersedes earlier concept mockups where their text or layout differs.

## The idea

Kershey Tumbagahan's portfolio reads like a small, credible newspaper about his work. The fixed contents rail is the navigation; the page to its right is the publication. The visual grammar is headline, deck, image, caption, story, sidebar brief, folio, and rules. Interaction stays quiet until someone uses it.

The publication is called **THE BUILDER'S POST**. Its name appears once per page as the masthead. Kershey's full name appears in the sidebar and in an introductory sentence where needed, not in every headline or caption.

The primary visitor route is **Index → Work → Contact**. About adds personal context; Archive offers a fast scan; Field Notes rewards a deeper read. All six sections are direct URLs, visible in the Contents menu, and reachable without animation or sound.

## Publication-wide decisions

| Element | Final decision |
| --- | --- |
| Desktop navigation | Fixed left contents rail with six numbered links, active red marker, text directory, small sound control. |
| Mobile navigation | Compact top bar with name, active section, and a labelled Contents button. One accessible menu contains all six links and directory links. No duplicate horizontal navigation row. |
| Palette | Clean off-white `#F7F5EF`, ink `#171716`, restrained oxblood `#86262A`; rules use a light ink tint. |
| Typography | Newsreader for headlines and reading text; IBM Plex Sans for navigation and controls; IBM Plex Mono for folio, page numbers, and captions. Test final weights and line breaks with real content. |
| Density | Newspaper-like but comfortable: one dominant story, clear secondary hierarchy, no cards or needless whitespace. |
| Images | Use the first user-supplied studio portrait (glasses, red top, plain background) on Index. Its quiet background and direct gaze fit the lead story. Use the original photo file in the built site, with a light grayscale newsprint treatment at rest and natural red clothing on hover/focus. The outdoor sunglasses photo is a possible secondary About image after cropping out the phone status bar; it is not the Index lead. One lead project image appears on Work when a genuine asset exists. |
| Sound | OFF by default; discreet opt-in tick/tap feedback; remembered setting and visible off switch. |
| Motion | Short page reveal, moving active rule, small headline and preview movement. All content remains available immediately. |

Desktop layout: rail approximately 220–250px wide; article page fills the remaining width with a comfortable maximum measure. Headlines and image share the lead region; secondary stories sit below on unequal columns. Normal scrolling continues. On narrow screens the page becomes one reading column, with 16–18px or larger body text and touch-sized controls. On wide article pages, two columns are allowed only where line length stays comfortable. No mobile hover dependency.

## 01 — Index / front page

**Job:** Show who Kershey is, what he does, and where to find his work within the first screen.

**Folio:** `PHILIPPINES / PORTFOLIO / 2026` is a visual example. The published folio should use a real location/date if displayed; do not update or repeat issue labels for decoration.

**Masthead:** `THE BUILDER'S POST`

**Lead headline:** `Building for the Web`

**Deck:** `Frontend interfaces and useful digital experiences.`

**Lead article copy:** `Kershey Tumbagahan is a web developer and frontend builder. This portfolio brings his projects and ideas together in one place, with a focus on clear interfaces and practical digital work.`

**Image:** The first studio portrait supplied in chat, showing Kershey in glasses and a deep-red top on a plain background. Crop it as a portrait within the lead story; preserve his face and avoid AI reconstruction in the built site. Treat it lightly in grayscale at rest, then reveal the original color on hover/focus. Caption: `Kershey Tumbagahan`.

**Brief A — Selected Work:** `Four projects, each with its own problem, interface, and story.` Link: `Explore the work` → Work.

**Brief B — Field Notes:** `Why this portfolio reads like a newspaper.` Link: `Read the note` → the first Field Note below.

First viewport order: folio, masthead, lead headline, deck, and visible portrait. The lead article and briefs continue below. Only one dominant image. No project thumbnail grid.

## 02 — Work / feature stories

**Job:** Let visitors judge real work quickly, then open a full case study or live project where available.

**Section header:** `WORK / FEATURE STORIES`

**Lead:** `XillaFit` — provisional, because it has the clearest supplied story prompt. Working headline: `A clearer way to customize clothing online`. Working deck: `An online clothing customization experience.` These statements come from the supplied brief. A real screenshot, Kershey's exact role, the problem, the design/build process, and result must be confirmed before they are published as a case study.

**Secondary order:** `School Voting System`, `Nodra`, `Sodales Talents`. Show title-only links or neutral one-line summaries until each project's facts are confirmed. Do not imply a technology, outcome, year, client, AI feature, or Kershey's role from its name. A project with stronger verified material may replace XillaFit as lead.

**Case-study template:** context → problem → Kershey's contribution → interface decisions → result/evidence → project link. If a field is unknown, omit it rather than fill it with promotional copy. On the Work index, one lead story gets most of the width; the three others receive smaller, unequal treatments separated by rules.

## 03 — About / profile feature

**Job:** Add a person and working approach behind the projects without inventing biography.

**Headline:** `The Person Behind the Work`

**Intro copy:** `Kershey is a web developer and frontend builder interested in how an interface looks, reads, and responds. His work here spans projects and experiments, with each piece presented in context rather than as a gallery tile.`

**Story format:** One real portrait, a concise profile article, and a small `At a glance` column. The latter can show location, current focus, learning interests, and tools only after Kershey confirms them. Do not manufacture a quote. If a real quote is supplied later, set it as a pull quote with attribution.

## 04 — Archive / back-page index

**Job:** Make all work easy to scan and compare.

**Headline:** `The Archive`

**Rows:** `001 XillaFit`, `002 School Voting System`, `003 Nodra`, `004 Sodales Talents`. Add category and year only when verified. A row is a full keyboard- and touch-accessible link. Pointer hover or keyboard focus may reveal a small real preview image; on touch, use a stable inline preview only if it helps. Archive and Work pull from one project data source.

## 05 — Field Notes / column

**Job:** Let the visitor see how Kershey thinks and builds through actual writing.

**Headline:** `Field Notes`

**Intro:** `Short notes on interfaces, motion, tools, and what happens while building for the web.`

**First note — draft for Kershey's approval:** `Why This Portfolio Reads Like a Newspaper`

> I wanted a portfolio that feels like reading a publication about the work, not scrolling through a grid of projects. The front page introduces what I build. Each section then gives a project or idea the space it needs to make sense. The newspaper structure gives the work a clear order: headline, context, image, detail. The web adds quiet responses when someone navigates or explores. The page should still feel complete when nothing moves.

This note is grounded in Kershey's supplied design intent. He should review its first-person wording before it is published under his name. The other example note titles from the brief remain topic ideas, not published stories. Future entries show title, real date, topic, estimated reading time, and a short excerpt. Article pages favor reading comfort over newspaper density; use two columns only on wide screens.

## 06 — Contact / notice

**Job:** Give one clear contact path.

**Headline:** `Have Something Worth Building?`

**Copy:** `For a project, a question, or a conversation about the web, get in touch.`

Use a confirmed email link as the primary action, followed by verified GitHub, LinkedIn, and resume links. Add a form only if a working delivery endpoint and success/error states are available; do not publish a form that silently drops messages. Keep the notice simple and typographic.

## Behavior and access

- Sidebar active marker slides between entries in roughly 200ms; the content page reveals in roughly 180–250ms. Timing is a target to tune in the browser, not a reason to block reading. Browser back/forward and direct URLs must work.
- On Work and Archive, pointer hover may reveal a small project image near the row. The text remains visible. Keyboard focus gets a clear equivalent; touch shows the project without relying on hover.
- A headline may move 3–6px or draw a thin rule. Avoid continuous motion, giant cursors, page-flip effects, long pinned sections, and scroll locking.
- If sound is enabled, use quiet feedback on deliberate interactions only. Never autoplay music or audio. Persist the choice locally.
- Respect `prefers-reduced-motion`; preserve information and navigation with motion off. Provide visible focus, semantic headings, meaningful image alt text, readable contrast, and tappable controls.

## Ready-to-build sequence

1. Build the Index and responsive Contents navigation. Review desktop and phone screenshots with motion disabled first.
2. Add subtle transitions and sound toggle, verifying keyboard, touch, reduced motion, and normal scrolling.
3. Add Work and Archive using verified project data and real images; then About, Notes, and Contact.

## Facts and assets still needed

The portrait choice is settled from the two images supplied in chat; the original studio image file still needs to be added to the repository before implementation. Final publication content also depends on project screenshots, exact project descriptions and contributions, dates/categories, project URLs, GitHub/LinkedIn/resume URLs, and preferred public email. The visible mockups are composition studies; generated microcopy and image edits are not factual source material. Do not publish an AI-altered likeness or invented project result.
