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

  treeObject(): TreeNode {
    return {
      name: "Parameter",
      children: [this.identifier.treeObject()],
    };
  }

  resolve(): string {
    return this.identifier.resolve();
  }
}
