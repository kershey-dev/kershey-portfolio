# The Kershey Record — portfolio design

**Status:** Visual direction approved in chat on 2026-10-03. This document supersedes the earlier Build Journal, Builder's Post, and Tribune mockup directions. It is a design specification, not a claim that the website or its content is complete.

## Purpose and audience

The portfolio is a small, readable newspaper about Kershey Tumbagahan and the things he builds. A recruiter, client, or collaborator should quickly learn who he is, inspect evidence of his work, understand his contribution, and find a working contact route. The publication should have personality through its editorial rhythm, Kershey's real portrait, and truthful writing. It should remain simple to navigate and comfortable to read.

## Visual authority

The two newspaper screenshots Kershey supplied on 2026-10-03 are the composition reference: a bordered paper, narrow contents rail, masthead band, lead headline beside a tall portrait, short article columns, thin rules, and smaller stories below. The real **The Tribune** masthead is the lettering reference only: sharp, dense blackletter forms. The publication's name is **The Kershey Record**. Nodra is one project in Work and Archive; it does not define the portfolio's theme.

Use a licensed blackletter typeface with a similar weight and rhythm for the masthead. Compare candidates visually with the Tribune reference before choosing one. The masthead is a modest newspaper title band, not a huge poster. Use a strong readable serif for headlines and body; use one quiet sans face for navigation. A small mono face may label genuine page numbers, dates, categories, and data. Avoid an exact copy of a newspaper logo, fake issue information, or type styling added only for decoration.

## Page system and rhythm

- Desktop has a fixed left contents column and a newspaper page on the right. The paper has a fine outside border and a restrained off-white surface; ink is near black and the only accent is deep red.
- Each section shares the same masthead, folio position, rules, margins, caption style, and contents navigation. Its article composition can change to suit the subject. A section should still look like a page from the same paper when motion is disabled.
- The reading rhythm is one clear lead, then one or two quieter supporting pieces. Paragraph columns are narrow enough to read; rules separate stories rather than framing every item as a card. The visible paper should feel occupied from masthead through the lower briefs, like Kershey's supplied front-page reference. Use compact article spacing and meaningful side stories to balance the sheet, while retaining enough space to scan. Do not stretch a short section to viewport height and leave a large blank lower half; let a shorter newspaper page end naturally instead of inventing filler.
- The masthead is the one notably large typographic element. As initial browser targets, keep it roughly 52–64px on a 1440px desktop and 32–40px on a 390px phone. The lead headline may reach roughly 44–52px on desktop, while section headlines stay closer to 28–36px. Body copy is roughly 15–17px on desktop and at least 16px on phones. Tune these against the actual font and copy, not the numbers alone.
- Use the first real studio portrait Kershey supplied, with glasses and a red top, as the front-page image. Keep its likeness authentic. A restrained grayscale or newsprint treatment may reveal the original color on hover or focus. Use genuine project images and captions; do not generate substitute screenshots or a new likeness.
- The copy must sound like a credible short newspaper feature. Specific project facts matter more than slogans. No fabricated awards, clients, quotes, outcomes, dates, or faux news metadata.

## Navigation and page jobs

| Section | Job | Distinct content |
| --- | --- | --- |
| 01 Index | Introduce Kershey and the publication in one front-page story. | Lead profile, one portrait, short story, Work and Field Notes teasers. |
| 02 Work | Let visitors judge the strongest projects. | One lead feature, smaller project stories, links to substantial case studies. |
| 03 About | Give professional depth after the introduction. | Background, current interests, verified tools and skills, resume, working approach. |
| 04 Archive | Let visitors scan everything quickly. | Compact project index; public GitHub contribution blocks and repository list at the end. |
| 05 Field Notes | Show Kershey's actual thinking and experiments. | Real short columns approved by him; no invented diary entries. |
| 06 Contact | Make the next step obvious. | Confirmed email and public professional links. |
| Back Page | Offer an optional coding word search. | A filled-letter grid, word list, shaded found words, no required account. |

The contents rail uses familiar section labels and page numbers. The Back Page link sits below the six main links. Directory links appear only when their destinations are confirmed. On phones, the rail becomes a compact, labelled Contents control, then the article reads in one normal scrolling column. All sections have direct URLs and browser back/forward support.

### Index: the front page

The approved visual structure is the supplied screenshot's front page: masthead at top, one lead headline and deck, two short article columns beneath, one tall portrait to the right, then unequal smaller stories at the bottom. **Building for the Web** remains a working lead headline; the article introduces Kershey as a web developer and BSIT student and describes his stated interests in frontend work, UI/UX, and automation. The lower pieces point to selected Work and one genuine Field Note. A small Back Page mention may appear in the issue directory, not as a third equal feature. The front page answers who Kershey is and where to go next; it does not list tools or retell project case studies.

### Work: feature stories

Give one verified project the lead-story treatment, with a real image, caption, project purpose, Kershey's personal role, and a clear link to a case study or public project. XillaFit is a provisional lead. Show School Voting System, Nodra, and Sodales Talents as smaller, unequal stories. Avoid four equal tiles. A complete case study explains context, problem, contribution, important interface decisions, evidence, and result or present status. Unknown facts are omitted. Do not assume that similarly named public repositories are the code for these projects.

### About: profile and qualifications

About begins where the Index stops. It covers verified education and background, practical capabilities, current interests, tools in context, and a resume link when available. Present it as a compact profile article with a small facts column, not a dashboard of skill cards or percentages. Use a distinct second real photo only if the supplied outdoor image can be cropped cleanly and reads well at the intended size; otherwise use a typographic profile. Do not repeat the front-page portrait at the same scale or restate its opening paragraphs.

### Archive: index and public code

Project names appear in a clean numbered index with a category, short factual descriptor, and direct destination where verified. The same project can occur in Work and Archive because the jobs differ: Work tells a story; Archive helps someone find it. Do not repeat Work's large image or article text. Beneath the project index, show the familiar GitHub contribution blocks with a clear time range and link to the live profile. Public repositories follow immediately below as compact text rows. These are real public data, visually integrated into the newspaper page with rules and captions, not a dashboard. A failed GitHub feed falls back to a profile link rather than an invented graph.

### Field Notes: columns

Use real, approved writing about UI experiments, motion, development discoveries, and decisions from actual projects. A note has a specific title, useful body, true date, and optional relevant image. The section can use two or three newspaper columns on desktop and one on phone. Draft concepts are labelled as drafts until Kershey approves the wording; no fabricated first-person quotes or dated posts.

### Contact: notice

A brief headline, one direct way to email Kershey, and verified GitHub, LinkedIn, and resume links are enough. A contact form appears only if it has working delivery and visible success/error feedback. No fake availability indicator or promised response time. The layout borrows the simplicity of a printed notice while remaining immediately usable.

### Back Page: code word search

Use a real 12×12 letter-filled word search with web terms, including HTML, CSS, JavaScript, React, API, grid, pixel, code, and link. Every listed word must be verifiably present. Visitors draw across letters with pointer or touch; the found line or cells shade deep red and the word is crossed off. Keyboard users can select start and end cells, and screen readers receive a usable alternative. Save progress locally. A hint and reset have real behavior in the built game. Keep it a small printed-paper diversion, with no timer, leaderboard, oversized cursor, or unrelated game styling.

## Interaction, accessibility, and mobile

The still page carries the design. Motion adds a short section reveal, a small active-rule movement, and restrained image or underline feedback. Normal scroll is never trapped. No literal page-turn animation. Sound is off by default, low-volume, optional, and easy to disable. Support reduced motion, keyboard navigation, visible focus, meaningful image text, sufficient contrast, and touch targets that work on a phone. Hover never reveals information that touch or keyboard visitors cannot reach.

## Source of truth and publication gates

Kershey's supplied brief and chat establish his name, role direction, preferred portrait, four selected project names, visual references, word-search idea, and desired GitHub section. Public GitHub data can support a current activity snapshot and repository list. Project contribution, outcomes, links, public email, LinkedIn, resume, and publishable note wording need verification before they appear as facts. Design mockup copy can demonstrate layout only when clearly marked as provisional.

## Acceptance checks before implementation is called complete

1. At 1440px and 390px, the Index recognizably follows the supplied newspaper composition, fills its paper with a lead and supporting stories without large unused areas, and remains readable without any motion. Shorter sections end at their content rather than exposing a mostly empty sheet.
2. The masthead reads **The Kershey Record**, uses Tribune-inspired blackletter lettering, and stays modest enough to let the lead story dominate.
3. Each section has a distinct information job and publication-like composition. Index/About and Work/Archive do not repeat their main text.
4. A busy reviewer reaches a project and a contact method in a few straightforward actions. The case study shows the actual contribution and evidence.
5. The Archive shows genuine contribution blocks and public repositories, with a clear live-profile fallback.
6. The word search is solvable with pointer, touch, and keyboard; all listed words exist in the grid.
7. The site uses real approved images and verified claims; sound and motion are optional and never block reading.

## Sequence after this spec is approved

Write a separate implementation plan. First establish the newspaper grid, type comparison, and Index on desktop and phone. Review those against the supplied reference before applying the system to Work, About, Archive, Field Notes, Contact, and the Back Page. Add real content and data, then quiet motion and sound. Do not use the rejected Tribune and Build Journal prototypes as visual authority.
