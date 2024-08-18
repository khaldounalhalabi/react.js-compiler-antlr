import { Expression } from "../abstracts/Expression.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class VariableType extends Expression {
  public varType: string;

  constructor(varType: string) {
    super();
    this.varType = varType;
  }

  public toString() {
    return this.varType;
  }

  treeObject(): TreeNode {
    return {
      name: "Variable Type",
      children: [{ name: this.varType }],
    };
  }

  resolve(): string {
    return this.varType;
  }
}
