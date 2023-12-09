import { InstructionVisitor } from "./InstructionVisitor.ts";
import ReactVisitor from "../antlr/ReactVisitor.ts";
import { Statement } from "../ast/Statement.ts";
import {VariableDeclarationContext, VariableTypeContext} from "../antlr/ReactParser.ts";
import {VariableDeclaration} from "../ast/statements/VariableDeclaration.ts";
import {VariableType} from "../ast/VariableType.ts";
import {FunctionalExpressionVisitor} from "./FunctionalExpressionVisitor.ts";
import {Identifier} from "../ast/Expressions/Identifier.ts";
import {Expression} from "../ast/Expressions/Expression.ts";

export class StatementVisitor extends ReactVisitor<Statement> {
    visitVariableDeclaration: (
        ctx: VariableDeclarationContext,
    ) => VariableDeclaration = (ctx: VariableDeclarationContext) => {
        console.log("variable declaration visitor");
        let varType: VariableType = this.visit(ctx.variableType());
        let expressionVisitor = new FunctionalExpressionVisitor();
        let id: Identifier = expressionVisitor.visitID(ctx.Identifier());
        let expression: Expression = expressionVisitor.visit(ctx.expression());

        return new VariableDeclaration(varType, id, expression);
    };

    visitVariableType: (ctx: VariableTypeContext) => VariableType = (
        ctx: VariableTypeContext,
    ) => {
        console.log("variable type visitor");
        let varType: string = ctx.children[0].text;
        return new VariableType(varType);
    };
}
