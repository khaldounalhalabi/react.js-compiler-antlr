import { Expression } from "./Expressions/Expression.ts";

export class Arguments extends Expression {
  expressions: Expression[];

  constructor(expressions: Expression[]) {
    super();
    this.expressions = expressions;
  }

  toString(): string {
    const args = this.expressions.map((expr) => expr.toString()).join(", ");
    return `(${args})`;
  }
}
