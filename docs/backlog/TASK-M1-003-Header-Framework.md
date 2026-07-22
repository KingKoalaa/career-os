# TASK-M1-003 — Header Framework

## Milestone

Milestone 1 — Career OS Interface

---

# Type

Engineering Specification

---

# Estimated Scope

Expected implementation time

30–60 minutes

Expected modified files

3–6 files

Maximum acceptable scope

- No more than 8 modified files
- No routing changes
- No state management
- No business logic
- No search implementation
- No notifications
- No user authentication

If additional work is required, stop and report it instead of expanding scope.

---

# Objective

Transform the temporary application header into a reusable framework that will support future Career OS functionality.

The implementation should establish the permanent structural layout of the application header while remaining presentation-only.

No interactive behavior is required.

---

# Existing Repository

The repository already contains:

- AppLayout
- Header
- Sidebar
- WorkspaceContainer

Reuse existing implementations.

Do not recreate them.

Extend them.

---

# Required Components

Create:

app/components/HeaderBrand.jsx

app/components/HeaderWorkspace.jsx

app/components/HeaderActions.jsx

---

Modify:

app/components/Header.jsx

---

# Header Layout

Desktop

---------------------------------------------------------

Career OS | Workspace Title | Reserved Actions Area

---------------------------------------------------------

Requirements

HeaderBrand

Displays:

Career OS

No logo required.

No routing.

---

HeaderWorkspace

Display static text:

Home

This is a placeholder.

Do not derive it from routing.

No state.

---

HeaderActions

Reserve space for future functionality.

Display:

Coming Soon

Right aligned.

Presentation only.

---

# Layout Requirements

Use flexbox.

Three sections:

Left

Brand

Center

Workspace

Right

Actions

Header height should remain visually consistent with M1-001.

---

# Styling

Continue using Tailwind utilities only.

Do not introduce:

- custom CSS
- CSS modules
- new color systems
- new spacing systems

Follow ADR-002.

---

# Out of Scope

Do NOT implement:

- search
- notifications
- command palette
- profile menu
- settings menu
- breadcrumbs
- routing integration
- click handlers
- state management
- context
- Redux
- Zustand

Presentation only.

---

# Repository Preservation

Do not modify:

- AppLayout
- RootLayout
- Sidebar
- NavigationItem
- navigation.js

unless absolutely necessary.

Header changes should remain isolated.

---

# Acceptance Criteria

✓ Header divided into three reusable sections

✓ HeaderBrand created

✓ HeaderWorkspace created

✓ HeaderActions created

✓ Header uses reusable child components

✓ Existing layout preserved

✓ Existing routing preserved

✓ No business logic introduced

✓ No console errors

✓ Builds successfully

---

# Deliverables

Expected new files

- HeaderBrand.jsx
- HeaderWorkspace.jsx
- HeaderActions.jsx

Expected modified files

- Header.jsx

No other files should require modification.