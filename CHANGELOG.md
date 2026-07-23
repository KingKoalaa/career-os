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