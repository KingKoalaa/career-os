# TASK-M0-001 — Project Bootstrap

## Milestone

Milestone 0 — Project Foundation

---

# Objective

Initialize the Career OS application using the approved technology stack and configure the project so future feature development can proceed without changing the repository architecture.

This task creates the engineering foundation only.

No business features should be implemented.

---

# Approved Technology Stack

Framework

- React

Build Tool

- Vite

Language

- JavaScript

Styling

- Tailwind CSS

Routing

- React Router

Icons

- Lucide React

Testing

- Vitest

Application Type

- Progressive Web App (PWA)

---

# Repository Architecture

The existing repository structure is frozen.

Do not rename folders.

Do not create new top-level folders.

Use the existing repository.

```
career-os/

app/
docs/
public/
services/
templates/
tests/
tools/
workspace/
```

The existing services structure must remain unchanged.

```
services/

export/
relationship/
repository/
search/
validation/
```

---

# Scope

This task should only:

- Initialize the React application.
- Configure Vite.
- Install approved dependencies.
- Configure Tailwind CSS.
- Configure React Router.
- Configure Vitest.
- Configure the application as a Progressive Web App.
- Verify the application builds successfully.
- Preserve the existing repository architecture.

---

# Out of Scope

Do NOT implement:

- Dashboard
- Knowledge Repository
- Search
- Resume Builder
- Profile Workspace
- JSON loading
- RepositoryService
- Relationship engine
- Export engine
- Validation engine

Those belong to future tasks.

---

# Required Dependencies

Install only the approved packages.

Core

- react
- react-dom
- vite

Routing

- react-router-dom

Icons

- lucide-react

Styling

- tailwindcss
- postcss
- autoprefixer

Testing

- vitest

PWA

Use the recommended Vite PWA plugin.

Do not introduce additional UI libraries.

---

# Folder Usage

Place implementation files into the existing architecture.

Do not move folders.

Do not create alternative structures.

---

# Success Criteria

The application should:

- Build successfully.
- Run locally.
- Display the default React application.
- Use React Router.
- Have Tailwind configured.
- Have Vitest configured.
- Be ready for future feature implementation.

No Career OS functionality is required yet.

---

# Deliverables

Claude must provide:

## Files Created

List all newly created files.

---

## Files Modified

List every modified file.

---

## Explanation

Explain:

- What was configured.
- Why.
- How the configuration supports future development.

---

## Manual Testing

Describe:

- How to install dependencies.
- How to start the development server.
- How to verify the project works.

---

## Acceptance Checklist

Verify:

- React installed
- Vite configured
- Tailwind configured
- React Router configured
- Vitest configured
- PWA configured
- No console errors
- Builds successfully
- Repository architecture preserved

---

## Suggested Commit

Example:

```
feat: bootstrap Career OS project foundation
```

---

# Architectural Constraints

Follow:

- 00_PROJECT_CONTEXT.md
- Claude Engineering Guide
- ADR-001 Replaceability First

Do not redesign the project.

Do not improve the architecture.

Do not move folders.

Implement only the approved task.