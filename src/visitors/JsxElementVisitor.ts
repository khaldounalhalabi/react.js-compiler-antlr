import ReactVisitor from "../antlr/ReactVisitor.ts";
import { JsxTagName } from "../ast/Jsx/JsxTagName.ts";
import {
  JsxAttributeContext,
  JsxAttributeNameContext,
  JsxAttributeValueContext,
  JsxElementContentContext,
  JsxElementContext,
  JsxElementFullContext,
  JsxTagNameContext,
  SelfClosingJsxElementContext,
} from "../antlr/ReactParser.ts";
import { JsxAttribute } from "../ast/Jsx/JsxAttribute.ts";
import { JsxAttributeName } from "../ast/Jsx/JsxAttributeName.ts";
import { JsxAttributeValue } from "../ast/Jsx/JsxAttributeValue.ts";
import { ExpressionVisitor } from "./ExpressionVisitor.ts";
import { Jsx } from "../ast/abstracts/Jsx.ts";
import { JsxElement } from "../ast/Jsx/JsxElement.ts";
import { JsxElementFull } from "../ast/Jsx/JsxElementFull.ts";
import { JsxElementContent } from "../ast/Jsx/JsxElementContent.ts";
import { SelfClosingJsxElement } from "../ast/Jsx/SelfClosingJsxElement.ts";

export class JsxElementVisitor extends ReactVisitor<Jsx> {
  [x: string]: any;

  protected expressionVisitor: ExpressionVisitor;

  constructor(expressionVisitor: ExpressionVisitor) {
    super();
    this.expressionVisitor = expressionVisitor;
  }

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
      let value;
      if (ctx.expression()) {
        const valueCtx = ctx.expression();
        value = this.expressionVisitor.visit(valueCtx);
      } else {
        value = ctx.getText();
      }
      return new JsxAttributeValue(value);
    };

  visitJsxElementContent: (ctx: JsxElementContentContext) => JsxElementContent =
    (ctx: JsxElementContentContext) => {
      let contentCtx;
      let content;
      if (ctx.expression()) {
        contentCtx = ctx.expression();
        content = this.expressionVisitor.visit(contentCtx);
      } else if (ctx.jsxElement()) {
        contentCtx = ctx.jsxElement();
        content = this.visit(contentCtx);
      } else content = null;

      return new JsxElementContent(content);
    };

  visitJsxElementFull: (ctx: JsxElementFullContext) => JsxElementFull = (
    ctx: JsxElementFullContext,
  ) => {
    const jsxTagNameCtx: JsxTagNameContext[] = ctx.jsxTagName_list();
    const tagName = this.visitJsxTagName(jsxTagNameCtx[0]);
    const jsxAttributeCtx: JsxAttributeContext[] = ctx.jsxAttribute_list();
    const jsxElementContentCtx: JsxElementContentContext[] =
      ctx.jsxElementContent_list();

    let jsxAttributes: JsxAttribute[] = [];
    for (let i = 0; i < jsxAttributeCtx.length; i++) {
      jsxAttributes.push(this.visit(jsxAttributeCtx[i]));
    }

    let jsxElementContent: JsxElementContent[] = [];
    for (let i = 0; i < jsxElementContentCtx.length; i++) {
      jsxElementContent.push(this.visit(jsxElementContentCtx[i]));
    }

    return new JsxElementFull(tagName, jsxElementContent, jsxAttributes);
  };

  visitSelfClosingJsxElement: (
    ctx: SelfClosingJsxElementContext,
  ) => SelfClosingJsxElement = (ctx: SelfClosingJsxElementContext) => {
    const jsxTagNameCtx: JsxTagNameContext = ctx.jsxTagName();
    const jsxAttributeCtx: JsxAttributeContext[] = ctx.jsxAttribute_list();

    let jsxAttributes: JsxAttribute[] = [];
    for (let i = 0; i < jsxAttributeCtx.length; i++) {
      jsxAttributes.push(this.visit(jsxAttributeCtx[i]));
    }

    return new SelfClosingJsxElement(this.visit(jsxTagNameCtx), jsxAttributes);
  };

  visitJsxElement: (ctx: JsxElementContext) => JsxElement = (
    ctx: JsxElementContext,
  ) => {
    let jsxElementContext;
    let jsxElement;

    if (ctx.jsxElementFull()) {
      jsxElementContext = ctx.jsxElementFull();
      jsxElement = this.visitJsxElementFull(jsxElementContext);
    } else {
      jsxElementContext = ctx.selfClosingJsxElement();
      jsxElement = this.visitSelfClosingJsxElement(jsxElementContext);
    }
    return new JsxElement(jsxElement);
  };
}
