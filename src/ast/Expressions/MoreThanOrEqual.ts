import { Expression } from "../abstracts/Expression.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class MoreThanOrEqual extends Expression {
  public left: Expression;

  public right: Expression;

  constructor(left: Expression, right: Expression) {
    super();
    this.left = left;
    this.right = right;
  }

  public toString() {
    return this.left.toString() + ">=" + this.right.toString();
  }

  treeObject(): TreeNode {
    return {
      name: "More Than Or Equal",
      children: [
        this.left.treeObject(),
        { name: " >=" },
        this.right.treeObject(),
      ],
    };
  }

  resolve(): string {
    return this.left.resolve() + ">=" + this.right.resolve();
  }
}
