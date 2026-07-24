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

- React
- Vite
- Tailwind
- React Router
- Folder architecture
- Engineering documentation

---

## Milestone 1

✅ Application Shell

Implemented:

- Root Layout
- App Layout
- Sidebar
- Header
- Navigation
- Workspace Container
- Page Layout framework
- Responsive application shell

---

## Milestone 2

### ✅ TASK-M2-001

Routing Foundation

Implemented:

- React Router integration
- Root route
- Sidebar routing support

---

### ✅ TASK-M2-002

Workspace Routing Expansion

Implemented:

- Home
- Career
- Knowledge
- Projects
- Automation
- Assets
- Settings

Each workspace now has:

- Route
- Placeholder page
- Shared PageLayout

---

### ✅ TASK-M2-003

Home Dashboard Skeleton

Implemented:

- Quick Actions
- Today's Focus
- Recent Activity
- Upcoming Modules

Static presentation only.

No business logic.

---

### ✅ TASK-M2-004

Home Dashboard Layout Refinement

Implemented:

- Improved desktop whitespace
- Centered content container
- Better spacing hierarchy
- Improved tablet responsiveness
- Consistent dashboard padding

No business logic added.

No reusable dashboard framework introduced.

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

# Next Task

## TASK-M2-005

Dashboard Widgets

Planned widgets include:

- Resume Progress
- Active Job Applications
- Certification Progress
- Portfolio Status
- Weekly Goals
- Recent Activity

This milestone introduces the first dashboard widgets while remaining presentation-first before business logic is added.