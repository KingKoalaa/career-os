# TASK-M2-004
# Home Dashboard Layout Refinement

---

## Milestone

Milestone 2 — Workspace Foundation

---

## Status

Approved

---

## Objective

Refine the static Home dashboard layout into a polished, production-quality dashboard while remaining completely presentation-only.

This task focuses exclusively on visual hierarchy, spacing, responsiveness, and layout consistency.

No application logic may be introduced.

---

# Background

TASK-M2-003 introduced the initial Home dashboard skeleton consisting of:

- Quick Actions
- Today's Focus
- Recent Activity
- Upcoming Modules

The dashboard currently functions as a structural placeholder.

This task improves presentation quality only.

---

# Scope

Improve the visual layout of the existing Home dashboard.

Maintain all existing sections.

Improve:

- spacing
- visual hierarchy
- responsive behavior
- alignment
- card consistency

The result should resemble a clean SaaS dashboard.

---

# Functional Requirements

## Quick Actions

Maintain exactly four cards.

- Resume
- Portfolio
- Job Tracker
- Certifications

Cards remain static.

No click handlers.

No navigation.

No hover effects beyond existing design language.

---

## Today's Focus

Remain a single placeholder card.

Content:

> No focus items yet.

---

## Recent Activity

Remain a single placeholder card.

Content:

> No recent activity.

---

## Upcoming Modules

Maintain the existing module list.

- Career
- Knowledge
- Projects
- Automation
- Assets
- Settings

Static only.

---

# Design Requirements

Follow ADR-002.

Improve:

- spacing rhythm
- card proportions
- section spacing
- typography hierarchy

Maintain:

- existing colors
- border radius
- typography scale
- spacing system

No custom colors.

No gradients.

No shadows beyond current design language.

---

# Responsive Requirements

Desktop

- balanced dashboard
- clean whitespace

Tablet

- maintain proportions

Mobile

- stack naturally
- no horizontal scrolling

---

# Constraints

Do NOT introduce:

- state
- hooks
- context
- reducers
- API calls
- local storage
- animations
- charts
- progress bars
- notifications
- widgets
- reusable dashboard framework

Do NOT create:

- DashboardCard component
- DashboardSection component
- Widget component

The Home dashboard exists only once.

Keep implementation inline.

Follow YAGNI.

---

# Files Expected

Likely modified:

- app/pages/Home/index.jsx

No additional files should be created unless absolutely necessary.

---

# Acceptance Criteria

- Dashboard hierarchy improved
- Responsive layout improved
- Existing sections preserved
- Existing PageLayout preserved
- Presentation-only
- No business logic
- No reusable dashboard abstraction
- Build passes
- Tests pass

---

# Out of Scope

Everything involving functionality.

Including:

- quick actions behavior
- routing changes
- persistence
- APIs
- drag-and-drop
- widgets
- dashboard customization
- user preferences
- notifications

These belong to future milestones.

---

# Completion Checklist

- Dashboard visually refined
- Responsive verified
- No new abstractions
- Documentation updated
- CHANGELOG updated
- Build successful
- Tests passing

---

# Suggested Commit

feat: refine home dashboard layout