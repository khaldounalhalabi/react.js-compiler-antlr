import ReactVisitor from "../../antlr/ReactVisitor.ts";
import {Multiplication} from "../../ast/Expressions/Multiplication.ts";
import {ExpressionContext, MultiplicationContext} from "../../antlr/ReactParser.ts";
import {Expression} from "../../ast/Expressions/Expression.ts";

export class MultiplicationVisitor extends ReactVisitor<Multiplication> {
    visitMultiplication: (ctx: MultiplicationContext) => Multiplication = (ctx: MultiplicationContext) => {
        let expressions: ExpressionContext[] = ctx.expression_list();
        let left: Expression = this.visit(expressions[0]);
        let right: Expression = this.visit(expressions[1]);

        return new Multiplication(left, right);
    }
}