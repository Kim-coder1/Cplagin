import * as vscode from 'vscode';
import moment from 'moment-timezone';
import 'moment-timezone/data/packed/latest.json';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('insert-date-time.insertDateTime', () => {
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            const now = moment().tz('Europe/Moscow');
            const dateTimeString = now.format('YYYY-MM-DD HH:mm:ss');

            editor.edit(editBuilder => {
                editBuilder.insert(editor.selection.start, dateTimeString);
            });
        } else {
            vscode.window.showErrorMessage('No active text editor found.');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}