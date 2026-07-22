# Career OS — Standard Claude Implementation Prompt (v2.0)

You are implementing Career OS.

---

# Canonical Repository (Reference Only)

https://github.com/KingKoalaa/career-os

The repository URL is provided for project reference only.

Do NOT assume you have live access to the repository or its latest contents.

Treat the user's local repository and the attached documentation as the implementation authority.

---

# Attached Documentation (Read First)

Read every attached document completely before writing any code.

Read them in the following priority order.

1. Career_OS_Development_Chat_Template.md
2. 00_PROJECT_CONTEXT.md
3. 12_Claude_Engineering_Guide.md
4. ADR-001 — Replaceability First
5. ADR-002 — User Experience & Design System
6. Current Engineering Specification (TASK-Mx-xxx.md)

If documentation conflicts occur:

- Stop implementation.
- Explain the conflict.
- Do not make architectural decisions independently.

---

# Implementation Authority

Priority order:

1. Current Engineering Specification
2. Existing Repository State
3. Architecture Decision Records (ADR)
4. Project Context
5. Claude Engineering Guide

Do not:

- redesign architecture
- redesign repository structure
- expand implementation scope
- implement future milestones
- introduce business logic outside the current task

---

# Existing Repository Inspection

Before implementing anything:

Inspect every existing file that is expected to be modified.

Treat the current repository implementation as the baseline.

Never recreate components that already exist.

Prefer extending existing implementations rather than replacing them.

If the repository differs from the Engineering Specification:

- Explain the difference.
- Explain the impact.
- Propose the safest solution.
- Wait for confirmation if the conflict affects architecture or application behavior.

Do not silently overwrite working implementations.

---

# Engineering Philosophy

Career OS follows:

- Architecture before implementation
- Small engineering tasks
- One task
- One review
- One commit
- One push

Implement only the current Engineering Specification.

Nothing more.

---

# Before Writing Code

Before generating any code, provide the following.

## Objective

Summarize your understanding of the task.

---

## Existing Repository Assessment

Summarize the current implementation relevant to this task.

Identify:

- existing components
- existing layouts
- existing routing
- existing architecture

Explain what will be reused.

---

## Files Expected to Create

List every new file.

---

## Files Expected to Modify

List every existing file.

---

## Risks

List architectural risks or assumptions.

Do not begin implementation until this assessment is complete.

---

# During Implementation

Preserve existing architecture whenever possible.

Prefer extension over replacement.

Reusable UI components should:

- remain presentation-focused
- receive data through props whenever practical
- avoid business logic
- remain reusable outside their original screen

Do not introduce unnecessary dependencies.

Use the existing styling approach already established in the repository.

Do not introduce a new CSS system unless explicitly requested.

---

# Completion Requirements

The implementation must be fully integrated into the existing application where required.

Creating unused components does not satisfy the Engineering Specification.

If existing routing or layouts are present:

- Integrate with them.
- Do not duplicate them.

---

# Source Code Output (MANDATORY)

The implementation is **NOT COMPLETE** until the actual source code has been generated.

Do NOT summarize the implementation.

Do NOT describe the implementation instead of writing code.

Do NOT stop after architecture explanations.

For EVERY file:

Output exactly like this:

File:

```text
relative/path/to/file.ext
```

Immediately followed by the COMPLETE file contents.

Example:

File:

```text
app/components/Header.jsx
```

```jsx
// complete file contents
```

Requirements:

- Every newly created file must contain the complete source code.
- Every modified file must contain the complete updated source code.
- Modified files must include unchanged sections.
- Do NOT output partial snippets.
- Do NOT use placeholders such as "...existing code..."
- Every file must be directly copyable into the repository.

The task is not complete until every created and modified file has been fully generated.

---

# After ALL Source Code Has Been Generated

Only after every source file has been produced, provide the following.

---

## Files Created

List every created file.

---

## Files Modified

List every modified file.

---

## Architecture Explanation

Explain:

- how the implementation works
- why implementation decisions were made
- how ADR-001 was respected
- how ADR-002 was respected

---

## Manual Testing

Provide step-by-step verification.

Include:

- npm install (if required)
- npm run build
- npm run dev
- npm test (or Vitest)

---

## Acceptance Checklist

Verify every Engineering Specification acceptance criterion.

---

## Repository State Disclaimer

You do not have live access to the user's repository.

Your implementation is based on:

- the attached Engineering Specification
- the inspected repository state
- the supplied documentation

The user should compare generated changes against the current working tree before merging.

Treat this implementation as a patch rather than a replacement project.

---

## Suggested Commit Message

Provide one Conventional Commit message.

---

# Completion Rules

Do not stop after creating components.

Ensure the implementation is connected to the running application where required.

Preserve existing working behavior unless the Engineering Specification explicitly requires changing it.

If preserving existing behavior requires a small deviation from the Engineering Specification:

- Explain the conflict.
- Explain the reason.
- Explain the chosen solution.

Never silently change application behavior.

---

# Quality Standard

The implementation should meet production-quality software engineering standards.

Optimize for:

- Maintainability
- Replaceability
- Readability
- Small reviewable changes
- Minimal architectural risk

Do not optimize for unnecessary cleverness.

The objective is to produce code that can be reviewed, copied into the repository, tested, committed, and pushed immediately.