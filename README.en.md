# atlas

🇺🇸 English | 🇧🇷 [Português](README.md)

> An interactive learning platform for computer architecture, digital circuits, and data engineering — Markdown content with diagrams, LaTeX, and animations.

## Overview

**atlas** is a teaching web platform that organizes technical courses into navigable content generated from **Markdown**, with diagram rendering, math formulas (KaTeX), and code syntax highlighting. It includes a custom animation engine to illustrate concepts.

## Courses

- Computer Architecture and Organization
- Digital Circuits
- Data Engineering

## Features

- Content generation from Markdown (`npm run content:generate`).
- Routing by discipline → module → submodule, with a sidebar and dynamic table of contents.
- LaTeX support (KaTeX) and code highlighting (Highlight.js) via rehype/remark.
- **Animation engine** (`anim-engine`) extensible through packages.

## Stack

React 19 · Vite · TypeScript · Tailwind CSS · React Router · react-markdown (rehype-highlight, rehype-katex, remark-math, remark-gfm).

## Running

```bash
npm install
npm run content:generate   # generate the content index
npm run dev
```

## Project status

Active and well-structured, ready for modular content expansion.

## License

This project does not yet declare a license. Until one is added, all rights are reserved by the author.
