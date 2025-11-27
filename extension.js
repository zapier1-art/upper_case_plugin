const vscode = require('vscode');

function activate(context) {
    let command = vscode.commands.registerTextEditorCommand(
        'uppercase-selection.convert',
        (editor, edit) => {
            const selections = editor.selections;

            for (const selection of selections) {
                if (selection.isEmpty) continue;

                const text = editor.document.getText(selection);
                const upperText = text.toUpperCase();

                edit.replace(selection, upperText);
            }
        }
    );

    context.subscriptions.push(command);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};