import { Parameter } from "../Parameters.ts";
import { Block } from "../../statements/Block.ts";
import { TreeNode } from "../../../Types/TreeNode.ts";
import { Expression } from "../../abstracts/Expression.ts";

export class ArrowFunction extends Expression {
  public parameters: Parameter[];
  public block: Block | Expression;

  constructor(parameters: Parameter[], body: Block | Expression) {
    super();
    this.parameters = parameters;
    this.block = body;
  }

  public toString(): string {
    const paramsString = this.parameters
      .map((param) => param.toString())
      .join(", ");
    const blockString = this.block.toString();

    return `(${paramsString}) => ${blockString}`;
  }

  public astNode(): string {
    const parametersAst =
      this.parameters?.map((param) => param.astNode()).join(" , ") ?? undefined;

    return `${
      parametersAst ? `ArrowFunction -> ${parametersAst}` : ""
    } ArrowFunction -> ${this.block.astNode()}`;
  }

  public treeObject(): TreeNode {
    let params: TreeNode[] = [];
    this.parameters.forEach((p) => {
      params.push(p.treeObject());
    });
    return {
      name: "Arrow Function",
      children: [...params, this.block.treeObject()],
    };
  }
}
