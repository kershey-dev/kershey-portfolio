# The Build Journal — content and UX plan

**Current direction, revised 2026-10-03.** This replaces the earlier six-section blueprint. The current mockup uses a compact broadsheet, traditional Tribune-style masthead, smaller headlines and photographs, and tighter article layout. Generated text or project imagery is not a factual source. The site has not been built yet.

## Purpose

A recruiter, collaborator, or client should be able to answer four questions quickly: Who is Kershey? What can he build? What did he personally contribute to real projects? How can I reach him? The newspaper concept should make those answers memorable and readable, without pages that repeat them.

Keep the fixed contents rail, clean off-white paper, dark ink, restrained deep red, columns, rules, captions, the supplied studio portrait, and quiet interaction. Use **The Tribune** as the working masthead in a traditional blackletter newspaper face; **The Kershey Tribune** is the more personal alternate shown in the design study. The publication name is still a choice to settle before implementation. Newspaper language belongs in the visual treatment and section folios. The main navigation uses familiar labels.

## Navigation and page jobs

| Contents | Route | Unique job | Visitor's next action |
| --- | --- | --- | --- |
| 01 Index | `/` | Present a short front-page news profile about Kershey, his ideas, and what he makes. | Open Work or About. |
| 02 Work | `/work` | Show selected projects in one ordered view, then link to full case studies. | Judge one project in detail. |
| 03 About | `/about` | Give professional background, practical capabilities, tools, and a resume. | Assess fit and interests. |
| 04 Archive | `/archive` | Offer a complete, compact project index, then real GitHub activity and public repositories. | Scan everything Kershey has made. |
| 05 Field Notes | `/notes` | Publish Kershey's real thoughts and experiments as short columns. | Read a genuine note. |
| 06 Contact | `/contact` | Offer direct, working ways to get in touch. | Send an inquiry. |

Each project story lives under `/work/[slug]` and is reached from Work. **Work and Archive have different jobs:** Work is a curated set of substantial editorial case studies; Archive is a compact index of all projects, including those without full stories, followed by GitHub activity. The same project may appear as a feature and as one row in the index, but the Archive does not repeat case-study text. Field Notes is part of the intended publication, but show it in the live navigation only when at least one real piece is ready; do not show an empty section or invented dated posts. A small **Back Page / Code Word Search** link sits below the main contents list at `/puzzle`; the game is an optional extra, not a required step toward Work or Contact. The sidebar directory can show GitHub now; add LinkedIn, Resume, and Email when their public destinations are confirmed. Sound stays off by default.

The primary route for a busy visitor is **Index → Work → case study → Contact**. About is one step away from every page. Every page has a direct URL, visible title, and route back to Work. Mobile uses the same destinations in an accessible Contents menu and a normal single-column reading flow.

## 01 Index / front-page profile

**Question answered:** Who is Kershey, what kinds of ideas interest him, and where can I read about his work?

- Folio: `FRONT PAGE / PROFILE`.
- Working masthead: `The Tribune`, set in a traditional blackletter-inspired face; the alternate is `The Kershey Tribune`.
- Working headline: `Kershey at work.` This is a short profile headline; the deck and article supply the personal detail.
- Working deck: `A web developer and BSIT student in the Philippines, Kershey explores web interfaces, practical tools, and the ideas behind them.` Based on his public GitHub profile; review before publication.
- Lead article beat: introduce Kershey as a person, then explain his interests in web development, UI/UX, and automation, then point to the real projects that show those interests in practice. Write this as a short third-person newspaper profile with two or three compact paragraphs. Do not invent a quote, biography, achievement, client, or personal motivation.
- Image: the first supplied studio portrait, in glasses and a deep-red top. Use the original image in the website, in a single editorial image column with a plain caption: `Kershey Tumbagahan · Web Developer`.
- Beneath the lead story: one small `Featured Work / XillaFit` story pointing to Work, and one `Inside This Issue` column pointing to About, Field Notes when published, and Contact. These are teasers/navigation, not repeated articles.
- Main link: `Explore the work →`.

The first screen needs the masthead, profile headline, first article paragraphs, modest portrait, and Work link. The Index should have real newspaper density: article columns, side brief, caption, and rules. **Do not use a giant slogan headline or a poster-sized portrait.** Keep the deeper biography, tools, and experience on About and detailed project evidence on Work.

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

Use a different composition from Index: a text-led professional profile, grouped capabilities, and compact facts column. The portrait may appear small or the second supplied photo can be used after removing screenshot chrome. Index is the news introduction; About gives the deeper background, skills, and ways of working.

Draft headline: `The person behind the work.` Draft profile, based on Kershey's public GitHub profile and subject to his review: `I'm a web developer and BSIT student based in the Philippines. I work across web applications, interactive interfaces, and automation, with an interest in making useful ideas clear and usable.` This is the only page for a longer biography.

Three useful content blocks:

- **What I work on:** web apps, UI/UX, and automation. Connect concrete work to relevant case studies; avoid generic adjectives and self-ratings.
- **Tools in context:** JavaScript, React, Tailwind CSS, Supabase, Three.js, Figma, Git/GitHub, Vite, Docker, n8n, and APIs appear on Kershey's public profile. Group by purpose, show only current tools, and link claims of use to project evidence where possible.
- **Background and next step:** BSIT student; location Philippines. Add school, experience, collaborations, and dates only if Kershey wants to publish and verifies them. Offer a working resume link and Contact link.

Only use a real statement from Kershey as a pull quote. No fabricated interview, years of experience, awards, clients, or skill percentages.

## 04 Archive / project index and GitHub

**Question answered:** What else has Kershey made, and what public work can I inspect?

The top of Archive is a typographic project directory, closer to a newspaper index than a grid of cards. Include every approved portfolio project with a concise name, category, one factual sentence, year/status if verified, and a direct link to a case study, live project, or repository where one exists. The initial list can include XillaFit, School Voting System, Nodra, and Sodales Talents after their identities and public-use permissions are confirmed. Work gives selected projects editorial space; Archive lets a visitor scan the complete list quickly. Avoid copying the Work lead image or article text here.

The **last part of Archive** is titled `On GitHub`. Put Kershey's genuine contribution calendar first, with a clear time range, day-by-day blocks, accessible color legend, and a link to his GitHub profile. Put `Public Repositories` directly below it as a compact list: repository name, primary language and last update if available, plus a real GitHub link. Public repositories currently visible on `kershey-dev` are `SentenceSmarat`, `racipay`, `xillafit-flutter`, `FBA`, `mapty`, `kershey-dev`, and `kershey-portfolio`. Exclude the profile (`kershey-dev`) and this portfolio repo from the *project* list unless Kershey chooses to show them. Do not claim a similarly named repo is the code for a private portfolio project without confirmation.

This can be connected to live GitHub data. Public repo metadata comes from GitHub's public REST repository endpoint, filtered and cached server-side or at build time. The contribution calendar can come from GitHub GraphQL with a server-side token, or from a cached rendering of GitHub's public contributions page; do not place a token in browser code. The public contributions page and public repo endpoint both returned data during planning. If the feed fails, show a clear GitHub profile link rather than blank or fabricated blocks. Avoid treating contribution counts as a measure of professional skill.

## 05 Field Notes / columns

**Question answered:** How does Kershey think through a real interface or development problem?

Publish short first-person pieces only when Kershey has approved their factual content. Strong initial subjects are a specific interaction he built, a design decision from a project, or why this portfolio uses newspaper structure. A note needs a real title, date, useful body, and relevant image only if one exists. The page can use two or three columns on wide screens and one on phones. Its purpose is to reveal thinking; it must not repeat case studies or invent a diary.

## 06 Contact / notice

**Question answered:** How do I reach Kershey now?

Headline: `Have something worth building?` Supporting line: `For a project, collaboration, or a question about my work, get in touch.` The main action is a preferred public email as a working `mailto:` link. GitHub is a verified secondary route: `https://github.com/kershey-dev`. Add LinkedIn and Resume after confirming URLs. A form is optional and should appear only if it has working delivery and clear success/error states. Avoid fake availability status or response-time promises.

## Newspaper system and interaction

- The fixed desktop rail is the contents column; the right side is the newspaper page. Use page numbers `01–06` when Notes is published, thin rules, editorial headlines, captioning, and a restrained red active marker. The new masthead direction is **The Tribune** in a traditional blackletter face, around 60px on a 1440px desktop study. The lead headline is around 42–44px and the article text around 15–16px on desktop; test real readability on phones.
- Use clean off-white `#F7F5EF`, ink `#171716`, oxblood `#86262A`; Newsreader for editorial type, IBM Plex Sans for UI, IBM Plex Mono for small labels. Test line lengths and 16–18px body text on phones.
- Treat type and photos like a broadsheet rather than a poster: a moderately sized masthead, a lead headline across two or three columns, and a portrait occupying one narrower column. Use actual article paragraphs, small side stories, captions, and logical rules. Avoid the oversized headline and image proportions in the earlier generated boards. A local browser-rendered study was used to tune the typography precisely; it has not been published as a website.
- Index has one real portrait and a reported-profile feel; Work has real screenshots and article hierarchy; About holds qualifications and process; Archive is an index plus GitHub evidence; Notes holds real writing; Contact is a simple notice. Shared visual language does not mean repeating copy or composition.
- Motion is a brief page reveal, small active-rule slide, and restrained hover/focus feedback. Standard scrolling, direct links, back/forward, keyboard navigation, touch use, visible focus, and reduced-motion support are required. Sound is opt-in and never needed to understand the site.
- Approved image mockups are visual studies. Generated copy or project imagery must not be published as facts or passed off as real screenshots.

## Back Page / Code Word Search

This is a **word search, not a crossword**. Make a printed-looking grid densely filled with letters. Hide web and coding terms such as `HTML`, `CSS`, `JAVASCRIPT`, `REACT`, `API`, `GRID`, `PIXEL`, `CODE`, and `LINK` horizontally, vertically, and diagonally. A visitor finds a word by dragging across letters on pointer or touch, leaving a thin red line or shaded ink-red cells; found words are crossed off in a nearby word list. The actual puzzle must use a generated or hand-verified valid grid in which every listed word appears. Do not show empty crossword boxes or across/down clues.

The puzzle works with keyboard, touch, and screen readers; keyboard visitors can choose a start and end cell as an alternative to dragging. Keep visible focus, a readable word list, a hint/reveal control, and locally saved progress. Finishing gets a restrained ink-red completion flourish or a small `Y.` easter egg. No account, timer, leaderboard, scroll trapping, or mandatory play. The game can itself become a Work case study after it is built, showing its interaction and accessibility decisions.

## Sources and build order

Kershey's brief establishes his name, preferred roles, four project names, visual direction, and portrait choice. His public GitHub profile currently states `Web Developer · Builder · BSIT Student`, Philippines, Web Development/UI/UX/Automation focus, and a toolbox; it also describes XillaFit. These are draft content sources, not verified outcomes. Exact role, metrics, dates, public contact address, LinkedIn, resume, and project media still need Kershey's confirmation. Do not publish private-repository details or assume similarly named repos match portfolio projects.

Build the responsive shell and Index with the original studio portrait; then Work and the strongest verified case study; then About and Contact with confirmed destinations. Add Archive with the complete project list and cached GitHub data. Add Field Notes when one real article is approved, and the Back Page word search as a small independent feature. Add subtle motion and optional sound after the static reading experience works well on desktop and phone.
