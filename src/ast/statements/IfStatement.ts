import { Expression } from "../abstracts/Expression.ts";
import { Block } from "./Block.ts";
import { TreeNode } from "../../Types/TreeNode.ts";
import { AbstractStatement } from "../abstracts/AbstractStatement.ts";

export class IfStatement extends AbstractStatement {
  public condition: Expression;
  public block: Block;

  constructor(condition: Expression, block: Block) {
    super();
    this.condition = condition;
    this.block = block;
  }

  toString(): string {
    return `if (${this.condition.toString()})${this.block.toString()}`;
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

  resolve(): string {
    return `if (${this.condition.resolve()})${this.block.resolve()}`;
  }
}
