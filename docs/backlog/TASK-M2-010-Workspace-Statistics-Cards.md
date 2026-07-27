# TASK-M2-010 — Workspace Statistics Cards

## Milestone

M2 — Workspace Foundation

---

# Objective

Improve every workspace landing page by adding a consistent
"Workspace Overview" statistics section.

These cards remain presentation-only.

No business logic.

No state.

No API.

No routing changes.

This task exists solely to make the workspaces feel like complete
professional dashboards before the data layer is introduced.

---

# Current State

Each workspace currently contains:

1. Planned Features
2. Development Status
3. Current Workspace
4. Section Navigation

---

# Required Changes

Add a new section AFTER "Section Navigation".

Section title:

Workspace Overview

Inside the card display three statistics.

Use the same styling already established throughout Career OS.

---

## Career

Statistics

Records
0

Active Applications
0

Interviews
0

---

## Knowledge

Notes
0

Documents
0

Research Items
0

---

## Projects

Projects
0

Case Studies
0

Technologies
0

---

## Automation

Workflows
0

Templates
0

Prompts
0

---

## Assets

Documents
0

Templates
0

Media Files
0

---

## Settings

Preferences
0

Integrations
0

Profiles
1

---

# Design Rules

Reuse existing design language.

No icons.

No charts.

No badges.

No colors.

No animations.

No progress bars.

Only typography.

Use a three-column responsive grid.

Each stat displays:

Large number

Small label underneath

Exactly like the Home dashboard statistics style.

---

# Architecture Rules

Modify only:

app/pages/Career/index.jsx

app/pages/Knowledge/index.jsx

app/pages/Projects/index.jsx

app/pages/Automation/index.jsx

app/pages/Assets/index.jsx

app/pages/Settings/index.jsx

Do NOT create reusable components.

Do NOT modify:

PageLayout

Header

Sidebar

Routing

App Layout

---

# Documentation

Update

CHANGELOG.md

00_PROJECT_CONTEXT.md

docs/projects/01_REPOSITORY_STATE.md

---

# Acceptance Criteria

Every workspace now contains:

✓ Planned Features

✓ Development Status

✓ Current Workspace

✓ Section Navigation

✓ Workspace Overview

Everything remains presentation-only.

Build passes.

Tests pass.