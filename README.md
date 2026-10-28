# Ethiopian Developer Community Hub

A polished community directory for Ethiopian developers to discover local tech events, celebrate projects, and find learning resources.

## Project overview

Ethiopian Developer Community Hub is a responsive web application designed to make local developer opportunities easier to discover. It brings together a project showcase, upcoming technology events, practical learning resources, and a project-submission experience in one welcoming place.

The repository demonstrates a compact, production-minded Next.js application with reusable components, strongly typed data, responsive layouts, route-level states, form validation, and focused tests.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- Vitest for focused validation tests

## Run locally

1. Install dependencies with `npm install`.
2. Start development mode with `npm run dev`.
3. Open [http://localhost:3000](http://localhost:3000).

## Commands

- `npm run dev` — local development server
- `npm run lint` — lint application code
- `npm test` — run unit tests
- `npm run build` — create a production build

## Architecture

- `app/` holds route pages, global styling, and route-level loading/error boundaries.
- `components/` contains reusable presentation and form components.
- `lib/` contains strictly typed domain models, sample content, and validation logic.
- `tests/` covers reusable behavior independent from the UI.

The submit form currently provides browser-side validation and a confirmation state, deliberately leaving persistence as an integration point rather than storing data insecurely or inventing a backend.

## How Codex was used

Codex was used as a software-engineering partner throughout the project. It helped plan the application structure, create the Next.js App Router routes and reusable UI components, define TypeScript domain models, implement client-side form validation, and prepare focused tests and documentation.

It also helped diagnose local development-server issues, configure the project workspace for Turbopack, organize the repository, and publish the initial codebase to GitHub using the configured SSH identity.

## What I learned

- A clear feature map and folder structure make a small application easier to extend.
- Separating typed data and validation logic from UI components improves reuse and testability.
- Route-level loading and error states make even small products feel more dependable.
- A useful README explains both what a project does and how contributors can run it.
- Codex is most effective as a collaborative partner: it can accelerate implementation while engineering decisions remain deliberate and reviewable.

## GitHub project

This repository contains the Ethiopian Developer Community Hub source code, setup instructions, and the development notes above. It is intended as a portfolio-quality example of a modern community platform built with Next.js, TypeScript, and Tailwind CSS.
