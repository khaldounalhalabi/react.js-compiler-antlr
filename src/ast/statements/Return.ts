import { JsxElement } from "../Jsx/JsxElement.ts";
import { Expression } from "../Expressions/Expression.ts";

export class Return {
  public jsxElement?: JsxElement;
  public expression?: Expression;

  constructor(jsxElement?: JsxElement, expression?: Expression) {
    this.jsxElement = jsxElement;
    this.expression = expression;
  }

  public toString(): string {
    if (this.expression) {
      return `return ${this.expression.toString()}`;
    } else if (this.jsxElement) {
      return `return ${this.jsxElement.toString()}`;
    } else return "return";
  }

  public astNode(): string {
    return `ReturnStatement : [\n \t ${this.jsxElement?.astNode()} , \n \t ${this.expression?.astNode()} \n]`;
  }
}
