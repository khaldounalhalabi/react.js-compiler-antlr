import { Identifier } from "../Identifier.ts";
import { Arguments } from "../Arguments.ts";
import { TreeNode } from "../../../Types/TreeNode.ts";
import { Expression } from "../../abstracts/Expression.ts";

export class FunctionCall extends Expression {
  public identifier: Identifier;
  public args?: Arguments; // Assuming arguments can be expressions

  constructor(identifier: Identifier, args?: Arguments) {
    super();
    this.identifier = identifier;
    this.args = args;
  }

  public toString(): string {
    return `${this.identifier.toString()} ${this.args?.toString()}`;
  }

  treeObject(): TreeNode {
    return this.args
      ? {
          name: "Function Call",
          children: [this.identifier.treeObject(), this.args?.treeObject()],
        }
      : {
          name: "Function Call",
          children: [this.identifier.treeObject()],
        };
  }

  resolve(): string {
    return `${this.identifier.resolve()} ${this.args?.resolve()}`;
  }
}
