import { Expression } from "../abstracts/Expression.ts";
import { Identifier } from "./Identifier.ts";
import { Number, Number as AntlrNumber } from "./Number.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class ArrayAccess extends Expression {
  public id: Identifier;
  public index: AntlrNumber;

  constructor(id: Identifier, index: Number) {
    super();
    this.id = id;
    this.index = index;
  }

  toString(): string {
    return `${this.id.toString()}[${this.index.toString()}]`;
  }

  treeObject(): TreeNode {
    return {
      name: "Array Access",
      children: [
        this.id.treeObject(),
        { name: "Index", children: [this.index.treeObject()] },
      ],
    };
  }

  resolve(): string {
    return `${this.id.resolve()}[${this.index.resolve()}]`;
  }
}
