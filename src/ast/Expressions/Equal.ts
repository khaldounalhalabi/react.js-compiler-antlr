import { Expression } from "../abstracts/Expression.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class Equal extends Expression {
  public left: Expression;

  public right: Expression;

  constructor(left: Expression, right: Expression) {
    super();
    this.left = left;
    this.right = right;
  }

  public toString() {
    return this.left.toString() + "==" + this.right.toString();
  }

  public astNode(): string {
    return `Equal -> ${this.left.astNode()} Equal -> IsEqualSign Equal -> ${this.right.astNode()}`;
  }

  treeObject(): TreeNode {
    return {
      name: "Equal",
      children: [
        this.left.treeObject(),
        { name: "==" },
        this.right.treeObject(),
      ],
    };
  }
}
