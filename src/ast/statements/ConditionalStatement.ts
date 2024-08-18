import { Statement } from "../abstracts/Statement.ts";
import { IfStatement } from "./IfStatement.ts";
import { ElseIfStatement } from "./ElseIfStatement.ts";
import { ElseStatement } from "./ElseStatement.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class ConditionalStatement extends Statement {
  public ifStatement: IfStatement;
  public ifElseStatements?: ElseIfStatement[];
  public elseStatement?: ElseStatement;

  constructor(
    ifStatement: IfStatement,
    ifElseStatements: ElseIfStatement[],
    elseStatement: ElseStatement,
  ) {
    super();
    this.ifStatement = ifStatement;
    this.ifElseStatements = ifElseStatements;
    this.elseStatement = elseStatement;
  }

  toString(): string {
    return `${this.ifStatement.toString()} ${this.ifElseStatements
      ?.map((st) => st.toString())
      .join("\n")} ${this.elseStatement?.toString()}`;
  }

  treeObject(): TreeNode {
    if (this.elseStatement && this.ifElseStatements) {
      let ifElseTree: TreeNode[] = [];
      this.ifElseStatements.forEach((st) => {
        ifElseTree.push(st.treeObject());
      });
      return {
        name: "Conditional Statement",
        children: [
          this.ifStatement.treeObject(),
          ...ifElseTree,
          this.elseStatement.treeObject(),
        ],
      };
    } else if (this.ifElseStatements && !this.elseStatement) {
      let ifElseTree: TreeNode[] = [];
      this.ifElseStatements.forEach((st) => {
        ifElseTree.push(st.treeObject());
      });
      return {
        name: "Conditional Statement",
        children: [this.ifStatement.treeObject(), ...ifElseTree],
      };
    } else if (!this.ifElseStatements && this.elseStatement) {
      return {
        name: "Conditional Statement",
        children: [
          this.ifStatement.treeObject(),
          this.elseStatement.treeObject(),
        ],
      };
    } else {
      return {
        name: "Conditional Statement",
        children: [this.ifStatement.treeObject()],
      };
    }
  }

  resolve(): string {
    return `${this.ifStatement.resolve()} ${this.ifElseStatements
      ?.map((st) => st.resolve())
      .join("\n")} ${this.elseStatement?.resolve()}`;
  }
}
