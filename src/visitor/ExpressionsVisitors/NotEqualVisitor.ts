import ReactVisitor from "../../antlr/ReactVisitor.ts";
import { NotEqual } from "../../ast/Expressions/NotEqual.ts";
import { ExpressionContext, NotEqualContext } from "../../antlr/ReactParser.ts";
import { Expression } from "../../ast/Expressions/Expression.ts";

export class NotEqualVisitor extends ReactVisitor<NotEqual> {
  visitNotEqual: (ctx: NotEqualContext) => NotEqual = (
    ctx: NotEqualContext,
  ) => {
    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new NotEqual(left, right);
  };
}