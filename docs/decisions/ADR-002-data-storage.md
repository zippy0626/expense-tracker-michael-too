# ADR-002: Data Storage Strategy

## Status
**Proposed**

## Context
- We need a simple solution to store structured data
- Data should be persistent, and in this case can be locally stored

## Decision
We will use Dexie.js for local structured data storage

## Consequences

### Positive
- Abstracts IndexedDB's API, which is known to be very confusing
- Simple to setup
- Can store structured data
- Can store more data than LocalStorage

### Negative
- None noted

## Migration Plan
- Weeks 1-4: Using Dexie.js
- Weeks 5-7: Using Dexie.js
- Weeks 8-10: Possibily using Supabase if time permits

## Notes
No notes.