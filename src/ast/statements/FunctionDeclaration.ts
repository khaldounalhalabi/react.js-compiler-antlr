import { Statement } from "../Statement.ts";
import { Identifier } from "../Expressions/Identifier.ts";
import { Block } from "./Block.ts";
import { Parameter } from "../Expressions/Parameters.ts";

export class FunctionDeclaration extends Statement {
  identifier: Identifier;
  parameters?: Parameter[];
  block: Block;

  constructor(identifier: Identifier, block: Block, parameters?: Parameter[]) {
    super();
    this.identifier = identifier;
    this.parameters = parameters;
    this.block = block;
  }

  public toString(): string {
    const params =
      this.parameters?.map((param) => param.toString()).join(", ") ?? "";
    return `function ${this.identifier.toString()}(${params}) ${this.block.toString()}`;
  }

  public astNode(): string {
    const parametersAst =
      this.parameters?.map((param) => param.astNode()).join(", \n \t") ?? "";
    return `FunctionDeclaration : [\n \t ${this.identifier.astNode()} , \n \t ${parametersAst} , \n \t ${this.block.astNode()} \n]`;
  }
}
