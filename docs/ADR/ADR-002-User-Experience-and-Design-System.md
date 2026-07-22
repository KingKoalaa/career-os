# ADR-002 — User Experience & Design System

## Status

Accepted

---

# Context

Career OS is a long-term personal operating system designed to help professionals manage every aspect of their career.

The application must prioritize usability, clarity, and maintainability over visual decoration.

This Architecture Decision Record establishes the permanent visual language and user experience principles for the project.

All future UI implementation must follow this document.

---

# Decision

Career OS adopts a **Minimal Operational Design System**.

The interface should resemble modern productivity software rather than traditional enterprise software.

Design decisions should optimize:

- Focus
- Speed
- Clarity
- Consistency

instead of visual complexity.

---

# Design Philosophy

Career OS should feel like:

- Linear
- Notion
- Raycast
- GitHub

It should NOT resemble:

- Bootstrap Admin
- AdminLTE
- ERP software
- CRM dashboards

---

# Core Principles

## Information First

Content is always more important than decoration.

Users should immediately understand:

- where they are
- what they can do
- what requires attention

---

## Minimal Cognitive Load

Every screen should minimize unnecessary choices.

Avoid:

- excessive buttons
- decorative widgets
- unnecessary animations

---

## Consistency

Spacing

Typography

Colors

Components

Interactions

must remain consistent throughout the application.

---

## Replaceability

UI components should remain independent of business logic.

Visual changes should not require application rewrites.

This follows ADR-001.

---

# Typography

Primary Font

Inter

Fallback

System Sans-serif

Font hierarchy

Heading 1

Heading 2

Heading 3

Body

Caption

Avoid decorative fonts.

---

# Color Palette

Primary

Neutral Slate

Accent

Blue

Success

Green

Warning

Amber

Danger

Red

Background

Light Gray / White

Dark Mode

Future milestone.

Not part of Version 1.

---

# Spacing System

Use an 8px spacing grid.

Examples

8

16

24

32

48

Avoid arbitrary spacing values.

---

# Border Radius

Standard

12px

Cards

12px

Buttons

10–12px

Inputs

10px

---

# Shadows

Very subtle.

Shadows should communicate elevation.

Not decoration.

---

# Icons

Use Lucide React.

Do not mix icon libraries.

---

# Layout

Desktop

Permanent sidebar

Tablet

Collapsible sidebar

Mobile

Drawer navigation

Content should remain centered and readable.

---

# Navigation

Navigation represents **Workspaces**, not features.

Initial workspaces

- Home
- Career
- Knowledge
- Projects
- Automation
- Assets
- Settings

Future features belong inside these workspaces.

---

# Cards

Cards should:

- emphasize information
- avoid heavy borders
- maintain generous spacing

Avoid dashboard clutter.

---

# Buttons

Primary

Filled

Secondary

Outlined

Danger

Red

Avoid excessive button styles.

---

# Forms

Labels above fields.

Consistent spacing.

Validation messages below fields.

---

# Animations

Animations should support usability.

Duration

150–200ms

Avoid unnecessary motion.

---

# Responsiveness

Desktop is the primary target.

Tablet and Mobile should preserve functionality without redesigning workflows.

---

# Accessibility

Minimum contrast ratio

WCAG AA

Keyboard navigation

Supported where practical.

Semantic HTML should be preferred.

---

# Performance

Avoid large animation libraries.

Avoid unnecessary dependencies.

Favor native browser capabilities.

---

# Future Themes

Dark Mode

Future milestone.

Do not implement during Version 1.

---

# Implementation Rules

Claude should never invent:

- new colors
- spacing systems
- typography
- interaction styles

If a UI decision is not covered by this ADR,

maintain consistency with the existing design.

Do not redesign established components.

---

# Decision Outcome

Accepted.

This ADR governs every future user interface implementation within Career OS.

Future UI tasks must reference this document before implementation.