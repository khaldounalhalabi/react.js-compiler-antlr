import { TreeNode } from "../../Types/TreeNode.ts";
import { AbstractStatement } from "./AbstractStatement.ts";

export abstract class Expression extends AbstractStatement {
  public abstract toString(): string;

  public abstract treeObject(): TreeNode;

  public abstract resolve(): string;
}
