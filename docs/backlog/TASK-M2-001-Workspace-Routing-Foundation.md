# TASK-M2-001 — Workspace Routing Foundation

## Milestone

Milestone 2 — Application Foundation

---

# Type

Engineering Specification

---

# Estimated Scope

Implementation Time

30–60 minutes

Expected Modified Files

3–6

Expected New Files

0–2

Maximum Scope

- No business logic
- No data layer
- No state management
- No repository redesign
- Preserve existing application shell

---

# Objective

Transform Career OS from a single-page application into a routed multi-workspace application.

Routing should become the application backbone before additional workspace modules are implemented.

Only the Home workspace should exist after this task.

The remaining workspaces will be added one milestone at a time.

---

# Existing Repository

Preserve

- AppLayout
- RootLayout
- Header
- Sidebar
- NavigationItem
- navigation.js
- PageLayout
- PageHeader
- PageContent

---

# Required Work

Implement routing for:

Home

Only.

Do not implement the remaining workspaces.

---

# Sidebar

The Home navigation item should navigate to:

/

or

/home

depending on the existing routing strategy.

All remaining navigation items should remain visually present but inactive.

Acceptable approaches include:

- disabled links
- placeholder routes
- non-clickable navigation items

Do NOT create placeholder pages for unfinished workspaces.

---

# Routing

Introduce the minimum routing necessary for Home.

Do not introduce nested routing unless required by the existing architecture.

Do not redesign AppRouter.

Preserve current routing conventions.

---

# Navigation

NavigationItem may become clickable.

Only Home should navigate.

All remaining workspaces are intentionally unavailable.

---

# Out of Scope

Do NOT implement

- Career page
- Knowledge page
- Projects page
- Automation page
- Assets page
- Settings page

Do NOT implement

- guards
- authentication
- breadcrumbs
- state management
- loaders
- data fetching
- business logic

---

# Repository Preservation

Only modify files required to introduce routing.

Avoid touching unrelated components.

---

# Acceptance Criteria

✓ Home workspace accessible through sidebar

✓ Existing application shell preserved

✓ Existing layout preserved

✓ Existing routing architecture preserved

✓ Remaining navigation items visible

✓ Remaining workspaces intentionally unavailable

✓ No business logic introduced

✓ Builds successfully

---

# Deliverables

Files Modified

(list)

Files Created

(if required)

Architecture Explanation

Manual Testing

Acceptance Checklist

Repository Disclaimer

Suggested Commit Message