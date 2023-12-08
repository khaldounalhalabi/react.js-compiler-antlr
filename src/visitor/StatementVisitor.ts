import ReactVisitor from "../antlr/ReactVisitor.ts";
import {Statement} from "../ast/Statement.ts";
import {StatementContext} from "../antlr/ReactParser.ts";

export class StatementVisitor extends ReactVisitor<Statement>{
    visitStatement:(ctx:StatementContext) => Statement = (ctx:StatementVisitor) => {
        return new Statement()
    }
}