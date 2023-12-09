import ReactVisitor from "../antlr/ReactVisitor.ts";
import { Return } from "../ast/statements/Return.ts";
import { ReturnContext } from "../antlr/ReactParser.ts";
import { ExpressionVisitor } from "./ExpressionVisitor.ts";

export class ReturnVisitor extends ReactVisitor<Return> {
  visitReturn: (ctx: ReturnContext) => Return = (ctx: ReturnContext) => {
    console.log("return visitor");
    if (ctx.expression()) {
      console.log("return expression visitor");
      const expressionVisitor = new ExpressionVisitor();
      const expression = expressionVisitor.visit(ctx.expression());
      return new Return(undefined, expression);
    } else if (ctx.jsxElement()) {
      //TODO::handle this when creating jsx visitor
      return new Return();
    } else {
      return new Return();
    }
  };
}
