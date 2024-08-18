import { Expression } from "../../abstracts/Expression.ts";
import { ArrowFunction } from "./ArrowFunction.ts";
import { FunctionCall } from "./FunctionCall.ts";
import { FunctionExpression } from "./FunctionExpression.ts";
import { TreeNode } from "../../../Types/TreeNode.ts";

export class FuncExpr extends Expression {
  public functionExpression: ArrowFunction | FunctionCall | FunctionExpression;

  constructor(
    functionExpression: ArrowFunction | FunctionCall | FunctionExpression,
  ) {
    super();
    this.functionExpression = functionExpression;
  }

  toString(): string {
    return this.functionExpression.toString();
  }

  treeObject(): TreeNode {
    return {
      name: "FuncExpr",
      children: [this.functionExpression.treeObject()],
    };
  }

  resolve(): string {
    return this.functionExpression.resolve();
  }
}
