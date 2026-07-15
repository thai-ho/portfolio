# AGENTS.md

This file applies to the entire repository.

## Project shape

- The active portfolio is the Vue 3 application under `v1/`.
- Keep reusable UI in `v1/src/components/` and global styles and assets in
  `v1/src/assets/`.
- Routes belong in `v1/src/router/index.js`; avoid adding routing logic directly
  to components.
- The app currently uses Vue Router with `/` mapped to `Home.vue` and
  `/all-projects` mapped to `AllProjects.vue`.
- `Home.vue` is the main portfolio composition and currently renders the avatar
  header plus `Intro`, `Experience`, `Projects`, and `Links` sections.
- Global app styling lives in `v1/src/assets/main.css`; the visual baseline is a
  narrow centered black-and-white portfolio with Tailwind utility classes.
- Existing scroll helpers in `main.css` (`.scroll-container` and
  `.scroll-section`) are intended for full-screen page-by-page scrolling.

## Working rules

- Preserve the existing visual language unless a redesign is explicitly requested.
- Prefer small, focused Vue components over expanding an already unrelated component.
- Keep content changes factual and do not invent employment, project, or contact details.
- Do not commit generated output, dependency directories, secrets, or local environment files.
- Keep changes scoped to the request and leave unrelated working-tree changes untouched.

## Upcoming interaction plan

- The next major UI direction is a one-page portfolio that rolls page by page
  with animation instead of behaving like one long static column.
- Prefer implementing the rolling experience around full-screen sections for
  Intro, Experience, Projects, Links, and any future archive/summary panel.
- Use native scroll snap first where possible, then add lightweight Vue/CSS
  animation only where it improves the transition feel.
- Keep the rolling-page layout responsive: mobile should still feel natural and
  must not trap users in awkward scroll states.
- Preserve route clarity. If `/all-projects` remains a separate archive route,
  do not bury its navigation inside animation-only behavior.

## Agent interoperability

- Codex, Claude, and other coding agents share these repository-wide instructions.
- Read the working tree before editing; never overwrite another agent's uncommitted work.
- Leave a concise handoff with changed files, verification performed, and known follow-ups.
- Repository instructions override an agent's preferred conventions when they conflict.

## Agent change notes

- Mention whether a change is documentation-only, UI-facing, or build-related in the handoff.
- For random or housekeeping updates, prefer touching agent guidance rather than product behavior.
- When multiple agents may work on the repo, include the active branch and last commit in the handoff.
- Keep Claude-specific or Codex-specific notes short and link back here for shared rules.

## Verification spec

Before handing off a code change, run the checks relevant to it:

```sh
npm run type-check
npm run build
```

Documentation-only changes do not require a build. If a check cannot run, record the
reason in the handoff.

## Commit spec

- Use a short, imperative commit subject.
- Keep documentation-only updates separate from product code when practical.
