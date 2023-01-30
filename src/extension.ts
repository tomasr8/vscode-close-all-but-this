import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand("close-all-but-this.closeAllButThis", () => {
    const tabs: vscode.Tab[] = vscode.window.tabGroups.all.map(group => group.tabs).flat();
    for (const tab of tabs) {
      if (!tab.isActive) {
        vscode.window.tabGroups.close(tab);
      }
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
