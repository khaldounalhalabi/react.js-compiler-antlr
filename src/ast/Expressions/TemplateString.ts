import { Expression } from "../abstracts/Expression.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class TemplateString extends Expression {
  public expression: Expression;

  constructor(expression: Expression) {
    super();
    this.expression = expression;
  }

  public toString(): string {
    return "${" + this.expression.toString() + "}";
  }

  public astNode(): string {
    return `TemplateString -> ${this.expression.astNode()}`;
  }

  treeObject(): TreeNode {
    return {
      name: "Template String",
      children: [this.expression.treeObject()],
    };
  }
}
