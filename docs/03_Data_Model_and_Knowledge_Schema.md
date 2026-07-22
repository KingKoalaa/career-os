Repository Location:
career-os/docs/

File Name:
03_Data_Model_and_Knowledge_Schema.md

Purpose:
Defines the professional knowledge domain model used throughout Career OS. This document establishes the entities, relationships, ownership, and validation rules that form the single source of truth for all professional information. It is implementation-agnostic and serves as the foundation for storage formats, business logic, and future application development.

Dependencies:
01_Product_Requirements_Document.md
02_Information_Architecture.md

---

# Career OS
## Data Model and Knowledge Schema
### Version 1.0

---

# Purpose

This document defines the professional knowledge model used throughout Career OS.

Rather than describing storage formats or implementation details, it establishes the logical entities, their responsibilities, and the relationships between them.

The data model represents the single source of truth for every professional asset managed by Career OS.

---

# Data Modeling Principles

Career OS follows four principles:

## Single Source of Truth

Every professional fact exists only once.

---

## Entity-Based Design

Professional knowledge is organized as entities rather than documents.

---

## Relationship-Driven

Entities reference one another instead of duplicating information.

---

## Implementation Independence

The data model is independent of storage technology.

Whether knowledge is stored as JSON, a relational database, or another format does not change this model.

---

# Core Entities

Career OS consists of the following primary entities.

## Experience

Represents a professional role.

Owns:

- Responsibilities
- Employment metadata

References:

- Projects
- Achievements
- Skills
- Stories

---

## Project

Represents work performed for an employer, client, portfolio, or personal initiative.

References:

- Experience
- Achievements
- Skills
- Employer Problems
- Portfolio Assets

---

## Achievement

Represents a measurable professional outcome.

References:

- Experience
- Projects
- Skills
- Stories
- Resume Assets
- LinkedIn Assets
- Upwork Assets

---

## Skill

Represents a professional capability.

Referenced by nearly every entity.

Skills never own information.

---

## Story

Represents a reusable professional narrative.

Supports:

- Interviews
- Behavioral Questions
- Case Studies

Stories reference multiple entities rather than repeating them.

---

## Certification

Represents verified learning.

May reference:

- Skills
- Projects

---

## Employer Problem

Represents a business problem solved by professional experience.

Examples include:

- Workflow inefficiency
- Process inconsistency
- Poor visibility
- Communication gaps
- Manual operations

Employer Problems connect business needs to professional evidence.

---

## Platform Asset

Represents content prepared for a specific platform.

Examples:

- Resume
- LinkedIn
- Upwork
- Portfolio

Platform Assets reference existing knowledge rather than duplicating it.

---

## Application Record

Represents an individual job application.

Stores application-specific information without modifying professional knowledge.

---

## Template

Represents reusable structures used by Career OS.

Examples:

- Resume templates
- Interview templates
- Proposal templates

---

# Entity Relationships

Professional knowledge is interconnected.

```
Experience

↓

Projects

↓

Achievements

↓

Skills

↓

Employer Problems

↓

Stories

↓

Platform Assets
```

Entities may participate in multiple relationships simultaneously.

---

# Ownership Rules

Only one entity owns each piece of information.

Relationships are created through references rather than duplication.

Applications consume entities but never become owners.

Outputs never own professional knowledge.

---

# Validation Rules

Every entity should:

- Possess a unique identifier.
- Have a clearly defined owner.
- Support relationships.
- Avoid duplicated information.
- Remain reusable across multiple workflows.

---

# Future Extensibility

New entities may be introduced without modifying existing relationships.

Examples:

- Publications
- Awards
- Volunteer Experience
- Professional Goals
- Learning Plans

The existing model should remain stable as Career OS evolves.

---

# Guiding Principle

> Professional knowledge is modeled as connected entities rather than isolated documents.

This enables Career OS to preserve information once while supporting unlimited professional workflows.

---

End of Document