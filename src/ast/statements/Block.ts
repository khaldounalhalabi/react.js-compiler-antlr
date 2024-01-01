import { Statement } from "../Statement.ts";
import { Return } from "./Return.ts";

export class Block extends Statement{
  public statements: Statement[];
  public returnStatement?: Return;

  constructor(statements: Statement[], returnStatement?: Return) {
    super();
    this.statements = statements;
    this.returnStatement = returnStatement;
  }

  public toString(): string {
    const statementStrings = this.statements
      .map((statement) => statement.toString())
      .join("\n");
    return `{\n${statementStrings}\n ${
      this.returnStatement?.toString() ?? ""
    } \n}`;
  }

  public astNode(): string {
    const statAst =
      this.statements.map((st) => st.astNode()).join(", \n \t") ?? "";
    return `Block : [\n \t ${statAst} , \n \t ${this.returnStatement?.astNode()} \n ]`;
  }
}
