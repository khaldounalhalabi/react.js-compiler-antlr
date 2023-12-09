import ReactVisitor from "../../antlr/ReactVisitor.ts";
import {ExpressionContext, SubtractionContext} from "../../antlr/ReactParser.ts";
import {Expression} from "../../ast/Expressions/Expression.ts";
import {Subtraction} from "../../ast/Expressions/Subtraction.ts";

export class SubtractionVisitor extends ReactVisitor<Subtraction> {
    visitSubtraction: (ctx: SubtractionContext) => Subtraction = (ctx: SubtractionContext) => {
        let expressions: ExpressionContext[] = ctx.expression_list();
        let left: Expression = this.visit(expressions[0]);
        let right: Expression = this.visit(expressions[1]);

        return new Subtraction(left, right);
    }
}