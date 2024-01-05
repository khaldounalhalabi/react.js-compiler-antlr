import { Expression } from "../../abstracts/Expression.ts";
import { FuncExpr } from "./FuncExpr.ts";
import { TreeNode } from "../../../Types/TreeNode.ts";

export class FunctionalExpression extends Expression {
  public funcExpr: FuncExpr;

  constructor(funcExpr: FuncExpr) {
    super();
    this.funcExpr = funcExpr;
  }

  toString(): string {
    return "";
  }

  astNode(): string {
    return "";
  }

  treeObject(): TreeNode {
    return { name: "Functional Expression" , children:[this.funcExpr.treeObject()]};
  }
}
