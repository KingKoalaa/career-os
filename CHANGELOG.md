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
- Initial Home dashboard skeleton.
- Dashboard widgets (TASK-M2-005).
- Dashboard Quick Action navigation (TASK-M2-006).
- Standardized workspace landing pages (TASK-M2-007).
- Professional empty-state sections for all non-Home workspaces (TASK-M2-008).

### Changed

#### TASK-M2-004
- Refined Home dashboard spacing, layout hierarchy, and responsiveness.

#### TASK-M2-005
- Replaced placeholder dashboard sections with:
  - Resume Progress
  - Active Applications
  - Portfolio Status
  - Certification Progress
  - Weekly Goals
  - Recent Activity

#### TASK-M2-006
- Converted Home Quick Action cards into navigable React Router links.
- Resume → Career
- Job Tracker → Career
- Portfolio → Projects
- Certifications → Knowledge

#### TASK-M2-007
- Standardized all workspace landing pages.
- Added:
  - Planned Features
  - Development Status
- Reused existing PageLayout and card styling.

#### TASK-M2-008
- Added a third section, **Current Workspace**, to:
  - Career
  - Knowledge
  - Projects
  - Automation
  - Assets
  - Settings
- Each workspace now provides:
  - Professional empty-state messaging.
  - A short explanation of future functionality.
- Maintained the existing visual design system and component hierarchy.
- Presentation only; no business logic or interaction added.

### Fixed

- Standardized workspace presentation across all non-Home pages.