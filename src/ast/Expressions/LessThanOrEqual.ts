import { Expression } from "../abstracts/Expression.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class LessThanOrEqual extends Expression {
  public left: Expression;

  public right: Expression;

  constructor(left: Expression, right: Expression) {
    super();
    this.left = left;
    this.right = right;
  }

  public toString() {
    return this.left.toString() + "<=" + this.right.toString();
  }

  public astNode(): string {
    return `LessThanOrEqual -> ${this.left.astNode()} LessThanOrEqual -> LessThanOrEqualSign LessThanOrEqual -> ${this.right.astNode()}`;
  }

  treeObject(): TreeNode {
    return {
      name: "Less Than Or Equal",
      children: [
        this.left.treeObject(),
        { name: "<=" },
        this.right.treeObject(),
      ],
    };
  }
}
