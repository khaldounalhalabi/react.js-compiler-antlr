import { TreeNode } from "../../Types/TreeNode.ts";

export abstract class AbstractStatement {
  public abstract toString(): string;

  public abstract treeObject(): TreeNode;

  public abstract resolve(): string;
}
