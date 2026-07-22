# Claude Engineering Guide

## Purpose

This document defines the engineering standards for developing Career OS.

Every implementation task must follow this guide.

Task specifications describe **what** to build.

This document defines **how** it must be built.

If there is any conflict between a task specification and this guide, this guide takes precedence unless an Architecture Decision Record (ADR) explicitly overrides it.

---

# Project Philosophy

Career OS is not a demonstration project.

It is intended to become a production-quality software application that showcases professional software engineering, clean architecture, maintainability, and AI-assisted development.

Every implementation decision should favor:

- Readability
- Simplicity
- Maintainability
- Extensibility
- Consistency

Avoid clever solutions when a simple solution is sufficient.

---

# Development Principles

Claude should:

- Build one feature at a time.
- Never modify unrelated features.
- Minimize side effects.
- Keep commits focused.
- Never introduce unnecessary complexity.
- Never rewrite working code unless required.

---

# Architecture

Career OS follows a layered architecture.

```
UI

↓

Application

↓

Services

↓

Knowledge Repository

↓

Storage
```

Business logic must never exist inside UI components.

---

# Folder Responsibilities

## app/

Contains:

- Pages
- Layouts
- Components
- Routing
- Styling

Must never contain:

- Business logic
- Repository loading
- Search algorithms

---

## services/

Contains:

- Repository services
- Search services
- Validation
- Export
- Relationship engine

Services should remain framework-independent.

---

## workspace/

Contains user-managed data.

One profile equals one folder.

One entity equals one JSON file.

---

## docs/

Contains documentation only.

No executable code.

---

# Component Standards

Components should:

- Have one responsibility.
- Be reusable.
- Avoid duplicated logic.
- Prefer composition over inheritance.

---

# Naming Convention

Components

```
KnowledgeCard.jsx
```

Pages

```
DashboardPage.jsx
```

Services

```
RepositoryService.js
```

Utilities

```
DateFormatter.js
```

JSON

```
achievement-001.json
```

---

# Styling

Prefer:

- Clean whitespace
- Consistent spacing
- Neutral color palette
- Modern productivity software appearance

Avoid:

- Excessive gradients
- Decorative effects
- Flashy animations

Career OS should resemble:

- Notion
- Linear
- GitHub
- Raycast

Rather than gaming dashboards.

---

# Code Quality

Prefer:

Small files.

Small functions.

Descriptive names.

Self-documenting code.

Comments should explain **why**, not **what**.

---

# Error Handling

Never silently ignore errors.

Always:

- Validate input.
- Return useful errors.
- Keep failure predictable.

---

# Performance

Optimize only when necessary.

Prefer readable code over premature optimization.

---

# Dependencies

Before adding any dependency:

Ask:

Does the browser already provide this?

Can this be implemented simply?

Does it significantly reduce maintenance?

Avoid dependency bloat.

---

# AI Development Rules

Claude should never:

- Invent requirements.
- Add features outside task scope.
- Change repository architecture.
- Rename folders.
- Move files.

If additional work is required:

Recommend it separately.

Do not implement it automatically.

---

# Definition of Done

A task is complete only if:

✓ Acceptance criteria satisfied

✓ No console errors

✓ Responsive where applicable

✓ Follows repository architecture

✓ Code is readable

✓ No unnecessary dependencies

✓ No dead code

✓ Ready for commit

---

# Commit Convention

Use Conventional Commits.

Examples:

```
feat: implement knowledge repository

fix: resolve repository indexing bug

docs: update engineering guide

refactor: simplify repository loader

test: add search service tests

chore: update dependencies
```

---

# Pull Request Philosophy

Every completed task should represent a complete, reviewable improvement.

Avoid combining multiple unrelated features into one implementation.

---

# Development Workflow

Task Specification

↓

Implementation

↓

Self Review

↓

Acceptance Checklist

↓

Commit

↓

Push

↓

Update CHANGELOG

---

# Long-Term Goal

Career OS should be developed as though it will eventually become a commercial software product.

Every implementation decision should improve the software without sacrificing maintainability.

Quality is always preferred over speed.

---

## Repository State Disclaimer

Claude does not have live access to the user's current repository unless explicitly provided.

Every implementation must be treated as a patch generated from the supplied documentation and Engineering Specification.

Before merging:

- Compare generated files against the current repository.
- Preserve existing architecture.
- Avoid replacing the project wholesale.
- Modify only files required by the current task.

Claude should explicitly remind the user to perform a file-by-file comparison before committing changes.

_End of Claude Engineering Guide_