# TASK-M2-008 — Workspace Empty States

**Milestone:** Milestone 2 – Workspace Foundation

**Status:** Approved

**Priority:** Medium

**Estimated Effort:** Small

---

# Objective

Replace the generic "Under Development" messaging inside each workspace with professional, informative empty states.

The objective is to make Career OS feel like a polished product rather than a collection of placeholder pages while **remaining completely presentation-only**.

This task introduces **zero business logic**.

---

# Problem

After TASK-M2-007 each workspace has:

- Workspace description
- Planned Features
- Development Status

However, the pages still do not communicate that there is currently **no user content**.

Users should immediately understand:

- what belongs here
- that nothing has been created yet
- future functionality is coming

without looking unfinished.

---

# Scope

Update the following pages only:

- Career
- Knowledge
- Projects
- Automation
- Assets
- Settings

Do NOT modify:

- Home
- Sidebar
- Header
- Routing
- Layout components

---

# Requirements

Each workspace receives a third card.

Example heading:

## Current Workspace

Card contents should be appropriate for the workspace.

Examples:

Career

> You haven't created any career records yet.

Knowledge

> Your knowledge base is empty.

Projects

> No portfolio projects have been added.

Automation

> No automation workflows have been created.

Assets

> Your asset library is currently empty.

Settings

> Configure your preferences as new settings become available.

Each card should also include a secondary helper sentence.

Example:

> Future updates will allow you to manage and organize your career information here.

---

# Layout

Current structure

Workspace Description

↓

Planned Features

↓

Development Status

New structure

Workspace Description

↓

Planned Features

↓

Development Status

↓

Current Workspace

The new card must reuse the exact existing card style:

rounded-xl

border

border-slate-200

bg-white

p-6

No new visual patterns.

---

# Styling

Reuse existing typography.

Heading

text-sm

font-semibold

Body

text-sm

text-slate-500

Spacing

Reuse existing spacing scale.

No visual redesign.

---

# Accessibility

Semantic HTML only.

Use:

<section>

<h2>

<p>

No ARIA additions required.

---

# Out of Scope

No buttons

No icons

No illustrations

No empty-state graphics

No animations

No CRUD

No forms

No upload

No state

No API

No local storage

No business logic

No hooks

No routing changes

---

# Acceptance Criteria

Each workspace now includes:

- Planned Features
- Development Status
- Current Workspace

Every empty state clearly explains:

- nothing exists yet
- what will eventually appear

Consistent styling across all workspaces.

Build passes.

Tests pass.

---

# Documentation Updates

Upon completion update:

- CHANGELOG.md
- 00_PROJECT_CONTEXT.md
- docs/projects/01_REPOSITORY_STATE.md

Repository documentation must remain synchronized with implementation.

---

# Suggested Commit Message

feat(workspaces): add professional empty state cards (TASK-M2-008)