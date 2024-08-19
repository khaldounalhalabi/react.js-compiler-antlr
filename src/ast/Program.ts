import { Statement } from "./abstracts/Statement.ts";
import { TreeNode } from "../Types/TreeNode.ts";

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
      // @ts-ignore
      this.statements?.map((st: Statement) => st[0]?.astNode()).join(" , ") ??
      "void";

    return `Program -> ${statAst}`;
  }

  treeObject(): TreeNode {
    let sts: TreeNode[] = [];
    this.statements.forEach((s) => {
      // @ts-ignore
      sts.push(s[0].treeObject());
    });

    return {
      name: "Program",
      children: [...sts],
    };
  }

  resolve(): string {
    return (
      this.statements
        // @ts-ignore
        .map((statement) => statement?.[0]?.resolve())
        .join("\n")
    );
  }
}
