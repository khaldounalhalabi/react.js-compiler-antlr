import ReactVisitor from "../../antlr/ReactVisitor.ts";
import { MoreThanOrEqual } from "../../ast/Expressions/MoreThanOrEqual.ts";
import {ExpressionContext,MoreThanOrEqualContext} from "../../antlr/ReactParser.ts";
import { Expression } from "../../ast/Expressions/Expression.ts";

export class MoreThanOrEqualVisitor extends ReactVisitor<MoreThanOrEqual> {
  visitMoreThanOrEqual: (ctx: MoreThanOrEqualContext) => MoreThanOrEqual = (ctx: MoreThanOrEqualContext) => {
    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new MoreThanOrEqual(left, right);
  };
}