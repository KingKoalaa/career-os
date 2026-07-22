# TASK-M1-002 — Sidebar Navigation

## Milestone

Milestone 1 — Career OS Interface

---

# Type

Engineering Specification

---

# Estimated Scope

Expected Claude implementation time

30–60 minutes

Expected modified files

3–8 files

Expected review time

5–10 minutes

Maximum acceptable scope

- No more than 10 modified files
- No repository redesign
- No routing implementation
- No business logic
- If additional work is required, stop and report it rather than expanding the scope

---

# Objective

Replace the temporary sidebar placeholder with the permanent Career OS navigation.

This task establishes the reusable navigation framework for every future workspace.

Navigation should be presentation only.

No routing behaviour should be implemented.

---

# References

Mandatory

- 00_PROJECT_CONTEXT.md
- Claude Engineering Guide
- ADR-001 — Replaceability First
- ADR-002 — User Experience & Design System

---

# User Story

As a user,

I want to immediately understand the available Career OS workspaces,

so I always know where information and future functionality will exist.

---

# Scope

Implement only:

- Sidebar navigation UI
- Navigation configuration
- Navigation item component
- Active-state styling (visual only)

No routing.

No click behaviour.

No workspace functionality.

---

# Existing Application Integration

The existing AppLayout and RootLayout established during M1-001 must remain intact.

Replace only the sidebar placeholder.

Do not redesign the layout.

Do not modify routing.

---

# Navigation Model

The sidebar should display the following workspaces.

```
🏠 Home

💼 Career

📚 Knowledge

🚀 Projects

⚙ Automation

📁 Assets

⚙ Settings
```

The visual order must remain consistent.

---

# Navigation Configuration

Do not hardcode menu items directly inside Sidebar.jsx.

Instead create a reusable navigation configuration.

Example structure

```
Navigation Configuration

↓

Sidebar

↓

Navigation Item

↓

Rendered UI
```

Future workspaces should only require updating the configuration.

Sidebar.jsx should not require modification.

---

# Expected Components

Create reusable presentation components.

```
Sidebar

NavigationItem

Navigation Configuration
```

Presentation only.

No business logic.

---

# Styling

Follow ADR-002.

Requirements

- Minimal
- Professional
- Clean spacing
- Clear hierarchy
- Neutral palette
- Lucide React icons
- Consistent hover state
- Simple active-state styling

Do not invent new colors.

Do not redesign the layout.

---

# Responsive Behaviour

Desktop

Full sidebar.

Tablet

Collapsed sidebar.

Mobile

Hidden drawer placeholder only.

Do not implement drawer interaction.

---

# Out of Scope

Do NOT implement

- React Router
- Navigation clicks
- Active route detection
- Workspace logic
- Search
- Settings functionality
- Authentication
- Repository loading

---

# Expected Repository Impact

Expected modified areas

```
app/components/

app/layouts/

app/config/
```

Only modify files required for sidebar implementation.

---

# Acceptance Criteria

The application should

- Replace the sidebar placeholder.
- Display all seven workspaces.
- Use reusable navigation components.
- Use a navigation configuration.
- Produce no console errors.
- Preserve the existing application layout.
- Preserve the existing routing integration.

---

# Manual Testing

Verify

- Sidebar renders correctly.
- Seven workspaces appear.
- Icons display correctly.
- Hover styling works.
- Layout remains unchanged.
- Existing HomePage still renders.
- No console warnings.
- Build succeeds.
- Existing tests continue passing.

---

# Deliverables

Claude must provide

## Files Created

## Files Modified

## Architecture Explanation

## Manual Testing Steps

## Acceptance Checklist

## Suggested Commit

```
feat: implement sidebar navigation framework
```

---

# Constraints

Do not

- redesign the application shell
- modify routing
- implement navigation logic
- implement workspace functionality
- introduce business logic
- expand beyond sidebar navigation

If implementation conflicts with the existing repository, explain the conflict before making changes.