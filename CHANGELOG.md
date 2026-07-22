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