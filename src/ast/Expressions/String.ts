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

  public astNode(): string {
    return `String -> ${this.toString()}`;
  }

  treeObject(): TreeNode {
    return {
      name: "String",
      children: [{ name: this.toString() }],
    };
  }
}
