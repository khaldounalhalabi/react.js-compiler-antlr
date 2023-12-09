import ReactVisitor from "../../antlr/ReactVisitor.ts";
import {Addition} from "../../ast/Expressions/Addition.ts";
import {AdditionContext, ExpressionContext} from "../../antlr/ReactParser.ts";
import {Expression} from "../../ast/Expressions/Expression.ts";

export class AdditionVisitor extends ReactVisitor<Addition> {
    visitAddition: (ctx: AdditionContext) => Addition = (ctx: AdditionContext) => {
        let expressions: ExpressionContext[] = ctx.expression_list();
        let left: Expression = this.visit(expressions[0]);
        let right: Expression = this.visit(expressions[1]);

        return new Addition(left, right);
    }
}