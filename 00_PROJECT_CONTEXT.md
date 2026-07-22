# Career OS — Project Context

## Purpose

Career OS is a long-term personal operating system designed to help professionals manage every aspect of their career through structured knowledge, reusable assets, workflow automation, and operational systems.

The project prioritizes:

- Replaceability
- Maintainability
- Professional engineering practices
- Incremental development
- Small, reviewable implementation tasks

Career OS is developed as both:

- A production software project
- A portfolio demonstrating professional software engineering and operations design

---

# Canonical Repository

GitHub

https://github.com/KingKoalaa/career-os

This repository is the canonical source of truth for Career OS.

The repository URL is provided as project reference only.

AI assistants should **not assume live access** to the repository unless explicitly provided by the user.

Implementation decisions must always be based on:

1. The attached Engineering Specification.
2. The attached Architecture Decision Records (ADRs).
3. The user's current working repository.
4. This Project Context document.

---

# Documentation Authority

Career OS follows a strict documentation hierarchy.

Highest priority

1. Engineering Specification (Current Task)

↓

2. Architecture Decision Records (ADR)

↓

3. Project Context

↓

4. Claude Engineering Guide

↓

5. Existing Repository

If documentation conflicts occur:

- Stop implementation.
- Explain the conflict.
- Ask for clarification.

Never resolve architectural conflicts independently.

---

# Engineering Philosophy

Career OS follows several permanent principles.

- Architecture before implementation.
- Small engineering tasks over large milestones.
- One task.
- One review.
- One commit.
- One push.
- Every implementation must be independently reviewable and reversible.

Business functionality should never be introduced outside the current Engineering Specification.

---

# Architectural Principles

Architecture is considered frozen unless modified by an approved ADR.

Claude must never:

- redesign repository architecture
- introduce new architectural patterns
- reorganize project structure
- expand implementation scope

without explicit instruction.

---

# User Experience Philosophy

Career OS is a professional operating system.

It should feel similar to:

- Linear
- Notion
- Raycast
- GitHub

It should **not** resemble:

- AdminLTE
- Bootstrap Admin
- Traditional CRM software
- ERP dashboards

User interface decisions are governed by ADR-002.

---

# Development Workflow

Every implementation follows the same workflow.

Engineering Specification

↓

Claude Implementation

↓

ChatGPT Architecture & Code Review

↓

Repository Merge

↓

Verification

- npm install
- npm run dev
- Browser verification

↓

Commit

↓

Push

↓

Update CHANGELOG

↓

Next Engineering Specification

---

# Repository State

Claude does not have live access to the repository unless explicitly provided.

Every implementation should be treated as a patch against the user's current working tree.

Claude must remind the user to compare generated files against the current repository before merging.

---

# Current Development Strategy

Career OS is developed incrementally.

Milestones are business objectives.

Engineering Tasks are implementation units.

Each Engineering Task should:

- have one objective
- modify a limited number of files
- be reviewable in isolation
- be reversible
- remain within the approved scope

This strategy minimizes implementation drift and improves long-term maintainability.