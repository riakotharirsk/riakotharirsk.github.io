# Ria Kothari Portfolio — Simplified Plan

## Scope
Keep the website intentionally simple for the first version: one homepage with a Projects section and an Articles section. Use the supplied finance work samples and the public Google Doc as source material. Avoid long case-study pages, capabilities, extra editorial sections, and invented credentials.

## Layout
Use a quiet editorial layout with a short introduction, a compact project list, and an eight-item article list. The design uses ink navy, paper, warm gray rules, and a small chartreuse accent. Typography pairs DM Sans for interface copy with Cormorant Garamond for a restrained display accent. The visual hierarchy should support scanning rather than extended reading.

## Content
Projects: private-company investment analysis (OAR, DCF, LBO), distribution waterfall model, and Apple financial model. Each row includes a short description, method tags, and a view/download link to the supplied sample.

Articles: eight entries total — seven extracted from the public Google Doc and the HPE/Juniper writeup supplied earlier. Use concise summaries. Preserve the direct LinkedIn short link provided for the exit-readiness article; use the LinkedIn profile as a fallback when an individual article URL was not included. Keep the HPE/Juniper DOCX available as a source-writeup download.

## Structure
- `src/App.tsx`: one-page content and row components.
- `src/styles.css`: responsive simple list layout.
- `public/work-samples/`: supplied files.
- `public/manus-routes.json`: home route only.
