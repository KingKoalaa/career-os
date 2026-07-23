# Career OS
## TASK-M2-002 — Workspace Routing Expansion

Repository

https://github.com/KingKoalaa/career-os

---

# IMPORTANT

Before making any changes:

1. Clone and inspect the repository from GitHub.
2. Treat the repository as the source of truth.
3. Do NOT reconstruct files.
4. Do NOT regenerate existing components.
5. Produce the smallest possible patch.

If any specification conflicts with the repository, stop and explain the conflict instead of guessing.

---

# Documentation

Read these first before implementation.

docs/projects/

- 00_PROJECT_CONTEXT.md
- 01_REPOSITORY_STATE.md
- 02_ARCHITECTURE.md

docs/engineering/

- 12_Claude_Engineering_Guide.md

docs/adr/

- ADR-001
- ADR-002

Follow them exactly.

---

# Objective

Expand the routing foundation established in TASK-M2-001.

The application shell is already complete.

Do NOT redesign it.

Do NOT refactor it.

Simply introduce the remaining workspace routes.

---

# Existing State

Already implemented

✓ BrowserRouter

✓ AppRouter

✓ RootLayout

✓ AppLayout

✓ Sidebar

✓ NavigationItem

✓ WorkspaceContainer

✓ Home route

✓ Home navigation

Current route

/

Current navigation

Home

Remaining workspaces are currently visible but inactive.

---

# Implement

Create placeholder pages for

Career

Knowledge

Projects

Automation

Assets

Settings

Each page must use the existing PageLayout framework.

---

Example

Career page

Title

Career

Subtitle

Career workspace.

Content

Career workspace is under construction.

Repeat for every workspace.

---

# Routing

Expand AppRouter.

Create routes

/career

/knowledge

/projects

/automation

/assets

/settings

No nested routing.

No lazy loading.

No route guards.

No wildcard routes.

No 404 page.

---

# Navigation

Update

app/config/navigation.js

Each workspace should receive

path

matching its route.

Example

Home

path: "/"

Career

path: "/career"

Knowledge

path: "/knowledge"

etc.

Do NOT redesign navigation configuration.

---

# Sidebar

Sidebar already supports routing.

Only update it if absolutely necessary.

Do NOT redesign it.

Do NOT move routing into NavigationItem.

NavigationItem must remain presentation-only.

---

# Components NOT to Modify

Unless absolutely required

AppLayout

RootLayout

Header

HeaderBrand

HeaderWorkspace

HeaderActions

WorkspaceContainer

NavigationItem

PageLayout

PageHeader

PageContent

HomePage

---

# Out of Scope

No dashboard widgets

No cards

No statistics

No state

No API

No services

No context

No Redux

No Zustand

No business logic

No redesign

No CSS changes

No visual improvements

No breadcrumbs

No animations

No icons

No placeholders beyond simple text

---

# Deliverables

Return

## Existing Repository Assessment

Briefly describe:

- current routing
- current navigation
- current shell

Confirm the task is compatible.

---

## Files Created

List only new files.

---

## Files Modified

List only modified files.

---

## Complete Code

Provide complete contents of every created or modified file.

Do NOT summarize.

---

## Architecture Explanation

Explain

- why only those files changed
- how existing architecture was preserved
- why NavigationItem remained presentation-only
- why Sidebar still owns routing

---

## Manual Testing

Include

npm install

npm run build

npm run dev

Verify

- Home
- Career
- Knowledge
- Projects
- Automation
- Assets
- Settings

Verify every sidebar item routes correctly.

Verify active highlighting works.

Verify no console errors.

---

## Acceptance Checklist

Include

✓ Seven workspace routes exist

✓ Seven placeholder pages exist

✓ Existing shell preserved

✓ Existing routing preserved

✓ NavigationItem unchanged

✓ Sidebar preserved

✓ Builds successfully

---

## Repository Disclaimer

If repository contents differ from documentation, explain the difference before making changes.

Never silently redesign.

---

## Suggested Commit Message

Use Conventional Commits.

Example

feat: implement workspace routing expansion