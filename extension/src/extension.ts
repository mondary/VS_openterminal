import * as vscode from "vscode";

const COMMAND_ID = "openTerminalEditor.openInEditorTab";
const CODEX_COMMAND_ID = "openTerminalEditor.openCodex";
const GEMINI_COMMAND_ID = "openTerminalEditor.openGemini";
const OPENCODE_COMMAND_ID = "openTerminalEditor.openOpenCode";
const OPENSPEC_COMMAND_ID = "openTerminalEditor.openOpenSpec";
const QWEN_COMMAND_ID = "openTerminalEditor.openQwen";
const CLAUDE_COMMAND_ID = "openTerminalEditor.openClaude";

function createEditorTerminal(command?: string, name?: string) {
  const terminal = vscode.window.createTerminal({
    name,
    location: vscode.TerminalLocation.Editor,
  });
  terminal.show(true);
  if (command) {
    terminal.sendText(command, true);
  }
}

export function activate(context: vscode.ExtensionContext) {
  const openTerminal = vscode.commands.registerCommand(
    COMMAND_ID,
    async () => {
      try {
        createEditorTerminal(undefined, "Terminal");
      } catch (error) {
        console.error("Failed to open terminal editor tab", error);
        vscode.window.showErrorMessage(
          "Unable to open a terminal in the editor area."
        );
      }
    }
  );

  const openCodex = vscode.commands.registerCommand(
    CODEX_COMMAND_ID,
    async () => {
      try {
        createEditorTerminal("codex", "Codex");
      } catch (error) {
        console.error("Failed to open Codex terminal", error);
        vscode.window.showErrorMessage("Unable to open Codex in the editor.");
      }
    }
  );

  const openGemini = vscode.commands.registerCommand(
    GEMINI_COMMAND_ID,
    async () => {
      try {
        createEditorTerminal("gemini", "Gemini");
      } catch (error) {
        console.error("Failed to open Gemini terminal", error);
        vscode.window.showErrorMessage("Unable to open Gemini in the editor.");
      }
    }
  );

  const openOpenCode = vscode.commands.registerCommand(
    OPENCODE_COMMAND_ID,
    async () => {
      try {
        createEditorTerminal("opencode", "OpenCode");
      } catch (error) {
        console.error("Failed to open OpenCode terminal", error);
        vscode.window.showErrorMessage("Unable to open OpenCode in the editor.");
      }
    }
  );

  const openOpenSpec = vscode.commands.registerCommand(
    OPENSPEC_COMMAND_ID,
    async () => {
      try {
        createEditorTerminal("openspec", "OpenSpec");
      } catch (error) {
        console.error("Failed to open OpenSpec terminal", error);
        vscode.window.showErrorMessage("Unable to open OpenSpec in the editor.");
      }
    }
  );

  const openQwen = vscode.commands.registerCommand(
    QWEN_COMMAND_ID,
    async () => {
      try {
        createEditorTerminal("qwen", "Qwen");
      } catch (error) {
        console.error("Failed to open Qwen terminal", error);
        vscode.window.showErrorMessage("Unable to open Qwen in the editor.");
      }
    }
  );

  const openClaude = vscode.commands.registerCommand(
    CLAUDE_COMMAND_ID,
    async () => {
      try {
        createEditorTerminal("claude", "Claude");
      } catch (error) {
        console.error("Failed to open Claude terminal", error);
        vscode.window.showErrorMessage("Unable to open Claude in the editor.");
      }
    }
  );

  context.subscriptions.push(
    openTerminal,
    openCodex,
    openGemini,
    openOpenCode,
    openOpenSpec,
    openQwen,
    openClaude
  );
}

export function deactivate() {}
