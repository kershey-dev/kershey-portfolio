# The Builder's Post — portfolio design direction

> Superseded by [The Build Journal — current content and UX plan](portfolio-v2.md). The six-section navigation below is retained only as design history.

Status: design direction for review. Project facts and personal assets still need verification.

## Purpose and reader journey

This is Kershey Tumbagahan's portfolio as a readable personal newspaper. A visitor should understand that Kershey builds web interfaces within seconds, find substantial work in one action, and reach a real contact route without hunting. The newspaper structure carries the experience; restrained interaction gives it life.

The reading sequence is **front page → feature stories → profile → index of work → column → notice**. Visitors may enter any section directly through a shareable URL. The fixed contents rail provides the same six destinations on every desktop page. It does not hide or move when the main page changes.

## Publication identity and navigation

**Masthead:** THE BUILDER'S POST. This sounds like a publication without repeating Kershey's name. The sidebar carries the name once and labels the role as “Web Developer / Frontend Developer / Builder.”

Navigation labels and routes:

| No. | Section | Route | Job |
| --- | --- | --- | --- |
| 01 | Index | `/` | Introduce the person and point to the strongest work. |
| 02 | Work | `/work` | Present four projects as unequal feature stories. |
| 03 | About | `/about` | Give a concise profile with verifiable personal context. |
| 04 | Archive | `/archive` | Offer a fast, typographic index of all confirmed work. |
| 05 | Field Notes | `/notes` | Publish actual notes when they exist. |
| 06 | Contact | `/contact` | Offer direct contact and a simple inquiry path. |

Sidebar directory: GitHub, LinkedIn, Resume, Email. Show only verified destinations; until then, do not present dead links. Sound control starts **OFF** and remembers the visitor's choice. A tiny `Y.` may sit in the footer as a later easter egg; it never competes with the main identity.

On narrow screens, the rail becomes a compact header with Kershey's name, the current section, and a clearly labeled **Contents** button. Opening it reveals the same six destinations and directory. The main content becomes a single reading column. The menu works by tap and keyboard, including Escape, with focus restored to its trigger when closed.

## Section storylines and content

### 01 Index — front page

Headline: **Building Useful Digital Things**. Deck: **Kershey Tumbagahan is a web developer and frontend builder focused on clear interfaces and practical web experiences.** This describes a role and direction, not an achievement.

One portrait anchors the lead story. Use Kershey's actual portrait when supplied, with grayscale or light halftone treatment and a factual caption. Until then, use an honest placeholder. A short profile article occupies one or two columns. Beneath it, two supporting briefs: **Selected Work** points to the lead project, and **Field Notes** points to published writing or an explicit “notes in progress” state. The first screen should show the masthead, lead headline, deck, and at least part of the portrait. Avoid project thumbnail galleries here.

### 02 Work — feature section

XillaFit is the provisional lead because the supplied example describes a clothing customization experience that offers a clear visual story. Its working headline is **XillaFit: Making Clothing Customization Clearer Online**. The exact product description, contribution, screenshots, role, category, year, and result must be confirmed before publication. Lead treatment: one large authentic screenshot, a short deck explaining what it is, Kershey's contribution, and a direct project link where available.

School Voting System, Nodra, and Sodales Talents follow as secondary articles of varied width. Each gets a headline, one concise factual summary, Kershey's role, and a real image or a text-only treatment. No invented outcome metrics. If XillaFit's real material is thin, promote the project with the strongest verified image and clearest contribution instead.

### 03 About — profile feature

Headline: **The Person Behind the Work**. One real portrait, a short third-person introduction, and a first-person paragraph about how Kershey approaches building interfaces. Small “At a glance” facts may include location, current focus, tools, and learning interests only after confirmation. A pull quote may be used only if Kershey supplies or approves the wording; never fabricate a quotation.

### 04 Archive — back-page index

A clean numbered table of the four confirmed projects: title, short category, and year only where known. Whole rows are usable links. A small preview can appear on pointer hover or keyboard focus; the row remains readable and actionable on touch devices without a preview. The project list is the source of truth for both Work and Archive.

### 05 Field Notes — column

Publish real notes with title, date, category, and reading time. Possible subjects from the brief include interface feedback, motion, experiments, and lessons learned. The example titles supplied are **ideas**, not published articles. Until notes are written, show a concise editorial introduction and an honest “First notes are being prepared” state rather than fake dated entries. On wide screens, article pages may use two reading columns where comfortable; on mobile, always use one.

### 06 Contact — notice

Headline: **Have Something Worth Building?** One short invitation, direct email and verified directory links, and a simple form if a reliable submission endpoint is available. Without an endpoint, a visible mail link is the primary action. Keep the page closer to a newspaper notice than a themed classified ad.

## Visual system

Warm clean newsprint, near-black ink, one deep oxblood red accent. Very light or no visible paper grain. Real folio, masthead, headline, deck, image, caption, body, and secondary story hierarchy. Thin horizontal and vertical rules separate content logically. Typography has three roles: a strong editorial serif for masthead, headlines, and body; a clear sans for navigation and controls; a small mono for dates, categories, and page numbers. Pick concrete font families during implementation after testing legibility at desktop and phone widths.

Each section has its own composition but shares the rail, folio logic, spacing scale, ink/paper/red palette, and article primitives. The front page and Work have one dominant image. Archive is primarily type. Notes favor reading comfort. Contact is sparse but not empty.

## Interaction and accessibility

- The active sidebar marker slides a short distance when navigating; the new page enters with a brief masked or horizontal reveal. Ordinary links and browser back/forward continue to work. Never trap scrolling or delay content until animation completes.
- Headlines and project rows may shift only a few pixels, draw a rule, or reveal one image. Project previews follow the pointer gently on capable devices; they never obscure the link text. On touch and keyboard, use a stable inline preview or clear focus state.
- Portrait and project imagery may move from grayscale to natural color on hover or focus. The site remains complete in the resting state.
- Sound is optional, off initially, low volume, and user-controlled. Never play sound on page load. Store the setting locally and label the button's current state.
- Honor `prefers-reduced-motion`. Ensure visible focus, readable contrast, meaningful alt text, and comfortable text size. Motion and sound must not convey information unavailable in the static page.

## Content and asset gates

Before the design is called final, obtain Kershey's actual portrait, project screenshots, accurate descriptions and roles for XillaFit / School Voting System / Nodra / Sodales Talents, destinations for directory links, the preferred contact email, and any real Field Notes. Project dates and categories in the supplied examples are provisional. Keep placeholders visibly labeled in mockups and hidden from the published experience when no replacement exists.

## First build milestone

Build and review the Index on desktop and mobile first. It should read as a newspaper before any animation runs. Once its typography, columns, portrait treatment, sidebar, and content voice are accepted, extend the same system to Work, About, Archive, Notes, and Contact.
