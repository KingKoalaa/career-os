Repository Location:
career-os/docs/

File Name:
05_Technology_Stack_and_Tooling.md

Purpose:
Defines the approved technologies, development tools, external libraries, hosting platform, development environment, version control strategy, and engineering tooling used throughout Career OS.

Dependencies:
01_Product_Requirements_Document.md
02_Information_Architecture.md
03_Data_Model_and_Knowledge_Schema.md
04_Software_Architecture.md

---

# Career OS
## Technology Stack and Tooling
### Version 1.0

---

# Purpose

This document defines the approved technology stack and development tooling for Career OS.

Its purpose is to standardize the technologies used throughout the project and ensure consistent implementation.

Technology decisions should only change through an approved Architecture Decision Record (ADR).

---

# Technology Philosophy

Career OS follows five principles when selecting technologies.

- Free whenever practical
- Lightweight
- Easy to maintain
- Vendor independent
- Replaceable

Technology exists to support the product—not define it.

---

# Application Type

Career OS is implemented as a client-side web application.

Version 1 does not require:

- Backend services
- Dedicated servers
- Authentication
- Databases
- APIs

The application runs entirely in the browser.

---

# Frontend Stack

## Markup

HTML5

Purpose

Provides the application structure.

---

## Styling

Tailwind CSS (CDN)

Purpose

Provides a responsive utility-first design system.

Reason for Selection

- No build process required
- Rapid development
- Excellent documentation
- Lightweight setup

---

## Programming Language

JavaScript (ES6+)

Purpose

Implements application logic and business workflows.

Reason for Selection

- Native browser support
- No compilation required
- Excellent portability

---

# Data Storage

Version 1 stores structured professional knowledge locally.

Storage format:

- JSON

Narrative documentation:

- Markdown

Reason for Selection

- Human readable
- Version control friendly
- Easy migration to future storage technologies

---

# Search Engine

Fuse.js

Purpose

Provides client-side fuzzy search across professional knowledge.

Capabilities include:

- Keyword search
- Partial matches
- Ranked results
- Fast client-side performance

---

# Icons

Lucide Icons

Purpose

Provides a lightweight and consistent icon library.

---

# Development Environment

Primary IDE

Visual Studio Code

Purpose

Source code development and project management.

---

# Version Control

Platform

GitHub

Purpose

Source control

Version history

Issue tracking

Collaboration

Repository backup

---

# Hosting

Platform

Replit

Purpose

Development

Testing

Deployment

Live hosting

Reason for Selection

- Free tier
- Browser-based
- Simple deployment
- GitHub integration

---

# Documentation Format

Planning documents

Markdown

Knowledge documentation

Markdown

Structured data

JSON

Configuration

Text-based formats

---

# Browser Support

Career OS targets modern evergreen browsers.

Supported:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

Legacy browsers are outside Version 1 scope.

---

# External Dependencies

Approved external libraries:

- Tailwind CSS
- Fuse.js
- Lucide Icons

Additional dependencies require architectural review before adoption.

---

# AI Tooling

Career OS is AI-assisted but AI-independent.

Approved AI tools may include:

- ChatGPT
- Claude
- Gemini

AI assists with:

- Content generation
- Resume drafting
- Prompt refinement
- Professional writing

Career OS must remain fully functional without requiring any AI service.

---

# Engineering Principles

Technology choices should prioritize:

- Simplicity
- Stability
- Readability
- Maintainability
- Low dependency count

The simplest solution that satisfies the requirement should be preferred.

---

# Future Considerations

Potential future technologies include:

- SQLite
- IndexedDB
- Progressive Web App (PWA)
- Authentication
- Cloud synchronization
- API integrations

These are intentionally excluded from Version 1.

---

# Guiding Principle

> Technologies will evolve.

> Professional knowledge should not.

Career OS should remain portable and maintainable regardless of future technology changes.

---

End of Document