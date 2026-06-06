---
name: figma-page-sync
description: "Sync implemented web app pages and Figma screens in either direction. Use when the user says figma-page-writeback, figma-page-sync, sync to Figma, sync to web, write current webpage to Figma, update code from Figma, or asks to keep a Figma page and implemented route aligned with exact layout, variables, typography, images, components, and screenshots."
---

# Figma Page Sync

Use this skill to keep a coded web page and a Figma screen aligned. It supports two directions:

- **Web to Figma**: the running webpage is source of truth; capture the real DOM/CSS/layout and write it into Figma.
- **Figma to Web**: the Figma frame is source of truth; inspect the design and update webpage code to match it.

Always preserve the user's latest source of truth. If the user says "同步到 Figma", use Web to Figma. If the user says "同步到网页" or "同步到代码", use Figma to Web.

## Required Tooling

- For webpage capture and verification, use the Browser skill with the in-app browser.
- For Figma writes, load `figma:figma-use` before every `use_figma` call.
- For full-page Figma generation/writeback, also load `figma:figma-generate-design`.
- Prefer existing design-system variables and components. If a needed color is missing, create a Figma variable first, then bind nodes to it.

## Web To Figma

1. Capture the running route before writing anything.
   - Save a viewport screenshot.
   - Capture DOM section bounds, text bounds, image bounds, CSS variables, fixed/sticky elements, and scroll height.
   - Use `scripts/browser-page-capture.js` as the browser-side capture snippet when useful.

2. Split the page into semantic modules.
   - Top-level Figma frames should match webpage modules such as `Header`, `Hero`, `Product Gallery`, `Checkout Summary`, `Payment Detail`, `Order List`.
   - Do not merge unrelated modules into one frame.

3. Prepare tokens and assets.
   - Search Figma libraries first.
   - Create missing variables in a local collection such as `Codex / Page Tokens`.
   - Upload webpage images to Figma and map each `src` to an `imageHash`.

4. Write incrementally.
   - Create or update the page frame at the real webpage width, commonly `1440`.
   - Keep content width, gutters, grid gaps, radii, shadows, and states from the captured page.
   - Write one module at a time and return concise IDs and coordinates after each module.

5. Verify after every meaningful write.
   - Read Figma node positions back.
   - Compare against captured webpage layout.
   - Pull a Figma screenshot and visually inspect for image drift, button padding, icon alignment, text wrapping, shadows, and accidental selected states.

## Figma To Web

1. Inspect the target Figma frame.
   - Use Figma metadata, design context, variables, and screenshot.
   - Identify frame width, content width, module names, text styles, fills, strokes, radii, effects, images, and states.

2. Map Figma nodes to code ownership.
   - Find the route, component, CSS file, and asset paths that render the matching webpage.
   - Reuse existing code patterns and design tokens instead of adding one-off styles.

3. Patch code in small, traceable steps.
   - Update structure only when the Figma hierarchy requires it.
   - Update spacing, typography, colors, shadows, and image treatment to match the design.
   - Keep ecommerce state logic and order flow behavior intact unless the Figma change explicitly changes behavior.

4. Run and verify the webpage.
   - Start or reuse the local dev server.
   - Open the route in Browser, refresh, and capture a screenshot.
   - Compare the webpage screenshot and layout to the Figma source.

5. Optionally write back.
   - If the user wants both sides aligned after code changes, run the Web to Figma workflow again.

## Hard Rules

- Never redraw from memory. Always capture or inspect the current source of truth first.
- Do not add states the source does not have, such as making static detail rows look selected.
- Do not add shadows to same-level cards if the source uses flat layers; keep shadows for floating/sticky layers only.
- Do not use placeholder images when real page assets are available.
- Do not hand-draw icons when the webpage SVG or design-system icon exists.
- Keep button radius, padding, text alignment, and vertical breathing room exact; button text must not touch edges.
- Use white or grey backgrounds according to the source. Do not switch a page to a dark theme unless the source is dark.

## References

- Read `references/page-sync-workflow.md` for detailed capture, token, asset, writeback, and verification procedures.
- Use `scripts/browser-page-capture.js` inside Browser `evaluate` for repeatable page capture.
- Use `scripts/compare-layouts.mjs` to compare two saved layout JSON files.

## Shareable Package

This skill is shareable as a folder. To publish it for a team, commit the `figma-page-sync/` folder to a GitHub repository. Other users can install it by copying the folder into `~/.codex/skills/` or by using the Codex skill installer from the repository path.
