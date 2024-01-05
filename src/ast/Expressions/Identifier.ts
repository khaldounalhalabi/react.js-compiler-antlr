import { Expression } from "../abstracts/Expression.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class Identifier extends Expression {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  public toString(): string {
    return this.name;
  }

  public astNode(): string {
    return `Identifier -> ${this.name}`;
  }

  treeObject(): TreeNode {
    return {
      name: "Identifier",
      children: [{ name: this.name }],
    };
  }
}
