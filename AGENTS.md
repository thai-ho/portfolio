# AGENTS.md

This file applies to the entire repository.

## Project shape

- The active portfolio is the Vue 3 application under `v1/`.
- Keep reusable UI in `v1/src/components/` and global styles and assets in
  `v1/src/assets/`.
- Routes belong in `v1/src/router/index.js`; avoid adding routing logic directly
  to components.

## Working rules

- Preserve the existing visual language unless a redesign is explicitly requested.
- Prefer small, focused Vue components over expanding an already unrelated component.
- Keep content changes factual and do not invent employment, project, or contact details.
- Do not commit generated output, dependency directories, secrets, or local environment files.
- Keep changes scoped to the request and leave unrelated working-tree changes untouched.

## Agent interoperability

- Codex, Claude, and other coding agents share these repository-wide instructions.
- Read the working tree before editing; never overwrite another agent's uncommitted work.
- Leave a concise handoff with changed files, verification performed, and known follow-ups.
- Repository instructions override an agent's preferred conventions when they conflict.

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
