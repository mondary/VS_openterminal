"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
const COMMAND_ID = "openTerminalEditor.openInEditorTab";
function activate(context) {
    const command = vscode.commands.registerCommand(COMMAND_ID, async () => {
        try {
            await vscode.commands.executeCommand("workbench.action.createTerminalEditor");
        }
        catch (error) {
            console.error("Failed to open terminal editor tab", error);
            vscode.window.showErrorMessage("Unable to open a terminal in the editor area.");
        }
    });
    context.subscriptions.push(command);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map