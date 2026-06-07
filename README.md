# iPad Official Store Prototype

This repository contains the standalone iPad ecommerce prototype.

The web-to-Figma writeback plugin has been moved out of this website project and now lives as an independent plugin package:

```text
../web-figma-writeback
```

## Run

Serve this directory with any static file server, then open the local URL in a browser.

```bash
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/
```

## Project Structure

```text
.
├── app.js
├── index.html
├── styles.css
├── assets/
└── dji-official-site-design-style.md
```

## Scope

- Product home page
- Product detail pages
- Checkout flow
- Payment flow
- Account center
- Order management
- Help center

Plugin and Codex skill files should not be added back into this website repository.
