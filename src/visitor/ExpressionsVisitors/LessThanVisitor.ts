import ReactVisitor from "../../antlr/ReactVisitor.ts";
import { LessThan } from "../../ast/Expressions/LessThan.ts";
import {ExpressionContext, LessThanContext} from "../../antlr/ReactParser.ts";
import {Expression} from "../../ast/Expressions/Expression.ts";

export class LessThanVisitor extends ReactVisitor<LessThan> {
  visitLessThan: (ctx: LessThanContext) => LessThan = (
    ctx: LessThanContext,
  ) => {
    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new LessThan(left, right);
  };
}