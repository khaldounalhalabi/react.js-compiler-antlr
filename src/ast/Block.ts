import { Statement } from "./Statement.ts";
import { Return } from "./statements/Return.ts";

export class Block {
  public statements: Statement[];
  public returnStatement?: Return;

  constructor(statements: Statement[], returnStatement?: Return) {
    this.statements = statements;
    this.returnStatement = returnStatement;
  }

  public toString(): string {
    const statementStrings = this.statements
      .map((statement) => statement.toString())
      .join("\n");
    return `{\n${statementStrings}\n ${
      this.returnStatement?.toString() ?? ""
    } \n`;
  }
}
