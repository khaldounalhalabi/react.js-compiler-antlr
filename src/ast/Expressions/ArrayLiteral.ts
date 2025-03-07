import { Expression } from "../abstracts/Expression.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class ArrayLiteral extends Expression {
  public expressions: Expression[];

  constructor(expressions: Expression[]) {
    super();
    this.expressions = expressions;
  }

  toString(): string {
    return `${this.expressions.map((exp) => exp.toString()).join(",")}`;
  }

  treeObject(): TreeNode {
    let expAst: TreeNode[] = [];

    this.expressions.forEach((exp) => {
      expAst.push(exp.treeObject());
    });

    return { name: "Array", children: expAst };
  }

  resolve(): string {
    return `${this.expressions.map((exp) => exp.resolve()).join(",")}`;
  }
}
