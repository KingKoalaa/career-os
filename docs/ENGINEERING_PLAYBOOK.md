# Career OS Engineering Playbook

Version: 1.0

Status: Active

Last Updated: July 2026

---

# Purpose

This document defines the engineering workflow for Career OS.

Its objective is to ensure every feature is developed consistently, reviewed thoroughly, and integrated with minimal architectural risk.

This playbook governs how ChatGPT, Claude, GitHub, and the repository interact throughout development.

It is the authoritative engineering workflow for the project.

---

# Engineering Principles

Career OS is built around five principles.

## 1. Architecture Before Features

Architecture is designed before implementation.

Features should extend the architecture rather than reshape it.

---

## 2. Small Engineering Tasks

Large implementations are prohibited.

Every task should be independently reviewable.

Target implementation time:

30–60 minutes.

---

## 3. Repository Stability

Preserve working code whenever possible.

Extend existing implementations.

Avoid unnecessary rewrites.

---

## 4. Replaceability First

Components should be easy to replace.

Configuration should drive behaviour whenever practical.

Hardcoded business logic inside UI components is discouraged.

---

## 5. Continuous Review

Every implementation is reviewed before entering the repository.

Nothing is committed without architecture review.

---

# Development Roles

## ChatGPT

Acts as:

- Product Manager
- Solution Architect
- Engineering Manager
- Technical Lead
- Code Reviewer
- QA Reviewer
- Repository Strategist

Responsibilities:

- Define architecture.
- Produce Engineering Specifications.
- Review every implementation.
- Protect repository consistency.
- Approve commits.

ChatGPT does not write production code unless explicitly requested.

---

## Claude

Acts as:

Senior Software Engineer.

Responsibilities:

- Implement Engineering Specifications.
- Preserve architecture.
- Generate production-ready code.
- Explain implementation.
- Produce testing instructions.

Claude does not decide architecture.

---

# Development Lifecycle

Every engineering task follows the same workflow.

```
Engineering Specification

↓

Claude Assessment

↓

Implementation

↓

Architecture Review

↓

Code Review

↓

Manual Testing

↓

Commit

↓

Push

↓

CHANGELOG Update

↓

Project Context Update

↓

Next Task
```

No shortcuts.

---

# Engineering Specification

Every feature begins with a specification.

Specifications define:

- scope
- objective
- deliverables
- constraints
- acceptance criteria

Specifications are implementation authority.

---

# Existing Repository Rule

Before implementing:

Inspect existing files.

Extend existing implementations.

Do not recreate working components.

If architecture conflicts exist:

Stop.

Explain.

Request confirmation.

---

# Code Review Checklist

Every implementation is reviewed for:

- Architecture
- Repository preservation
- Scope compliance
- ADR compliance
- Readability
- Replaceability
- Simplicity
- Build stability

---

# Architecture Review

Questions asked during review:

Does this preserve architecture?

Can this be replaced later?

Can this be configured?

Does it introduce unnecessary coupling?

Does it belong in this milestone?

---

# Testing Checklist

Minimum verification:

- npm run build
- npm test
- npm run dev

Visual inspection.

Console inspection.

Acceptance Criteria verification.

---

# Commit Workflow

One feature.

One commit.

Example:

```
feat: implement sidebar navigation framework
```

Do not combine unrelated work.

---

# GitHub Workflow

Feature complete.

↓

Review complete.

↓

Tests passing.

↓

Commit.

↓

Push.

GitHub is the repository of record.

---

# CHANGELOG Workflow

Every completed engineering task updates:

CHANGELOG.md

Include:

- Added
- Changed
- Fixed (if applicable)

---

# Project Context Workflow

When architecture changes:

Update:

```
docs/00_PROJECT_CONTEXT.md
```

Minor implementation details do not require context updates.

---

# Architecture Decision Records

Update an ADR only when:

- architecture changes
- engineering philosophy changes
- repository standards change

Do not update ADRs for normal feature development.

---

# Definition of Done

A task is complete only when:

- Engineering Specification satisfied
- Architecture reviewed
- Code reviewed
- Tests passing
- Repository preserved
- CHANGELOG updated
- Code committed
- Code pushed

Only then may the next task begin.

---

# Repository Philosophy

Career OS should evolve through incremental engineering.

Avoid:

- large rewrites
- speculative features
- architecture churn

Prefer:

- small improvements
- stable architecture
- predictable development
- maintainable software

The objective is long-term maintainability rather than rapid feature accumulation.