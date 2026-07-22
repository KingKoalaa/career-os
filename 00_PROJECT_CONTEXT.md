# Career OS — Project Context

## Purpose

This document provides the high-level context for Career OS.

It is intended to quickly onboard developers, AI assistants, and future contributors before implementation begins.

Read this document before working on the project.

---

# What is Career OS?

Career OS is a personal career operating system designed to centralize professional knowledge, achievements, resumes, certifications, portfolio assets, and job application workflows into a single structured platform.

Although initially built around the creator's career, the architecture is intentionally designed so it can later support additional users and profiles.

Career OS is both:

- A real productivity application.
- A flagship software engineering portfolio project.

---

# Vision

Create a production-quality application that enables users to manage every aspect of their professional career from one place.

Career OS should eventually support:

- Knowledge management
- Resume generation
- Cover letter generation
- Portfolio management
- Job application tracking
- Interview preparation
- AI-assisted career coaching
- Workflow automation

---

# Primary Design Principle

Build for one.

Design for many.

The application should be optimized around the creator's career first while maintaining an architecture that can support multiple users in the future.

---

# Current Development Phase

Current Phase:

Repository Foundation

Current Milestone:

Milestone 1 — Foundation

Current Status:

Preparing for implementation.

No production application code has been developed yet.

---

# Technology Direction

Career OS will prioritize:

- Simplicity
- Maintainability
- Performance
- Modular architecture

The technology stack should remain lightweight and modern.

Framework decisions should avoid unnecessary complexity and dependency bloat.

---

# Repository Structure

```
career-os/

app/
docs/
prompts/
public/
services/
templates/
tests/
tools/
workspace/
```

Each top-level folder has a single responsibility.

Repository architecture should remain stable throughout development.

---

# Data Model

Workspace data follows these rules:

- One profile = one folder.
- One entity = one JSON file.

Knowledge should remain portable and human-readable.

Avoid proprietary storage formats where possible.

---

# Development Workflow

Every feature follows the same lifecycle:

Product Backlog

↓

Task Specification

↓

Implementation

↓

Review

↓

Commit

↓

Push

↓

Update CHANGELOG

No implementation should skip the task specification stage.

---

# Engineering Standards

Implementation is governed by:

- Claude Engineering Guide
- Task Specification
- Repository Architecture
- Architecture Decision Records (ADR)

Task specifications define **what** to build.

The Engineering Guide defines **how** to build it.

---

# Current Documentation

The repository currently includes:

- Project Charter
- Career Strategy
- Professional Evidence Library
- Master Resume
- Credit Investigation Operations Transformation
- BrightFlow Digital Operations System
- Certifications Master List
- Portfolio Website Knowledge Base
- Employer Problem Library
- Product Backlog
- Claude Engineering Guide
- Task Specifications
- Master Implementation Prompt

These documents form the knowledge base that will power future application features.

---

# Long-Term Goal

Career OS should demonstrate the same level of engineering discipline expected from a professional software product.

Every implementation should improve the application while preserving architecture, maintainability, and code quality.

The repository should showcase:

- Clean Architecture
- Professional Documentation
- Thoughtful Software Design
- AI-Assisted Engineering
- Sustainable Development Practices

---

# Definition of Success

Career OS is successful when:

- Every professional asset exists in one system.
- AI can generate resumes and cover letters using structured knowledge.
- Job applications become repeatable workflows.
- New features can be added without major refactoring.
- The project serves as a flagship portfolio demonstrating software engineering, operations, and workflow automation skills.

---

_End of Project Context_