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