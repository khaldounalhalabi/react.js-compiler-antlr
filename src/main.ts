import ReactParser from "./antlr/ReactParser.ts";
import ReactLexer from "./antlr/ReactLexer.ts";
// @ts-ignore
import { CharStream, CommonTokenStream } from "antlr4";
import { ProgramVisitor } from "./visitors/ProgramVisitor.ts";
import ReactDOM from "react-dom";
import PrintAst from "./libs/Tree.tsx";
import {createRoot} from "react-dom/client";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = ``;
let inputStream: string = "";

await fetch("./src/test.txt")
  .then((res) => res.text())
  .then((data) => {
    inputStream = data;
  })
  .catch((err) => console.log(err));

// console.log(inputStream);

const chars = new CharStream(inputStream);
let lexer = new ReactLexer(chars);
const tokens = new CommonTokenStream(lexer);
let parser = new ReactParser(tokens);
let tree = parser.program();

const programVisitor = new ProgramVisitor();
// console.log(programVisitor.visitProgram(tree).astNode());
let treeObject = programVisitor.visitProgram(tree).treeObject();
if (programVisitor.semanticErrors.length >= 0) {
  programVisitor.semanticErrors.forEach((error) => {
    console.error(error);
  });
}

const content = document.getElementById("app");
const root = createRoot(content);
root.render(PrintAst({data :treeObject}))
