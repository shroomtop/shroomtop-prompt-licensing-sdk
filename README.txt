README.txt
=====================
Shroomtop420® Prompt Licensing GUI v1.2 + License Enforcement

USAGE:
- Open index.html in browser
- Paste your prompt, enter your name, choose license
- Click generate — LICENSE.txt and promptmeta.json will download
- license.js will validate SHA256 hash of prompt at runtime if integrated

FILES:
- index.html: Full GUI
- license.js: SHA256 validator for prompt + metadata
- LICENSE.txt: Human-readable license
- promptmeta.json: Machine-readable metadata

SECURITY:
- SHA256 validation for tamper detection
- UUID and metadata consistency checks
- JS-only enforcement, fully offline
