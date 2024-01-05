import { Expression } from "../abstracts/Expression.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class Addition extends Expression {
  public left: Expression;

  public right: Expression;

  constructor(left: Expression, right: Expression) {
    super();
    this.left = left;
    this.right = right;
  }

  public toString() {
    return this.left.toString() + "+" + this.right.toString();
  }

  public astNode(): string {
    return `Addition -> ${this.left.astNode()} Addition -> AddSign Addition -> ${this.right.astNode()}`;
  }

  treeObject(): TreeNode {
    return {
      name: "Addition",
      children: [
        this.left.treeObject(),
        { name: "+" },
        this.right.treeObject(),
      ],
    };
  }
}
