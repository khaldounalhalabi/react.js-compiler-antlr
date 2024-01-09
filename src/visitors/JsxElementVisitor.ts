import ReactVisitor from "../antlr/ReactVisitor.ts";
import { JsxTagName } from "../ast/Jsx/JsxTagName.ts";
import {
  ComponentPropsContext,
  JsxAttributeContext,
  JsxAttributeNameContext,
  JsxAttributeValueContext,
  JsxComponentFullContext,
  JsxElementContentContext,
  JsxElementContext,
  JsxElementFullContext,
  JsxTagNameContext,
  SelfClosingComponentContext,
  SelfClosingJsxElementContext,
} from "../antlr/ReactParser.ts";
import { JsxAttribute } from "../ast/Jsx/JsxAttribute.ts";
import { JsxAttributeName } from "../ast/Jsx/JsxAttributeName.ts";
import { JsxAttributeValue } from "../ast/Jsx/JsxAttributeValue.ts";
import { Jsx } from "../ast/abstracts/Jsx.ts";
import { JsxElement } from "../ast/Jsx/JsxElement.ts";
import { JsxElementFull } from "../ast/Jsx/JsxElementFull.ts";
import { JsxElementContent } from "../ast/Jsx/JsxElementContent.ts";
import { SelfClosingJsxElement } from "../ast/Jsx/SelfClosingJsxElement.ts";
import { FunctionalExpressionVisitor } from "./FunctionalExpressionVisitor.ts";
import { ComponentProps } from "../ast/Jsx/ComponentProps.ts";
import { JsxComponentFull } from "../ast/Jsx/JsxComponentFull.ts";
import { SelfClosingComponent } from "../ast/Jsx/SelfClosingComponent.ts";

export class JsxElementVisitor extends ReactVisitor<Jsx> {
  [x: string]: any;

  protected expressionVisitor: FunctionalExpressionVisitor;

  constructor(expressionVisitor: FunctionalExpressionVisitor) {
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
        value = this.expressionVisitor.visitString(ctx.StringLiteral());
      }
      // console.log(value)
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
    return new JsxElement(
      this.visit(
        ctx.jsxElementFull() ??
          ctx.selfClosingJsxElement() ??
          ctx.jsxComponentFull() ??
          ctx.selfClosingComponent(),
      ),
    );
  };

  visitComponentProps: (ctx: ComponentPropsContext) => ComponentProps = (
    ctx: ComponentPropsContext,
  ) => {
    let id = this.expressionVisitor.visitID(ctx.Identifier());
    let val = this.visit(ctx.jsxAttributeValue());
    return new ComponentProps(id, val);
  };

  visitJsxComponentFull: (ctx: JsxComponentFullContext) => JsxComponentFull = (
    ctx: JsxComponentFullContext,
  ) => {
    //TODO::add semantic error
    let id = this.expressionVisitor.visitID(ctx.Identifier_list()[0]);

    let attributes: JsxAttribute[] = [];

    if (ctx.jsxAttribute_list().length > 0) {
      ctx.jsxAttribute_list().forEach((att) => {
        attributes.push(this.visit(att));
      });
    }

    let props: ComponentProps[] = [];

    if (ctx.componentProps_list().length > 0) {
      ctx.componentProps_list().forEach((prop) => {
        props.push(this.visit(prop));
      });
    }

    return new JsxComponentFull(id, attributes, props);
  };

  visitSelfClosingComponent: (
    ctx: SelfClosingComponentContext,
  ) => SelfClosingComponent = (ctx: SelfClosingComponentContext) => {
    let id = this.expressionVisitor.visitID(ctx.Identifier());

    let attributes: JsxAttribute[] = [];

    if (ctx.jsxAttribute_list().length > 0) {
      ctx.jsxAttribute_list().forEach((att) => {
        attributes.push(this.visit(att));
      });
    }

    let props: ComponentProps[] = [];

    if (ctx.componentProps_list().length > 0) {
      ctx.componentProps_list().forEach((prop) => {
        props.push(this.visit(prop));
      });
    }

    return new JsxComponentFull(id, attributes, props);
  };
}
