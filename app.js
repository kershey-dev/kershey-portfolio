const SECTIONS = [
  ["index", "Index"],
  ["work", "Work"],
  ["about", "About"],
  ["archive", "Archive"],
  ["notes", "Field Notes"],
  ["contact", "Contact"],
];

const PROJECTS = [
  {
    name: "XillaFit",
    kind: "Lead story",
    imageLabel: "XillaFit project screenshot to be added",
    line: "Clothing customization and production management.",
    detail: "The public project description mentions interactive clothing previews, a design workflow, and order tracking.",
  },
  {
    name: "School Voting System",
    kind: "Project story",
    imageLabel: "School Voting System screenshot to be added",
    line: "Project details to be added.",
    detail: "The project story and Kershey’s role will be added when the final details and images are ready.",
  },
  {
    name: "Nodra",
    kind: "Project story",
    imageLabel: "Nodra project screenshot to be added",
    line: "Project details to be added.",
    detail: "The project story and Kershey’s role will be added when the final details and images are ready.",
  },
  {
    name: "Sodales Talents",
    kind: "Project story",
    imageLabel: "Sodales Talents screenshot to be added",
    line: "Project details to be added.",
    detail: "The project story and Kershey’s role will be added when the final details and images are ready.",
  },
];

const REPOSITORY_NAMES = ["mapty", "FBA", "xillafit-flutter", "racipay", "SentenceSmarat"];
const GITHUB_PROFILE = "https://github.com/kershey-dev";
const PUZZLE_WORDS = ["HTML", "CSS", "JAVASCRIPT", "REACT", "API", "GRID", "PIXEL", "CODE", "LINK", "BUG"];
const PUZZLE_STORAGE_KEY = "kershey-record-puzzle-progress-v1";
const SOUND_STORAGE_KEY = "kershey-record-sound";
const INTRO_MOTION_KEY = "kershey-record-intro-played";
const pageTitles = Object.fromEntries(SECTIONS);
const READING_ORDER = [...SECTIONS.map(([page]) => page), "puzzle"];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function currentPage() {
  const requested = new URLSearchParams(window.location.search).get("page") || "index";
  return requested === "puzzle" || pageTitles[requested] ? requested : "index";
}

function pageLink(page, label, className) {
  return "<a href='?page=" + page + "' data-page='" + page + "'" +
    (className ? " class='" + className + "'" : "") + ">" + label + "</a>";
}

function storyLink(page, label) {
  return pageLink(page, label + " <span aria-hidden='true'>→</span>", "story-link");
}

function externalLink(url, label, className) {
  return "<a href='" + escapeHtml(url) + "' target='_blank' rel='noopener noreferrer'" +
    (className ? " class='" + className + "'" : "") + ">" + label + " <span aria-hidden='true'>↗</span></a>";
}

function eyebrow(title, detail) {
  return "<div class='section-head'><span class='eyebrow'><strong>" + title + "</strong>" +
    (detail ? " / " + detail : "") + "</span></div>";
}

function byline(items) {
  return "<div class='byline'>" + items.map((item) => "<span>" + item + "</span>").join("") + "</div>";
}

function imagePlaceholder(label, className) {
  return "<div class='image-placeholder " + (className || "") + "' role='img' aria-label='" +
    escapeHtml(label) + "'><span>" + escapeHtml(label) + "</span></div>";
}

function indexPage() {
  return "<section class='lead' aria-labelledby='lead-title'>" +
    "<div class='lead-copy'>" +
      "<h1 class='lead-title' id='lead-title'>Building<br>for the Web<span class='red'>.</span></h1>" +
      "<p class='deck'>Frontend interfaces, thoughtful<br class='desktop-break'> interactions, useful digital systems.</p>" +
      "<div class='text-columns'>" +
        "<p>I’m Kershey Tumbagahan, a web developer and builder focused on clean interfaces, thoughtful interactions, and practical digital systems. I enjoy turning ideas into usable experiences on the web.</p>" +
        "<p>This space is a collection of my work, notes, and ongoing explorations — a way to document what I’m learning, share what I’m building, and connect the dots between design, code, and real-world problems.</p>" +
      "</div>" +
    "</div>" +
    "<figure class='lead-portrait'>" +
      "<div class='image-placeholder portrait-placeholder portrait-photo'>" +
      "<img class='portrait-image' src='assets/images/profile.jpg' alt='Kershey Tumbagahan'>" +
      "</div>" +
      "<figcaption class='caption'>Kershey Tumbagahan<span class='caption-note'>A continuing study in curiosity, craft, and better things on the web.</span></figcaption>" +
    "</figure>" +
  "</section>" +
  "<section class='front-briefs' aria-label='Inside this issue'>" +
    "<article><div class='section-label'>Selected work</div><h2>Useful things<br>for real people<span class='red'>.</span></h2>" +
      "<p>A small, curated selection of work across web interfaces and digital tools. Each project is an opportunity to solve a real problem and make the web a bit more helpful.</p>" +
      storyLink("work", "View my work") +
    "</article>" +
    "<article><div class='section-label'>Field notes</div><h2>Notes from<br>the process<span class='red'>.</span></h2>" +
      "<p>Thoughts on building for the web, learning in public, and the small details that make a big difference. The first notes are still being prepared.</p>" +
      storyLink("notes", "Read the notes") +
    "</article>" +
  "</section>";
}

function workFeature(project) {
  return "<article class='feature-main'>" +
    "<div class='section-label'>Featured project</div>" +
    "<h1>XillaFit<span class='red'>.</span></h1>" +
    "<p class='project-deck'>A platform for customizing clothing online.</p>" +
    "<figure>" + imagePlaceholder(project.imageLabel, "project-hero") +
      "<figcaption class='caption'>Website screenshot placeholder for XillaFit.</figcaption></figure>" +
    "<div class='feature-copy'>" +
      "<p>The public project description covers interactive clothing previews, a design workflow, and order tracking. Screens and details of Kershey’s contribution will be added here.</p>" +
      "<div class='project-facts'><div><span>Category</span><strong>Web platform</strong></div><div><span>Status</span><strong>Details forthcoming</strong></div>" +
      storyLink("archive", "View in archive") + "</div>" +
    "</div>" +
  "</article>";
}

function workSideStory(project) {
  return "<article class='work-side-story'><div class='section-label'>Selected work</div>" +
    "<h2>" + escapeHtml(project.name) + "<span class='red'>.</span></h2>" +
    "<p class='project-deck'>Project details to be added.</p>" +
    "<figure>" + imagePlaceholder(project.imageLabel, "side-preview") +
      "<figcaption class='caption'>Website screenshot placeholder for " + escapeHtml(project.name) + ".</figcaption></figure>" +
    "<p class='project-summary'>The project story, Kershey’s contribution, and the final images will appear here once they are confirmed.</p>" +
    "<div class='project-facts inline'><div><span>Category</span><strong>Project</strong></div><div><span>Status</span><strong>Details forthcoming</strong></div></div>" +
    storyLink("archive", "View in archive") +
  "</article>";
}

function workSmallStory(project) {
  return "<article class='work-small-story'><div class='section-label'>Selected work</div>" +
    "<h2>" + escapeHtml(project.name) + "<span class='red'>.</span></h2>" +
    "<div class='small-story-body'>" + imagePlaceholder(project.imageLabel, "small-preview") +
      "<p>The project story and Kershey’s role will be added with the final screenshots.</p></div>" +
    "<div class='project-facts inline'><div><span>Status</span><strong>Details forthcoming</strong></div></div>" +
    storyLink("archive", "View in archive") +
  "</article>";
}

function workPage() {
  return "<section class='work-top' aria-label='Featured and selected work'>" +
      workFeature(PROJECTS[0]) + workSideStory(PROJECTS[1]) +
    "</section>" +
    "<section class='work-bottom' aria-label='More selected work'>" +
      workSmallStory(PROJECTS[2]) + workSmallStory(PROJECTS[3]) +
    "</section>";
}

function aboutPage() {
  const tools = [
    ["HTML", "Structure for the web."],
    ["CSS", "Design and presentation."],
    ["JavaScript", "Interactive experiences."],
    ["React", "Component-based interfaces."],
    ["Git", "Version control."],
    ["Figma", "Design and prototyping."],
  ];
  return "<div class='section-label about-kicker'>Profile / About</div>" +
    "<h1 class='about-title'>The person behind the work<span class='red'>.</span></h1>" +
    "<p class='about-deck'>Kershey Tumbagahan is a web developer and builder focused on thoughtful interfaces and practical digital systems.</p>" +
    "<section class='about-columns' aria-label='Profile'>" +
      "<figure class='about-image'>" + imagePlaceholder("Portrait image to be added", "profile-portrait") +
        "<figcaption class='caption'>Portrait to be added.</figcaption></figure>" +
      "<article class='about-story'>" +
        "<p>I build for people — simple, useful web experiences that make complex things easier to understand and do. My work lives at the intersection of frontend development, interface design, and practical systems thinking.</p>" +
        "<p>I start by understanding the task and who will use the result. Then I make a clear structure, build a working version, and refine it with feedback until the details feel natural.</p>" +
      "</article>" +
      "<article class='about-approach'><h2>What guides the work</h2>" +
        "<p>Clear visuals, readable content, and thoughtful interactions shape how people think, work, and feel when using a website.</p>" +
        "<p>I’m interested in projects that combine clarity, usefulness, and a bit of creativity — from everyday workflows to interfaces that help people stay informed and connected.</p>" +
      "</article>" +
      "<aside class='about-facts' aria-label='At a glance'>" +
        "<div><h2>Based in</h2><p>Philippines</p></div>" +
        "<div><h2>Focus</h2><p>Frontend development</p></div>" +
        "<div><h2>Interest</h2><p>Interfaces and interactions</p></div>" +
      "</aside>" +
    "</section>" +
    "<section class='about-tools' aria-label='Tools of the trade'>" +
      "<div class='about-tools-label'><h2>Tools of the trade</h2><span>Technology directory</span></div>" +
      "<ul>" + tools.map((tool) => "<li><strong>" + tool[0] + "</strong><span>" + tool[1] + "</span></li>").join("") + "</ul>" +
    "</section>";
}

function archiveProject(project, index) {
  return "<article class='archive-project'>" +
    imagePlaceholder(project.imageLabel, "archive-preview") +
    "<div><div class='section-label'>" + String(index + 1).padStart(3, "0") + " / Featured project</div>" +
      "<h3>" + escapeHtml(project.name) + "</h3>" +
      "<a class='story-link' href='?page=work' data-page='work'>Read story <span aria-hidden='true'>→</span></a>" +
    "</div></article>";
}

function archivePage() {
  return eyebrow("Archive", "The full record") +
    "<h1 class='page-title'>Projects &amp; other work.</h1>" +
    "<section aria-labelledby='featured-heading'>" +
      "<div class='section-head'><h2 id='featured-heading' class='eyebrow'><strong>Featured stories</strong></h2><span class='section-meta'>Selected project work</span></div>" +
      "<div class='project-index'>" + PROJECTS.map(archiveProject).join("") + "</div>" +
    "</section>" +
    "<section class='github-record' aria-labelledby='github-heading'>" +
      "<hr class='double-rule'>" +
      "<div class='section-head'><h2 id='github-heading' class='eyebrow'><strong>From GitHub</strong> / Smaller public work</h2>" +
        externalLink(GITHUB_PROFILE, "Visit the profile", "story-link") + "</div>" +
      "<div class='repo-state' id='repo-state' role='status'>Looking up public repositories…</div>" +
      "<div class='repo-list' id='repo-list' aria-label='Public repositories'></div>" +
      "<div class='contribution-header'><h3>Public contributions / last year</h3>" +
        externalLink(GITHUB_PROFILE + "?tab=overview", "See GitHub activity") + "</div>" +
      "<div class='contribution-wrap'><div class='contribution-calendar' id='contribution-calendar' aria-label='GitHub contributions over the last year'></div></div>" +
      "<p class='repo-state' id='activity-state' role='status'>Loading the public activity record…</p>" +
    "</section>";
}

function notesPage() {
  return eyebrow("Field Notes", "From the working desk") +
    "<section class='notes-explainer'>" +
      "<div><div class='section-label'>A column for the process</div><h1>From the notebook.</h1>" +
        "<p>Field Notes will collect short, first-person pieces about real experiments, decisions, and lessons from building.</p></div>" +
      "<aside class='notes-purpose'><div class='section-label'>Why read it?</div>" +
        "<p>Project pages show what was made. These notes will show how I think through the small choices along the way.</p></aside>" +
    "</section>" +
    "<section class='notebook-empty' aria-labelledby='notebook-empty-title'>" +
      "<div><div class='section-label'>Notebook / Issue 01</div><h2 id='notebook-empty-title'>No notes published yet.</h2></div>" +
      "<p>I’ll add a column when there is a real process or experiment worth sharing. For now, the project stories and the Back Page puzzle are ready to explore.</p>" +
    "</section>" +
    "<div class='byline continuation-label'><span>Continue reading</span></div>" +
    storyLink("work", "Project stories") + " &nbsp; " + storyLink("puzzle", "Back Page word search");
}

function contactPage() {
  return eyebrow("Contact", "Correspondence") +
    "<h1 class='page-title'>Let’s talk about the work.</h1>" +
    "<p class='page-intro'>Have a project, role, or question? Send a note with a little context.</p>" +
    "<section class='contact-feature'>" +
      "<section><div class='section-label'>Write directly</div><h2>Contact Kershey.</h2>" +
        "<span class='email-placeholder'>Email address to be added</span>" +
        "<p>The public email address will be linked here once it is chosen. For now, GitHub is the confirmed way to reach me.</p>" +
        externalLink(GITHUB_PROFILE, "Open GitHub profile", "story-link") +
      "</section>" +
      "<section><div class='section-label'>Professional directory</div>" +
        "<div class='directory-row'><span>GitHub</span><span>Public profile</span></div>" +
        "<div class='directory-row'><span>LinkedIn</span><span>Link to be added</span></div>" +
        "<div class='directory-row'><span>Resume</span><span>File to be added</span></div>" +
      "</section>" +
    "</section>" +
    "<section class='correspondence'><h2>Before you write</h2>" +
      "<div class='correspondence-columns'>" +
        "<p><strong>01 / The idea</strong><br>What are you hoping to make or improve?</p>" +
        "<p><strong>02 / The context</strong><br>Who will use it, and what matters most?</p>" +
        "<p><strong>03 / The timing</strong><br>When would you like to begin?</p>" +
      "</div>" +
    "</section>" +
    "<hr class='double-rule'>" +
    "<div class='byline'><span>To review the work</span></div>" +
    storyLink("work", "Read selected projects") + " &nbsp; " + storyLink("archive", "Browse the complete index");
}

function puzzlePage() {
  return eyebrow("Back page", "Word search") +
    "<section class='puzzle-intro'>" +
      "<div><div class='section-label'>A short break / The word search</div><h1>Find the code.</h1>" +
        "<p>Ten words from the tools and ideas behind the work. Drag across the letters, or use the arrow keys and Enter.</p></div>" +
      "<div><div class='section-label'>A small web primer</div>" +
        "<p>HTML gives a page its structure. CSS shapes its appearance. JavaScript lets a page respond to what people do.</p></div>" +
    "</section>" +
    "<section class='puzzle-layout' aria-label='Code word search and newspaper notes'>" +
      "<div class='puzzle-game'>" +
        "<div class='section-label'>The letter grid / 12 × 12</div>" +
        "<div class='puzzle-grid' id='puzzle-grid' role='grid' aria-label='Code word search letter grid'></div>" +
        "<ul class='word-bank' id='word-bank' aria-label='Words to find'></ul>" +
        "<div class='puzzle-controls'><button id='puzzle-hint' type='button'>Give me a hint</button><button id='puzzle-reset' type='button'>Reset puzzle</button></div>" +
        "<p class='puzzle-status' id='puzzle-status' role='status' aria-live='polite'></p>" +
      "</div>" +
      "<aside class='trivia-column'><div class='section-label'>A few things you may know</div><h2>The tools speak different parts of the page.</h2>" +
        "<article class='trivia-item'><h3>HTML / Structure</h3><p>Headings, paragraphs, links, and images give a web page its shape.</p></article>" +
        "<article class='trivia-item'><h3>CSS / Appearance</h3><p>Styles set the type, color, spacing, and layout a reader sees.</p></article>" +
        "<article class='trivia-item'><h3>JavaScript / Response</h3><p>Scripts can react to a click, a key press, or a form submission.</p></article>" +
        "<article class='trivia-item'><h3>One for the Record</h3><p>This portfolio borrows the reading order of a newspaper: headline, story, image, caption, and the next page.</p></article>" +
      "</aside>" +
    "</section>";
}

const PAGE_RENDERERS = {
  index: indexPage,
  work: workPage,
  about: aboutPage,
  archive: archivePage,
  notes: notesPage,
  contact: contactPage,
  puzzle: puzzlePage,
};

function navigationMarkup() {
  const current = currentPage();
  return "<div class='rail-topline'>" +
      "<div><div class='rail-name'>KERSHEY<br>TUMBAGAHAN</div><div class='rail-role'>Web developer<br>&amp; builder</div></div>" +
      "<button class='mobile-menu' id='mobile-menu' type='button' aria-expanded='false' aria-controls='main-nav'>" +
        "<span>Contents</span><span aria-hidden='true'>☰</span></button>" +
    "</div>" +
    "<hr class='rail-rule'>" +
    "<div class='rail-label'>Contents</div>" +
    "<nav class='contents-nav' id='main-nav' aria-label='Contents'>" +
      SECTIONS.map((section, index) =>
        "<a href='?page=" + section[0] + "' data-page='" + section[0] + "'" +
          (current === section[0] ? " aria-current='page'" : "") + "><span class='nav-number'>" +
          String(index + 1).padStart(2, "0") + "</span><span>" + section[1] + "</span></a>"
      ).join("") +
    "</nav>" +
    "<div class='directory'><div class='rail-label'>Directory</div>" +
      "<a href='" + GITHUB_PROFILE + "' target='_blank' rel='noopener noreferrer'>GitHub</a>" +
      "<span class='directory-pending' aria-label='LinkedIn link to be added'>LinkedIn</span>" +
      "<span class='directory-pending' aria-label='Resume link to be added'>Resume</span>" +
      "<span class='directory-pending' aria-label='Email address to be added'>Email</span></div>" +
    "<div class='rail-bottom'><button class='sound-toggle' id='sound-toggle' type='button' aria-pressed='false'>" +
      "<span>Sound</span><span class='sound-state'>Off</span></button></div>";
}

function mountShell() {
  document.getElementById("app").innerHTML =
    "<div class='sheet'>" +
      "<div class='paper-art' aria-hidden='true'>" +
        "<span class='paper-art__sides'></span><span class='paper-art__top'></span><span class='paper-art__bottom'></span>" +
      "</div>" +
      "<aside class='rail' aria-label='Portfolio contents'>" + navigationMarkup() + "</aside>" +
      "<main class='paper'>" +
        "<div class='publication-header'><span class='header-place'>Philippines <b>/</b> Portfolio</span>" +
          "<header class='masthead'>The Kershey Record</header>" +
          "<span class='header-topics'><span>Ideas</span><span>Systems</span><span>Interfaces</span><span>People</span></span></div>" +
        "<div class='edition-line'><span>A personal publication on the craft of a more useful web</span>" +
          "<span><strong id='edition-page'>Front page</strong><i aria-hidden='true'></i>Portfolio</span></div>" +
        "<div class='page-content' id='page-content' tabindex='-1'></div>" +
        "<footer class='page-footer'><span>Kershey Tumbagahan / Web developer &amp; builder</span>" +
          "<span><a href='?page=index' data-page='index'>Back to the front page ↑</a></span></footer>" +
      "</main>" +
    "</div>";
}

function animatePaper(className) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const sheet = document.querySelector(".sheet");
  if (!sheet) return;
  sheet.classList.remove("is-arriving", "is-page-settling");
  void sheet.offsetWidth;
  sheet.classList.add(className);
  sheet.addEventListener("animationend", () => sheet.classList.remove(className), { once: true });
}

function waitForNewspaperAssets() {
  const decodeImage = (image) => image.decode ? image.decode().catch(() => {}) : Promise.resolve();
  const imagePromises = Array.from(document.images, (image) => {
    if (image.complete) return decodeImage(image);
    return new Promise((resolve) => {
      image.addEventListener("load", () => decodeImage(image).then(resolve), { once: true });
      image.addEventListener("error", resolve, { once: true });
    });
  });
  const paperUrls = new Set();
  document.querySelectorAll(".paper-art span").forEach((element) => {
    const background = getComputedStyle(element).backgroundImage;
    for (const match of background.matchAll(/url\([\"']?([^\"')]+)[\"']?\)/g)) paperUrls.add(match[1]);
  });
  const paperPromises = Array.from(paperUrls, (url) => new Promise((resolve) => {
    const image = new Image();
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      decodeImage(image).then(resolve);
    };
    image.addEventListener("load", finish, { once: true });
    image.addEventListener("error", () => {
      if (!settled) {
        settled = true;
        resolve();
      }
    }, { once: true });
    image.src = url;
    if (image.complete) finish();
  }));
  return Promise.allSettled([document.fonts.ready, ...imagePromises, ...paperPromises]);
}

function playIntroIfNeeded() {
  let alreadyPlayed = false;
  try {
    alreadyPlayed = window.sessionStorage.getItem(INTRO_MOTION_KEY) === "played";
    if (!alreadyPlayed) window.sessionStorage.setItem(INTRO_MOTION_KEY, "played");
  } catch {
    // The entrance still runs once for this page load when storage is unavailable.
  }
  if (!alreadyPlayed && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const openingPage = currentPage();
    waitForNewspaperAssets().then(() => {
      if (lastRenderedPage === openingPage) animatePaper("is-arriving");
    });
  }
}

let lastRenderedPage = null;

function renderPage() {
  const page = currentPage();
  const pageChanged = lastRenderedPage !== null && lastRenderedPage !== page;
  if (page !== "puzzle" && puzzleAbortController) puzzleAbortController.abort();
  document.title = (page === "puzzle" ? "Back Page" : pageTitles[page]) + " — The Kershey Record";
  document.querySelector(".sheet").dataset.page = page;
  document.getElementById("edition-page").textContent = page === "index" ? "Front page" : page === "puzzle" ? "Back page" : pageTitles[page];
  document.getElementById("page-content").innerHTML = PAGE_RENDERERS[page]();

  document.querySelectorAll(".contents-nav a[data-page], .back-page-link a[data-page]").forEach((link) => {
    if (link.dataset.page === page) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  const menu = document.getElementById("main-nav");
  const menuButton = document.getElementById("mobile-menu");
  if (menu) menu.classList.remove("is-open");
  if (menuButton) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.querySelector("span").textContent = "Contents / " + (page === "puzzle" ? "Back Page" : pageTitles[page]);
  }

  if (page === "archive") loadArchiveData();
  if (page === "puzzle") mountPuzzle();

  if (lastRenderedPage === null) playIntroIfNeeded();
  else if (pageChanged) {
    animatePaper("is-page-settling");
    playTick("page");
  }
  lastRenderedPage = page;
}

function navigate(page) {
  if (!PAGE_RENDERERS[page]) return;
  const target = page === "index" ? window.location.pathname : "?page=" + encodeURIComponent(page);
  const existingPage = (new URL(window.location.href)).searchParams.get("page") || "index";
  if (existingPage !== page) {
    window.history.pushState({ page }, "", target);
  }
  renderPage();
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  window.scrollTo({ top: 0, behavior });
}

function deterministicRandom(seed) {
  let state = seed >>> 0;
  return function random() {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function createPuzzle() {
  const size = 12;
  const grid = Array.from({ length: size }, () => Array(size).fill(""));
  const placed = {};
  const random = deterministicRandom(64291);
  const directions = [
    [0, 1, "across"], [1, 0, "down"], [1, 1, "diagonal"], [1, -1, "diagonal"],
    [0, -1, "backwards"], [-1, 0, "up"], [-1, -1, "diagonal"], [-1, 1, "diagonal"],
  ];

  PUZZLE_WORDS.slice().sort((a, b) => b.length - a.length).forEach((word) => {
    let success = false;
    for (let attempt = 0; attempt < 8000 && !success; attempt += 1) {
      const direction = directions[Math.floor(random() * directions.length)];
      const row = Math.floor(random() * size);
      const column = Math.floor(random() * size);
      const cells = Array.from({ length: word.length }, (_, index) => [
        row + direction[0] * index,
        column + direction[1] * index,
      ]);
      const fits = cells.every(([r, c], index) =>
        r >= 0 && r < size && c >= 0 && c < size && (!grid[r][c] || grid[r][c] === word[index])
      );
      if (!fits) continue;
      cells.forEach(([r, c], index) => { grid[r][c] = word[index]; });
      placed[word] = { cells, direction: direction[2] };
      success = true;
    }
    if (!success) throw new Error("Could not place puzzle word: " + word);
  });

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  grid.forEach((row) => row.forEach((letter, column) => {
    if (!letter) row[column] = alphabet[Math.floor(random() * alphabet.length)];
  }));
  return { size, grid, placed };
}

const puzzle = createPuzzle();

function readPuzzleProgress() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(PUZZLE_STORAGE_KEY) || "[]");
    return new Set(saved.filter((word) => PUZZLE_WORDS.includes(word)));
  } catch {
    return new Set();
  }
}

let foundWords = readPuzzleProgress();
let activeSound = (() => {
  try {
    return window.localStorage.getItem(SOUND_STORAGE_KEY) !== "off";
  } catch {
    return true;
  }
})();
let audioContext = null;
let audioUnlockPromise = null;
let audioUnlocked = false;
let puzzleAbortController = null;
let lastHoverSoundAt = 0;
let wheelGestureActive = false;
let wheelGestureCanTurnPage = false;
let wheelGestureTurnedPage = false;
let wheelGestureTimer = 0;

function unlockAudio() {
  if (!activeSound) return Promise.resolve(false);
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return Promise.resolve(false);
    if (!audioContext) audioContext = new AudioContextClass();
    if (audioContext.state === "running") {
      audioUnlocked = true;
      return Promise.resolve(true);
    }
    if (!audioUnlockPromise) {
      audioUnlockPromise = audioContext.resume()
        .then(() => {
          audioUnlocked = audioContext.state === "running";
          return audioUnlocked;
        })
        .catch(() => false)
        .finally(() => {
          audioUnlockPromise = null;
        });
    }
    return audioUnlockPromise;
  } catch {
    // Browsers without an available audio context can still use the page.
    return Promise.resolve(false);
  }
}

function emitTick(kind) {
  if (!activeSound || !audioContext || !audioUnlocked || audioContext.state !== "running") return;
  try {
    const isHover = kind === "hover";
    const now = audioContext.currentTime;
    const duration = isHover ? 0.02 : 0.085;
    const frameCount = Math.max(1, Math.floor(audioContext.sampleRate * duration));
    const buffer = audioContext.createBuffer(1, frameCount, audioContext.sampleRate);
    const noise = buffer.getChannelData(0);
    for (let index = 0; index < frameCount; index += 1) {
      noise[index] = (Math.random() * 2 - 1) * (1 - index / frameCount);
    }

    const source = audioContext.createBufferSource();
    const filter = audioContext.createBiquadFilter();
    const gain = audioContext.createGain();
    source.buffer = buffer;
    filter.type = isHover ? "highpass" : "lowpass";
    filter.frequency.setValueAtTime(isHover ? 1900 : 850, now);
    filter.Q.setValueAtTime(0.7, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(isHover ? 0.16 : 0.2, now + 0.001);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(audioContext.destination);
    source.start(now);
    source.stop(now + duration);

    if (!isHover) {
      const oscillator = audioContext.createOscillator();
      const bodyGain = audioContext.createGain();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(260, now);
      oscillator.frequency.exponentialRampToValueAtTime(135, now + 0.075);
      bodyGain.gain.setValueAtTime(0.0001, now);
      bodyGain.gain.exponentialRampToValueAtTime(0.07, now + 0.002);
      bodyGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      oscillator.connect(bodyGain);
      bodyGain.connect(audioContext.destination);
      oscillator.start(now);
      oscillator.stop(now + 0.085);
    }
  } catch {
    // Sound is optional; browsers without Web Audio can still use the page.
  }
}

function playTick(kind = "page") {
  if (!activeSound) return;
  if (kind === "hover") {
    // Hover never creates or resumes an audio context; a real user gesture must unlock it first.
    if (audioUnlocked && audioContext && audioContext.state === "running") emitTick(kind);
    return;
  }
  if (audioUnlocked && audioContext && audioContext.state === "running") {
    emitTick(kind);
    return;
  }
  unlockAudio().then((ready) => {
    if (ready && activeSound) emitTick(kind);
  });
}

function paintFoundWords() {
  const foundCells = new Set();
  foundWords.forEach((word) => puzzle.placed[word].cells.forEach(([row, column]) => {
    foundCells.add(row + "," + column);
  }));
  document.querySelectorAll(".puzzle-letter").forEach((cell) => {
    const key = cell.dataset.row + "," + cell.dataset.column;
    cell.classList.toggle("is-found", foundCells.has(key));
  });
  document.querySelectorAll("#word-bank li").forEach((item) => {
    item.classList.toggle("is-found", foundWords.has(item.dataset.word));
  });
}

function mountPuzzle() {
  const gridElement = document.getElementById("puzzle-grid");
  const wordBank = document.getElementById("word-bank");
  const status = document.getElementById("puzzle-status");
  if (!gridElement || !wordBank || !status) return;
  if (puzzleAbortController) puzzleAbortController.abort();
  puzzleAbortController = new AbortController();
  const { signal } = puzzleAbortController;

  gridElement.innerHTML = puzzle.grid.map((row, rowIndex) =>
    row.map((letter, columnIndex) =>
      "<button class='puzzle-letter' type='button' role='gridcell' tabindex='" +
      (rowIndex === 0 && columnIndex === 0 ? "0" : "-1") + "' data-row='" + rowIndex +
      "' data-column='" + columnIndex + "' aria-label='Row " + (rowIndex + 1) + ", column " +
      (columnIndex + 1) + ", " + letter + "'>" + letter + "</button>"
    ).join("")
  ).join("");
  wordBank.innerHTML = PUZZLE_WORDS.map((word) =>
    "<li data-word='" + word + "'>" + word + "</li>"
  ).join("");
  paintFoundWords();
  updatePuzzleStatus(foundWords.size + " of " + PUZZLE_WORDS.length + " words found.");

  let dragStart = null;
  let dragActive = false;
  let keyboardStart = null;
  let clickWasPointer = false;

  function getCell(row, column) {
    return gridElement.querySelector("[data-row='" + row + "'][data-column='" + column + "']");
  }

  function clearPreview() {
    gridElement.querySelectorAll(".is-preview").forEach((cell) => cell.classList.remove("is-preview"));
  }

  function lineBetween(first, last) {
    const startRow = Number(first.dataset.row);
    const startColumn = Number(first.dataset.column);
    const endRow = Number(last.dataset.row);
    const endColumn = Number(last.dataset.column);
    const rowDifference = endRow - startRow;
    const columnDifference = endColumn - startColumn;
    if (rowDifference !== 0 && columnDifference !== 0 && Math.abs(rowDifference) !== Math.abs(columnDifference)) return [];
    const steps = Math.max(Math.abs(rowDifference), Math.abs(columnDifference));
    if (steps === 0) return [first];
    const rowStep = Math.sign(rowDifference);
    const columnStep = Math.sign(columnDifference);
    return Array.from({ length: steps + 1 }, (_, index) =>
      getCell(startRow + rowStep * index, startColumn + columnStep * index)
    ).filter(Boolean);
  }

  function showPreview(last) {
    clearPreview();
    if (!dragStart || !last) return;
    lineBetween(dragStart, last).forEach((cell) => cell.classList.add("is-preview"));
  }

  function updatePuzzleStatus(message) {
    status.textContent = message;
  }

  function focusPuzzleCell(cell) {
    gridElement.querySelectorAll(".puzzle-letter[tabindex='0']").forEach((item) => {
      item.tabIndex = -1;
    });
    cell.tabIndex = 0;
    cell.focus({ preventScroll: true });
  }

  function checkLine(first, last) {
    const cells = lineBetween(first, last);
    if (!cells.length) {
      updatePuzzleStatus("Choose a straight line across, down, or diagonally.");
      return;
    }
    const word = cells.map((cell) => cell.textContent).join("");
    const reversed = word.split("").reverse().join("");
    const match = PUZZLE_WORDS.find((candidate) => candidate === word || candidate === reversed);
    if (!match) {
      updatePuzzleStatus("No word there yet. Try another line.");
      return;
    }
    if (foundWords.has(match)) {
      updatePuzzleStatus(match + " is already marked.");
      return;
    }
    foundWords.add(match);
    try {
      window.localStorage.setItem(PUZZLE_STORAGE_KEY, JSON.stringify(Array.from(foundWords)));
    } catch {
      // The puzzle remains playable when local storage is unavailable.
    }
    paintFoundWords();
    updatePuzzleStatus(match + " found. " + foundWords.size + " of " + PUZZLE_WORDS.length + " words found.");
    if (foundWords.size === PUZZLE_WORDS.length) {
      updatePuzzleStatus("All ten words found. The edition is complete.");
    }
  }

  gridElement.addEventListener("pointerdown", (event) => {
    const cell = event.target.closest(".puzzle-letter");
    if (!cell || event.button > 0) return;
    event.preventDefault();
    dragStart = cell;
    dragActive = true;
    clickWasPointer = true;
    focusPuzzleCell(cell);
    showPreview(cell);
  }, { signal });

  document.addEventListener("pointermove", (event) => {
    if (!dragActive) return;
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const cell = target && target.closest ? target.closest(".puzzle-letter") : null;
    if (cell && gridElement.contains(cell)) showPreview(cell);
  }, { signal });

  document.addEventListener("pointerup", (event) => {
    if (!dragActive) return;
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const cell = target && target.closest ? target.closest(".puzzle-letter") : null;
    dragActive = false;
    clearPreview();
    if (cell && gridElement.contains(cell)) checkLine(dragStart, cell);
    dragStart = null;
    window.setTimeout(() => { clickWasPointer = false; }, 0);
  }, { signal });

  document.addEventListener("pointercancel", () => {
    dragActive = false;
    dragStart = null;
    clearPreview();
  }, { signal });

  gridElement.addEventListener("keydown", (event) => {
    const cell = event.target.closest(".puzzle-letter");
    if (!cell) return;
    const row = Number(cell.dataset.row);
    const column = Number(cell.dataset.column);
    const moves = {
      ArrowUp: [row - 1, column],
      ArrowDown: [row + 1, column],
      ArrowLeft: [row, column - 1],
      ArrowRight: [row, column + 1],
    };
    if (moves[event.key]) {
      event.preventDefault();
      const [nextRow, nextColumn] = moves[event.key];
      const next = getCell(nextRow, nextColumn);
      if (next) {
        cell.tabIndex = -1;
        next.tabIndex = 0;
        next.focus();
      }
    } else if (event.key === "Escape") {
      keyboardStart = null;
      clearPreview();
      updatePuzzleStatus("Selection cleared.");
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!keyboardStart) {
        keyboardStart = cell;
        updatePuzzleStatus("Start selected. Move to the last letter and press Enter.");
      } else {
        checkLine(keyboardStart, cell);
        keyboardStart = null;
      }
    }
  }, { signal });

  gridElement.addEventListener("click", (event) => {
    if (clickWasPointer || event.detail !== 0) return;
    const cell = event.target.closest(".puzzle-letter");
    if (!cell) return;
    if (!keyboardStart) {
      keyboardStart = cell;
      updatePuzzleStatus("Start selected. Move to the last letter and press Enter.");
    } else {
      checkLine(keyboardStart, cell);
      keyboardStart = null;
    }
  }, { signal });

  document.getElementById("puzzle-hint").addEventListener("click", () => {
    const next = PUZZLE_WORDS.find((word) => !foundWords.has(word));
    if (!next) {
      updatePuzzleStatus("You found every word.");
      return;
    }
    updatePuzzleStatus("Hint: " + next + " runs " + puzzle.placed[next].direction + ".");
  }, { signal });

  document.getElementById("puzzle-reset").addEventListener("click", () => {
    foundWords = new Set();
    try {
      window.localStorage.removeItem(PUZZLE_STORAGE_KEY);
    } catch {
      // Reset still clears this visit's progress if storage is unavailable.
    }
    paintFoundWords();
    keyboardStart = null;
    updatePuzzleStatus("Puzzle reset. " + PUZZLE_WORDS.length + " words to find.");
  }, { signal });
}

function loadArchiveData() {
  loadRepositories();
  loadContributions();
}

async function loadRepositories() {
  const state = document.getElementById("repo-state");
  const list = document.getElementById("repo-list");
  if (!state || !list || list.dataset.loaded === "true") return;
  list.dataset.loaded = "true";
  const fallback = REPOSITORY_NAMES.map((name) => ({
    name,
    html_url: GITHUB_PROFILE + "/" + encodeURIComponent(name),
    language: "",
  }));
  try {
    const response = await fetch("https://api.github.com/users/kershey-dev/repos?per_page=100&sort=updated", {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!response.ok) throw new Error("GitHub response " + response.status);
    const repositories = await response.json();
    const byName = new Map(repositories.map((repo) => [repo.name.toLowerCase(), repo]));
    const rows = REPOSITORY_NAMES.map((name) => byName.get(name.toLowerCase()) || fallback.find((repo) => repo.name === name));
    list.innerHTML = rows.map((repo) =>
      "<div class='repo-entry'>" +
        "<a href='" + escapeHtml(repo.html_url || GITHUB_PROFILE) + "' target='_blank' rel='noopener noreferrer'>" +
          escapeHtml(repo.name) + " <span aria-hidden='true'>↗</span></a>" +
        "<span class='repo-language'>" + escapeHtml(repo.language || "Public repository") + "</span></div>"
    ).join("");
    state.textContent = "Public repositories / refreshed from GitHub.";
  } catch {
    list.innerHTML = fallback.map((repo) =>
      "<div class='repo-entry'><a href='" + GITHUB_PROFILE + "/" + encodeURIComponent(repo.name) + "' target='_blank' rel='noopener noreferrer'>" +
        escapeHtml(repo.name) + " <span aria-hidden='true'>↗</span></a><span class='repo-language'>GitHub</span></div>"
    ).join("");
    state.textContent = "Showing public repository links. GitHub details will refresh when available.";
  }
}

async function loadContributions() {
  const calendar = document.getElementById("contribution-calendar");
  const state = document.getElementById("activity-state");
  if (!calendar || !state || calendar.dataset.loaded === "true") return;
  calendar.dataset.loaded = "true";
  try {
    const response = await fetch("https://github-contributions-api.jogruber.de/v4/kershey-dev?y=last");
    if (!response.ok) throw new Error("Activity response " + response.status);
    const data = await response.json();
    if (!Array.isArray(data.contributions) || !data.contributions.length) throw new Error("No contribution data");
    calendar.innerHTML = data.contributions.map((day) =>
      "<span class='contribution-cell' data-level='" + Math.min(4, Number(day.level) || 0) +
      "' title='" + escapeHtml(day.date) + ": " + Number(day.count || 0) + " contributions' aria-hidden='true'></span>"
    ).join("");
    calendar.setAttribute("aria-label", "GitHub contribution activity from " +
      data.contributions[0].date + " through " + data.contributions[data.contributions.length - 1].date);
    state.textContent = (data.total && data.total.lastYear !== undefined ? data.total.lastYear + " public contributions in the last year." : "Public activity for the last year.");
  } catch {
    calendar.remove();
    state.innerHTML = "The activity calendar is unavailable. " + externalLink(GITHUB_PROFILE + "?tab=overview", "View GitHub activity");
  }
}

function bindShell() {
  const atPageBottom = () => window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 3;

  window.addEventListener("wheel", (event) => {
    if (window.matchMedia("(max-width: 720px)").matches) return;

    if (!wheelGestureActive) {
      wheelGestureActive = true;
      wheelGestureCanTurnPage = atPageBottom();
      wheelGestureTurnedPage = false;
    }

    window.clearTimeout(wheelGestureTimer);
    wheelGestureTimer = window.setTimeout(() => {
      wheelGestureActive = false;
      wheelGestureCanTurnPage = false;
      wheelGestureTurnedPage = false;
    }, 460);

    if (event.deltaY <= 0 || event.ctrlKey || !wheelGestureCanTurnPage || wheelGestureTurnedPage) return;
    const nextPage = READING_ORDER[READING_ORDER.indexOf(currentPage()) + 1];
    if (!nextPage) return;
    event.preventDefault();
    wheelGestureTurnedPage = true;
    navigate(nextPage);
  }, { passive: false });

  ["pointerdown", "keydown", "click", "wheel", "touchstart"].forEach((type) => {
    document.addEventListener(type, unlockAudio, { passive: type === "wheel" || type === "touchstart" });
  });

  document.getElementById("app").addEventListener("pointerover", (event) => {
    if (event.pointerType !== "mouse") return;
    if (!(event.target instanceof Element)) return;
    const target = event.target.closest("a, button");
    if (!target || target.closest(".puzzle-grid") || target.disabled || target.getAttribute("aria-disabled") === "true") return;
    if (target.contains(event.relatedTarget)) return;
    const now = performance.now();
    if (now - lastHoverSoundAt < 120) return;
    lastHoverSoundAt = now;
    playTick("hover");
  });

  document.getElementById("mobile-menu").addEventListener("click", (event) => {
    const button = event.currentTarget;
    const nav = document.getElementById("main-nav");
    const open = nav.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(open));
  });

  document.getElementById("sound-toggle").addEventListener("click", (event) => {
    activeSound = !activeSound;
    const button = event.currentTarget;
    button.setAttribute("aria-pressed", String(activeSound));
    button.querySelector(".sound-state").textContent = activeSound ? "On" : "Off";
    try {
      window.localStorage.setItem(SOUND_STORAGE_KEY, activeSound ? "on" : "off");
    } catch {
      // Sound can still be toggled for this page.
    }
    playTick();
  });

  document.getElementById("app").addEventListener("click", (event) => {
    const link = event.target.closest("a[data-page]");
    if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const page = link.dataset.page;
    navigate(page);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const nav = document.getElementById("main-nav");
    const button = document.getElementById("mobile-menu");
    if (!nav || !button || !nav.classList.contains("is-open")) return;
    nav.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
    button.focus();
  });
}

mountShell();
bindShell();
renderPage();
document.getElementById("sound-toggle").setAttribute("aria-pressed", String(activeSound));
document.querySelector("#sound-toggle .sound-state").textContent = activeSound ? "On" : "Off";
window.addEventListener("popstate", renderPage);
