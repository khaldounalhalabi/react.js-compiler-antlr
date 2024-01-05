import { Statement } from "../abstracts/Statement.ts";
import { Return } from "./Return.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class Block extends Statement {
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
    // @ts-ignore
      this.statements.map((st) => st[0].astNode()).join(" , ") ?? "none";
    return `Block -> ${statAst} ${
      this.returnStatement ? `Block -> ${this.returnStatement?.astNode()}` : ""
    }`;
  }

  treeObject(): TreeNode {
    let sts: TreeNode[] = [];
    this.statements.forEach((st) => {
      // @ts-ignore
      sts.push(st[0].treeObject());
    });
    return this.returnStatement
      ? {
          name: "Block",
          children: [...sts, this.returnStatement?.treeObject()],
        }
      : {
          name: "Block",
          children: [...sts],
        };
  }
}
