# Career OS — Project Context

## Project

Career OS

A personal operating system for managing:

- Career
- Knowledge
- Projects
- Automation
- Assets

using a clean desktop-first workspace.

---

# Current Phase

Milestone 2 — Workspace Foundation

---

# Completed Milestones

## Milestone 0

✅ Repository Bootstrap

---

## Milestone 1

✅ Application Shell

---

## Milestone 2

### ✅ TASK-M2-001

Routing Foundation

### ✅ TASK-M2-002

Workspace Routing Expansion

### ✅ TASK-M2-003

Home Dashboard Skeleton

### ✅ TASK-M2-004

Home Dashboard Layout Refinement

### ✅ TASK-M2-005

Dashboard Widgets

Implemented:

- Resume Progress
- Active Applications
- Portfolio Status
- Certification Progress
- Weekly Goals
- Recent Activity

### ✅ TASK-M2-006

Dashboard Navigation

Implemented:

- Quick Action cards now navigate to their corresponding workspaces using React Router.

### ✅ TASK-M2-007

Workspace Landing Pages

Implemented:

Every non-Home workspace now contains:

- Workspace description
- Planned Features
- Development Status

using the shared PageLayout framework.

### ✅ TASK-M2-008

Workspace Empty States

Implemented:

Every non-Home workspace now includes a third section:

- Current Workspace

This section provides:

- Professional empty-state messaging.
- A short description of future functionality.
- Consistent presentation using the existing card design.

Presentation only.

No business logic.

No routing changes.

No reusable components introduced.

---

# Current Architecture

Application

RootLayout

↓

AppLayout

↓

Header

Sidebar

↓

WorkspaceContainer

↓

React Router Outlet

↓

Workspace Page

↓

PageLayout

├── PageHeader

└── PageContent

---

# Current Routing

/

Home

/career

Career

/knowledge

Knowledge

/projects

Projects

/automation

Automation

/assets

Assets

/settings

Settings

---

# Engineering Principles

Current project follows:

- ADR-001
- ADR-002
- Engineering Playbook
- Claude Engineering Guide

Strictly.

---

### ✅ TASK-M2-009

Workspace Section Navigation

Implemented:

- Section Navigation card
- Workspace information architecture preview
- Presentation only

# Next Task

TASK-M2-009 complete.

Next task not yet approved.