import { Identifier } from "../Expressions/Identifier.ts";
import { Expression } from "../Expressions/Expression.ts";
import { Statement } from "../Statement.ts";

export class Assignment extends Statement {
  identifier: Identifier;
  expression: Expression;

  constructor(identifier: Identifier, expression: Expression) {
    super();
    this.identifier = identifier;
    this.expression = expression;
  }

  toString(): string {
    return `${this.identifier.toString()} = ${this.expression.toString()}`;
  }
}