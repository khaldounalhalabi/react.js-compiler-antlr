import { TreeNode } from "../../Types/TreeNode.ts";
import { AbstractStatement } from "../abstracts/AbstractStatement.ts";

export class Statement extends AbstractStatement {
  public statement: AbstractStatement;

  constructor(statement: AbstractStatement) {
    super();
    this.statement = statement;
  }

  public toString(): string {
    return this.statement.toString();
  }

  public treeObject(): TreeNode {
    return this.statement.treeObject();
  }

  public resolve(): string {
    return this.statement.resolve();
  }
}
