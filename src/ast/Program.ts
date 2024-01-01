import { Statement } from "./Statement.ts";

export class Program {
  public statements: Statement[];

  constructor(statements: Statement[]) {
    this.statements = statements;
  }

  public addExpression(statement: Statement): void {
    this.statements.push(statement);
  }

  public astNode() {
    const statAst =
      this.statements?.map((st : Statement) => st.astNode()).join(", \n \t") ?? "";

    return `Program : [\n \t ${statAst} \n]`;
  }
}
