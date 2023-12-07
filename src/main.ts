import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import {VariableDeclarationVisitor} from "./visitor/StatementsVisitors/VariableDeclarationVisitor.ts";
import {ReactLexer} from './antlr/ReactLexer.ts'
import {ReactParser} from './antlr/ReactParser.ts'
import {ConsoleLogExpressionVisitor} from "./visitor/StatementsVisitors/ConsoleLogExpression.ts";


// Create the lexer and parser
let inputStream =
    new ANTLRInputStream('const x = 10; const y=100; const z=5; console.log("hello their world",x)');
let lexer = new ReactLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new ReactParser(tokenStream);
let tree = parser.program();

// Create the visitor
const VariablesObj = new VariableDeclarationVisitor();
const ConsoleLogExpObj = new ConsoleLogExpressionVisitor();

// Visit all Nodes with saving them into our variables Array
VariablesObj.visit(tree)


// Visit all Nodes with saving them into our ConsoleLogExpresstions Array
ConsoleLogExpObj.visit(tree);


// Printing out the visited variables after storing them
VariablesObj.printVariablesAst();

// Printing out the visited consoleLogExpressions after storing them
ConsoleLogExpObj.printConsoleLogExpressionsAst();