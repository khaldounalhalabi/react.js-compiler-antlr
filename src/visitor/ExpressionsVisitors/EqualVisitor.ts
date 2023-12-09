import ReactVisitor from "../../antlr/ReactVisitor.ts";
import { Equal } from "../../ast/Expressions/Equal.ts";
import { EqualContext, ExpressionContext } from "../../antlr/ReactParser.ts";
import { Expression } from "../../ast/Expressions/Expression.ts";

export class EqualVisitor extends ReactVisitor<Equal> {
  visitEqual: (ctx: EqualContext) => Equal = (ctx: EqualContext) => {
    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new Equal(left, right);
  };
}
