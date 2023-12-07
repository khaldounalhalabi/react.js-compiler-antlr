import {VariableDeclaration} from "../../ast/statements/VariableDeclaration.ts";
import ReactVisitor from "../../antlr/ReactVisitor.ts";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import {Variable} from '../../ast/Variable.ts';
import {VariabledeclarationContext} from "../../antlr/ReactParser.ts";

export class VariableDeclarationVisitor extends AbstractParseTreeVisitor<number> implements ReactVisitor<number> {

    public Variables: Variable[];
    constructor() {
        super();
        this.Variables = [];
    }
    defaultResult() {
        return 0
    }

    addVariable(variable: Variable){
        this.Variables.push(variable);
    }

    printVariablesAst() {
        console.log(this.Variables)
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
        console.log('tree', ctx)
        for(let i = 0 ; i < ctx.children.length ; i++){
            if(ctx.children[i] instanceof
            VariabledeclarationContext){
                let type = ctx.children[i].ruleContext.children[0].children[0].text;
                let name = ctx.children[i].ruleContext.children[0].children[1].text;
                let value = ctx.children[i].ruleContext.children[0].children[3].text;

                let tempVariable = new Variable(name , value , type);
                this.addVariable(tempVariable)
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