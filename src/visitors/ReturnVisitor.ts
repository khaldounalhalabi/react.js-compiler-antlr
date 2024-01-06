import ReactVisitor from "../antlr/ReactVisitor.ts";
import { Return } from "../ast/statements/Return.ts";
import { ReturnContext } from "../antlr/ReactParser.ts";
import { JsxElementVisitor } from "./JsxElementVisitor.ts";
import {FunctionalExpressionVisitor} from "./FunctionalExpressionVisitor.ts";

export class ReturnVisitor extends ReactVisitor<Return> {
  public funcExprVisitor : FunctionalExpressionVisitor;
  public jsxVisitor : JsxElementVisitor;


  constructor(funcExprVisitor: FunctionalExpressionVisitor, jsxVisitor: JsxElementVisitor) {
    super();
    this.funcExprVisitor = funcExprVisitor;
    this.jsxVisitor = jsxVisitor;
  }

  visitReturn: (ctx: ReturnContext) => Return = (ctx: ReturnContext) => {
    if (ctx?.expression()) {
      const expression = this.funcExprVisitor.visit(ctx.expression());
      return new Return(undefined, expression);
    } else if (ctx?.jsxElement()) {
      const jsxCtx = ctx.jsxElement();
      const jsx = this.jsxVisitor.visit(jsxCtx);
      return new Return(jsx, undefined);
    } else {
      return new Return();
    }
  };
}
