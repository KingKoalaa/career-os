# TASK-M2-003 — Home Dashboard Skeleton

---

## Status

Approved

---

## Objective

Replace the temporary Home workspace placeholder with the first static dashboard layout.

This task establishes the permanent visual structure of the Home workspace without introducing any business logic, reusable dashboard framework, application state, persistence, APIs, or data loading.

The dashboard should serve as the foundation for future widgets while remaining entirely presentation-only.

---

# Existing Repository Assessment

Before implementation, inspect the current repository.

Expected current state:

- Home workspace already uses the shared PageLayout framework.
- Seven workspace routes exist.
- Sidebar navigation is fully functional.
- PageLayout, PageHeader, and PageContent are parameterized.
- Home currently displays static placeholder content.
- No dashboard components exist.

Verify these assumptions before making changes.

If repository state differs, explain the conflict instead of guessing.

---

# Scope

## In Scope

Replace the Home placeholder body with a static dashboard layout.

Use existing:

- PageLayout
- Header
- Sidebar
- WorkspaceContainer

No architectural changes.

---

## Out of Scope

Do NOT introduce:

- React state
- Context
- Redux
- Zustand
- Local storage
- API calls
- Services
- Business logic
- Widget framework
- Search
- Notifications
- Charts
- Statistics
- Animations
- Drag and drop
- Responsive redesign
- Dashboard abstraction

---

# Dashboard Structure

The Home dashboard should contain four static sections.

---

## Quick Actions

Display four static cards.

Examples:

- Resume
- Portfolio
- Job Tracker
- Certifications

Cards are presentation only.

No click handlers.

No routing.

No icons unless already available in the existing design language.

---

## Today's Focus

Display an empty placeholder card.

Example text:

> No focus items yet.

---

## Recent Activity

Display an empty placeholder card.

Example text:

> No recent activity.

---

## Upcoming Modules

Display a static list.

Example:

- Career
- Knowledge
- Projects
- Automation
- Assets
- Settings

Presentation only.

No navigation.

---

# Design Requirements

Continue using the existing design language.

Reuse:

- slate palette
- rounded corners
- borders
- spacing
- typography

No visual redesign.

No new colors.

No new spacing scale.

No custom CSS.

Use existing Tailwind conventions.

---

# Architecture Requirements

Do NOT create:

- DashboardCard
- DashboardSection
- Widget
- WidgetContainer

Only one dashboard exists.

Applying YAGNI, reusable dashboard components are not justified yet.

Keep all dashboard markup inside the Home page.

Future milestones will extract components once multiple workspaces require them.

---

# Files Expected to Modify

Likely:

```
app/pages/Home/index.jsx
```

No routing changes.

No navigation changes.

No layout changes.

---

# Files Expected to Create

None.

---

# Acceptance Criteria

- Home placeholder removed.
- Static dashboard displayed.
- Four dashboard sections present.
- Uses existing PageLayout.
- No reusable dashboard framework introduced.
- No business logic.
- Existing routing preserved.
- Existing application shell preserved.
- Builds successfully.
- Existing tests continue passing.

---

# Manual Testing

Run:

```
npm run build
npm run test
npm run dev
```

Verify:

- Home renders the dashboard.
- Sidebar remains unchanged.
- Header remains unchanged.
- Layout remains unchanged.
- No console errors.
- Build succeeds.

---

# Deliverables

Return:

- Existing Repository Assessment
- Files Modified
- Complete Code
- Architecture Explanation
- Manual Testing
- Acceptance Checklist
- Repository Disclaimer
- Suggested Conventional Commit Message

---

# Suggested Commit Message

```
feat: implement home dashboard skeleton
```

---

# Engineering Constraints

Follow:

- ADR-001 — Replaceability First
- ADR-002 — UX & Design System
- 12_Claude_Engineering_Guide.md

Do not redesign existing architecture.

Do not invent abstractions.

Implement only what this task requires.