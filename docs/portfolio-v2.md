# The Build Journal — content and UX plan

**Current direction, revised 2026-10-03.** This replaces the earlier six-section blueprint. The approved front-page mockup is the visual reference; generated text or project imagery is not a factual source. The site has not been built yet.

## Purpose

A recruiter, collaborator, or client should be able to answer four questions quickly: Who is Kershey? What can he build? What did he personally contribute to real projects? How can I reach him? The newspaper concept should make those answers memorable and readable, without pages that repeat them.

Keep the approved art direction: fixed contents rail, **THE BUILD JOURNAL** masthead, clean off-white paper, dark ink, restrained deep red, columns, rules, captions, the supplied studio portrait, and quiet interaction. Newspaper language belongs in the visual treatment and section folios. The main navigation uses familiar labels.

## Navigation and page jobs

| Contents | Route | Unique job | Visitor's next action |
| --- | --- | --- | --- |
| 01 Home | `/` | Identify Kershey's role and direction in seconds; point to one featured project. | Open Work or Contact. |
| 02 Work | `/work` | Show selected projects in one ordered view, then link to full case studies. | Judge one project in detail. |
| 03 About | `/about` | Give professional background, practical capabilities, tools, and a resume. | Assess fit and interests. |
| 04 Contact | `/contact` | Offer direct, working ways to get in touch. | Send an inquiry. |

Each project story lives under `/work/[slug]` and is reached from Work. The Work page already serves the index function, so **Archive is removed**. **Field Notes is not in launch navigation**; add it later only when Kershey has original, useful writing. Do not show empty sections or invented dated posts. The sidebar directory can show GitHub now; add LinkedIn, Resume, and Email when their public destinations are confirmed. A sound toggle may remain in the rail, off by default.

The primary route for a busy visitor is **Home → Work → case study → Contact**. About is one step away from every page. Every page has a direct URL, visible title, and route back to Work. Mobile uses the same four destinations in an accessible Contents menu and a normal single-column reading flow.

## 01 Home / front page

**Question answered:** Who is this and why should I continue?

- Folio: `FRONT PAGE / WEB DEVELOPMENT`.
- Masthead: `THE BUILD JOURNAL`.
- Headline: `Building for the Web.`
- Deck: `Kershey Tumbagahan builds web interfaces and practical digital products.`
- Supporting sentence: `Explore selected projects, the decisions behind them, and the person who built them.`
- Image: the first supplied studio portrait, in glasses and a deep-red top. Use the original image in the website. Caption: `Kershey Tumbagahan · Web Developer`.
- Main links: `Explore the work →` and `Get in touch →`.
- One lower-page brief: `Featured work / XillaFit` with a verified one-sentence description and a link to its case study when ready.

The first screen needs the masthead, name/role, readable headline, portrait, and Work link. Limit the introduction to roughly 40–60 words. **No longer biography, tool list, or multiple project summaries on Home**; those belong on About and Work.

## 02 Work / feature stories

**Question answered:** What has Kershey built, and what was his contribution?

The landing page is an editorial table of contents for projects: one lead feature with a real screenshot, then smaller linked stories. Each entry should be scannable for project name, what it is, Kershey's role, key technology where confirmed, and `Read case study →`. The list and detailed stories live on the same Work branch. Do not make four equal cards.

Proposed order from Kershey's brief: **XillaFit**, **School Voting System**, **Nodra**, **Sodales Talents**. Promote a different project if its screenshots and contribution evidence make a stronger lead. Kershey's public GitHub profile describes XillaFit as a 3D clothing customization and production management platform with interactive preview, design workflow, and order tracking. A separate public repo named `xillafit-flutter` exists; confirm whether it is the same product or another implementation before displaying an exact stack or linking code. The other three names come from Kershey's brief; exact descriptions, links, and public-use permission still need confirmation. Do not equate `sodales-cinema` with Sodales Talents, or the private `pdm-voting-web` repo with School Voting System, without confirmation.

Each published case study answers, in this order:

1. **At a glance:** product, audience, timeframe if known, Kershey's specific role, and public live/code links.
2. **Problem and goal:** what needed improving and for whom.
3. **My contribution:** features, interface work, architecture, or collaboration Kershey actually handled.
4. **The work:** two to four annotated real screenshots showing important flows or decisions. Explain relevant tools and tradeoffs.
5. **Result:** a measurable result if one exists; otherwise a truthful outcome such as a shipped workflow or working prototype, with status clearly stated.
6. **Reflection:** what changed, what was learned, or what should improve next.
7. **Next project / Contact:** let visitors continue without returning to the top.

Put a short summary first, then descriptive subheads, captioned evidence, and detail. Omit unknown facts instead of using vague promotional copy or unverified metrics. A project without enough evidence should stay out of the published lead area; Work can launch with fewer strong stories.

| Project | Established now | Needed for full case study |
| --- | --- | --- |
| XillaFit | Named in Kershey's brief and described on his public GitHub profile as a 3D clothing customization and production management platform. | Confirm implementation, personal contribution, screenshots, product status, destination, and result. |
| School Voting System | Name in Kershey's brief. | Confirm product identity, public-use permission, role, audience, flows, screenshots, status, and result. |
| Nodra | Name in Kershey's brief. | Purpose, role, key decisions, screenshot, technologies, status, and public link if available. |
| Sodales Talents | Name in Kershey's brief. | Product identity, purpose, role, screenshots, technology, status, and public link. |

## 03 About / professional profile

**Question answered:** What experience and skills does Kershey bring beyond individual projects?

Use a different composition from Home: a text-led profile, grouped capabilities, and compact facts column. The portrait may appear small or the second supplied photo can be used after removing screenshot chrome. **Do not repeat the dominant Home portrait treatment.**

Draft headline: `The person behind the work.` Draft profile, based on Kershey's public GitHub profile and subject to his review: `I'm a web developer and BSIT student based in the Philippines. I work across web applications, interactive interfaces, and automation, with an interest in making useful ideas clear and usable.` This is the only page for a longer biography.

Three useful content blocks:

- **What I work on:** web apps, UI/UX, and automation. Connect concrete work to relevant case studies; avoid generic adjectives and self-ratings.
- **Tools in context:** JavaScript, React, Tailwind CSS, Supabase, Three.js, Figma, Git/GitHub, Vite, Docker, n8n, and APIs appear on Kershey's public profile. Group by purpose, show only current tools, and link claims of use to project evidence where possible.
- **Background and next step:** BSIT student; location Philippines. Add school, experience, collaborations, and dates only if Kershey wants to publish and verifies them. Offer a working resume link and Contact link.

Only use a real statement from Kershey as a pull quote. No fabricated interview, years of experience, awards, clients, or skill percentages.

## 04 Contact / notice

**Question answered:** How do I reach Kershey now?

Headline: `Have something worth building?` Supporting line: `For a project, collaboration, or a question about my work, get in touch.` The main action is a preferred public email as a working `mailto:` link. GitHub is a verified secondary route: `https://github.com/kershey-dev`. Add LinkedIn and Resume after confirming URLs. A form is optional and should appear only if it has working delivery and clear success/error states. Avoid fake availability status or response-time promises.

## Newspaper system and interaction

- The fixed desktop rail is the contents column; the right side is the newspaper page. Use page numbers `01–04`, thin rules, editorial headlines, captioning, and a restrained red active marker. The masthead follows the approved front-page mockup: **THE BUILD JOURNAL**.
- Use clean off-white `#F7F5EF`, ink `#171716`, oxblood `#86262A`; Newsreader for editorial type, IBM Plex Sans for UI, IBM Plex Mono for small labels. Test line lengths and 16–18px body text on phones.
- Home has one real portrait, a lead headline, concise copy, and one small feature brief. Work has real screenshots and article hierarchy; About is a profile; Contact is a simple notice. Shared visual language does not mean repeating copy or composition.
- Motion is a brief page reveal, small active-rule slide, and restrained hover/focus feedback. Standard scrolling, direct links, back/forward, keyboard navigation, touch use, visible focus, and reduced-motion support are required. Sound is opt-in and never needed to understand the site.
- Approved image mockups are visual studies. Generated copy or project imagery must not be published as facts or passed off as real screenshots.

## Sources and build order

Kershey's brief establishes his name, preferred roles, four project names, visual direction, and portrait choice. His public GitHub profile currently states `Web Developer · Builder · BSIT Student`, Philippines, Web Development/UI/UX/Automation focus, and a toolbox; it also describes XillaFit. These are draft content sources, not verified outcomes. Exact role, metrics, dates, public contact address, LinkedIn, resume, and project media still need Kershey's confirmation. Do not publish private-repository details or assume similarly named repos match portfolio projects.

Build the responsive shell and Home with the original studio portrait; then Work and the strongest verified case study; then About and Contact with confirmed destinations. Add subtle motion and optional sound after the static reading experience works well on desktop and phone.
