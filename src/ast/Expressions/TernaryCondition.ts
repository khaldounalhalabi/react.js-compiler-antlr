import { Expression } from "../abstracts/Expression.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class TernaryCondition extends Expression {
  public condition: Expression;
  public then: Expression;
  public els: Expression;

  constructor(condition: Expression, then: Expression, els: Expression) {
    super();
    this.condition = condition;
    this.then = then;
    this.els = els;
  }

  toString(): string {
    return "";
  }

  astNode(): string {
    return "";
  }

  treeObject(): TreeNode {
    return {
      name: "Ternary Condition",
      children: [
        this.condition.treeObject(),
        this.then.treeObject(),
        this.els.treeObject(),
      ],
    };
  }
}
