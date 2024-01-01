import { Expression } from "./Expression.ts";

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

  public astNode(): string {
    const exprAst =
      this.expressions?.map((exp) => exp.astNode()).join(", \n \t") ?? "";
    return `Arguments : [\n \t ${exprAst} , \n]`;
  }
}
