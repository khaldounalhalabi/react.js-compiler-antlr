import { Statement } from "../abstracts/Statement.ts";
import { Expression } from "../abstracts/Expression.ts";
import { Block } from "./Block.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class IfStatement extends Statement {
  public condition: Expression;
  public block: Block;

  constructor(condition: Expression, block: Block) {
    super();
    this.condition = condition;
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
      name: "If Condition",
      children: [
        { name: "Condition", children: [this.condition.treeObject()] },
        this.block.treeObject(),
      ],
    };
  }
}
