# Page Sync Workflow

This reference expands the `figma-page-sync` skill for writing generated or implemented websites back into Figma with exact page synchronization.

## Core Principles

1. Capture or inspect the real source before changing the other side.
2. Keep Figma nodes semantically aligned with webpage modules.
3. Search and reuse the Figma file's component library, styles, and variables before creating local nodes from scratch.
4. Bind colors and text to Figma variables/styles; create missing variables before applying them.
5. Use real images, real object-fit behavior, and real coordinates.
6. Write and verify in sections, not as one huge unverified operation.
7. Avoid invented states, decorative effects, and layout shortcuts.
8. Keep the workflow website-agnostic; do not bake a specific product or project name into the skill.

## Generated Website To Figma Checklist

Collect these inputs:

- Webpage URL and route.
- Viewport width and height.
- Figma file key.
- Figma target page or node ID.
- Component library or design system to reference, when one exists.
- Intended frame width and content width.
- Scope: full page, current viewport, modal, drawer, checkout state, order state, or page section.

Capture these outputs:

- Full-page screenshot.
- Layout JSON with section, text, image, grid, fixed, and sticky bounds.
- CSS variable map.
- Image asset list with `src`, `alt`, natural size, rendered size, and object-fit.
- Console errors and broken image list.
- Component candidates and variable/style matches found in the target Figma file.

Recommended file names:

- `tmp/page-capture.json`
- `tmp/page-source.png`
- `tmp/figma-target.png`
- `tmp/layout-diff.json`

## Component Library And Token Procedure

1. Search existing components, component sets, styles, and variables in the target Figma file and subscribed libraries.
2. Import matching components for buttons, inputs, selectors, tabs, badges, order cards, navigation, icons, and common ecommerce controls.
3. Use library text styles and color variables when available.
4. Create missing variables in `Codex / Page Tokens` only when no suitable library token exists.
5. Use stable fallback token names:
   - `codex/color/white`
   - `codex/color/title`
   - `codex/color/text`
   - `codex/color/text-2`
   - `codex/color/text-3`
   - `codex/color/line`
   - `codex/color/surface`
   - `codex/color/surface-2`
   - `codex/color/brand`
   - `codex/color/brand-weak`
   - `codex/color/brand-weakest`
6. Set correct scopes:
   - Text colors: `TEXT_FILL`
   - Background fills: `FRAME_FILL`, `SHAPE_FILL`
   - Borders: `STROKE_COLOR`

Use `STROKE_COLOR`, not the older `STROKE` scope.

## Asset Procedure

1. Upload image assets through the Figma asset upload flow.
2. Store a `src -> imageHash` map.
3. Use image fills with the correct scale mode.
4. Remove temporary upload placement nodes when they are no longer needed.
5. Verify thumbnails, main images, clipped containers, and active strokes separately.

## Writeback Procedure

Write in this order unless the page structure requires otherwise:

1. Component-library search, variables, and frame shell.
2. Header or navigation.
3. Primary hero or page title area.
4. Main product/gallery/detail modules.
5. Forms, selectors, order details, and stateful cards.
6. Sticky/floating bars.
7. Long comparison tables, order lists, and lower sections.
8. Final screenshot and node-coordinate verification.

After each module, return a compact result:

```json
{
  "status": "module-written",
  "frameId": "123:456",
  "module": {
    "name": "Product Gallery",
    "id": "123:789",
    "x": 120,
    "y": 137,
    "width": 632,
    "height": 723
  }
}
```

## Optional Figma To Website Checklist

Inspect the Figma source:

- Frame size and target breakpoint.
- Auto-layout direction, padding, gap, and alignment.
- Text style, line-height, weight, and color variables.
- Fill, stroke, radius, and effects.
- Image fill crop and aspect ratio.
- Component instances and variant states.

Patch the webpage:

- Locate the matching route/component/CSS.
- Preserve the existing app's state management and ecommerce flow.
- Update only the files needed for the visual or structural change.
- Use existing CSS variables or add matching tokens where the codebase already supports them.
- Verify with Browser screenshots at the requested breakpoint.

## Verification Gates

Before calling a sync complete, verify:

- Frame/page width is correct.
- Content width and side gutters are correct.
- Top-level module count and order match the source.
- Grid columns, gaps, and card widths match.
- Text wraps the same way or within acceptable browser/Figma differences.
- Buttons have correct radius, padding, and vertical spacing.
- Images are not broken, stretched, or cropped incorrectly.
- Icons are centered and use the same SVG/component source.
- Figma component instances, variables, and text styles are used when available.
- Missing design-system values were added as variables before use.
- No accidental selected, hover, disabled, or active states were added.
- Sticky/floating layers keep appropriate elevation; same-level content stays flat when source is flat.

## Common Fixes

- If Figma is offset from the webpage, recapture section bounds and rewrite the wrong module instead of nudging many children.
- If icons drift, use the source SVG `viewBox` and a fixed icon box.
- If images drift, compare outer frame, image fill, and clip settings separately.
- If text touches a button edge, inspect button padding and line-height before changing font size.
- If a Figma write fails, send a small probe, reduce payload size, and split modules further.
