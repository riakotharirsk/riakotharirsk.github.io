# Ria Kothari Portfolio — Implementation & Design Plan

## Scope
Create a polished, responsive portfolio website for Ria Kothari that presents finance and investment-analysis work through credible case studies, editorial insights, professional background, and clear LinkedIn/contact pathways. Initial content comes from the supplied PDF, two Excel workbooks, and the HPE/Juniper writeup DOCX. The structure must be easy to extend with more project and article links.

## Design direction
- **Design Movement:** Editorial financial research / modern annual-report minimalism.
- **Core Principles:** Evidence-led presentation; calm precision; generous whitespace; clear hierarchy over decoration.
- **Color Philosophy:** Deep ink navy establishes trust and analytical rigor; warm paper creates a reading-room feel; electric chartreuse is reserved for links, active states, and small data accents so the brand feels current without becoming loud.
- **Layout Paradigm:** A left-anchored editorial rail with offset content blocks and a high-contrast hero; avoid a generic centered card grid. Use numbered sections and a thin vertical rule as the organizing spine.
- **Signature Elements:** Oversized section numerals; hairline rules; chartreuse annotation pills that echo financial model callouts.
- **Interaction Philosophy:** Browsing should feel like reviewing an investment memo: scan first, then drill into a project or insight. Hover states reveal methodology tags and a compact action cue; details stay one click away.
- **Animation:** Subtle 180–260ms fades and horizontal lifts only; stagger section entry on first load; no looping decorative motion. Respect reduced-motion preferences.
- **Typography System:** `DM Sans` for interface/body copy and `Cormorant Garamond` for high-impact editorial headlines. Use tight display tracking on hero headlines and comfortable 1.65 line-height for article copy.
- **Brand Essence:** A finance portfolio for people who value disciplined thinking, transparent assumptions, and practical modeling. Personality: rigorous, thoughtful, composed.
- **Brand Voice:** Direct, informed, and quietly confident. Example lines: “Models are only useful when the assumptions can be followed.” / “Selected work across valuation, deal mechanics, and financial analysis.”
- **Wordmark & Logo:** A compact `RK/` monogram inside a split-line square, paired with the name in a restrained wordmark.
- **Signature Brand Color:** Chartreuse `#D6F36A`, used sparingly as the ownable signal color.

## Implementation
- Use a Vite + React + TypeScript frontend with a single-page portfolio and client-side detail states driven from structured content arrays.
- Create a shared content model for projects and insights so future URLs, files, tags, and summaries can be added consistently.
- Include a responsive homepage with hero, selected work, capabilities, insights, and contact CTA.
- Include detail views at `/projects/:slug` and `/insights/:slug` using a lightweight client-side router/state fallback so links are shareable in the Preview server.
- Store the uploaded samples under `public/work-samples/` and reference them with relative URLs from project content.
- Include `public/manus-routes.json` for `/`, `/projects/:slug`, and `/insights/:slug`.
- Use plain CSS with custom properties for the editorial visual system; no external UI kit required.
- Bind the dev server to `0.0.0.0:3000`.

## Project structure
- `src/main.tsx`: app bootstrap and route-aware render.
- `src/App.tsx`: page composition, content model, navigation, cards, detail views.
- `src/styles.css`: responsive visual system, layout, motion, and accessibility styles.
- `public/work-samples/`: supplied PDF, Excel, and DOCX files for view/download actions.
- `public/manus-routes.json`: page route manifest.
- `index.html`: document shell and metadata.
- `package.json`: pinned Vite/React toolchain and scripts.

## Content assumptions
- Use “Ria Kothari” from the provided LinkedIn URL as the visible name.
- Avoid inventing employment history, credentials, quantified outcomes, or contact details not present in the supplied materials.
- Link to the provided LinkedIn URL as the primary external profile destination.
- Present the HPE/Juniper document as an insight/writeup and label it as a supplied writeup rather than claiming it is a published LinkedIn article until a public article URL is supplied.
- Summaries of workbook/PDF content should describe the model scope and methodology, not assert investment recommendations or real client work.
