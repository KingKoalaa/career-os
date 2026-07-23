# TASK-M1-004 — Page Layout Framework

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

- No routing changes
- No application state
- No business logic
- No repository redesign
- No reusable page APIs
- No future-proof abstractions beyond the current milestone

---

# Objective

Replace the temporary splash screen with a reusable page layout structure.

The purpose of this task is to establish the structural composition shared by future pages.

This milestone is **NOT** intended to design a reusable page API.

Only establish the physical layout.

---

# Existing Repository

Reuse existing:

- WorkspaceContainer
- AppLayout
- Header
- Sidebar

Do not recreate them.

Do not modify them.

---

# Required Components

Create

app/components/PageHeader.jsx

app/components/PageContent.jsx

app/layouts/PageLayout.jsx

Modify

app/pages/HomePage.jsx

---

# Required Structure

```
PageLayout

├── PageHeader
└── PageContent
```

PageLayout exists only to compose these two components.

It should not own page data.

It should not receive title props.

It should not receive subtitle props.

It should not define a reusable API.

---

# PageHeader

Presentation only.

Display exactly:

Title

```
Home
```

Subtitle

```
Welcome to Career OS.
```

No props.

No routing.

No breadcrumbs.

No actions.

No search.

---

# PageContent

Presentation only.

Display exactly:

```
Home workspace is under construction.
```

Do NOT center content.

Do NOT apply page-specific alignment.

Do NOT receive children.

Simply represent the reusable content region.

Future pages will replace this implementation.

---

# PageLayout

Responsibilities

- arrange PageHeader
- arrange PageContent

Nothing else.

Do not introduce props.

Do not introduce children.

Do not introduce slots.

Do not introduce reusable APIs.

The layout itself is reusable.

Its implementation is intentionally static during Milestone 1.

---

# HomePage

Replace the previous splash implementation.

Render only:

```jsx
<PageLayout />
```

HomePage should not contain layout markup.

---

# Styling

Continue using Tailwind.

Reuse existing spacing.

Reuse existing typography.

No custom CSS.

No animations.

---

# Out of Scope

Do NOT implement

- reusable title props
- reusable subtitle props
- reusable children APIs
- slots
- render props
- dashboard cards
- widgets
- search
- breadcrumbs
- buttons
- actions
- routing integration
- business logic

Do not design for future pages.

Implement only the current page.

---

# Repository Preservation

Do not modify

- Header
- Sidebar
- NavigationItem
- navigation.js
- AppLayout
- RootLayout

unless absolutely necessary.

---

# Acceptance Criteria

✓ PageLayout created

✓ PageHeader created

✓ PageContent created

✓ HomePage renders PageLayout

✓ Existing routing preserved

✓ Existing shell preserved

✓ No reusable API introduced

✓ No props introduced

✓ No business logic introduced

✓ Builds successfully

---

# Deliverables

Expected new files

- app/layouts/PageLayout.jsx
- app/components/PageHeader.jsx
- app/components/PageContent.jsx

Expected modified files

- app/pages/HomePage.jsx

No additional files.