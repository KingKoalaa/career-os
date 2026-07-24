# TASK-M2-005 — Dashboard Widgets

**Milestone:** M2 — Workspace Foundation

**Status:** Approved

---

# Objective

Replace the static placeholder content introduced in TASK-M2-003 with realistic dashboard widgets that represent the future Career OS experience.

This task establishes the long-term dashboard information architecture while remaining completely presentation-only.

No business logic should be introduced.

---

# Background

Current Home dashboard contains four placeholder sections:

- Quick Actions
- Today's Focus
- Recent Activity
- Upcoming Modules

These sections currently display generic placeholder text.

The purpose of this task is to replace those placeholders with realistic dashboard widgets that communicate what Career OS will eventually manage.

The dashboard should immediately feel useful while still using static data.

---

# Functional Requirements

Implement the following widgets.

---

## 1. Resume Progress

Display a summary card.

Example

- Resume Version
- Last Updated
- Completion
- Status

Static example values:

- Resume Version 3.0
- Updated Today
- 95%
- Ready for Applications

---

## 2. Active Applications

Display summary metrics.

Example

- Applications Submitted
- Interviews
- Follow Ups

Example values

- 0
- 0
- 0

No charts.

No graphs.

No animations.

---

## 3. Portfolio Status

Display a simple status summary.

Example

Portfolio

- Website
- GitHub
- Case Studies

Example values

- Published
- Active
- 2 Projects

---

## 4. Certification Progress

Display certification summary.

Example

Completed

- Make Advanced
- Claude AI
- Prompt Engineering

In Progress

- n8n

Static only.

---

## 5. Weekly Goals

Simple checklist.

Example

□ Tailor Resume

□ Apply to 10 Jobs

□ Update Portfolio

□ Publish Automation Project

Static.

No checkbox functionality.

---

## 6. Recent Activity

Simple timeline.

Example

Today

Updated Home Dashboard

Yesterday

Completed Workspace Routing

Earlier

Repository Bootstrap

Static entries only.

---

# Layout Requirements

Maintain the current dashboard structure.

The widgets should be organized into a balanced desktop dashboard.

Suggested hierarchy

Top Row

- Resume Progress
- Active Applications
- Portfolio Status

Middle Row

- Certification Progress
- Weekly Goals

Bottom Row

- Recent Activity

Quick Actions should remain at the top.

---

# Design Requirements

Follow ADR-002 exactly.

Desktop-first.

Balanced whitespace.

No visual redesign.

Continue using

- existing cards
- existing spacing
- existing typography
- existing colors
- existing border radius

Maintain the visual language introduced in TASK-M2-004.

Do not introduce:

- charts
- graphs
- progress circles
- animations
- gradients
- badges
- notifications
- avatars

Keep everything clean and minimalist.

---

# Engineering Requirements

Modify only

```
app/pages/Home/index.jsx
```

Reuse

- PageLayout
- PageHeader
- PageContent

Do not modify

- AppRouter
- Sidebar
- Header
- RootLayout
- NavigationItem
- PageLayout

No new components.

No new folders.

No reusable dashboard framework.

Everything remains inside Home/index.jsx.

---

# Out of Scope

Do NOT introduce

- React state
- useEffect
- Context
- Local Storage
- APIs
- Backend
- Services
- Mock databases
- Charts
- Progress components
- Editable widgets
- Drag-and-drop
- Widget configuration

Presentation only.

---

# Acceptance Criteria

- Resume Progress widget exists.
- Active Applications widget exists.
- Portfolio Status widget exists.
- Certification Progress widget exists.
- Weekly Goals widget exists.
- Recent Activity widget exists.
- Quick Actions preserved.
- Existing shell preserved.
- Existing routing preserved.
- Existing PageLayout preserved.
- No new reusable dashboard components.
- Responsive desktop/tablet/mobile.
- Build passes.
- Tests pass.

---

# Deliverables

Claude must provide

1. Existing Repository Assessment

2. Files Created

3. Files Modified

4. Complete Code

5. Architecture Explanation

6. Manual Testing Steps

7. Acceptance Checklist

8. Suggested Commit Message

9. Complete updated `CHANGELOG.md`

10. Complete updated `00_PROJECT_CONTEXT.md`

11. Complete updated `01_REPOSITORY_STATE.md`

---

# Repository Rules

Before implementation, inspect the existing repository.

If the implementation conflicts with the repository:

- stop
- explain the conflict
- ask for clarification

Do not redesign existing architecture.

Do not invent missing structures.

Do not modify files outside the approved scope.

Follow:

- Engineering Playbook
- Claude Engineering Guide
- ADR-001
- ADR-002