import * as vscode from 'vscode';

let myStatusCatsBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
	myStatusCatsBarItem = vscode.window.createStatusBarItem(
		vscode.StatusBarAlignment.Left,
		10000
	);

	context.subscriptions.push(myStatusCatsBarItem);

	updateStatusCatsBar(context);
}

function updateStatusCatsBar(context: vscode.ExtensionContext): void{

	myStatusCatsBarItem.text = "Hello 😺!";
	myStatusCatsBarItem.tooltip = "Hello Word!";
	myStatusCatsBarItem.show();
}


