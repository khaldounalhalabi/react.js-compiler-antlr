import { Statement } from "../abstracts/Statement.ts";
import { Identifier } from "../Expressions/Identifier.ts";
import { Block } from "./Block.ts";
import { Parameter } from "../Expressions/Parameters.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class FunctionDeclaration extends Statement {
  identifier: Identifier;
  parameters?: Parameter[];
  block: Block;

  constructor(identifier: Identifier, block: Block, parameters?: Parameter[]) {
    super();
    this.identifier = identifier;
    this.parameters = parameters;
    this.block = block;
  }

  public toString(): string {
    const params =
      this.parameters?.map((param) => param.toString()).join(", ") ?? "";
    return `function ${this.identifier.toString()}(${params}) ${this.block.toString()}`;
  }

  treeObject(): TreeNode {
    let params: TreeNode[] = [];
    this.parameters?.forEach((p) => {
      params.push(p.treeObject());
    });

    return this.parameters
      ? {
          name: "Function Declaration",
          children: [
            this.identifier.treeObject(),
            ...params,
            this.block.treeObject(),
          ],
        }
      : {
          name: "Function Declaration",
          children: [this.identifier.treeObject(), this.block.treeObject()],
        };
  }

  resolve(): string {
    const params =
      this.parameters?.map((param) => param.resolve()).join(", ") ?? "";
    return `function ${this.identifier.resolve()}(${params}) ${this.block.resolve()}`;
  }
}
