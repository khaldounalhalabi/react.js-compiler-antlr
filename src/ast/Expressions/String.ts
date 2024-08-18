import { Expression } from "../abstracts/Expression.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class String extends Expression {
  public str: string;

  constructor(str: string) {
    super();
    this.str = str;
  }

  public toString(): string {
    return this.str;
  }

  treeObject(): TreeNode {
    return {
      name: "String",
      children: [{ name: this.toString() }],
    };
  }

  resolve(): string {
    return this.str;
  }
}
