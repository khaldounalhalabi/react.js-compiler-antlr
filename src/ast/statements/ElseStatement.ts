import { Block } from "./Block.ts";
import { TreeNode } from "../../Types/TreeNode.ts";
import { AbstractStatement } from "../abstracts/AbstractStatement.ts";

export class ElseStatement extends AbstractStatement {
  public block: Block;

  constructor(block: Block) {
    super();
    this.block = block;
  }

  toString(): string {
    return `else ${this.block.toString()}`;
  }

  treeObject(): TreeNode {
    return {
      name: "Else Statement",
      children: [this.block.treeObject()],
    };
  }

  resolve(): string {
    return `else ${this.block.resolve()}`;
  }
}
