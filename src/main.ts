import {VariableTypeVisitor} from "./visitor/VariableTypeVisitor.ts";
import ReactParser from "./antlr/ReactParser.ts";
import ReactLexer from "./antlr/ReactLexer.ts";
import {CharStream, CommonTokenStream} from "antlr4";
import {NumberVisitor} from "./visitor/ExpressionsVisitors/NumberVisitor.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ``;
let inputStream = 'const x = 10;';
const chars = new CharStream(inputStream); // replace this with a FileStream as required
let lexer = new ReactLexer(chars);
const tokens = new CommonTokenStream(lexer);
let parser = new ReactParser(tokens);
let tree = parser.program();

(new NumberVisitor()).visitNumber(tree);