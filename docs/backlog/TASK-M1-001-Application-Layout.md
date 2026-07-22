# TASK-M1-001 — Application Layout

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
- No implementation outside the defined scope
- If additional work is required, stop and report it instead of expanding the task

---

# Objective

Build the foundational visual layout of Career OS.

# References

Mandatory:

- 00_PROJECT_CONTEXT.md
- Claude Engineering Guide
- ADR-001 — Replaceability First
- ADR-002 — User Experience & Design System

---

# User Story

As a user,

I want Career OS to present a clean and professional application frame,

so that every future workspace feels like part of a single operating system.

---

# Scope

Implement only the structural layout.

Create:

- App Layout
- Header Container
- Sidebar Container
- Workspace Container

These components should contain placeholder content only.

---

# Out of Scope

Do NOT implement:

- React Router
- Navigation
- Sidebar items
- Header actions
- Workspace functionality
- Repository loading
- Search
- Resume Builder
- Portfolio
- Knowledge Base
- Automation
- Theme switching
- Authentication

---

# Layout Structure

```
+-------------------------------------------------------------+
| Header                                                      |
+-------------+-----------------------------------------------+
| Sidebar     |                                               |
|             |                                               |
|             |             Workspace                         |
|             |                                               |
|             |                                               |
|             |                                               |
+-------------+-----------------------------------------------+
```

---

# Placeholder Content

Header

```
Career OS
```

Sidebar

```
Sidebar Placeholder
```

Workspace

```
Workspace Placeholder
```

No additional UI.

---

# Expected Components

Create reusable presentation components.

```
app/layouts/

AppLayout.jsx

app/components/

Header.jsx

Sidebar.jsx

WorkspaceContainer.jsx
```

These components should contain no business logic.

---

# Styling

Follow ADR-002.

Requirements:

- Clean spacing
- Neutral appearance
- Minimal styling
- Responsive containers
- No decorative graphics
- No custom color experimentation

---

# Responsive Behaviour

Desktop

Permanent sidebar.

Tablet

Sidebar collapses gracefully.

Mobile

Sidebar hidden.

Do not implement interaction yet.

Only establish layout responsiveness.

---

# Expected Repository Impact

Only the following areas should change:

```
app/layouts/

app/components/

app/styles/
```

No other folders should be modified.

---

# Acceptance Criteria

The application should:

- Render the complete layout.
- Display Header placeholder.
- Display Sidebar placeholder.
- Display Workspace placeholder.
- Use reusable components.
- Produce no console errors.
- Build successfully.

---

# Manual Testing

Verify:

- Application loads.
- Layout renders correctly.
- Desktop layout is correct.
- Tablet layout remains usable.
- Mobile layout does not break.
- No console warnings.
- No build errors.

---

# Deliverables

Claude must provide:

## Files Created

List every new file.

---

## Files Modified

List every modified file.

---

## Architecture Explanation

Explain how the layout supports future expansion.

---

## Manual Verification

Explain how to verify the layout.

---

## Acceptance Checklist

Verify:

- Header rendered
- Sidebar rendered
- Workspace rendered
- Responsive layout working
- No routing added
- No business logic added

---

# Constraints

Do not:

- redesign the repository
- introduce routing
- introduce navigation
- add placeholder pages
- add application features
- change architecture

Only implement the application layout.

---

# Suggested Commit

```
feat: implement Career OS application layout
```