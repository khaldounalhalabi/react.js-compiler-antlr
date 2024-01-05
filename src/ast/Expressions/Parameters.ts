import { Identifier } from "./Identifier.ts";
import { Expression } from "../abstracts/Expression.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class Parameter extends Expression {
  identifier: Identifier;

  constructor(identifier: Identifier) {
    super();
    this.identifier = identifier;
  }

  toString(): string {
    return this.identifier.toString();
  }

  public astNode(): string {
    return `Parameter -> ${this.identifier.astNode()}`;
  }

  treeObject(): TreeNode {
    return {
      name: "Parameter",
      children: [this.identifier.treeObject()],
    };
  }
}
