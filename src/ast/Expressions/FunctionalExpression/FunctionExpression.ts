import { Parameter } from "../Parameters.ts";
import { Block } from "../../statements/Block.ts";
import { TreeNode } from "../../../Types/TreeNode.ts";
import { Expression } from "../../abstracts/Expression.ts";

export class FunctionExpression extends Expression {
  public parameters: Parameter[];
  public block: Block;

  constructor(parameters: Parameter[], block: Block) {
    super();
    this.parameters = parameters;
    this.block = block;
  }

  public toString(): string {
    const paramsString =
      this.parameters.map((param) => param.toString()).join(", ") ?? "";
    return `function(${paramsString}) ${this.block.toString()}`;
  }

  treeObject(): TreeNode {
    let parameters: TreeNode[] = [];
    this.parameters.forEach((p) => {
      parameters.push(p.treeObject());
    });

    return {
      name: "Function Expression",
      children: [...parameters, this.block.treeObject()],
    };
  }

  resolve(): string {
    const paramsString =
      this.parameters.map((param) => param.resolve()).join(", ") ?? "";
    return `function(${paramsString}) ${this.block.resolve()}`;
  }
}
