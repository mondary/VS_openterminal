# Change: Add editor-area terminal tab button

## Why
Users want a one-click way to open a new terminal in the main editor area, not in the bottom panel.

## What Changes
- Add a command that opens a new terminal and places it in the editor area.
- Add a toolbar button in the editor area to invoke the command, positioned to the left of "Split Editor Right".

## Impact
- Affected specs: editor-terminal
- Affected code: extension manifest and command activation logic
