import { FunctionalExpression } from "./FunctionalExpression.ts";
import { Parameter } from "../Parameters.ts";
import { Block } from "../../statements/Block.ts";

export class FunctionExpression extends FunctionalExpression {
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

  public astNode(): string {
    const parametersAst =
      this.parameters?.map((param) => param.astNode()).join(", \n \t") ?? "";

    return `FunctionExpression : [\n \t ${parametersAst} , \n \t ${this.block.astNode()}]`;
  }
}
