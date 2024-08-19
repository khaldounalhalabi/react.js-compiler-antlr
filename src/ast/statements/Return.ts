import { JsxElement } from "../Jsx/JsxElement.ts";
import { Expression } from "../abstracts/Expression.ts";
import { Statement } from "../abstracts/Statement.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class Return extends Statement {
  public jsxElement?: JsxElement;
  public expression?: Expression;

  constructor(jsxElement?: JsxElement, expression?: Expression) {
    super();
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

  treeObject(): TreeNode {
    if (this.expression) {
      return {
        name: "Return Statement",
        children: [this.expression.treeObject()],
      };
    } else if (this.jsxElement) {
      return {
        name: "Return Statement",
        children: [this.jsxElement.treeObject()],
      };
    } else
      return {
        name: "Return Statement",
        children: [{ name: "void" }],
      };
  }

  resolve(): string {
    if (this.expression) {
      return `return ${this.expression.resolve()}`;
    } else if (this.jsxElement) {
      return `return (\`${this.jsxElement.resolve()}\`)`;
    } else return "return";
  }
}
