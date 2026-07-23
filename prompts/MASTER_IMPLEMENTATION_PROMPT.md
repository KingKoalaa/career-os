# Career OS — Implementation Prompt

You are implementing a task for the Career OS repository.

Repository:

https://github.com/KingKoalaa/career-os

This repository is the authoritative source of truth.

---

# Repository Access Policy

Before making any implementation decisions, inspect the repository.

Read the project documentation from the repository itself.

Do NOT ask me to paste repository files unless ALL of the following are true:

1. GitHub cannot be accessed.
2. The repository cannot be cloned or inspected.
3. The required file genuinely cannot be located.

If repository access fails, explain the failure explicitly instead of requesting large portions of the codebase.

The repository—not this conversation—is the source of truth.

---

# Required Documentation

Before writing code, read and follow the current versions of:

docs/projects/
- 00_PROJECT_CONTEXT.md
- 01_ARCHITECTURE_AND_REPOSITORY_STATE.md
- career-os.md

docs/engineering/
- 12_Claude_Engineering_Guide.md

docs/adr/
- ADR-001-Replaceability-First.md
- ADR-002-UX-and-Design-System.md

These documents define the repository architecture, implementation rules, engineering philosophy, coding standards, ADRs, and project history.

Do not rely on assumptions or previous conversations.

---

# Task

The task specification will be supplied separately.

Treat that task markdown as the implementation contract.

Everything outside the task is out of scope unless required for compilation or integration.

---

# Engineering Requirements

Before implementation:

1. Inspect the existing repository.
2. Understand the current implementation.
3. Identify affected files.
4. Determine whether the task conflicts with the repository.
5. If a conflict exists, stop and explain it instead of silently choosing an interpretation.

---

# Repository Preservation Rules

Preserve the existing architecture.

Do not redesign.

Do not rename folders.

Do not reorganize modules.

Do not introduce new patterns unless explicitly required.

Do not create abstractions "for future use."

Follow YAGNI.

Follow ADR-001.

Follow ADR-002.

---

# Implementation Rules

Modify only files necessary for the task.

Prefer minimal patches.

Avoid touching unrelated code.

Do not refactor unrelated files.

Do not "improve" surrounding code unless explicitly requested.

---

# Output Format

Produce your response in this order:

## Existing Repository Assessment

Summarize:

- Current architecture
- Relevant files
- Existing implementation
- Potential conflicts
- Assumptions (if any)

---

## Files Created

List every newly created file.

---

## Files Modified

List every modified file.

---

## Complete Code

Provide the complete contents of every created file.

For modified files, provide either:

- complete updated file

or

- minimal patch

depending on which is smaller and clearer.

---

## Architecture Explanation

Explain:

- what changed
- why
- how it integrates with the repository
- how it follows the ADRs

---

## Manual Testing Steps

Provide step-by-step verification.

---

## Acceptance Checklist

Verify every requirement from the task.

---

## Repository State Disclaimer

State whether the implementation was based on:

- the actual inspected repository

or

- assumptions due to repository access limitations.

---

## Suggested Commit Message

Provide a Conventional Commit message.

---

# Important

If the repository differs from the task specification:

STOP.

Explain the conflict.

Do not silently redesign the repository.

Do not guess.

Wait for clarification if necessary.