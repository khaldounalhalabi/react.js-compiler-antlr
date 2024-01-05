import {TreeNode} from "../../Types/TreeNode.ts";

export abstract class Statement {
  public abstract astNode(): string;

  public abstract toString(): string;

  public abstract treeObject() : TreeNode;
}
