# AGENTS.md

## Important: Working with a Non-Technical User

The user is a non-technical person with no programming experience.
- Always explain what you are doing in simple, plain language
- Never ask the user to manually edit code or configuration files
- If something breaks, fix it yourself — do not ask the user to debug
- After each change, tell the user how to see the result (e.g., "open your browser")
- Prefer simple, working solutions over clever or complex ones
- When asking questions in planning mode, use non-technical language

## Project: Event Landing Page

### Goal

Build a single-page website (landing page) for event registration. Visitors see event information, program schedule, speakers, FAQ, and a registration form. This is a frontend-only project — no backend needed.

### Tech Stack

- React (Vite is already configured)
- CSS for styling (no Tailwind)
- No backend — form submission shows a local success message

### UI Theme Options

Before starting, the mentee picks ONE theme. Ask which they prefer:

- **Theme A — Tech Conference:** Dark hero section with gradient, neon accent colors (#00f5d4, #7b2ff7), modern tech vibe, dark backgrounds with light text
- **Theme B — Corporate Event:** EPAM-inspired blue (#39f), clean white sections, professional look, subtle gray accents
- **Theme C — Community Meetup:** Warm palette (#f97316 orange, #fbbf24 amber), friendly and approachable, light backgrounds, rounded corners

### Sections (6 total)

1. **Hero** — Event name, date, location, prominent "Register Now" button (scrolls to registration form)
2. **About** — 2-3 paragraphs describing the event, its goals and who it's for
3. **Program** — Schedule with times and session titles (4-5 items), displayed as a timeline or card list
4. **Speakers** — 3-4 speaker cards with placeholder avatar, name, title/company, short bio
5. **FAQ** — 4-5 collapsible questions with answers (accordion style, expand/collapse on click)
6. **Registration** — Form with fields: Full Name, Email, Company; submit button; success message after submission

### Behavior

- "Register Now" button in Hero smoothly scrolls to the Registration section
- FAQ items expand/collapse on click (only one open at a time, or multiple — either is fine)
- Registration form validates required fields and shows "You're registered!" message on submit
- Page is fully responsive (looks good on desktop and mobile)

### Layout

- Full-width sections, alternating backgrounds for visual rhythm
- Max content width 1200px, centered
- Mobile: single column, stacked layout

### Constraints

- No backend — everything runs in the browser
- App must start with `npm run dev`
- Use placeholder content (fictional event) if the user doesn't specify real content
- Keep code simple and readable
