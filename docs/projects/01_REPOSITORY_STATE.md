# 01_REPOSITORY_STATE.md

Version: 0.4
Last Updated: July 2026

---

# Purpose

This document describes the current physical repository structure.

Unlike the architecture document, this file should always mirror the actual repository tree.

If a file or folder is added, removed, or renamed, this document should be updated.

---

# Current Repository Structure

```
career-os/

├── app/
│
├── components/
│   ├── Header.jsx
│   ├── HeaderBrand.jsx
│   ├── HeaderWorkspace.jsx
│   ├── HeaderActions.jsx
│   ├── NavigationItem.jsx
│   ├── PageHeader.jsx
│   ├── PageContent.jsx
│   ├── Sidebar.jsx
│   └── WorkspaceContainer.jsx
│
├── config/
│   └── navigation.js
│
├── layouts/
│   ├── AppLayout.jsx
│   ├── RootLayout.jsx
│   └── PageLayout.jsx
│
├── pages/
│   └── HomePage.jsx
│
├── routes/
│   └── AppRouter.jsx
│
├── styles/
│   └── index.css
│
├── main.jsx
├── App.jsx
│
├── docs/
│
├── prompts/
│
├── public/
│
├── services/
│
├── templates/
│
├── tests/
│
├── tools/
│
└── workspace/
```

---

# Current Routing

Implemented

```
/
```

Reserved

```
/career
/knowledge
/projects
/automation
/assets
/settings
```

---

# Current Navigation Configuration

Location

```
app/config/navigation.js
```

Contains

- Home
- Career
- Knowledge
- Projects
- Automation
- Assets
- Settings

Only Home currently contains

```
path: "/"
```

The remaining workspaces intentionally have no route.

---

# Current Layout Components

Application Shell

```
AppLayout
├── Header
├── Sidebar
└── WorkspaceContainer
```

Header

```
Header
├── HeaderBrand
├── HeaderWorkspace
└── HeaderActions
```

Page

```
PageLayout
├── PageHeader
└── PageContent
```

---

# Components That Must Remain Presentation-Only

- Header
- HeaderBrand
- HeaderWorkspace
- HeaderActions
- NavigationItem
- PageLayout
- PageHeader
- PageContent
- WorkspaceContainer

Business logic should never be introduced into these components.

---

# Current Status

Repository Status

✅ Stable

Milestone 1 Complete

Milestone 2 Started

Current Active Task

TASK-M2-002