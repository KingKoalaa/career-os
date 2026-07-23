# Changelog

All notable changes to Career OS will be documented in this file.

This project follows an incremental engineering workflow where each implementation task is independently reviewed, tested, committed, and released.

---

## [Unreleased]

### Added

- Established the initial Career OS project structure.
- Added repository documentation and engineering standards.
- Introduced Architecture Decision Records (ADR) to govern project architecture and design.
- Implemented the application layout foundation using reusable presentation components.
- Added the following reusable layout components:
  - AppLayout
  - Header
  - Sidebar
  - WorkspaceContainer
- Integrated the application layout into the existing RootLayout while preserving the existing routing architecture.
- Established the permanent visual application frame that future Career OS workspaces will inherit.

### Changed

- RootLayout now renders the reusable AppLayout instead of directly rendering routed content.
- WorkspaceContainer now supports rendering child content while gracefully falling back to placeholder content when no children are provided.
- Project development workflow refined to use:
  - Engineering Specifications
  - Claude implementation
  - ChatGPT architecture review
  - Small, reviewable engineering tasks

### Verified

- Application builds successfully.
- Existing routing remains functional.
- Existing HomePage renders correctly inside the application layout.
- Existing test suite passes without regression.
- No routing logic was modified.
- No navigation logic was introduced.
- No business functionality was added.

---

## Milestone Progress

| Milestone | Status |
|-----------|--------|
| M0 — Project Bootstrap | ✅ Complete |
| M1-001 — Application Layout | ✅ Complete |
| M1-002 — Sidebar Navigation | ⏳ Next |

## Milestone 1 Progress

### Added

- Permanent application layout
- Reusable sidebar navigation
- Navigation configuration system (`app/config/navigation.js`)
- NavigationItem reusable component

### Changed

- Replaced temporary sidebar placeholder with configuration-driven navigation.

## M1-003 — Header Framework

### Added

- HeaderBrand component
- HeaderWorkspace component
- HeaderActions component

### Changed

- Refactored Header into a reusable three-section framework.

## M1-004 — Page Layout Framework

### Added

- PageLayout
- PageHeader
- PageContent

### Changed

- Replaced the temporary Home splash screen with the new Page Layout framework.
- Improved semantic HTML by using `<main>` and `<section>` for the primary page structure.

## [Unreleased]

### Added
- Introduced routing foundation for Career OS.
- Enabled React Router navigation for the Home workspace.
- Added `path` metadata to the Home navigation configuration.
- Sidebar now derives active navigation state from the current route.
- Home navigation item now routes to `/`.
- Remaining workspace navigation items remain intentionally non-routable pending future milestones.

### Changed
- Sidebar now renders navigable and non-navigable items based on the navigation configuration.
- Active state is now determined using the current route instead of a hardcoded index.

### Preserved
- NavigationItem remains a purely presentational component.
- AppRouter, AppLayout, RootLayout, Header, WorkspaceContainer, and application shell architecture remain unchanged.

# Changelog

## TASK-M2-002 — Workspace Module Foundation

### Status

✅ Completed

---

## Summary

Established the foundational workspace module structure for Career OS.

The application now contains dedicated workspace modules for:

- Home
- Career
- Knowledge
- Projects
- Automation
- Assets
- Settings

All workspaces now share a common page framework while preserving the existing application shell and routing architecture.

---

## What Changed

### Workspace Modules

Created dedicated page modules:

```
app/pages/
    Home/
        index.jsx
    Career/
        index.jsx
    Knowledge/
        index.jsx
    Projects/
        index.jsx
    Automation/
        index.jsx
    Assets/
        index.jsx
    Settings/
        index.jsx
```

This establishes the long-term repository direction where every workspace becomes its own self-contained module.

---

### Shared Page Framework

Refactored the existing page framework into a reusable structure.

Updated:

- PageLayout
- PageHeader
- PageContent

The framework now accepts only the minimum required API:

- title
- subtitle
- children

No additional abstractions or configuration were introduced.

---

### Home Workspace

Migrated the routed Home workspace onto the shared PageLayout framework.

The previous bootstrap-only implementation was replaced with the standardized page structure.

---

### Routing

Expanded AppRouter to register all seven workspace routes.

Current routes:

- /
- /career
- /knowledge
- /projects
- /automation
- /assets
- /settings

Routing architecture remains unchanged.

No lazy loading.

No nested routing.

No route guards.

No wildcard routes.

No 404 implementation.

---

### Navigation

Updated navigation configuration by assigning route paths to every workspace.

Sidebar required no structural changes.

NavigationItem remained completely untouched.

Existing active-state logic now automatically works across all registered routes.

---

## Preserved Architecture

No changes were made to:

- Header
- Sidebar
- NavigationItem
- RootLayout
- AppLayout
- WorkspaceContainer

The permanent application shell remains unchanged.

---

## Technical Debt (Intentionally Deferred)

The repository still contains orphaned legacy files discovered during implementation.

Examples include:

- Legacy HomePage implementation
- Older unused PageLayout-related files

These were intentionally left untouched.

Repository cleanup will be performed under a dedicated future backlog item rather than during this feature implementation.

---

## Validation

Verified:

- npm run build ✅
- Existing test suite passes ✅
- Sidebar navigation works for all seven workspaces ✅
- Shared PageLayout renders correctly for every workspace ✅
- No console errors observed ✅

---

## Architectural Notes

This milestone completes the foundational workspace scaffolding required for Milestone 2.

Future workspaces can now evolve independently by expanding their own module folders without requiring structural repository changes.

Example future expansion:

```
Career/
    index.jsx
    CareerDashboard.jsx
    CareerCard.jsx
    hooks/
    services/
    components/
```

This follows ADR-001 (Replaceability First) while avoiding premature abstraction in accordance with the project's engineering philosophy.

---

## Next Milestone

TASK-M2-003

(Home Dashboard Skeleton)

The Home workspace will transition from an "under construction" placeholder into the first functional dashboard using the newly established workspace framework.