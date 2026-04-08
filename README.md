# Wyatt Role Guide

A React + TypeScript demo application for Wyatt that helps Unanet AE firm users understand how Wyatt helps them in their role.

The app is built for demo use, internal enablement, and future expansion. It is intentionally specific to architecture, engineering, and project-based firms rather than generic AI software.

## Visual theme

The theme was pushed harder into green across the whole app so the experience feels more Wyatt-specific and less like a generic SaaS dashboard.

### What changed

- Shifted all Wyatt capability accents into a green-family palette:
  - Roundups: emerald
  - Chores: olive
  - Chats: teal-green
  - Integrations: pine
  - Labs: sage
- Applied those feature accents directly to:
  - filter chips
  - use case cards
  - feature library cards
  - role overview feature cards
  - comparison pills
  - detail modal feature pill and prompt panel

## What the app does

- Lets a user choose a role and immediately see:
  - top priorities for that role
  - the Wyatt features that fit best
  - realistic use cases
  - example prompts and workflows
  - measurable business outcomes
- Supports role comparison side by side
- Supports search across use cases, prompts, and workflow text
- Supports feature filtering for:
  - Roundups
  - Chores
  - Chats
  - Integrations
  - Labs
- Includes saved favorites using local storage
- Includes a lightweight onboarding quiz for “recommended for you” guidance

## Tech stack

- React 19
- TypeScript
- Vite
- Radix UI primitives for dialogs and tabs
- Framer Motion for light animation
- Lucide icons
- Structured mock data only

## Run locally

```bash
cd /Users/ryancruice/dev/wyatt-role-guide
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
```

## Project structure

- `src/App.tsx`
  - Main dashboard shell, state, filtering, comparison, and tab views
- `src/data/mockData.ts`
  - Seed content for Wyatt features, roles, and role-based use cases
- `src/types.ts`
  - Shared data model for roles, features, and use cases
- `src/components/`
  - Reusable UI components for role cards, filters, detail modal, comparison, sidebar, and quiz
- `src/lib/analytics.ts`
  - Analytics-ready event hook stub
- `src/hooks/useLocalStorage.ts`
  - Local storage for saved favorites
- `src/styles.css`
  - App design system, layout, and responsive styling

## Data model

Each use case includes:

- title
- role
- Wyatt feature
- short description
- business problem solved
- example prompt
- example workflow
- frequency of use
- difficulty level
- value level
- measurable outcome
- business value
- tags

## How to extend it

### Add a new role

Add a new entry to `roleProfiles` in `src/data/mockData.ts` with:

- role metadata
- priorities
- recommended features
- comparison highlights
- recommended starting point

### Add a new use case

Add a new object to `useCases` in `src/data/mockData.ts` and reference:

- `roleId`
- `featureId`

The UI will automatically pick it up in:

- role view
- feature view
- search
- filters
- comparison context
- favorites

### Add another Wyatt capability

Add the feature to:

- `WyattFeatureId` in `src/types.ts`
- `wyattFeatures` in `src/data/mockData.ts`
- `featureIcons` in `src/lib/iconMaps.tsx`

## Notes

- Favorites persist in browser local storage only.
- The onboarding quiz is intentionally lightweight and can be replaced with a more formal recommendation engine later.
- `trackEvent()` is currently a stub. It can be connected to analytics later without changing UI behavior.

## Verification

The app was verified with:

```bash
npm run build
```

That produced a successful production build in `dist/`.
