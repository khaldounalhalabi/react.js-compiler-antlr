import ReactVisitor from "../../antlr/ReactVisitor.ts";
import { TemplateString } from "../../ast/Expressions/TemplateString.ts";
import {
  ExpressionContext,
  TemplateContext,
  TemplateStringContext,
} from "../../antlr/ReactParser.ts";
import { Expression } from "../../ast/Expressions/Expression.ts";

export class TemplateStringVisitor extends ReactVisitor<TemplateString> {
  visitTemplateString: (ctx: TemplateStringContext) => TemplateString = (
    ctx: TemplateStringContext,
  ) => {
    return this.visitTemplate(ctx.template());
  };

  visitTemplate: (ctx: TemplateContext) => TemplateString = (
    ctx: TemplateContext,
  ) => {
    let expressionCtx: ExpressionContext = ctx.expression();
    let expression: Expression = this.visit(expressionCtx);

    return new TemplateString(expression);
  };
}
