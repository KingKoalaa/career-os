# TASK-M2-006 — Dashboard Navigation

**Milestone:** M2 — Workspace Foundation

**Status:** Approved

---

# Objective

Convert the Home dashboard's **Quick Actions** section into functional navigation cards.

This task improves usability by allowing users to navigate to existing workspaces directly from the dashboard while keeping the application entirely presentation-focused.

No business logic, state management, or data persistence is introduced.

---

# Background

TASK-M2-005 completed the static Home dashboard.

The Quick Actions cards currently display:

- Resume
- Portfolio
- Job Tracker
- Certifications

These cards are purely visual.

Since the corresponding workspace routes already exist (TASK-M2-002), users should now be able to navigate directly from the dashboard.

This task connects existing UI to existing routing.

---

# Scope

Modify only:

```
app/pages/Home/index.jsx
```

---

# Requirements

## Resume

Navigate to:

```
/career
```

---

## Portfolio

Navigate to:

```
/projects
```

---

## Job Tracker

Navigate to:

```
/career
```

(Job tracking will live under the Career workspace during early milestones.)

---

## Certifications

Navigate to:

```
/knowledge
```

---

# Interaction

Cards should:

- remain visually identical
- preserve spacing
- preserve typography
- preserve icon placement

Only interaction changes.

Users should be able to:

- click anywhere on the card
- navigate immediately
- use keyboard navigation
- use browser back/forward normally

---

# Technical Requirements

Use:

```
<Link>
```

from

```
react-router-dom
```

Wrap the entire card.

Do **NOT** attach onClick handlers.

Navigation must remain declarative.

---

# Accessibility

Cards must remain accessible.

Links should:

- have no custom tabindex
- preserve semantic navigation
- remain keyboard focusable

No ARIA additions required.

---

# Design Constraints

Do NOT redesign the cards.

Do NOT add:

- hover animations
- scaling
- shadows
- transitions
- gradients
- buttons
- badges

Only allow the browser's default link behavior.

---

# Out of Scope

Do NOT introduce:

- active card state
- selected card state
- disabled cards
- tooltips
- analytics
- event tracking
- state management
- context
- hooks beyond existing routing needs

---

# Acceptance Criteria

- Resume card opens Career
- Portfolio card opens Projects
- Job Tracker card opens Career
- Certifications card opens Knowledge
- Browser Back works correctly
- Keyboard navigation works
- Layout unchanged
- Build passes
- Tests pass

---

# Files Expected

Modified:

```
app/pages/Home/index.jsx
```

No new files.

No component extraction.

No routing changes.

Routes already exist.

---

# Engineering Notes

This task intentionally connects existing presentation to existing routing.

No business logic is added.

No data model is introduced.

Navigation remains declarative using React Router's `<Link>` component.

This preserves ADR-001 (Replaceability First) by keeping routing concerns isolated from application logic while improving usability.