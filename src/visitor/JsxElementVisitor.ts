import ReactVisitor from "../antlr/ReactVisitor.ts";
import { JsxElement } from "../ast/Jsx/JsxElement.ts";
import { JsxTagName } from "../ast/Jsx/JsxTagName.ts";
import {
  JsxAttributeContext,
  JsxAttributeNameContext,
  JsxAttributeValueContext,
  JsxTagNameContext,
} from "../antlr/ReactParser.ts";
import { JsxAttribute } from "../ast/Jsx/JsxAttribute.ts";
import { JsxAttributeName } from "../ast/Jsx/JsxAttributeName.ts";
import { JsxAttributeValue } from "../ast/Jsx/JsxAttributeValue.ts";
import { ExpressionVisitor } from "./ExpressionVisitor.ts";

export class JsxElementVisitor extends ReactVisitor<JsxElement> {
  visitJsxTagName: (ctx: JsxTagNameContext) => JsxTagName = (
    ctx: JsxTagNameContext,
  ) => {
    const tagName = ctx.getText();
    return new JsxTagName(tagName);
  };

  visitJsxAttribute: (ctx: JsxAttributeContext) => JsxAttribute = (
    ctx: JsxAttributeContext,
  ) => {
    const attrName = ctx.jsxAttributeName();
    const attrValue = ctx.jsxAttributeValue();
    return new JsxAttribute(this.visit(attrName), this.visit(attrValue));
  };

  visitJsxAttributeName: (ctx: JsxAttributeNameContext) => JsxAttributeName = (
    ctx: JsxAttributeNameContext,
  ) => {
    const name = ctx.getText();
    return new JsxAttributeName(name);
  };

  visitJsxAttributeValue: (ctx: JsxAttributeValueContext) => JsxAttributeValue =
    (ctx: JsxAttributeValueContext) => {
      if (ctx.expression()) {
        const valueCtx = ctx.expression();
        const value = new ExpressionVisitor().visit(valueCtx);
      } else {
        const value = ctx.getText();
      }
      return new JsxAttributeValue(value);
    };
}
