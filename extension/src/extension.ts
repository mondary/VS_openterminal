import * as vscode from "vscode";

const COMMAND_ID = "openTerminalEditor.openInEditorTab";

export function activate(context: vscode.ExtensionContext) {
  const command = vscode.commands.registerCommand(COMMAND_ID, async () => {
    try {
      await vscode.commands.executeCommand(
        "workbench.action.createTerminalEditor"
      );
    } catch (error) {
      console.error("Failed to open terminal editor tab", error);
      vscode.window.showErrorMessage(
        "Unable to open a terminal in the editor area."
      );
    }
  });

  context.subscriptions.push(command);
}

export function deactivate() {}
