import { Statement } from "../abstracts/Statement.ts";
import { Block } from "./Block.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class ElseStatement extends Statement {
  public block: Block;

  constructor(block: Block) {
    super();
    this.block = block;
  }

  toString(): string {
    return "";
  }

  astNode(): string {
    return "";
  }

  treeObject(): TreeNode {
    return {
      name: "Else Statement",
      children: [this.block.treeObject()],
    };
  }
}
