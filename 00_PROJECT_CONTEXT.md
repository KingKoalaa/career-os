# 00_PROJECT_CONTEXT.md

Version: 0.4
Last Updated: July 2026

---

# Career OS

Operational dashboard for managing career development, portfolio, knowledge, projects, automation, and digital assets.

This document is the authoritative snapshot of the repository state.

Claude should always treat this document as the highest-level source of truth before implementing any task.

---

# Current Milestone Status

## Milestone 0 — Repository Foundation

Status: ✅ Complete

Completed

- Repository bootstrap
- React + Vite
- Tailwind CSS
- React Router
- Initial folder architecture
- Engineering documentation
- ADR system
- Changelog system

---

## Milestone 1 — Application Shell

Status: ✅ Complete

Completed

### TASK-M1-001

Application Layout

Completed

- Root application shell
- Header
- Sidebar
- Workspace container
- Responsive layout
- AppLayout
- RootLayout

---

### TASK-M1-002

Sidebar Navigation Framework

Completed

- Navigation configuration
- NavigationItem component
- Sidebar driven by configuration
- Static active styling
- Lucide icons
- Responsive navigation

---

### TASK-M1-003

Header Framework

Completed

- HeaderBrand
- HeaderWorkspace
- HeaderActions
- Three-section header architecture

---

### TASK-M1-004

Page Layout Framework

Completed

- PageLayout
- PageHeader
- PageContent
- Home page migrated to PageLayout
- Semantic HTML improvements

---

# Milestone 2 — Workspace Modules

Status: 🚧 In Progress

---

## TASK-M2-001

Workspace Module Foundation

Status: ✅ Complete

Completed

- React Router foundation verified.
- Home workspace navigation enabled.
- Sidebar now derives active state from the current route.
- Home navigation item routes to `/`.
- Home page is rendered through the existing application shell.
- Navigation configuration now supports routable workspaces through optional `path` metadata.
- Non-routable workspaces remain visible but intentionally inactive.
- NavigationItem remains presentation-only.
- No placeholder routes were introduced.

Current Workspace Routing

| Workspace | Route | Status |
|-----------|-------|--------|
| Home | `/` | ✅ Active |
| Career | — | ⏳ Pending |
| Knowledge | — | ⏳ Pending |
| Projects | — | ⏳ Pending |
| Automation | — | ⏳ Pending |
| Assets | — | ⏳ Pending |
| Settings | — | ⏳ Pending |

---

# Current Repository Architecture

Application Shell

```
BrowserRouter
    │
    ▼
AppRouter
    │
    ▼
RootLayout
    │
    ▼
AppLayout
 ├── Header
 ├── Sidebar
 └── WorkspaceContainer
          │
          ▼
        Outlet
          │
          ▼
      HomePage
          │
          ▼
      PageLayout
      ├── PageHeader
      └── PageContent
```

---

# Current Navigation Architecture

```
navigation.js
        │
        ▼
Sidebar
        │
        ▼
NavigationItem
```

Responsibilities

- navigation.js is the single source of truth for workspace metadata.
- Sidebar owns routing behavior.
- NavigationItem is presentation-only.
- Route activation is determined using React Router location state.

---

# Current Routing Table

Implemented

```
/
```

Reserved

```
/career
/knowledge
/projects
/automation
/assets
/settings
```

These routes intentionally do not exist yet.

They will be introduced incrementally during Milestone 2.

---

# Repository Principles

The following architectural rules are now established and should be preserved.

## Routing

- AppRouter owns route definitions.
- Sidebar owns navigation behavior.
- NavigationItem remains presentation-only.
- Workspace routing is configuration-driven.

---

## Layout

AppLayout is permanent.

Header, Sidebar and WorkspaceContainer should never contain business logic.

---

## Pages

Every page should eventually follow

```
PageLayout
 ├── PageHeader
 └── PageContent
```

---

## Configuration

Workspace metadata belongs inside

```
app/config/navigation.js
```

Never hardcode navigation inside Sidebar.

---

# Upcoming Work

## Next Task

TASK-M2-002

Workspace Routing Expansion

Objective

Introduce routes for

- Career
- Knowledge
- Projects
- Automation
- Assets
- Settings

using the existing application shell and PageLayout framework.

No business logic.

No redesign.

Only routing and placeholder workspace pages.

---

# Notes for Future Claude Sessions

The repository has completed the foundational architecture.

Future implementation should preserve:

- ADR-001 (Replaceability First)
- ADR-002 (UX Consistency)
- Single Responsibility Principle
- Configuration-driven navigation
- Presentation-only UI components
- Minimal patch philosophy
- No speculative abstractions (YAGNI)

All future milestones should build upon the existing shell rather than replacing it.