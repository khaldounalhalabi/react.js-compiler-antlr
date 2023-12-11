import ReactParser from "./antlr/ReactParser.ts";
import ReactLexer from "./antlr/ReactLexer.ts";
import { CharStream, CommonTokenStream } from "antlr4";
import { ProgramVisitor } from "./visitor/ProgramVisitor.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = ``;
let inputStream: string = "";

await fetch("./src/test.txt")
  .then((res) => res.text())
  .then((data) => {
    inputStream = data;
  })
  .catch((err) => console.log(err));

console.log(inputStream);

const chars = new CharStream(inputStream); // replace this with a FileStream as required
let lexer = new ReactLexer(chars);
const tokens = new CommonTokenStream(lexer);
let parser = new ReactParser(tokens);
let tree = parser.program();

new ProgramVisitor().visitProgram(tree);
