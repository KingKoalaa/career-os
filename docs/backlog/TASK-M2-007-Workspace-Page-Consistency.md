# TASK-M2-007-Workspace-Page-Consistency.md

# TASK-M2-007

## Title

Workspace Page Consistency

---

# Milestone

Milestone 2 — Workspace Foundation

---

# Goal

Standardize all workspace pages so they share a consistent structure and communicate their purpose clearly while remaining presentation-only.

The objective is to eliminate placeholder pages that simply say "Coming Soon" and replace them with professional workspace landing pages.

This task continues building the application's UX foundation before any data or business logic is introduced.

---

# Background

Currently:

- Home has a polished dashboard.
- Career, Knowledge, Projects, Automation, Assets, and Settings still contain minimal placeholder content.

This creates an inconsistent experience.

Users should immediately understand what each workspace is responsible for.

---

# Requirements

Update the following pages:

- Career
- Knowledge
- Projects
- Automation
- Assets
- Settings

Each page should continue using the existing:

- PageLayout
- PageHeader
- PageContent

Do not modify:

- Routing
- Sidebar
- Header
- Layout architecture

---

# Page Structure

Each workspace should contain:

## Workspace Description

A concise paragraph describing the purpose of the workspace.

Example:

Career

> Manage resumes, job applications, interviews, and career planning.

Knowledge

> Organize notes, research, documentation, and learning resources.

---

## Planned Features

Add a card titled:

"Planned Features"

Inside the card include a static bullet list of 4–6 representative features.

Example for Career:

- Resume Management
- Job Applications
- Interview Tracker
- Companies
- Career Planning

These are informational only.

No interaction.

---

## Development Status

Add another card titled:

"Development Status"

Display:

Current Phase

Workspace Foundation

Status

Under Development

Next Milestone

Data Layer Integration

Simple text only.

No badges.

No progress bars.

---

# Design Constraints

Follow ADR-002.

Use existing card styling:

- rounded-xl
- border border-slate-200
- bg-white
- p-6

Maintain the existing spacing rhythm.

Do not introduce:

- Charts
- Icons
- Buttons
- Links
- Animations
- Empty decorative elements

---

# Out of Scope

Do NOT implement:

- CRUD
- Forms
- Local storage
- APIs
- Database
- Search
- Filters
- Tables
- State
- Hooks
- Context
- Business logic

Presentation only.

---

# Files Expected

Modify only:

app/pages/Career/index.jsx

app/pages/Knowledge/index.jsx

app/pages/Projects/index.jsx

app/pages/Automation/index.jsx

app/pages/Assets/index.jsx

app/pages/Settings/index.jsx

Update:

CHANGELOG.md

00_PROJECT_CONTEXT.md

docs/projects/01_REPOSITORY_STATE.md

No other files.

---

# Acceptance Criteria

- All workspace pages share a consistent structure.
- Every page explains its purpose.
- Every page contains:
  - Workspace Description
  - Planned Features
  - Development Status
- Existing PageLayout reused.
- No architecture changes.
- No business logic.
- No visual redesign.
- Build passes.
- Tests pass.

---

# Suggested Commit Message

feat: standardize workspace landing pages