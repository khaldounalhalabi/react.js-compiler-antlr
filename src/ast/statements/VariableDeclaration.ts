import { Expression } from "../Expressions/Expression.ts";
import { Identifier } from "../Expressions/Identifier.ts";
import { VariableType } from "../Expressions/VariableType.ts";
import { Statement } from "../Statement.ts";

export class VariableDeclaration extends Statement {
  variableType: VariableType;
  identifier: Identifier;
  expression: Expression | null;

  constructor(
    variableType: VariableType,
    identifier: Identifier,
    expression: Expression | null,
  ) {
    super();
    this.variableType = variableType;
    this.identifier = identifier;
    this.expression = expression;
  }

  toString(): string {
    const expressionStr = this.expression
      ? ` = ${this.expression.toString()}`
      : "";
    return `${this.variableType.toString()} ${this.identifier.toString()}${expressionStr}`;
  }

  public astNode() {
    return `VariableDeclaration : [\n \t ${this.variableType.astNode()} , \n \t ${this.identifier.astNode()} , \n \t ${this.expression?.astNode()} \n]`;
  }
}
