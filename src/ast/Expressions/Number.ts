import { Expression } from "../abstracts/Expression.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class Number extends Expression {
  public num: number;

  constructor(num: number) {
    super();
    this.num = num;
  }

  public toString(): string {
    return `${this.num}`;
  }

  treeObject(): TreeNode {
    return {
      name: "Number",
      children: [{ name: `${this.num}` }],
    };
  }

  resolve(): string {
    return `${this.num}`;
  }
}
