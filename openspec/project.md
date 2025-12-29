# Project Context

## Purpose
Create and package a VS Code extension (VSIX) that adds an editor-area button to open a new terminal tab in the main editor area (not the bottom panel).

## Tech Stack
- TypeScript for extension source
- VS Code Extension API
- Node.js tooling
- tsc for build
- vsce for VSIX packaging

## Project Conventions

### Code Style
Use strict TypeScript, simple modules, and clear command IDs. Keep files small and follow VS Code extension patterns. Default to ASCII-only content.

### Architecture Patterns
Monorepo-style layout with `/extension` for source and `/release` (or `/releases`) for packaged VSIX outputs.
Entry point in `extension/src/extension.ts`, compiled to `extension/dist/extension.js`.

### Testing Strategy
No formal tests defined yet. Keep behavior easy to verify manually in VS Code.

### Git Workflow
No specific workflow defined yet.

## Domain Context
The UI target is the editor area (main panel), not the bottom terminal panel.

## Important Constraints
Button must appear in the main editor area UI, not in the bottom panel. The action must open a terminal in a new editor tab.

## External Dependencies
VS Code Extension API and built-in commands for terminal management.
