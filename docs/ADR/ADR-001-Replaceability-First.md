# ADR-001 — Replaceability First Architecture

## Status

Accepted

---

# Context

Career OS is intended to become a long-term software product.

As the application evolves, technologies will inevitably change.

Examples include:

- JSON → SQLite
- SQLite → PostgreSQL
- Local Search → Search Engine
- PWA → Desktop Application
- Local Storage → Cloud Backend

The architecture must support these transitions without requiring large-scale rewrites.

---

# Decision

Career OS adopts a **Replaceability First Architecture**.

Every major subsystem should communicate through well-defined interfaces or service layers rather than directly depending on implementation details.

The application should be designed so that implementations can be replaced while minimizing changes to the rest of the system.

---

# Architectural Principle

Every component should depend on an abstraction, not an implementation.

Examples:

```
UI

↓

RepositoryService

↓

JSON Repository
```

Later:

```
UI

↓

RepositoryService

↓

SQLite Repository
```

Later:

```
UI

↓

RepositoryService

↓

REST API
```

The UI should remain unchanged.

---

# Examples

## Storage

Replace:

JSON

with

SQLite

without changing pages or components.

---

## Search

Replace:

Local JSON search

with

Full-text search

without modifying UI components.

---

## AI Providers

Replace:

Claude

with

OpenAI

or

Gemini

without affecting application workflows.

---

## Desktop

Replace:

PWA

with

Tauri

without redesigning business logic.

---

# Consequences

Positive

- Easier maintenance.
- Easier upgrades.
- Lower technical debt.
- Better testing.
- Cleaner architecture.
- Future-proof design.

Trade-offs

- Slightly more abstraction.
- More planning during implementation.
- Additional service interfaces.

The long-term benefits outweigh the initial complexity.

---

# Implementation Rules

When introducing a new feature:

- UI components must not depend on storage implementations.
- Services should expose stable interfaces.
- Business logic should remain independent of frameworks.
- External libraries should be isolated behind service layers whenever practical.

---

# Decision Outcome

Accepted.

This principle becomes the default architectural guideline for all future development.

Future ADRs should preserve this philosophy unless there is a compelling reason to override it.
