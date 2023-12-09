import ReactParser from "./antlr/ReactParser.ts";
import ReactLexer from "./antlr/ReactLexer.ts";
import { CharStream, CommonTokenStream } from "antlr4";
import { ProgramVisitor } from "./visitor/ProgramVisitor.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = ``;
let inputStream = "function Home() {\n" +
    "    let x = 50 + 100;\n" +
    "lex y = x" +
    "}";
const chars = new CharStream(inputStream); // replace this with a FileStream as required
let lexer = new ReactLexer(chars);
const tokens = new CommonTokenStream(lexer);
let parser = new ReactParser(tokens);
let tree = parser.program();

new ProgramVisitor().visitProgram(tree);