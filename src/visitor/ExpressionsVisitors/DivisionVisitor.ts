import ReactVisitor from "../../antlr/ReactVisitor.ts";
import {Division} from "../../ast/Expressions/Division.ts";
import {DivisionContext, ExpressionContext} from "../../antlr/ReactParser.ts";
import {Expression} from "../../ast/Expressions/Expression.ts";

export class DivisionVisitor extends ReactVisitor<Division> {
    visitDivision: (ctx: DivisionContext) => Division = (ctx: DivisionContext) => {
        let expressions: ExpressionContext[] = ctx.expression_list();
        let left: Expression = this.visit(expressions[0]);
        let right: Expression = this.visit(expressions[1]);

        return new Division(left, right);
    }
}