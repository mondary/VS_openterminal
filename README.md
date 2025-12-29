# VS Open Terminal

Adds editor title-bar buttons to open new terminals in the editor area (not the bottom panel).

## Build

```bash
cd extension
npm install
npm run build
```

## Package (VSIX)

```bash
cd extension
npm run release
```

VSIX output is written to `release/`.

## Install (Vibe Antigravity)

Use a single-line command (no line breaks):

```bash
"/Applications/Vibe/vibe Antigravity.app/Contents/Resources/app/bin/antigravity" --install-extension "/Users/clm/Documents/GitHub/EXTENSIONS/VS_openterminal/release/open-terminal-editor-tab-0.0.8.vsix"
```

## Commands Used (Build + Package + Install)

```bash
cd extension
npm install
npm run build
npm run release
"/Applications/Vibe/vibe Antigravity.app/Contents/Resources/app/bin/antigravity" --install-extension "/Users/clm/Documents/GitHub/EXTENSIONS/VS_openterminal/release/open-terminal-editor-tab-0.0.8.vsix"
```

## Reload Window

- Command Palette: `Reload Window`
- Shortcut: Cmd+Shift+P then type `Reload Window`

## Usage

- In the editor title bar, click any of the AI buttons (Codex, Gemini, OpenCode, OpenSpec, Qwen, Claude) to open a new editor-area terminal running the matching command.
- Use the terminal icon to open a plain terminal in a new editor tab.
- Commands are named:
  - "Open Codex Terminal in New Editor Tab"
  - "Open Gemini Terminal in New Editor Tab"
  - "Open OpenCode Terminal in New Editor Tab"
  - "Open OpenSpec Terminal in New Editor Tab"
  - "Open Qwen Terminal in New Editor Tab"
  - "Open Claude Terminal in New Editor Tab"
  - "Open Terminal in New Editor Tab"
