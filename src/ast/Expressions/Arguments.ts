import { Expression } from "../abstracts/Expression.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class Arguments extends Expression {
  expressions: Expression[];

  constructor(expressions: Expression[]) {
    super();
    this.expressions = expressions;
  }

  toString(): string {
    const args = this.expressions.map((expr) => expr.toString()).join(", ");
    return `(${args})`;
  }

  treeObject(): TreeNode {
    let expressions: TreeNode[] = [];
    this.expressions.forEach((e) => {
      expressions.push(e.treeObject());
    });
    return {
      name: "Arguments",
      children: expressions,
    };
  }

  resolve(): string {
    const args = this.expressions.map((expr) => expr.resolve()).join(", ");
    return `(${args})`;
  }
}
