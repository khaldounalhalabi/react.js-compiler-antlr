import ReactVisitor from "../antlr/ReactVisitor.ts";
import { Return } from "../ast/statements/Return.ts";
import { ReturnContext } from "../antlr/ReactParser.ts";
import { ExpressionVisitor } from "./ExpressionVisitor.ts";
import { JsxElementVisitor } from "./JsxElementVisitor.ts";

export class ReturnVisitor extends ReactVisitor<Return> {
  visitReturn: (ctx: ReturnContext) => Return = (ctx: ReturnContext) => {
    const expressionVisitor = new ExpressionVisitor();
    if (ctx?.expression()) {
      // TODO::possible problem
      const expression = expressionVisitor.visit(ctx.expression());
      return new Return(undefined, expression);
    } else if (ctx?.jsxElement()) {
      const jsxCtx = ctx.jsxElement();
      // TODO::possible problem
      const jsx = new JsxElementVisitor(expressionVisitor).visit(jsxCtx);
      return new Return(jsx, undefined);
    } else {
      return new Return();
    }
  };
}
