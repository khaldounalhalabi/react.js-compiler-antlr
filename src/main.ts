import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import {VariableDeclarationVisitor} from "./visitor/StatementsVisitors/VariableDeclarationVisitor.ts";
import {ReactLexer} from './antlr/ReactLexer.ts'
import {ReactParser} from './antlr/ReactParser.ts'


// Create the lexer and parser
let inputStream =
    new ANTLRInputStream("const x = 10; const y=100; const z=5;");
let lexer = new ReactLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new ReactParser(tokenStream);
let tree = parser.program();

// Create the visitor
const VariablesObj = new VariableDeclarationVisitor()

// Visit all Nodes with saving them into our variables Array
VariablesObj.visit(tree)

// Printing out the visited variabled after storing them
VariablesObj.printVariablesAst();