# ADR-001: Initial Technology Stack

## Status
**Accepted**

## Context

- Need to make app components in a fast and modular way
- Need an easy way to style components
- Need a way to manage application state

## Decision
- We will use [React.js](https://react.dev/) for the website/component design
- We will use [Tailwind CSS](https://tailwindcss.com/) for styling components

## Consequences

### Positive

**React.js**
- Combines logic and rendering in one place: a component
- Modular approach via components
- Only need to update one component when state changes, not whole website

**Tailwind CSS**
- Easy to style components
- No need to predefine styling rules

### Negative

**React.js**
- New Learning Curve

**Tailwind CSS**
- Abstracts CSS a lot, can lead to problems debugging
- Can get bloated
- New Learning Curve

## Alternatives Considered

### Option 1: Vanilla HTML/CSS
- **Pros**: Will always work, solid foundation
- **Cons**: Less modular, more manual writing, static
- **Decision**: Too slow, less suited for dynamic apps

## Notes
- No Notes