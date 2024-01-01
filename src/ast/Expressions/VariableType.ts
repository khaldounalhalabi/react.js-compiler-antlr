import {Expression} from "./Expression.ts";

export class VariableType extends Expression{
  public varType: string;

  constructor(varType: string) {
    super();
    this.varType = varType;
  }

  public toString() {
    return this.varType;
  }

  public astNode() {
    return `VariableType : [\n \t ${this.varType} \n]`;
  }
}
