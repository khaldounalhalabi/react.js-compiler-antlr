import { FunctionalExpression } from "./FunctionalExpression.ts";
import { Parameter } from "../../Parameters.ts";
import { Block } from "../../Block.ts";

export class FunctionExpression extends FunctionalExpression {
  public parameters: Parameter[];
  public block: Block;

  constructor(parameters: Parameter[], block: Block) {
    super();
    this.parameters = parameters;
    this.block = block;
  }

  public toString(): string {
    const paramsString = this.parameters
      .map((param) => param.toString())
      .join(", ");
    return `function(${paramsString}) ${this.block.toString()}`;
  }
}