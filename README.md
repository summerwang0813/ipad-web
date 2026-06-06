# Web Figma Writeback

`web-figma-writeback` contains a reusable Codex skill for writing generated or implemented websites back into Figma with high visual fidelity.

The skill focuses on one main workflow: use the running website as the source of truth, capture its real layout, then rebuild or update the matching Figma page while reusing the target file's component library, variables, text styles, icons, and image assets.

## Skill

Skill folder:

```text
skills/figma-page-sync
```

Use it when you want Codex to:

- write any generated website back to Figma
- keep Figma layout aligned with the real webpage
- reuse existing Figma component libraries and variables
- create fallback variables when no component library exists
- create callable typography styles instead of hardcoding text layers
- verify screenshots, images, icon alignment, button padding, and layout coordinates

## Fallback Figma Foundation

When the target Figma file has no usable component library, the skill creates a reusable foundation first:

```text
01 Base
02 Semantic
03 Spacing
04 Typography
```

Typography is treated as reusable design-system surface. The skill should create and apply Figma text styles such as:

```text
04 Typography/Display/H1
04 Typography/Body/Regular
04 Typography/Button/Primary
```

## Install

Copy the skill folder into your Codex skills directory:

```bash
mkdir -p ~/.codex/skills
cp -R skills/figma-page-sync ~/.codex/skills/
```

Then restart or refresh Codex so the skill can be discovered.

## Example Prompt

```text
Use $figma-page-sync to write the current website back to Figma. Reuse the component library; if none exists, create 01 Base, 02 Semantic, 03 Spacing, and 04 Typography variables first.
```

## Included Helpers

- `scripts/browser-page-capture.js`: browser-side capture snippet for route layout, text, images, CSS variables, and fixed/sticky elements.
- `scripts/compare-layouts.mjs`: simple layout JSON comparison helper for coordinate checks.

