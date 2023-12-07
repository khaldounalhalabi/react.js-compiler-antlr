import ReactVisitor from "../../antlr/ReactVisitor.ts";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import {ArgumentsContext, ConsoleLogexpressionLabelContext} from "../../antlr/ReactParser.ts";
import {ConsoleLogExpression} from "../../ast/statements/ConsoleLogExpression.ts";

export class ConsoleLogExpressionVisitor extends AbstractParseTreeVisitor<number> implements ReactVisitor<number> {

    public ConsoleLogExpressions: ConsoleLogExpression[];
    constructor() {
        super();
        this.ConsoleLogExpressions = [];
    }
    defaultResult() {
        return 0
    }

    addVariable(consolelog: ConsoleLogExpression){
        this.ConsoleLogExpressions.push(consolelog);
    }

    printConsoleLogExpressionsAst() {
        console.log(this.ConsoleLogExpressions)
    }

    // constructor(variables: Variable[]) {
    //     this.Variables = variables;
    // }

    aggregateResult(aggregate: number, nextResult: number) {
        return aggregate + nextResult
    }

    visitFunctionDeclaration(context: program): number {
        return 1 + super.visitChildren(context);
    }

    public visitExpBoolean (ctx: program): string {
        return 'v';
    }

    visit = (ctx: any): any => {
        // console.log('tree', ctx)
        for(let i = 0 ; i < ctx.children.length ; i++){
            if(ctx.children[i] instanceof
                ConsoleLogexpressionLabelContext){
                // let args = ctx.children[i].children[0].children[0].text;
                let tempConsoleLogExpArgs = new ConsoleLogExpression();
                console.log('console log expression', ctx.children[i])
                for(let j = 0 ; j < ctx.children[i].children[0].children.length ; j++){
                    if(ctx.children[i].children[0].children[j] instanceof ArgumentsContext){
                        // tempConsoleLogExpArgs.args = ctx.children[i].children[0].children[j].

                    }
                }
                // let tempVariable = new Variable(name , value , type);
                // this.addVariable(tempVariable)
            }


        }
        return ctx.accept(this);

    }

    // HACKs
    visitTerminal = (ctx: any): any => {
    }

    visitErrorNode = (ctx: any): any => {
    }

    visitChildren = (ctx: any): any => {
    }

}