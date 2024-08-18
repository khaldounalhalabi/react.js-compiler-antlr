import { TreeNode } from "../../Types/TreeNode.ts";

export abstract class Statement {
  public abstract toString(): string;

  public abstract treeObject(): TreeNode;

  public abstract resolve(): string;
}
