Repository Location:
career-os/docs/

File Name:
10_Development_Operating_Manual.md

Purpose:
Defines the standard development workflow, implementation process, review methodology, architecture governance, documentation requirements, and engineering practices used throughout Career OS. This document serves as the operational handbook for anyone implementing or modifying the project.

Dependencies:
01_Product_Requirements_Document.md
02_Information_Architecture.md
03_Data_Model_and_Knowledge_Schema.md
04_Software_Architecture.md
05_Technology_Stack_and_Tooling.md
06_Product_Design_Specification.md
07_Development_Roadmap.md
08_Engineering_Standards.md
09_Feature_Specifications_and_Acceptance_Criteria.md

---

# Career OS
## Development Operating Manual
### Version 1.0

---

# Purpose

This document defines the standard operating procedure for developing Career OS.

Its objective is to ensure that every implementation follows the approved architecture, documentation, engineering standards, and development workflow.

The implementation process must prioritize correctness, maintainability, and architectural consistency over development speed.

---

# Guiding Principles

Every implementation should:

- Preserve architectural integrity.
- Protect the single source of truth.
- Avoid unnecessary complexity.
- Minimize technical debt.
- Leave the project easier to maintain than before.

---

# Development Workflow

Every development task follows the same workflow.

```
Understand

↓

Analyze

↓

Design

↓

Implement

↓

Review

↓

Test

↓

Approve

↓

Commit
```

No implementation should skip any step.

---

# Step 1 — Understand

Before writing code:

- Read the relevant documentation.
- Understand the business objective.
- Understand the affected features.
- Identify impacted architectural layers.

Implementation should never begin without understanding the problem.

---

# Step 2 — Analyze

Determine:

- Existing functionality.
- Required changes.
- Dependencies.
- Potential risks.

If architectural uncertainty exists, implementation pauses until resolved.

---

# Step 3 — Design

Design the solution before writing code.

Confirm that the solution:

- Respects the Information Architecture.
- Uses existing shared services where possible.
- Does not duplicate business logic.
- Maintains the knowledge model.

---

# Step 4 — Implement

Implementation should:

- Be incremental.
- Be modular.
- Follow engineering standards.
- Preserve readability.

Avoid large, unrelated code changes.

---

# Step 5 — Review

Every implementation should be reviewed against:

- Product Requirements
- Software Architecture
- Engineering Standards
- Feature Specification

Review focuses on correctness rather than personal coding style.

---

# Step 6 — Test

Testing should verify:

- Functional behavior.
- Navigation.
- Search.
- Knowledge integrity.
- Error handling.
- Regression.

No feature should be considered complete without successful testing.

---

# Step 7 — Approve

Before approval, confirm:

✓ Acceptance criteria satisfied.

✓ Documentation updated.

✓ No duplicated knowledge.

✓ Architecture preserved.

✓ Manual testing completed.

---

# Step 8 — Commit

Each completed change should produce:

- Clean commit history.
- Descriptive commit message.
- Updated documentation when necessary.

---

# Architecture Governance

The following must never occur without an approved ADR:

- Repository restructuring.
- Architectural layer changes.
- Knowledge model changes.
- Shared service redesign.
- Major dependency changes.

Architecture remains stable unless intentionally revised.

---

# Documentation Policy

Documentation is part of the product.

Whenever implementation changes:

- Documentation must be reviewed.
- Outdated information must be corrected.
- Version numbers updated when appropriate.

Documentation should never lag behind implementation.

---

# Change Management

Enhancements should follow this order:

1. Product impact
2. Architecture impact
3. Knowledge impact
4. Service impact
5. Application impact
6. Output impact

Changes should always be evaluated from the highest level downward.

---

# Problem Resolution

When encountering implementation problems:

1. Identify the root cause.
2. Verify against existing documentation.
3. Evaluate architectural impact.
4. Implement the simplest correct solution.
5. Update documentation if necessary.

Avoid temporary fixes that introduce technical debt.

---

# Architecture Decision Records

If a change affects architecture:

- Create an ADR.
- Describe the decision.
- Explain the rationale.
- Record consequences.
- Reference affected documents.

Architectural history should always be preserved.

---

# Definition of Complete

A task is complete only when:

✓ Implementation finished.

✓ Acceptance criteria met.

✓ Documentation updated.

✓ Architecture preserved.

✓ Testing passed.

✓ Commit prepared.

---

# Project Philosophy

Career OS should evolve through disciplined engineering rather than rapid feature accumulation.

Every improvement should strengthen the platform's long-term maintainability, consistency, and reliability.

The quality of the architecture is more important than the quantity of features.

---

# Guiding Principle

> Build deliberately.

> Document thoroughly.

> Preserve architecture.

> Protect knowledge.

These principles take precedence over implementation speed.

---

End of Document