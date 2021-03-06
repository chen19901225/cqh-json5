import * as vscode from "vscode";
import * as fs from "fs";
// import * as json5 from "json5";
// import * as JSON5 from 'json5';
const JSON5 = require("json5");
export function format_json5_file(textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit) {

    let document = textEditor.document;
    let json5_path = document.uri.fsPath;
    let content: string = fs.readFileSync(json5_path, { encoding: "utf-8" });
    let obj = JSON5.default.parse(content);
    let format_content = JSON5.default.stringify(obj, null, 4)
    fs.writeFileSync(json5_path, format_content);

}