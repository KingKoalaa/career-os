# Career OS Changelog

All notable changes to this project will be documented in this file.

The format follows Keep a Changelog principles and Semantic Versioning during development.

---

# [Unreleased]

## Milestone 2 – Workspace Foundation

### Added

- React Router foundation for Career OS.
- Workspace routing for all seven workspaces:
  - Home
  - Career
  - Knowledge
  - Projects
  - Automation
  - Assets
  - Settings
- Shared PageLayout architecture for all workspace pages.
- Placeholder pages for every workspace.
- Initial Home dashboard skeleton including:
  - Quick Actions
  - Today's Focus
  - Recent Activity
  - Upcoming Modules

### Changed

- Sidebar navigation now supports route-based navigation.
- Navigation active state is driven by the current route instead of a fixed index.
- PageLayout, PageHeader, and PageContent were parameterized to support reusable workspace pages.
- Home page migrated to the shared PageLayout framework.
- Home dashboard layout refined for improved desktop readability:
  - Added centered max-width content container.
  - Improved spacing using the 8px spacing system.
  - Increased dashboard card padding.
  - Improved tablet responsiveness.
  - Preserved the original visual design while refining hierarchy and whitespace.

### Fixed

- Eliminated hardcoded Home-only layout behavior.
- Standardized workspace routing architecture.

## TASK-M2-006 — Dashboard Navigation

### Changed

- Home dashboard's Quick Actions cards (Resume, Portfolio, Job Tracker, Certifications) are now functional navigation links using React Router's `<Link>`, routing to `/career`, `/projects`, `/career`, and `/knowledge` respectively.
- Card markup, spacing, typography, and icon placement are unchanged; only interaction behavior was added.

## TASK-M2-007 — Workspace Page Consistency

### Changed

- Replaced the "Coming Soon" placeholder content on Career, Knowledge, Projects, Automation, Assets, and Settings with standardized workspace landing pages.
- Each workspace page now communicates its purpose via the shared `PageHeader` subtitle and presents a "Planned Features" card (4–6 representative, static bullet items) and a "Development Status" card (Current Phase, Status, Next Milestone).
- All six pages continue to reuse the existing `PageLayout` / `PageHeader` / `PageContent` framework and the established card styling (`rounded-xl border border-slate-200 bg-white p-6`) per ADR-002.

Presentation only. No routing, sidebar, header, or layout architecture changes. No business logic, data, or interaction added.