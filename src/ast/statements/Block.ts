import { Statement } from "./Statement.ts";
import { Return } from "./Return.ts";
import { TreeNode } from "../../Types/TreeNode.ts";
import {AbstractStatement} from "../abstracts/AbstractStatement.ts";

export class Block extends AbstractStatement {
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

  treeObject(): TreeNode {
    let sts: TreeNode[] = [];
    this.statements.forEach((st) => {
      // @ts-ignore
      sts.push(st[0].treeObject());
    });
    return this.returnStatement
      ? {
          name: "Block",
          children: [
            { name: "statments", children: [...sts] },
            this.returnStatement?.treeObject(),
          ],
        }
      : {
          name: "Block",
          children: [{ name: "statments", children: [...sts] }],
        };
  }

  resolve(): string {
    return `{\n
              ${this.statements
                // @ts-ignore
                .map((statement) => statement?.[0].resolve())
                .join("\n")}\n
                ${this.returnStatement?.resolve()}
            }`;
  }
}
