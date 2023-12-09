import ReactVisitor from "../../antlr/ReactVisitor.ts";
import { LessThanOrEqual } from "../../ast/Expressions/LessThanOrEqual.ts";
import {
  ExpressionContext,
  LessThanOrEqualContext,
} from "../../antlr/ReactParser.ts";
import { Expression } from "../../ast/Expressions/Expression.ts";

export class LessThanOrEqualVisitor extends ReactVisitor<LessThanOrEqual> {
  visitLessThanOrEqual: (ctx: LessThanOrEqualContext) => LessThanOrEqual = (
    ctx: LessThanOrEqualContext,
  ) => {
    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new LessThanOrEqual(left, right);
  };
}
