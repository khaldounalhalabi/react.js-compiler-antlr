import ReactParser from "./antlr/ReactParser.ts";
import ReactLexer from "./antlr/ReactLexer.ts";
// @ts-ignore
import { CharStream, CommonTokenStream } from "antlr4";
import { ProgramVisitor } from "./visitors/ProgramVisitor.ts";
import {drawTree} from "./libs/DrawTree.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = ``;
let inputStream: string = "";

await fetch("./src/test4.txt")
  .then((res) => res.text())
  .then((data) => {
    inputStream = data;
  })
  .catch((err) => console.log(err));

const chars = new CharStream(inputStream);
let lexer = new ReactLexer(chars);
const tokens = new CommonTokenStream(lexer);
let parser = new ReactParser(tokens);
let tree = parser.program();

const programVisitor = new ProgramVisitor();
try {
  const program = programVisitor.visitProgram(tree);

  function appendCompiled() {
    let script = document.getElementById("compiled");
    if (script) {
      script.remove();
    }
    script = document.createElement("script");
    script.id = "compiled";
    script.innerHTML =
      program.resolve() +
      "\ndocument.getElementById('app').innerHTML = App();\n";
    document.body.appendChild(script);
  }

  drawTree(program.treeObject());

  appendCompiled();

  document.addEventListener("state_changed", function () {
    appendCompiled();
  });

  console.log(program.resolve());
} catch (error) {
  console.error(error);
}
