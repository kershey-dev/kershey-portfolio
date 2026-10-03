# Original portfolio design brief

Transcribed from the attached Word document. This is design reference material; the current user request is repository setup only.

PORTFOLIO SYSTEM  /  2026

Kershey Tumbagahan

Modern Newspaper Portfolio — Design & Build Brief

A clean personal portfolio that feels like reading a real newspaper, while behaving like a modern interactive website.

PRIMARY IDENTITY

Kershey Tumbagahan

ROLE

Web Developer / Frontend Developer / Builder

CORE STRUCTURE

Persistent left sidebar + newspaper page modules

DESIGN PRIORITY

Authentic newspaper reading experience, simplified for the web

One-sentence direction

“A personal portfolio written like a good newspaper about Kershey’s work — real headlines, columns, captions and story hierarchy — with a clean fixed sidebar, subtle motion and tactile sound.”

Contents

01 — Core Design Idea

02 — Visual Language

03 — Sidebar / Table of Contents

04 — Index / Front Page (Current Priority)

05 — Module System

06 — Motion & Sound

07 — Content Voice

08 — Anti–AI-Slop Rules

09 — Reference Breakdown

10 — Implementation Notes

11 — Acceptance Checklist

01 — Core Design Idea

The portfolio should feel like an actual newspaper publication, not a “newspaper-inspired” UI kit. The newspaper system controls the content hierarchy and reading experience; the web layer adds navigation, motion, hover previews and sound.

What stays modern

Persistent left sidebar for navigation.

Fast, clear module switching.

Responsive layout and accessible interactions.

Subtle hover previews, transitions and sound feedback.

Clean spacing and strong visual hierarchy.

What feels like a newspaper

Headline → deck → image → caption → body copy hierarchy.

Real multi-column article layouts where appropriate.

Thin horizontal and vertical rules that structure the page.

Serif display/headline typography paired with readable article text.

Issue/date/category metadata used sparingly and with purpose.

Lead story + secondary stories, not equal portfolio cards.

A page should look plausible as something that could be printed.

02 — Visual Language

BACKGROUND

Warm off-white / clean newsprint. Avoid dirty beige or heavy aging.

INK

Near-black, high contrast.

ACCENT

Deep red, very restrained. Use for active state, tiny rule, or key label only.

DISPLAY TYPE

Strong newspaper serif or condensed editorial serif.

UI / METADATA

Neutral sans + small mono/technical text.

IMAGES

Mostly grayscale or halftone. Optional color reveal on hover.

Texture rule

Paper texture should be nearly invisible. The newspaper feeling must come from layout, typography, rules and writing — not from fake vintage effects.

03 — Sidebar / Table of Contents

The sidebar is a stable navigation rail outside the newspaper page. It should borrow from a newspaper contents column without becoming a retro prop.

SIDEBAR CONTENT — RECOMMENDED

KERSHEYTUMBAGAHANWEB DEVELOPER& BUILDERCONTENTS01  INDEX02  WORK03  ABOUT04  ARCHIVE05  FIELD NOTES06  CONTACTDIRECTORYGitHub      ->LinkedIn    ->Resume      ->Email       ->SOUND  ● ONPH / 2026Y.

Sidebar rules

No rounded icon buttons or SaaS-style navigation.

Use page numbers / folio language instead of decorative icons.

Active module: one restrained deep-red rule, dot, or bold state.

External links look like a directory, not CTA buttons.

Sound control stays small and mechanical-looking.

Keep the sidebar visually stable while the newspaper page changes.

Ypsen remains hidden/secondary; a tiny “Y.” can be an easter egg.

04 — Index / Front Page (Current Priority)

Do not build the rest of the site until the Index feels right.

The Index is the visual source of truth for the entire portfolio. It must genuinely feel like opening the front page of a newspaper about Kershey, but the content stays concise, positive and credible.

Index content budget

One masthead / publication identity.

One lead headline.

One main portrait or visual.

One short deck/introduction.

Two to three supporting text stories maximum.

No project thumbnail gallery on the Index.

No repeated “Kershey Tumbagahan” in multiple large locations.

Recommended information hierarchy

Top folio: date / location / section label.

Masthead: publication title (not necessarily the person’s full name).

Lead headline: clean, cool, developer-focused.

Deck: one or two lines explaining role and approach.

Main portrait: the provided photo, newspaper-treated.

Short article: who Kershey is and what he builds.

Small supporting briefs: current interests / selected work / field note teaser.

Headline tone

Prefer simple, credible lines such as “Building for the Web,” “Frontend, Products & Useful Systems,” or “A Developer Focused on Useful Digital Work.” Avoid exaggerated fame language and avoid the “solo developer story” angle.

What should NOT appear on the Index

A grid of four or more equal project cards.

Multiple portraits or scattered thumbnails.

Fake handwritten notes, stamps, signatures or random crosses.

Repeated issue metadata in every section.

Generic AI slogans repeated as filler.

Huge luxury-magazine whitespace that stops feeling like a newspaper.

Dense old-newspaper clutter that hurts scanning.

05 — Module System

MODULE

NEWSPAPER ROLE

PORTFOLIO TREATMENT

INDEX

Front page

Lead profile story + one portrait + supporting briefs.

WORK

Feature / business section

Projects are stories. One lead project, then smaller secondary stories. Avoid equal cards.

ABOUT

Profile / Sunday feature

Portrait-led article about the person behind the work, with a few compact facts.

ARCHIVE

Back-page index

Mostly typography: project number, title, category, year, hover preview.

FIELD NOTES

Column / opinion section

Actual articles/notes. Multi-column reading is appropriate here.

CONTACT

Classifieds / notices

Minimal contact page with a strong headline and directory-like links/form.

06 — Motion & Sound

Motion should make the newspaper feel digital and tactile, not turn it into an experimental game.

Project headline hover → image preview appears near cursor.

Grayscale/halftone image → full color on hover.

Thin rules can animate horizontally when a section activates.

Headline can shift/stretch only a few pixels on hover.

Sidebar active marker glides between modules.

Cursor can change to READ / VIEW over article-like links.

Page/module transition can slide or reveal like changing sections — avoid cheesy page-flip effects.

No scroll trapping. No long pinned sequences. No animation just because an element entered the viewport.

Sound language

Hover

Tiny dry tick

Click / open

Muted mechanical click

Module navigation

Soft tap

Sound toggle

Small physical switch

Hidden Y. interaction

One distinctive but subtle easter-egg sound

07 — Content Voice

The site may read like “good news” about Kershey, but it must remain believable. The portfolio should sound like a well-written profile, not self-hype.

Primary role language: Web Developer / Frontend Developer / Builder.

Use concise, concrete statements about projects, interfaces and systems.

Avoid “well-known,” “famous,” “award-winning,” or similar claims unless they are actually true and documented.

Avoid the “solo developer” narrative as a recurring story.

Do not repeat the full name in every headline.

Let the publication masthead and article headings carry the personality.

Project descriptions should focus on what was built, why it mattered, and Kershey’s contribution.

08 — Anti–AI-Slop Rules

These are hard constraints.

No random stamps, stars, scribbles, arrows, circles or “editorial” decorations without a functional reason.

No repeated fake metadata like VOL.001 / ISSUE / 2026 everywhere.

No oversized hero slogan plus five tiny cards underneath.

No equal-card project grids when editorial hierarchy would be stronger.

No brown “old paper” filter or excessive grain.

No generic glassmorphism, gradient blobs, rounded SaaS cards or gaming UI.

No decorative icon overload in the sidebar.

No four different font families fighting for attention.

No fake newspaper cosplay: newspaper structure must be real, not decorative.

No copy that sounds generated, inflated or vague.

09 — Reference Breakdown

Niccolò Miranda

Use: confidence, expressive type, strong editorial composition, motion. Do not copy the experimental navigation complexity.

MMTA

Use: simple information architecture and clean personal-portfolio organization.

Mar Wie Ang

Use: persistent navigation, clear personal information, compact organization.

Recent.design

Use: tactile interaction philosophy and subtle feedback/sound behavior.

Mailerbot

Use: playful but controlled motion; borrow movement, not SaaS styling.

Provided newspaper references

Use: authentic masthead, real column logic, captions, rule hierarchy, lead/secondary story structure.

10 — Implementation Notes

Build the Index first. Do not implement every module before the design language is approved.

Use reusable typography tokens, spacing tokens, rules/divider primitives and article-layout components.

The newspaper content area and sidebar should be separate layout systems.

Keep article data/content structured so modules can evolve without rewriting layout code.

Respect prefers-reduced-motion and provide an obvious sound on/off control.

Lazy-load heavy project imagery and audio assets.

Mobile should keep the publication feel but simplify columns; sidebar can collapse into a compact contents drawer.

Use real project screenshots and the provided portrait rather than random generated stock imagery.

11 — Acceptance Checklist

☐  Does the Index feel like a real newspaper page before any animation plays?

☐  Is there only one dominant lead story and one main image?

☐  Can a visitor understand “Web Developer / Frontend Developer / Builder” immediately?

☐  Is the sidebar clear, compact and newspaper-compatible without looking like an app dashboard?

☐  Are the name and role not repeated unnecessarily?

☐  Does the page have real headline/deck/caption/body hierarchy?

☐  Are columns and rules doing structural work instead of decoration?

☐  Is the deep-red accent restrained?

☐  Are motion and sound subtle enough that the site still works beautifully without them?

☐  Does every decorative element have a reason?

☐  Would the page still look intentional if printed in grayscale?

☐  Does the result feel like a portfolio written in a newspaper rather than a newspaper-themed portfolio template?

SOURCE OF TRUTH — CURRENT STATUS

The current design task is to perfect the INDEX / front page first. Once its newspaper language, typography, sidebar and interaction feel are approved, reuse the system across Work, About, Archive, Field Notes and Contact while allowing each module to behave like a different newspaper section.
