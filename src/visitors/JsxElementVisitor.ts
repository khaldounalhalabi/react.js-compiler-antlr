import ReactVisitor from "../antlr/ReactVisitor.ts";
import { JsxTagName } from "../ast/Jsx/JsxTagName.ts";
import {
  ComponentPropsContext,
  ExpressionContext,
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
  StringContext,
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
import { SymbolTable } from "../libs/SymbolTable.ts";

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
        value = this.expressionVisitor.visitString(
          ctx as unknown as StringContext,
        );
      }
      return new JsxAttributeValue(value);
    };

  visitJsxElementContent: (ctx: JsxElementContentContext) => JsxElementContent =
    (ctx: JsxElementContentContext) => {
      let contentCtx;
      let content;
      if (ctx.expression()) {
        contentCtx = ctx.expression();
        if (!(contentCtx instanceof ExpressionContext)) {
          throw new Error("Only expressions allowed inside jsx");
        }
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
    console.log(jsxTagNameCtx)
    const tagName = this.visitJsxTagName(jsxTagNameCtx[0]);
    const tagName2 = this.visitJsxTagName(jsxTagNameCtx[1]);
    if (tagName.name != tagName2.name) {
      throw new Error(
        `open tag didn't match closing tag (${tagName.name} and ${tagName2.name})`,
      );
    }
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

    if (!SymbolTable.make().has(id.name)) {
      throw new Error(`Uncaught ReferenceError :  ${id.name} is not defined`);
    }

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

    const content = ctx
      .jsxElementContent_list()
      .map((c) =>
        c instanceof ExpressionContext
          ? this.expressionVisitor.visit(c)
          : this.visit(c),
      );

    return new JsxComponentFull(id, attributes, props, content);
  };

  visitSelfClosingComponent: (
    ctx: SelfClosingComponentContext,
  ) => SelfClosingComponent = (ctx: SelfClosingComponentContext) => {
    let id = this.expressionVisitor.visitID(ctx.Identifier());
    if (!SymbolTable.make().has(id.name)) {
      throw new Error(`Uncaught ReferenceError :  ${id.name} is not defined`);
    }
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

    return new SelfClosingComponent(id, attributes, props);
  };
}
