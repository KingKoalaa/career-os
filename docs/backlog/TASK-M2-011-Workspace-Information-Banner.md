# TASK-M2-011 — Workspace Information Banner

## Status

Approved

---

# Goal

Introduce a consistent informational banner to every workspace page.

The banner serves as a lightweight orientation block that tells the user the current maturity of the workspace.

This is still a presentation-only milestone.

No functionality, state, or business logic is introduced.

---

# Scope

Modify ONLY:

- app/pages/Career/index.jsx
- app/pages/Knowledge/index.jsx
- app/pages/Projects/index.jsx
- app/pages/Automation/index.jsx
- app/pages/Assets/index.jsx
- app/pages/Settings/index.jsx

Update documentation:

- CHANGELOG.md
- 00_PROJECT_CONTEXT.md
- docs/projects/01_REPOSITORY_STATE.md

---

# Requirements

Add a new section **after Workspace Overview**.

Section title:

Information

Inside the card display:

Title

Workspace Status

Description

This workspace is currently operating in presentation mode.
Interactive functionality, data management, and automation features will be introduced during future milestones.

Use the existing card styling.

Do NOT introduce:

- icons
- badges
- colors
- alerts
- callouts
- buttons
- links
- animations

This is simply another informational card.

---

# Layout

Existing order:

Planned Features

↓

Development Status

↓

Current Workspace

↓

Section Navigation

↓

Workspace Overview

↓

NEW

Information

---

# Styling

Reuse existing styling.

Heading

text-sm
font-semibold

Card

rounded-xl
border
border-slate-200
bg-white
p-6

Body

text-sm
text-slate-500

No new design language.

---

# Documentation

Update:

CHANGELOG.md

Add:

TASK-M2-011

Added consistent Information section across all workspace pages.

Presentation only.

No business logic.

---

Update:

00_PROJECT_CONTEXT.md

Add completed milestone:

TASK-M2-011

Workspace Information Banner

---

Update:

docs/projects/01_REPOSITORY_STATE.md

Add:

M2-011

Workspace Information Banner

---

# Constraints

Do NOT modify:

PageLayout

Header

Sidebar

Routing

Navigation

Home Dashboard

Shared Components

No reusable component.

No business logic.

No hooks.

No state.

No API.

No storage.

Presentation only.

---

# Acceptance Criteria

All six workspace pages include:

✓ Information section

✓ Workspace Status heading

✓ Description paragraph

Uses identical styling

No new visual language

No interactions

No functionality

Build passes

Tests pass