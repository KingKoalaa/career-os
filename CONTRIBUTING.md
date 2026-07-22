# Contributing to Career OS

Thank you for your interest in Career OS.

Career OS is a professional software project focused on AI-assisted career management, workflow automation, and knowledge-driven job acquisition. The project is currently maintained by its creator, but contributions may be accepted in the future.

---

# Development Philosophy

Every change should improve one of the following:

- User experience
- Maintainability
- Performance
- Reliability
- Documentation

Architecture decisions should prioritize long-term maintainability over short-term convenience.

---

# Repository Structure

The repository is organized into the following primary areas:

- `/app` – User interface and presentation layer.
- `/services` – Business logic and reusable services.
- `/workspace` – Profile-specific knowledge and user-managed data.
- `/templates` – Reusable templates.
- `/public` – Static assets.
- `/docs` – Project documentation and architecture.

---

# Branch Strategy

The default branch is:

main

Feature development should use descriptive feature branches.

Example:

feature/dashboard

feature/search

feature/repository-loader

---

# Commit Convention

Career OS follows Conventional Commits.

Examples:

feat: implement dashboard navigation

fix: resolve repository loading issue

docs: update development roadmap

refactor: simplify search indexing

test: add repository service tests

chore: update project dependencies

---

# Pull Requests

Every pull request should:

- Focus on one feature or fix.
- Include a clear description.
- Avoid unrelated changes.
- Keep commits focused and readable.

---

# Coding Standards

- Prefer readable code over clever code.
- Follow the documented architecture.
- Avoid premature optimization.
- Keep modules small and focused.
- Document non-obvious decisions.

---

# Documentation

When introducing a new feature:

- Update documentation if behavior changes.
- Add or update architecture notes when appropriate.
- Record significant architectural changes using an Architecture Decision Record (ADR).

---

# Testing

New functionality should be verified before merging.

Testing requirements will expand as Career OS evolves.

---

# Questions

For questions or suggestions, please open a GitHub Issue.

Thank you for helping improve Career OS.