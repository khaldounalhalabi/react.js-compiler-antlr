import { Expression } from "../abstracts/Expression.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class BracedExpression extends Expression {
  public expression: Expression;

  constructor(expression: Expression) {
    super();
    this.expression = expression;
  }

  public toString(): string {
    return this.expression.toString();
  }

  public astNode(): string {
    return `BracedExpression -> ${this.expression.astNode()}`;
  }

  treeObject(): TreeNode {
    return {
      name: "Braced Expression",
      children: [this.expression.treeObject()],
    };
  }
}
