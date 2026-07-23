# 02_ARCHITECTURE.md

Version: 0.4
Last Updated: July 2026

---

# Career OS Architecture

This document explains **how the application is organized**, not where files live.

Whenever implementation decisions are made, this document should be treated as the architectural source of truth.

---

# High-Level Architecture

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
     Workspace Page
```

---

# Routing Architecture

Responsibilities

```
BrowserRouter
        │
        ▼
AppRouter
        │
        ▼
Route Definitions
```

Rules

- AppRouter owns all routes.
- Pages never perform routing.
- Sidebar never owns routes.
- Components never own routes.

---

# Layout Architecture

```
AppLayout
├── Header
├── Sidebar
└── WorkspaceContainer
```

Responsibilities

Header

- Global branding
- Workspace title
- Future actions

Sidebar

- Workspace navigation
- Active state display

WorkspaceContainer

- Hosts routed page content
- Owns the Outlet region

---

# Header Architecture

```
Header
├── HeaderBrand
├── HeaderWorkspace
└── HeaderActions
```

Responsibilities

HeaderBrand

- Branding only

HeaderWorkspace

- Workspace title only

HeaderActions

- Future controls

No business logic.

---

# Navigation Architecture

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

navigation.js

- Single source of truth
- Workspace metadata
- Route metadata

Sidebar

- Reads navigation configuration
- Creates navigation UI
- Owns routing behavior

NavigationItem

- Presentation only

---

# Page Architecture

Every workspace page should follow

```
PageLayout
├── PageHeader
└── PageContent
```

Responsibilities

PageLayout

- Page structure

PageHeader

- Page title
- Page subtitle

PageContent

- Workspace content

---

# Dependency Direction

```
Configuration
        │
        ▼
Containers
        │
        ▼
Presentation Components
```

Presentation components must never depend on routing, services, or business logic.

---

# Current Route Map

Implemented

```
/
```

Future

```
/career
/knowledge
/projects
/automation
/assets
/settings
```

---

# Design Principles

## ADR-001

Replaceability First

Every module should be replaceable without rewriting unrelated modules.

---

## ADR-002

UX Consistency

All pages should share

- Header
- Sidebar
- Page Layout
- Navigation behavior

---

## YAGNI

Do not introduce abstractions before they are needed.

Current examples

✓ Static PageHeader

✓ Static PageContent

Future tasks may generalize them once multiple pages require it.

---

## Single Responsibility

Each component should own one responsibility.

Examples

Header

✓ Layout

NavigationItem

✓ Rendering

Sidebar

✓ Navigation

AppRouter

✓ Routing

---

# Current System State

Stable

```
BrowserRouter
        │
        ▼
AppRouter
        │
        ▼
AppLayout
        │
        ▼
Home Workspace
```

No business logic exists yet.

Current implementation is purely structural.

---

# Future Evolution

Upcoming milestone

TASK-M2-002

Introduce

- Career
- Knowledge
- Projects
- Automation
- Assets
- Settings

through the existing routing architecture.

The architecture should expand—not be redesigned.