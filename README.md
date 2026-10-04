# The Kershey Record

A newspaper-style portfolio for Kershey Tumbagahan, built as a responsive static website with plain HTML, CSS, and JavaScript.

## Run locally

From this directory, start a static file server with python3 -m http.server 8000, then open http://localhost:8000.

## Pages

- Index — front-page profile and route into the work.
- Work — one lead project story and smaller project briefs.
- About — profile, working approach, and a compact tools directory.
- Archive — featured projects, public repository metadata, and GitHub contribution activity.
- Field Notes — explains the column; it stays empty until Kershey has real notes to publish.
- Contact — confirmed GitHub route and placeholders for email, LinkedIn, and resume.
- Back Page — keyboard and pointer accessible word search with short web trivia.

Project and portrait images are visibly marked placeholders. The public GitHub archive loads live data and falls back to profile and repository links if the data services are unavailable.

## Design notes

- Approved visual direction: docs/superpowers/specs/2026-10-03-kershey-record-design.md
- Readable design brief: docs/design-brief.md
- Original Word document: docs/design-brief.docx
- Content and UX research: docs/portfolio-v2.md
- Current content checklist: docs/NEXT-STEPS.md

The exploratory work in mockups/ is retained for reference. The site served from the repository root is the current implementation.
