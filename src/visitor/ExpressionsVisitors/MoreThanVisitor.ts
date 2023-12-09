import ReactVisitor from "../../antlr/ReactVisitor.ts";
import { MoreThan } from "../../ast/Expressions/MoreThan.ts";
import { ExpressionContext, MoreThanContext } from "../../antlr/ReactParser.ts";
import { Expression } from "../../ast/Expressions/Expression.ts";

export class MoreThanVisitor extends ReactVisitor<MoreThan> {
  visitMoreThan: (ctx: MoreThanContext) => MoreThan = (
    ctx: MoreThanContext,
  ) => {
    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new MoreThan(left, right);
  };
}